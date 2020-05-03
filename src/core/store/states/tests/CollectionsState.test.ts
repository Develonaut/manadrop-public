import { initialState } from "core/store/states/CollectionsState";
import { formatToItemsByIds } from "core/utils/FTUCollection";

describe("CollectionsState", () => {
  test("should export an intialState that contains a default Collection", () => {
    const set = initialState.setsById[Object.keys(initialState.setsById)[0]];
    expect(set.name).toEqual("My First Collection");
    expect(set.itemsById).toEqual(formatToItemsByIds());
  });
});
