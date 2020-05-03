import { Button } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { AddButton, PublicProps } from "./component";

const mockOnClick = jest.fn();

const getDefaultProps = (props?: PublicProps) => ({
  onClick: mockOnClick
});

const setupShallow = setupShallowTest(AddButton, getDefaultProps);

describe("AddButton", () => {
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
