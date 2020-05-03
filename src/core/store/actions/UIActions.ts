import { SetUIState } from "../states/UIState";

export const UI_SET: string = "UI_SET";
export const UI_RESET: string = "UI_RESET";

export const UI_CONTEXT_COLLECTION_RENAME: string = "COLLECTION_RENAME";
export const UI_CONTEXT_SEARCH_CARDS: string = "SEARCH_CARDS";
export const UI_CONTEXT_IMPORT: string = "IMPORT";

export interface SetUIAction {
  type: typeof UI_SET;
  state: object;
}

export interface ResetUIAction {
  type: typeof UI_RESET;
}

export type UIActions = SetUIAction & ResetUIAction | any;

export function setUI(state: SetUIState): SetUIAction {
  return {
    type: UI_SET,
    state
  };
}

export function resetUI() {
  return {
    type: UI_RESET
  };
}
