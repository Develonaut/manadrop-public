import React, { FunctionComponent } from "react";

import { Typography } from "@material-ui/core";
import { NoCollections as NoCollectionsSVG, WebDown, WebUp } from "common/SVGs";

import { I18n } from "@aws-amplify/core";
import { styles } from "./styles";

export const NoItems: FunctionComponent = () => {
  const classes = styles();
  return (
    <section className={classes.root}>
      <WebUp className={classes.webUp} />
      <header data-test-selector="header" className={classes.header}>
        <Typography className={classes.title} variant="h1">
          {I18n.get("Feels like something’s missing…")}
        </Typography>
        <Typography className={classes.subTitle} variant="h3">
          {I18n.get("Add cards to your collection to get started!")}
        </Typography>
      </header>
      <NoCollectionsSVG className={classes.image} />
      <WebDown className={classes.webDown} />
    </section>
  );
};
