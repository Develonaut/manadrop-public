export type Ready = boolean;

export interface SetAppState {
  ready?: Ready;
}

export interface AppState {
  ready: Ready;
}

export const initialState: AppState = {
  ready: false
};
