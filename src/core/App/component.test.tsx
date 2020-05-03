import { createBrowserHistory } from "history";
import { setupShallowTest } from "tests/utils";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { Router } from "core/Router";
import { SnackbarProvider } from "notistack";
import { AppPresentation, Props } from "./component";

const mockStartApp = jest.fn();

const getDefaultProps = (props?: Props) => ({
  history: createBrowserHistory(),
  startApp: mockStartApp,
  isReady: true
});

const setupShallow = setupShallowTest(AppPresentation, getDefaultProps);

describe("Router", () => {
  test("should render with ThemeProvider, SnackbarProvider and Router", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(MuiThemeProvider)).toHaveLength(1);
    expect(wrapper.find(SnackbarProvider)).toHaveLength(1);
    expect(wrapper.find(Router)).toHaveLength(1);
  });
});
