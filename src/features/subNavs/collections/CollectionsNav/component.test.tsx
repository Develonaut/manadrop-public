import { setupShallowTest } from "tests/utils";
import { CollectionsNav, PublicProps } from "./component";

import { AddCollection } from "../AddCollection";
import { CollectionsList } from "../CollectionsList";
import { CollectionsSearch } from "../CollectionsSearch";

const getDefaultProps = (props?: PublicProps) => ({
  ...props
});

const setupShallow = setupShallowTest(CollectionsNav, getDefaultProps);

describe("CollectionsNav", () => {
  test("should render a div containing CollectionsSearch, CollectionsList, and AddCollection", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    const wrapperDiv = wrapper.find("div");
    expect(wrapperDiv).toHaveLength(1);
    expect(wrapperDiv.find(CollectionsList)).toHaveLength(1);
    expect(wrapperDiv.find(AddCollection)).toHaveLength(1);
  });
});
