import { Button } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { PublicProps, RemoveButton } from "./component";

const mockOnClick = jest.fn();

const getDefaultProps = (props?: PublicProps) => ({
  onClick: mockOnClick
});

const setupShallow = setupShallowTest(RemoveButton, getDefaultProps);

describe("RemoveButton", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test("should call onClick when clicked", () => {
    const { wrapper } = setupShallow();
    wrapper.find(Button).simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
