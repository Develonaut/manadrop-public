import { I18n } from "@aws-amplify/core";
import { UI_CONTEXT_COLLECTION_RENAME } from "core/store/actions/UIActions";
import React, { FunctionComponent, MouseEvent, useState } from "react";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

import { ReduxMappedDispatchProps } from "./container";
import { styles } from "./styles";

export interface Actions {
  delete: ReduxMappedDispatchProps["deleteCollection"];
  rename: ReduxMappedDispatchProps["setUI"];
  [key: string]: any;
}

type Props = ReduxMappedDispatchProps;

export const ActionMenuPresentation: FunctionComponent<Props> = ({
  deleteCollection: dispatchDeleteCollection,
  setUI: dispatchSetUIState
}: Props) => {
  const classes = styles();
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // Handlers
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: MouseEvent) => {
    const { id } = event.target as HTMLInputElement;
    const actions: Actions = {
      delete: () => dispatchDeleteCollection(),
      rename: () =>
        dispatchSetUIState({
          dialog: UI_CONTEXT_COLLECTION_RENAME
        })
    };
    // Prevent any bubbling up from the item click
    // to prevent adverse side effects.
    event.stopPropagation();
    actions[id]();
    handleClose();
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="More" aria-haspopup="true" onClick={handleOpen}>
        <FontAwesomeIcon className={classes.icon} icon={faEllipsisH} />
      </IconButton>
      <Menu
        id="collection-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem id="delete" data-test-selector="delete" onClick={handleClick}>
          {I18n.get("Delete")}
        </MenuItem>
        <MenuItem id="rename" data-test-selector="rename" onClick={handleClick}>
          {I18n.get("Rename")}
        </MenuItem>
      </Menu>
    </div>
  );
};
