import { setupShallowTest } from "tests/utils";

import { Collection } from "core/lib/Collection";
import { initialState } from "core/store/states/CollectionsState";
import { CollectionsListItem } from "../CollectionsListItem";
import { CollectionsListPresentation, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => ({
  selectedId: initialState.selectedId,
  setsById: initialState.setsById
});

const setupShallow = setupShallowTest(
  CollectionsListPresentation,
  getDefaultProps
);

describe("CollectionListPresentation", () => {
  test("should render ", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(CollectionsListItem)).toHaveLength(1);
  });
});
