import { I18n } from "@aws-amplify/core";
import { EVENTS } from "core/utils/trackingHelpers";
import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { ReduxMappedDispatchProps, ReduxMappedStateProps } from "./container";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input
} from "@material-ui/core";

import { styles } from "./styles";

type Props = ReduxMappedStateProps & ReduxMappedDispatchProps;

export const RenameDialogPresentation: FunctionComponent<Props> = ({
  collection,
  track: dispatchTrack,
  updateCollection: dispatchUpdateCollection,
  resetUI: dispatchResetUI,
  isOpen
}: Props) => {
  const classes = styles();
  const { name } = collection;
  const [collectionName, setCollectionName] = useState(name);
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setCollectionName(value);
  const handleClose = () => dispatchResetUI();
  const handleSubmit = () => {
    dispatchTrack({
      eventName: EVENTS.COLLECTION_RENAME,
      eventProperties: {
        previousName: name,
        updatedName: collectionName
      }
    });

    dispatchUpdateCollection({
      ...collection,
      name: collectionName
    });
    handleClose();
  };
  return (
    <Dialog
      aria-labelledby="rename-collection"
      aria-describedby="rename-your-collection"
      open={isOpen}
      onClose={handleClose}
      className={classes.root}
    >
      <DialogTitle id="form-dialog-title">
        {I18n.get(`Rename "${name}"`)}
      </DialogTitle>
      <DialogContent>
        <Input
          autoFocus={true}
          fullWidth={true}
          placeholder={I18n.get("Enter Collection Name")}
          defaultValue={name}
          disableUnderline={true}
          onChange={handleChange}
          inputProps={{ "aria-label": I18n.get("Rename Collection") }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};
