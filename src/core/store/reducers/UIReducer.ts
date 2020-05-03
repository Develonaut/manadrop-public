import { UI_RESET, UI_SET, UIActions } from "core/store/actions/UIActions";
import { initialState, UIState } from "core/store/states/UIState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function reducer(state: UIState = initialState, action: UIActions): UIState {
  switch (action.type) {
    case UI_RESET:
      return {
        ...state,
        ...initialState
      };
    case UI_SET:
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
}

export const UIReducer = persistReducer(
  {
    key: "ui",
    storage,
    whitelist: []
  },
  reducer
);
