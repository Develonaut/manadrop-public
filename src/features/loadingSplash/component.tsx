import React, { FunctionComponent } from "react";

import manadropIcon from "../../images/pngs/manadrop-icon.png";

import { I18n } from "@aws-amplify/core";
import { Typography } from "@material-ui/core";
import { styles } from "./styles";

const messages = [
  I18n.get("Untapping mana"),
  I18n.get("Moving to upkeep"),
  I18n.get("GG"),
  I18n.get("Top decking")
];

export const LoadingSplash: FunctionComponent = () => {
  const classes = styles();
  return (
    <section data-test-selector="loading-splash" className={classes.root}>
      <div>
        <img className={classes.icon} src={manadropIcon} alt="Loading" />
        <div className={classes.shadow} />
      </div>
      <div className={classes.text}>
        <Typography className={classes.label} variant="h1">
          {messages[Math.floor(Math.random() * messages.length)]}
        </Typography>
        <Typography className={classes.header}>
          {I18n.get("Loading")}
        </Typography>
      </div>
    </section>
  );
};
