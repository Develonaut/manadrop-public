import {
  enqueueSnackbar,
  removeSnackbar
} from "core/store/actions/SnackbarActions";
import { setupShallowTest } from "tests/utils";
import { NotifierPresentation, Props } from "./component";

jest.useFakeTimers();

const mockEnqueueSnackbar = jest.fn();
const mockRemoveSnackbar = jest.fn();
const mockCloseSnackbar = jest.fn();

const getDefaultProps = (): Props => ({
  snackbars: [
    {
      key: "testKey",
      message: "testMessage",
      options: {
        variant: "success"
      }
    }
  ],
  enqueueSnackbar: mockEnqueueSnackbar,
  removeSnackbar: mockRemoveSnackbar,
  closeSnackbar: mockCloseSnackbar
});

const setupShallow = setupShallowTest(NotifierPresentation, getDefaultProps);

describe("Notifier", () => {
  test("should enque snackbars, and then remove them", () => {
    const { wrapper } = setupShallow();
    jest.runAllTimers();
    expect(mockEnqueueSnackbar).toHaveBeenCalledWith("testMessage", {
      variant: "success"
    });
    expect(mockRemoveSnackbar).toHaveBeenCalledWith("testKey");
  });
});
