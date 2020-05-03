import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import React from "react";
import { setupShallowTest } from "tests/utils";
import { Dialog } from "./component";

const mockOnClose = jest.fn();

const getDefaultProps = () => ({
  open: true,
  onClose: mockOnClose,
  Title: () => <div>Title</div>,
  Hero: () => <div>Hero</div>,
  Content: () => <ul>Content</ul>
});

const setupShallow = setupShallowTest(Dialog, getDefaultProps);

describe("AppBar", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(MUIDialog)).toHaveLength(1);
    expect(wrapper.find(DialogActions)).toHaveLength(1);
    expect(wrapper.find(DialogContent)).toHaveLength(1);
    expect(wrapper.find(DialogTitle)).toHaveLength(1);
  });
});
