import { connectRouter, RouterState } from "connected-react-router";
import { CollectionsState } from "core/store/states/CollectionsState";
import { UIState } from "core/store/states/UIState";
import { History } from "history";
import { combineReducers } from "redux";
import { AppState } from "./states/AppState";
import { SnackbarsState } from "./states/SnackbarsState";

import { AppReducer } from "core/store/reducers/AppReducer";
import { CollectionsReducer } from "core/store/reducers/CollectionsReducer";
import { SnackbarsReducer } from "core/store/reducers/SnackbarsReducer";
import { UIReducer } from "core/store/reducers/UIReducer";

export interface Store {
  [key: string]: any;
  router: RouterState;
  app: AppState;
  ui: UIState;
  collections: CollectionsState;
  snackbars: SnackbarsState;
}

export const reducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
    ui: UIReducer,
    collections: CollectionsReducer,
    snackbars: SnackbarsReducer
  });
