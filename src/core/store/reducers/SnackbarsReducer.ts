import {
  SnackbarActions,
  SNACKBARS_ENQUEUE,
  SNACKBARS_REMOVE
} from "../actions/SnackbarActions";
import { initialState, SnackbarsState } from "../states/SnackbarsState";

export function SnackbarsReducer(
  state: SnackbarsState = initialState,
  action: SnackbarActions
): SnackbarsState {
  switch (action.type) {
    case SNACKBARS_ENQUEUE:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.snackbar
          }
        ]
      };
    case SNACKBARS_REMOVE:
      return {
        ...state,
        notifications: state.notifications.filter(
          snackbar => snackbar.key !== action.key
        )
      };
    default:
      return state;
  }
}
