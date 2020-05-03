import { setupShallowTest } from "tests/utils";

import { LoadingSplash } from "./component";

const getDefaultProps = () => ({});
const setupShallow = setupShallowTest(LoadingSplash, getDefaultProps);

describe("LoadingSplash", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(
      wrapper.find({ "data-test-selector": "loading-splash" })
    ).toHaveLength(1);
  });
});
