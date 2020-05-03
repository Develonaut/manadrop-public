import { setupShallowTest } from "tests/utils";

import { IconButton } from "@material-ui/core";
import { stubCollectionItems } from "core/data/stubCollectionItems";
import { CountPresentation, PublicProps } from "./component";

const mockUpdateCollection = jest.fn();

const getDefaultProps = (props?: PublicProps) => ({
  updateCollectionItem: mockUpdateCollection,
  item: stubCollectionItems[0]
});

const setupShallow = setupShallowTest(CountPresentation, getDefaultProps);

describe("Overlay", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find({ "data-test-selector": "count" })).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(2);
  });
});
