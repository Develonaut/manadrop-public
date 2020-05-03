import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { Badge } from "common/Badge";
import { stubCollectionItems } from "core/data/stubCollectionItems";
import { NamePresentation } from "./component";

const getDefaultProps = () => ({
  itemsById: {
    [stubCollectionItems[0].id]: { quantity: 1 }
  },
  name: "Test"
});

const setupShallow = setupShallowTest(NamePresentation, getDefaultProps);

describe("Name", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Badge)).toHaveLength(1);
    expect(wrapper.find(Typography).text()).toEqual("Test");
  });
});
