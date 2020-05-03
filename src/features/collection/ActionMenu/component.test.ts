import { setupShallowTest } from "tests/utils";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { UI_CONTEXT_COLLECTION_RENAME } from "core/store/actions/UIActions";
import { ActionMenuPresentation } from "./component";

const mockSetUI = jest.fn();
const mockDeleteCollection = jest.fn();

const getDefaultProps = () => ({
  setUI: mockSetUI,
  deleteCollection: mockDeleteCollection,
  collectionIds: ["testid1", "testid2"]
});

const setupShallow = setupShallowTest(ActionMenuPresentation, getDefaultProps);

describe("ActionMenu", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(faEllipsisH);
    expect(wrapper.find(Menu)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(2);
  });

  test("should call deleteCollection() when the delete menuItem is clicked", () => {
    const { wrapper } = setupShallow();
    const mockStopPropagation = jest.fn();
    const deleteButton = wrapper.find({ "data-test-selector": "delete" });
    deleteButton.simulate("click", {
      stopPropagation: mockStopPropagation,
      target: { id: "delete" }
    });
    expect(mockStopPropagation).toHaveBeenCalled();
    expect(mockDeleteCollection).toHaveBeenCalledWith();
  });

  test("should call setUI() when the rename menuItem is clicked", () => {
    const { wrapper } = setupShallow();
    const mockStopPropagation = jest.fn();
    const renameButton = wrapper.find({ "data-test-selector": "rename" });
    renameButton.simulate("click", {
      stopPropagation: mockStopPropagation,
      target: { id: "rename" }
    });
    expect(mockStopPropagation).toHaveBeenCalled();
    expect(mockSetUI).toHaveBeenCalledWith({
      dialog: UI_CONTEXT_COLLECTION_RENAME
    });
  });

  test("should toggle the open property of menu when the menu IconButton is clicked", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(Menu).props().open).toBe(false);
    expect(
      wrapper
        .find(IconButton)
        .simulate("click", { currentTarget: "testTarget" })
    );
    expect(wrapper.find(Menu).props().open).toBe(true);
  });
});
