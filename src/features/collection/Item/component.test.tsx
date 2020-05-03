import { setupShallowTest } from "tests/utils";

import { stubCollectionItems } from "core/data/stubCollectionItems";
import { Card } from "features/card";
import { Item } from "./component";

const getDefaultProps = () => ({
  item: stubCollectionItems[0]
});

const setupShallow = setupShallowTest(Item, getDefaultProps);

describe("Item", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
