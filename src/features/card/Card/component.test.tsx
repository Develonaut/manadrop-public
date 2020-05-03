import { setupShallowTest } from "tests/utils";

import { Image } from "common/Image";
import { stubCollectionItems } from "core/data/stubCollectionItems";
import { Card } from "./component";

const getDefaultProps = () => ({
  item: stubCollectionItems[0]
});

const setupShallow = setupShallowTest(Card, getDefaultProps);

describe("Card", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find({ "data-test-selector": "card" })).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
  });
});
