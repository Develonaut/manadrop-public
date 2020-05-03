import { setupShallowTest } from "tests/utils";
import { PortalPresentation } from "./component";

const mockSetUI = jest.fn();

const getDefaultProps = () => ({
  setUI: mockSetUI,
  isOpen: false
});

const setupShallow = setupShallowTest(PortalPresentation, getDefaultProps);

describe("SearchPortal", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
  });
});
