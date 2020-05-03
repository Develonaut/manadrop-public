import { stubCollectionItems } from "core/data/stubCollectionItems";
import {
  getCollectionsSets,
  getCollectionsSetsIds,
  getSelectedCollection
} from "core/store/selectors/CollectionSelectors";

import { Collection } from "core/lib/Collection";
import { configureStore } from "core/store/configureStore";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const { store } = configureStore({ history });
const state = store.getState();

describe("CollectionsSelectors", () => {
  test("should return collections set when get getCollectionsSets is used", () => {
    const collectionsSetsById = getCollectionsSets(state);
    expect(Object.keys(collectionsSetsById)).toHaveLength(1);
  });

  test("should return the Collections setsById ids when get getCollectionsSetsIds is used", () => {
    expect(getCollectionsSetsIds(state)).toEqual([expect.any(String)]);
  });

  test("getSelectedCollection should return an empty object since the selectedId doesnt match any collection", () => {
    const mockCollection = new Collection({ name: "mockCollection" });
    const addedCollectionState = {
      ...state,
      collections: {
        ...state.collections,
        selectedId: "fakeId",
        setsById: {
          ...state.collections.setsById,
          [mockCollection.id]: mockCollection
        }
      }
    };

    expect(getSelectedCollection(addedCollectionState)).toEqual({});
  });

  test("getSelectedCollection should return the collection with the id that matches the selected id property", () => {
    const mockCollection = new Collection({ name: "mockCollection" });
    const addedCollectionState = {
      ...state,
      collections: {
        ...state.collections,
        selectedId: mockCollection.id,
        setsById: {
          ...state.collections.setsById,
          [mockCollection.id]: mockCollection
        }
      }
    };

    expect(getSelectedCollection(addedCollectionState)).toEqual(mockCollection);
  });
});
