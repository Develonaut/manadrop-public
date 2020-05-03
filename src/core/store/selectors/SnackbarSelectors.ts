import { createSelector } from "reselect";
import { Store } from "../reducers";
import { Snackbar } from "../states/SnackbarsState";

// Selectors
const SnackbarsSelector = ({ snackbars }: Store) => snackbars.notifications;

export const getSnackbars = createSelector(
  [SnackbarsSelector],
  (snackbars: Snackbar[]): Snackbar[] => snackbars
);
