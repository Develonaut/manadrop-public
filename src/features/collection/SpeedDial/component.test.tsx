import { setupShallowTest } from "tests/utils";

import { SpeedDial as MUISpeedDial, SpeedDialAction } from "@material-ui/lab";
import { NoItemsArrowHelper } from "common/SVGs";
import { SpeedDialPresentation } from "./component";

const mockTrack = jest.fn();
const mockDispatchSetUI = jest.fn();

const getDefaultProps = () => ({
  itemsById: {},
  track: mockTrack,
  setUI: mockDispatchSetUI
});

const setupShallow = setupShallowTest(SpeedDialPresentation, getDefaultProps);

describe("Speed Dial", () => {
  test("should render", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(MUISpeedDial)).toHaveLength(1);
    expect(wrapper.find(SpeedDialAction)).toHaveLength(3);
    expect(wrapper.find(NoItemsArrowHelper)).toHaveLength(1);
  });

  test("should call setUI when the Add action is triggered", () => {
    const { wrapper } = setupShallow();
    const addButton = wrapper.find({ "data-test-selector": "Add" });
    addButton.simulate("click");
    expect(mockTrack).toHaveBeenCalledWith({ eventName: "Speed Dial - Add" });
    expect(mockDispatchSetUI).toHaveBeenCalledWith({ search: "SEARCH_CARDS" });
  });
});
