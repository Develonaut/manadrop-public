import { setupShallowTest } from "tests/utils";

import { Collection } from "core/lib/Collection";
import { CreatedTimestampPresentation } from "./component";

const getDefaultProps = () => ({
  collection: new Collection()
});

const setupShallow = setupShallowTest(
  CreatedTimestampPresentation,
  getDefaultProps
);

describe("Header", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
  });
});
