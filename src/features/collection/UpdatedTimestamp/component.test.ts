import { setupShallowTest } from "tests/utils";

import { Collection } from "core/lib/Collection";
import { UpdatedTimestampPresentation } from "./component";

const getDefaultProps = () => ({
  collection: new Collection()
});

const setupShallow = setupShallowTest(
  UpdatedTimestampPresentation,
  getDefaultProps
);

describe("CollectionLastUpdated", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
  });
});
