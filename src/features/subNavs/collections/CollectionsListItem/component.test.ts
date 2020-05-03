import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { Badge } from "common/Badge";
import { Collection } from "core/lib/Collection";
import { initialState } from "core/store/states/CollectionsState";
import { CollectionsListItemPresentation, PublicProps } from "./component";

const mockSelectCollection = jest.fn();

const getDefaultProps = (props?: PublicProps) => ({
  selectedId: initialState.setsById[Object.keys(initialState.setsById)[0]].id,
  collection: initialState.setsById[Object.keys(initialState.setsById)[0]],
  selectCollection: mockSelectCollection
});

const setupShallow = setupShallowTest(
  CollectionsListItemPresentation,
  getDefaultProps
);

describe("CollectionListPresentation", () => {
  test("should render a li element containg NavLink, Badge, and Typography", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find(Badge)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
