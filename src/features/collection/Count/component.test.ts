import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { Count } from "./component";

const getDefaultProps = () => ({
  rarity: "common",
  count: 10
});

const setupShallow = setupShallowTest(Count, getDefaultProps);

describe("Counts", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find({ "data-test-selector": "count" })).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(2);
  });
});
