import { I18n } from "@aws-amplify/core";
import React, { FunctionComponent, memo } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Fade, Typography } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  active?: boolean;
  onClick: () => void;
}

function arePropsEqual(prevProps: PublicProps, nextProps: PublicProps) {
  if (prevProps.active !== nextProps.active) return false;
  return true;
}

export const ClearButton: FunctionComponent<PublicProps> = memo(
  ({ onClick, active = false }) => {
    const classes = styles();
    return (
      <Fade in={active}>
        <Button color="default" className={classes.button} onClick={onClick}>
          <Typography>{I18n.get("Clear")}</Typography>
          <FontAwesomeIcon className={classes.buttonIcon} icon={faTimes} />
        </Button>
      </Fade>
    );
  },
  arePropsEqual
);
