import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { APP_SET, AppActions } from "../actions/AppActions";
import { AppState, initialState } from "../states/AppState";

function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case APP_SET:
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
}

export const AppReducer = persistReducer(
  {
    key: "app",
    storage,
    whitelist: []
  },
  reducer
);
