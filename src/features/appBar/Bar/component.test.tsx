import { AppBar as MuiAppBar, Toolbar } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { AppBar } from "./component";

const getDefaultProps = () => ({});

const setupShallow = setupShallowTest(AppBar, getDefaultProps);

describe("AppBar", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(MuiAppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
});
