import {
  Collection,
  CollectionId,
  CollectionItemsByIdItem,
  CreateCollection
} from "core/lib/Collection";
import { Card } from "core/types/Card";
import { setItem } from "core/utils/itemsStore";
import moment from "moment";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Store } from "../reducers";
import {
  getCollectionsSetsIds,
  getSelectedCollection,
  getSelectedCollectionId
} from "../selectors/CollectionSelectors";
import { enqueueSnackbar } from "./SnackbarActions";

// Collection Actions
export const COLLECTION_CREATE = "COLLECTION_CREATE";
export const COLLECTION_SELECT = "COLLECTION_SELECT";
export const COLLECTION_UPDATE = "COLLECTION_UPDATE";
export const COLLECTION_DELETE = "COLLECTION_DELETE";
// Collection Item Actions
export const COLLECTION_ITEM_ADD = "COLLECTION_ITEM_ADD";
export const COLLECTION_ITEM_REMOVE = "COLLECTION_ITEM_REMOVE";
export const COLLECTION_ITEM_UPDATE = "COLLECTION_ITEM_UPDATE";

export interface CreateCollectionAction {
  type: typeof COLLECTION_CREATE;
  collection: Collection;
}

export interface DeleteCollectionAction {
  type: typeof COLLECTION_DELETE;
}

export interface SelectCollectionAction {
  type: typeof COLLECTION_SELECT;
  id: CollectionId;
}

export interface UpdateCollectionAction {
  type: typeof COLLECTION_UPDATE;
  collection: Collection;
}

export interface UpdateCollectionItemAction {
  type: typeof COLLECTION_ITEM_UPDATE;
  item: Card;
}

export interface AddCollectionItemAction {
  type: typeof COLLECTION_ITEM_ADD;
  item: Card;
}

export interface RemoveCollectionItemAction {
  type: typeof COLLECTION_ITEM_REMOVE;
  item: Card;
}

export type CollectionsActions =
  | CreateCollectionAction
  | SelectCollectionAction
  | DeleteCollectionAction
  | UpdateCollectionAction
  | AddCollectionItemAction
  | RemoveCollectionItemAction
  | UpdateCollectionItemAction
  | any;

export type DelectCollection = ThunkAction<{}, Store, {}, CollectionsActions>;
export type AddCollectionItem = Card;
export type DeleteCollectionItem = Card;
export type UpdateCollectionItem = {
  id: string;
} & CollectionItemsByIdItem;

export function createCollection(
  delta: CreateCollection
): ThunkAction<{}, {}, {}, CollectionsActions> {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const collection = new Collection(delta);
    dispatch({
      type: COLLECTION_CREATE,
      collection
    });
    return dispatch(selectCollection(collection.id));
  };
}

export function deleteCollection(): ThunkAction<
  {},
  Store,
  {},
  CollectionsActions
> {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => Store
  ) => {
    const state = getState();
    const collectionIds = getCollectionsSetsIds(state);
    const selectedId = getSelectedCollectionId(state);
    const selectedIdIdx = collectionIds.indexOf(selectedId);
    // Always select  previous otherwise, select next.
    const idToBeSelected =
      collectionIds[selectedIdIdx - 1] || collectionIds[selectedIdIdx + 1];
    dispatch({
      type: COLLECTION_DELETE,
      id: selectedId
    });
    return idToBeSelected ? dispatch(selectCollection(idToBeSelected)) : false;
  };
}

export function selectCollection(
  id: CollectionId | undefined = ""
): SelectCollectionAction {
  return {
    type: COLLECTION_SELECT,
    id
  };
}

export function updateCollection(
  collection: Collection
): UpdateCollectionAction {
  return {
    type: COLLECTION_UPDATE,
    collection: {
      ...collection,
      lastUpdated: moment()
    }
  };
}

export function addCollectionItem(
  item: AddCollectionItem
): ThunkAction<{}, Store, {}, CollectionsActions> {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => Store
  ) => {
    const selectedCollection = getSelectedCollection(getState());
    await setItem(item);
    const { id } = item;
    const { quantity: existingQuantity = 0 } =
      selectedCollection.itemsById[id] || {};
    dispatch({
      type: COLLECTION_ITEM_ADD,
      item
    });
    dispatch(
      updateCollection({
        ...selectedCollection,
        itemsById: {
          ...selectedCollection.itemsById,
          [id]: {
            quantity: existingQuantity + 1
          }
        }
      })
    );
    return dispatch(
      enqueueSnackbar({
        message: `${item.name} added to ${selectedCollection.name}`,
        options: {
          variant: "success"
        }
      })
    );
  };
}

export function deleteCollectionItem(
  item: DeleteCollectionItem
): ThunkAction<{}, Store, {}, CollectionsActions> {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => Store
  ) => {
    const selectedCollection = getSelectedCollection(getState());
    const { [item.id]: _, ...restItems } = selectedCollection.itemsById;
    dispatch({
      type: COLLECTION_ITEM_REMOVE,
      item
    });
    dispatch(
      updateCollection({
        ...selectedCollection,
        itemsById: restItems
      })
    );
    return dispatch(
      enqueueSnackbar({
        message: `${item.name} removed from ${selectedCollection.name}`,
        options: {
          variant: "error"
        }
      })
    );
  };
}

export function updateCollectionItem(
  item: UpdateCollectionItem
): ThunkAction<{}, Store, {}, CollectionsActions> {
  return (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => Store
  ) => {
    const { id, ...restItem } = item;
    const selectedCollection = getSelectedCollection(getState());
    return dispatch(
      updateCollection({
        ...selectedCollection,
        itemsById: {
          ...selectedCollection.itemsById,
          [id]: {
            ...selectedCollection.itemsById[id],
            ...restItem
          }
        }
      })
    );
  };
}
