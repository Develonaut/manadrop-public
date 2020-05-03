import React, { FunctionComponent } from "react";

import { Typography } from "@material-ui/core";
import { NoCollections as NoCollectionsSVG, WebDown, WebUp } from "common/SVGs";
import { DefaultPageContainer } from "pages/containers/DefaultPageContainer";

import { I18n } from "@aws-amplify/core";
import { AddCollection } from "features/subNavs/collections";
import { styles } from "./styles";

export const NoCollections: FunctionComponent = () => {
  const classes = styles();
  return (
    <DefaultPageContainer
      seo={{
        title: `Collections - Manadrop`,
        description: "Create, and maintain your collections all in once place!"
      }}
    >
      <section className={classes.root}>
        <WebUp className={classes.webUp} />
        <header data-test-selector="header" className={classes.header}>
          <Typography className={classes.title} variant="h1">
            {I18n.get("Well this is embarrassing…")}
          </Typography>
          <Typography className={classes.subTitle} variant="h3">
            {I18n.get("You don’t have any collections. Let’s fix that!")}
          </Typography>
        </header>
        <AddCollection />
        <NoCollectionsSVG className={classes.image} />
        <WebDown className={classes.webDown} />
      </section>
    </DefaultPageContainer>
  );
};
