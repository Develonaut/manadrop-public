import { setupShallowTest } from "tests/utils";

import { IconButton, Tooltip } from "@material-ui/core";
import { DiscordIcon } from "common/SVGs/DiscordIcon";
import { DiscordButton } from "./component";

const getDefaultProps = () => ({
  isUpdateAvailable: true
});

const setupShallow = setupShallowTest(DiscordButton, getDefaultProps);

describe("DiscordButton", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Tooltip)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(DiscordIcon)).toHaveLength(1);
  });
});
