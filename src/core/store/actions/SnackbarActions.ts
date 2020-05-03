import { Snackbar } from "../states/SnackbarsState";

export const SNACKBARS_ENQUEUE: string = "SNACKBARS_ENQUEUE";
export const SNACKBARS_REMOVE: string = "SNACKBARS_REMOVE";

export interface EnqueueSnackbarAction {
  type: typeof SNACKBARS_ENQUEUE;
  snackbar: Snackbar;
}

export interface RemoveSnackbarAction {
  type: typeof SNACKBARS_REMOVE;
  key: string;
}

export type SnackbarActions =
  | EnqueueSnackbarAction & RemoveSnackbarAction
  | any;

export function enqueueSnackbar(snackbar: Snackbar) {
  return {
    type: SNACKBARS_ENQUEUE,
    snackbar: {
      key: new Date().getTime() + Math.random(),
      ...snackbar
    }
  };
}

export function removeSnackbar(key: string) {
  return {
    type: SNACKBARS_REMOVE,
    key
  };
}
