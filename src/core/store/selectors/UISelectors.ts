import { Store } from "core/store/reducers";

import {
  Dialog,
  Nav,
  Search,
  UpdateAvailable
} from "core/store/states/UIState";
import { createSelector } from "reselect";

// Selectors
export const DialogSelector = ({ ui }: Store) => ui.dialog;
export const SearchSelector = ({ ui }: Store) => ui.search;
export const NavSelector = ({ ui }: Store) => ui.nav;
export const UpdateAvailableSelector = ({ ui }: Store) => ui.updateAvailable;

export const getDialogContext = createSelector(
  [DialogSelector],
  (dialog: Dialog): Dialog => dialog
);

export const getNavState = createSelector(
  [NavSelector],
  (nav: Nav): Nav => nav
);

export const getSearchContext = createSelector(
  [SearchSelector],
  (search: Search): Search => search
);

export const getUpdateAvailable = createSelector(
  [UpdateAvailableSelector],
  (updateAvailable: UpdateAvailable): UpdateAvailable => updateAvailable
);
