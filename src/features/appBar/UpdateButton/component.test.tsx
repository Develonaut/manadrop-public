import { setupShallowTest } from "tests/utils";

import { IconButton, Tooltip } from "@material-ui/core";
import { CauldronIcon } from "common/SVGs";
import { UpdateButtonPresentation } from "./component";

const getDefaultProps = () => ({
  isUpdateAvailable: true
});

const setupShallow = setupShallowTest(
  UpdateButtonPresentation,
  getDefaultProps
);

describe("UpdateButton", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Tooltip)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(CauldronIcon)).toHaveLength(1);
  });
});
