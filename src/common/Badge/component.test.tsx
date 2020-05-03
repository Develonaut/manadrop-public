import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { Badge, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => {
  return {
    value: "test",
    ...props
  };
};

const setupShallow = setupShallowTest(Badge, getDefaultProps);

describe("SearchBar", () => {
  test("shouldn't toUpperCase a non string type", () => {
    const { wrapper } = setupShallow({ color: "island", value: 50 });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).text()).toBe("50");
  });

  test("should render with island when passed in", () => {
    const { wrapper } = setupShallow({ color: "island" });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().className).toBe(
      "makeStyles-root-1 makeStyles-island-4"
    );
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).text()).toBe("TEST");
  });

  test("should render with liliana when passed in", () => {
    const { wrapper } = setupShallow({ color: "liliana" });
    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().className).toBe(
      "makeStyles-root-1 makeStyles-liliana-3"
    );
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).text()).toBe("TEST");
  });
});
