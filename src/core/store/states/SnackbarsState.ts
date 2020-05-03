import { OptionsObject } from "notistack";

export type Nav = boolean;
export type Dialog = string;
export type Search = string;

export interface Snackbar {
  key?: string;
  message: string;
  options?: OptionsObject;
}

export interface SnackbarsState {
  notifications: Snackbar[];
}

export const initialState: SnackbarsState = {
  notifications: []
};
