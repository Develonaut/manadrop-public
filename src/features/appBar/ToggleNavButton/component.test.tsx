import { setupShallowTest } from "tests/utils";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Tooltip } from "@material-ui/core";
import { CauldronIcon } from "common/SVGs";
import { ToggleNavButtonPresentation } from "./component";

const mockSetUI = jest.fn();

const getDefaultProps = () => ({
  isOpen: false,
  setUI: mockSetUI
});

const setupShallow = setupShallowTest(
  ToggleNavButtonPresentation,
  getDefaultProps
);

describe("ToggleNavButton", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon).props().icon).toBe(faBars);
  });
});
