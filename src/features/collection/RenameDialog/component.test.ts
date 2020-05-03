import { setupShallowTest } from "tests/utils";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input
} from "@material-ui/core";
import { Collection } from "core/lib/Collection";
import { RenameDialogPresentation } from "./component";

const mockUpdateCollection = jest.fn();
const mockResetUI = jest.fn();
const mockCollection = new Collection();
const mockTrack = jest.fn();

const getDefaultProps = () => ({
  isOpen: false,
  collection: mockCollection,
  updateCollection: mockUpdateCollection,
  track: mockTrack,
  resetUI: mockResetUI
});

const setupShallow = setupShallowTest(
  RenameDialogPresentation,
  getDefaultProps
);

describe("RenameDialog", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Dialog)).toHaveLength(1);
    expect(wrapper.find(DialogTitle)).toHaveLength(1);
    expect(wrapper.find(DialogActions)).toHaveLength(1);
    expect(wrapper.find(DialogContent)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  test("should by default be closed", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Dialog).props().open).toBe(false);
  });

  test("should be open when isOpen is true", () => {
    const { wrapper } = setupShallow({ isOpen: true });
    expect(wrapper.find(Dialog).props().open).toBe(true);
  });

  test("should have 'Rename My Magic Collection' as the dialog title", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(DialogTitle).text()).toBe(
      `Rename "${mockCollection.name}"`
    );
  });

  test("should have 'My Magic Collection' as the input defaultValue", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Input).props().defaultValue).toBe(mockCollection.name);
  });

  test("should call updateCollection, and resetUI on submit", () => {
    const { wrapper } = setupShallow();
    wrapper.find(Input).simulate("change", { target: { value: "testValue" } });
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(mockUpdateCollection).toHaveBeenCalledWith({
      ...mockCollection,
      name: "testValue"
    });
    expect(mockResetUI).toHaveBeenCalled();
  });
});
