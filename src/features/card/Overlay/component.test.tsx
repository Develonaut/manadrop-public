import { setupShallowTest } from "tests/utils";

import { Fade } from "@material-ui/core";
import { stubCollectionItems } from "core/data/stubCollectionItems";
import { OverlayPresentation, PublicProps } from "./component";

const mockDeleteCollectionItem = jest.fn();

const getDefaultProps = (props?: PublicProps) => ({
  card: stubCollectionItems[0],
  open: false,
  deleteCollectionItem: mockDeleteCollectionItem
});

const setupShallow = setupShallowTest(OverlayPresentation, getDefaultProps);

describe("Overlay", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Fade)).toHaveLength(1);
    expect(wrapper.find({ "data-test-selector": "overlay" })).toHaveLength(1);
  });
});
