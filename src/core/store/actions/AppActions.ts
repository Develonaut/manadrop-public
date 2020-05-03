import { Sentry } from "core/lib/Sentry";
import { installItems } from "core/utils/FTUCollection";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import * as serviceWorker from "../../../serviceWorker";
import { SetUIState } from "../states/UIState";
import { init as initAnalytics } from "./AnalyticsActions";
import { setUI } from "./UIActions";

export const APP_START: string = "APP_START";
export const APP_SET: string = "APP_SET";

export interface SetAppAction {
  type: typeof APP_SET;
  state: object;
}

export type StartAppAction = ThunkAction<{}, {}, {}, SetAppAction>;

export type AppActions = SetAppAction | any;

export function startApp(): ThunkAction<{}, {}, {}, AppActions> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    // Init Sentry reporting.
    Sentry.init();
    // Init analytics.
    dispatch(initAnalytics());
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    // Add a listener for incoming changes.
    serviceWorker.register({
      onUpdate: () => dispatch(setUI({ updateAvailable: true }))
    });
    // Check to see if their is a new version waiting to be installed.
    // Delayed by 1s to allow for registration of the SW to be established.
    setTimeout(async () => {
      if (navigator && navigator.serviceWorker) {
        const SWRegistration = await navigator.serviceWorker.getRegistration();
        if (SWRegistration && SWRegistration.waiting)
          dispatch(setUI({ updateAvailable: true }));
      }
    }, 1000);

    // Fetch and store the FTU items.
    await installItems();
    // Note: The Timeout is artifical without it the screen flashes too quickly so the load is
    // instant. To improve UX let's show it for at least a second.
    setTimeout(() => {
      return dispatch(setApp({ ready: true }));
    }, 1000);
  };
}

export function setApp(state: SetUIState): SetAppAction {
  return {
    type: APP_SET,
    state
  };
}
