import React, { FunctionComponent } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import { ReduxMappedDispatchProps, ReduxMappedStateProps } from "./container";

import { styles } from "./styles";

type Props = ReduxMappedDispatchProps & ReduxMappedStateProps;

export const ToggleNavButtonPresentation: FunctionComponent<Props> = ({
  isOpen,
  setUI: dispatchSetUI
}) => {
  const classes = styles();
  const handleToggle = () => dispatchSetUI({ nav: !isOpen });
  return (
    <IconButton
      color="inherit"
      aria-label="Toggle Nav"
      edge="start"
      onClick={handleToggle}
      className={classes.toggle}
    >
      <FontAwesomeIcon icon={faBars} />
    </IconButton>
  );
};
