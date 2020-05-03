import { Button } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { CloseButton } from "./component";

const mockOnClick = jest.fn();

const getDefaultProps = () => ({
  active: false,
  onClick: mockOnClick
});

const setupShallow = setupShallowTest(CloseButton, getDefaultProps);

describe("CloseButton", () => {
  test("should render with an Input and Icon", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
