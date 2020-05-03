import { setupShallowTest } from "tests/utils";

import { Collection } from "core/lib/Collection";
import { SpeedDial } from "features/collection";
import { Grid } from "features/grid";
import { NoCollections } from "features/noCollections";
import { DefaultPageContainer } from "pages/containers/DefaultPageContainer";
import { CollectionPresentation } from "./component";
import { ReduxMappedStateProps } from "./container";

// Need to mock DefaultPageContainer since it's will load in container
// components will will cause and issue with nested connected components in the
// test.
jest.mock("pages/containers/DefaultPageContainer");

const getDefaultProps = (): ReduxMappedStateProps => ({
  setsById: { "12345": new Collection() },
  selectedCollection: new Collection(),
  itemsById: { itemId: { quantity: 1 } }
});
const setupShallow = setupShallowTest(CollectionPresentation, getDefaultProps);

describe("Collections", () => {
  test("should render the DefaultPageContainer with Collections content", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(DefaultPageContainer)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(SpeedDial)).toHaveLength(1);
  });

  test("should render the NoCollections state when no sets exist", () => {
    const { wrapper } = setupShallow({
      setsById: {}
    });
    expect(wrapper.find(DefaultPageContainer)).toHaveLength(0);
    expect(wrapper.find(Grid)).toHaveLength(0);
    expect(wrapper.find(SpeedDial)).toHaveLength(0);
    expect(wrapper.find(NoCollections)).toHaveLength(1);
  });
});
