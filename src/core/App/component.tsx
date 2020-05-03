import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { createTheme } from "core/config/theme";
import { History } from "history";
import { SnackbarProvider } from "notistack";
import React, { FunctionComponent, useEffect } from "react";

import { Router } from "core/Router";

import { LoadingSplash } from "features/loadingSplash";
import { ReduxMappedDispatchProps, ReduxMappedStateProps } from "./container";

import { jss } from "../config/jss";
import { styles as snackBarStyles } from "../Notifier/styles";

export type Props = ReduxMappedDispatchProps &
  ReduxMappedStateProps & {
    history: History;
  };

export const AppPresentation: FunctionComponent<Props> = ({
  history,
  isReady,
  startApp: dispatchStartApp
}) => {
  const snackBarClasses = snackBarStyles();
  useEffect(() => {
    dispatchStartApp();
  }, [dispatchStartApp]);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={createTheme({ palette: { type: "dark" } })}>
        <SnackbarProvider
          maxSnack={1}
          classes={{
            variantSuccess: snackBarClasses.success,
            variantError: snackBarClasses.error,
            variantWarning: snackBarClasses.warning,
            variantInfo: snackBarClasses.info
          }}
          autoHideDuration={2500}
        >
          {!isReady ? <LoadingSplash /> : <Router history={history} />}
        </SnackbarProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
