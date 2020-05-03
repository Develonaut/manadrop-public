import { Store } from "core/store/reducers";
import { createSelector } from "reselect";
import { Ready } from "../states/AppState";

// Selectors
export const ReadySelector = ({ app }: Store) => app.ready;

export const getReady = createSelector(
  [ReadySelector],
  (ready: Ready): Ready => ready
);
