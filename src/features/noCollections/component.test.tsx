import { setupShallowTest } from "tests/utils";

import { Typography } from "@material-ui/core";
import { NoCollections as NoCollectionsSVG, WebDown, WebUp } from "common/SVGs";
import { AddCollection } from "features/subNavs/collections";
import { DefaultPageContainer } from "pages/containers/DefaultPageContainer";
import { NoCollections } from "./component";

const getDefaultProps = () => ({});
const setupShallow = setupShallowTest(NoCollections, getDefaultProps);

describe("NoCollections", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(DefaultPageContainer)).toHaveLength(1);
    expect(wrapper.find(AddCollection)).toHaveLength(1);
    expect(wrapper.find(NoCollectionsSVG)).toHaveLength(1);
    expect(wrapper.find(WebDown)).toHaveLength(1);
    expect(wrapper.find(WebUp)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(2);
  });
});
