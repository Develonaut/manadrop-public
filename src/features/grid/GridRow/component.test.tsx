import { stubCollectionItems } from "core/data/stubCollectionItems";
import { Card } from "features/card";
import { setupShallowTest } from "tests/utils";
import { GridRow, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => ({
  data: {
    itemWidth: 170,
    itemHeight: 220,
    itemSpacing: 18,
    itemsPerRow: 4,
    items: stubCollectionItems,
    ItemComponent: Card
  },
  index: 0,
  style: {
    position: "absolute"
  }
});

const setupShallow = setupShallowTest(GridRow, getDefaultProps);

describe("Grid Row", () => {
  const { wrapper } = setupShallow();
  test("should render", () => {
    expect(wrapper.find({ "data-test-selector": "grid-row" }));
  });
});
