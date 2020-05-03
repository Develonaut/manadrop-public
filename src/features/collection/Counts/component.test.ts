import moment from "moment";
import { setupShallowTest } from "tests/utils";

import { CountsPresentation } from "./component";

const getDefaultProps = () => ({
  collection: {
    id: "1234",
    name: "TEST",
    items: [],
    dateCreated: moment(),
    lastUpdated: moment()
  }
});

const setupShallow = setupShallowTest(CountsPresentation, getDefaultProps);

describe("Counts", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
  });
});
