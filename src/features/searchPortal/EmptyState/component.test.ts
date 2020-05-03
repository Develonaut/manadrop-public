import { Typography } from "@material-ui/core";
import { EmptyState as EmptyStateSVG } from "common/SVGs";
import { setupShallowTest } from "tests/utils";
import { EmptyState } from "./component";

const mockSetUI = jest.fn();

const getDefaultProps = () => ({
  title: "TestTitle",
  subTitle: "TestSubTitle"
});

const setupShallow = setupShallowTest(EmptyState, getDefaultProps);

describe("EmptyState", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find({ "data-test-selector": "header" })).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(2);
    expect(wrapper.find(EmptyStateSVG)).toHaveLength(1);
  });
});
