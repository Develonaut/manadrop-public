import { CollectionId } from "core/lib/Collection";
import { SetsById } from "core/store/states/CollectionsState";
import React, { FunctionComponent } from "react";

import { CollectionsListItem } from "../CollectionsListItem";

import { I18n } from "@aws-amplify/core";
import { Typography } from "@material-ui/core";
import { styles } from "./styles";

export interface PublicProps {
  selectedId: CollectionId;
  setsById: SetsById;
}

export const CollectionsListPresentation: FunctionComponent<PublicProps> = ({
  selectedId,
  setsById
}: PublicProps) => {
  const classes = styles();
  return (
    <ul className={classes.root}>
      {!Object.keys(setsById).length ? (
        <Typography className={classes.text}>
          {`${I18n.get("Fresh out of collections")} :(`}
        </Typography>
      ) : (
        Object.keys(setsById).map((id: CollectionId) => (
          <CollectionsListItem
            key={id}
            {...setsById[id]}
            selectedId={selectedId}
          />
        ))
      )}
    </ul>
  );
};
