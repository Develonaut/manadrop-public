import { Typography } from "@material-ui/core";
import { SearchingState as SearchStateSVG } from "common/SVGs";
import { setupShallowTest } from "tests/utils";
import { SearchingState } from "./component";

const getDefaultProps = () => ({});
const setupShallow = setupShallowTest(SearchingState, getDefaultProps);

describe("SearchingState", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(SearchStateSVG)).toHaveLength(1);
  });
});
