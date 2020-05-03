export type Ready = boolean;
export type Nav = boolean;
export type Dialog = string;
export type Search = string;
export type UpdateAvailable = boolean;

export interface SetUIState {
  ready?: Ready;
  nav?: Nav;
  dialog?: Dialog;
  search?: Search;
  updateAvailable?: UpdateAvailable;
}

export interface UIState {
  ready: Ready;
  nav: Nav;
  dialog: Dialog;
  search: Dialog;
  updateAvailable: UpdateAvailable;
}

export const initialState: UIState = {
  ready: false,
  nav: false,
  updateAvailable: false,
  dialog: "",
  search: ""
};
