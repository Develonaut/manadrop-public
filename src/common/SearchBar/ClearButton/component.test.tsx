import { Button, Fade } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { ClearButton } from "./component";

const mockOnClick = jest.fn();

const getDefaultProps = () => ({
  active: false,
  onClick: mockOnClick
});

const setupShallow = setupShallowTest(ClearButton, getDefaultProps);

describe("ClearButton", () => {
  test("should render with an Input and Icon", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Fade)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
