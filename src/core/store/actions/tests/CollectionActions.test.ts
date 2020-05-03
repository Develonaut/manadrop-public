import { Collection } from "core/lib/Collection";
import {
  createCollection,
  deleteCollection,
  deleteCollectionItem,
  selectCollection,
  updateCollection
} from "core/store/actions/CollectionActions";
import { configureStore } from "core/store/configureStore";
import { initialState } from "core/store/states/CollectionsState";
import { createMemoryHistory } from "history";
import moment from "moment";

jest.mock("moment", () => {
  const momentMock = { format: jest.fn() };
  return jest.fn(() => momentMock);
});

const store = configureStore({ history: createMemoryHistory() }).store;

describe("CollectionsActions", () => {
  test("createCollection should dispatch thunk action creates the new collection and selects its id", () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => store.getState());
    createCollection({ name: "testCollection" })(dispatch, getState, {});
    expect(dispatch.mock.calls[0]).toEqual([
      {
        collection: expect.any(Collection),
        type: "COLLECTION_CREATE"
      }
    ]);
    expect(dispatch).toHaveBeenLastCalledWith({
      id: expect.any(String),
      type: "COLLECTION_SELECT"
    });
  });

  test("deleteCollection should dispatch the deleteCollection action and select the previous collection", () => {
    const collection1 = new Collection();
    const collection2 = new Collection();
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      ...store.getState(),
      collections: {
        ...store.getState().collections,
        selectedId: collection2.id,
        setsById: {
          [collection1.id]: collection1,
          [collection2.id]: collection2
        }
      }
    }));

    deleteCollection()(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledWith({
      id: collection2.id,
      type: "COLLECTION_DELETE"
    });
    expect(dispatch).toHaveBeenLastCalledWith({
      id: collection1.id,
      type: "COLLECTION_SELECT"
    });
  });

  test("deleteCollection shouldn't dispatch selectCollection if a collection doesn't exists", () => {
    const collection2 = new Collection();
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      ...store.getState(),
      collections: {
        ...store.getState().collections,
        selectedId: collection2.id,
        sets: [collection2]
      }
    }));
    deleteCollection()(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledWith({
      id: collection2.id,
      type: "COLLECTION_DELETE"
    });
    expect(dispatch).not.toHaveBeenLastCalledWith({
      id: collection2.id,
      type: "COLLECTION_CREATE"
    });
  });

  test("selectCollection should dispatch the selectCollection action with the passed in id", () => {
    expect(selectCollection("testCollection")).toEqual({
      id: "testCollection",
      type: "COLLECTION_SELECT"
    });
  });

  test("updateCollection should dispatch the updateCollection action with the passed in collection and update the lastUpdated timestamp", () => {
    const collection = new Collection({ name: "testCollection" });
    const updateCollectionAction = updateCollection(collection);
    expect(moment).toHaveBeenCalledWith();
    expect(updateCollectionAction).toEqual({
      collection,
      type: "COLLECTION_UPDATE"
    });
  });

  test("deleteCollectionItem should dispatch the updateCollection action with the item removed from the collection", () => {
    const setsById = store.getState().collections.setsById;
    const collection = setsById[Object.keys(setsById)[0]];
    const itemsById = collection.itemsById;
    const item = itemsById[Object.keys(itemsById)[0]];
    const { [item.id]: itemToDelete, ...restItems } = itemsById;
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      ...store.getState(),
      collections: {
        ...store.getState().collections
      }
    }));
    deleteCollectionItem(item)(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledWith({
      type: "COLLECTION_UPDATE",
      collection: {
        ...collection,
        itemsById: restItems
      }
    });
  });
});
