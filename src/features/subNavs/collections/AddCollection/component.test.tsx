import { Input } from "@material-ui/core";
import { setupShallowTest } from "tests/utils";
import { AddCollectionPresentation, PublicProps } from "./component";

const createCollectionMock = jest.fn();

const getDefaultProps = (props?: PublicProps) => {
  return {
    createCollection: createCollectionMock
  };
};

const setupShallow = setupShallowTest(
  AddCollectionPresentation,
  getDefaultProps
);

describe("AddCollection", () => {
  test("should render with an Input", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    const wrapperInput = wrapper.find(Input);
    expect(wrapper).toHaveLength(1);
    expect(wrapperInput).toHaveLength(1);
  });
});
