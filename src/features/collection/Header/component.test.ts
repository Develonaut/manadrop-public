import { setupShallowTest } from "tests/utils";

import { Header } from "./component";

const getDefaultProps = () => ({});

const setupShallow = setupShallowTest(Header, getDefaultProps);

describe("Header", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
  });
});
