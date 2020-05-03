import React, { FunctionComponent } from "react";

import { IconButton, Tooltip, Zoom } from "@material-ui/core";

import { I18n } from "@aws-amplify/core";

import { DiscordIcon } from "common/SVGs/DiscordIcon";
import { styles } from "./styles";

export const DiscordButton: FunctionComponent = () => {
  const classes = styles();

  const handleClick = () => {
    window.open("https://discord.gg/y3hXtbN", "_blank");
  };

  return (
    <Tooltip title={I18n.get("Join our Discord")} TransitionComponent={Zoom}>
      <IconButton onClick={handleClick} className={classes.button}>
        <DiscordIcon className={classes.icon} />
      </IconButton>
    </Tooltip>
  );
};
