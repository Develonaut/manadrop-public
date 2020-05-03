import { CollectionsReducer } from "core/store/reducers/CollectionsReducer";
import { initialState } from "core/store/states/CollectionsState";

import { Collection } from "core/lib/Collection";

const persist = { version: -1, rehydrated: false };

describe("CollectionsReducer", () => {
  test("without a matching type should return the current the state", () => {
    const state = CollectionsReducer(undefined, { type: "", delta: {} });
    expect(state).toBe(initialState);
  });

  test("on COLLECTION_SELECT updates the selectedId property to match the id passed", () => {
    const mockCollection = new Collection({ name: "mockCollection" });
    const CollectionsStore = CollectionsReducer(
      { ...initialState, _persist: persist },
      {
        type: "COLLECTION_SELECT",
        id: mockCollection.id
      }
    );

    expect(CollectionsStore).toEqual({
      _persist: persist,
      selectedId: mockCollection.id,
      setsById: initialState.setsById
    });
  });

  test("on COLLECTION_CREATE adds a new collection to the Collections state", () => {
    const mockCollection = new Collection({ name: "mockCollection" });
    const CollectionsStore = CollectionsReducer(
      { ...initialState, _persist: persist },
      {
        type: "COLLECTION_CREATE",
        collection: mockCollection
      }
    );

    expect(CollectionsStore).toEqual({
      _persist: persist,
      selectedId: Object.keys(initialState.setsById)[0],
      setsById: {
        ...initialState.setsById,
        [mockCollection.id]: mockCollection
      }
    });
  });

  test("on COLLECTIONS_DELETE removes the specified collection from the Collections state", () => {
    const mockCollection = new Collection({ name: "mockCollection" });
    const addedCollectionsState = {
      ...initialState,
      setsById: {
        ...initialState.setsById,
        [mockCollection.id]: mockCollection
      }
    };
    const CollectionsStore = CollectionsReducer(
      { ...addedCollectionsState, _persist: persist },
      {
        type: "COLLECTION_DELETE",
        id: mockCollection.id
      }
    );

    expect(CollectionsStore).toEqual({
      _persist: persist,
      selectedId: Object.keys(initialState.setsById)[0],
      setsById: {
        ...initialState.setsById
      }
    });
  });

  test("on COLLECTION_UPDATE updates the collection in the setsById array at matching index of the passed in collection id", () => {
    const mockCollectionIdx2 = new Collection({ name: "Collection Index 2" });
    const mockCollectionIdx3 = new Collection({ name: "Collection Index 3" });
    const addedCollectionsState = {
      ...initialState,
      setsById: {
        ...initialState.setsById,
        [mockCollectionIdx2.id]: mockCollectionIdx2,
        [mockCollectionIdx3.id]: mockCollectionIdx3
      }
    };

    expect(
      CollectionsReducer(
        {
          ...addedCollectionsState,
          _persist: persist
        },
        {
          type: "COLLECTION_UPDATE",
          collection: {
            ...mockCollectionIdx2,
            name: "Updated Collection Name at Idx 2"
          }
        }
      )
    ).toEqual({
      _persist: persist,
      selectedId: Object.keys(initialState.setsById)[0],
      setsById: {
        ...initialState.setsById,
        [mockCollectionIdx2.id]: {
          ...mockCollectionIdx2,
          name: "Updated Collection Name at Idx 2"
        },
        [mockCollectionIdx3.id]: mockCollectionIdx3
      }
    });
  });
});
