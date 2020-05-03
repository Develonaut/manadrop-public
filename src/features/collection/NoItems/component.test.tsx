import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { NoCollections as NoCollectionsSVG, WebDown, WebUp } from "common/SVGs";
import { NoItems } from "./component";

const getDefaultProps = () => ({});
const setupShallow = setupShallowTest(NoItems, getDefaultProps);

describe("NoItems", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(NoCollectionsSVG)).toHaveLength(1);
    expect(wrapper.find(WebDown)).toHaveLength(1);
    expect(wrapper.find(WebUp)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(2);
  });
});
