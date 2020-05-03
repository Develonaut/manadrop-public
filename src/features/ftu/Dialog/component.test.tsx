import { Dialog as CommonDialog } from "common/Dialog";
import { setupShallowTest } from "tests/utils";
import { Dialog } from "./component";

const getDefaultProps = () => ({});

const setupShallow = setupShallowTest(Dialog, getDefaultProps);

describe("AppBar", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(CommonDialog)).toHaveLength(1);
  });
});
