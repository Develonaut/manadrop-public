import { Fade, Typography } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { HelperText } from "./component";

const getDefaultProps = () => ({
  active: false
});

const setupShallow = setupShallowTest(HelperText, getDefaultProps);

describe("HelperText", () => {
  test("should render ", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Fade)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
