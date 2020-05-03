import { Popper } from "@material-ui/core";
import { Image } from "common/Image";
import { stubCollectionItems } from "core/data/stubCollectionItems";
import React from "react";
import { setupShallowTest } from "tests/utils";
import { Popover, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => ({
  item: stubCollectionItems[0],
  open: false,
  anchorEl: <div />
});

const setupShallow = setupShallowTest(Popover, getDefaultProps);

describe("Popover", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Popper)).toHaveLength(1);
    expect(wrapper.find(Image)).toHaveLength(1);
  });
});
