import { stubCollectionItems } from "core/data/stubCollectionItems";
import { Card } from "features/card";
import AutoSizer from "react-virtualized-auto-sizer";
import { setupShallowTest } from "tests/utils";
import { Grid, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => ({
  itemWidth: 170,
  itemHeight: 220,
  itemSpacing: 18,
  items: stubCollectionItems,
  ItemComponent: Card
});

const setupShallow = setupShallowTest(Grid, getDefaultProps);

describe("Collection Grid", () => {
  const { wrapper } = setupShallow();
  test("should render", () => {
    expect(wrapper.find(AutoSizer)).toHaveLength(1);
  });
});
