import { I18n } from "@aws-amplify/core";
import React, { FunctionComponent } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  onClick: () => void;
}

export const CloseButton: FunctionComponent<PublicProps> = ({ onClick }) => {
  const classes = styles();
  return (
    <Button color="default" className={classes.button} onClick={onClick}>
      <Typography>{I18n.get("Close")}</Typography>
      <FontAwesomeIcon className={classes.buttonIcon} icon={faTimes} />
    </Button>
  );
};
