import {
  COLLECTION_CREATE,
  COLLECTION_DELETE,
  COLLECTION_SELECT,
  COLLECTION_UPDATE,
  CollectionsActions
} from "core/store/actions/CollectionActions";
import {
  CollectionsState,
  initialState
} from "core/store/states/CollectionsState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function reducer(
  state: CollectionsState = initialState,
  action: CollectionsActions
): CollectionsState {
  switch (action.type) {
    case COLLECTION_CREATE:
      return {
        ...state,
        setsById: {
          ...state.setsById,
          [action.collection.id]: action.collection
        }
      };
    case COLLECTION_DELETE:
      const { [action.id]: _, ...rest } = state.setsById;
      return {
        ...state,
        setsById: rest
      };
    case COLLECTION_SELECT:
      return {
        ...state,
        selectedId: action.id
      };
    case COLLECTION_UPDATE:
      return {
        ...state,
        setsById: {
          ...state.setsById,
          [action.collection.id]: action.collection
        }
      };
    default:
      return state;
  }
}

export const CollectionsReducer = persistReducer(
  {
    key: "collections",
    storage
  },
  reducer
);
