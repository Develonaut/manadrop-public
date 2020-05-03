import { useItemStore } from "core/hooks/collections";
import { CollectionItemsById, CollectionName } from "core/lib/Collection";
import {
  Counts,
  countsInitialValue,
  transformItemsForCounts
} from "core/transformers/collection";
import { getCountPresentationString } from "core/utils/collections";
import React, { Fragment, FunctionComponent } from "react";

import { Typography } from "@material-ui/core";
import { Badge } from "common/Badge";

import { styles } from "./styles";

export interface PublicProps {
  itemsById: CollectionItemsById;
  name: CollectionName;
}

export const NamePresentation: FunctionComponent<PublicProps> = ({
  itemsById,
  name
}: PublicProps) => {
  const classes = styles();
  const counts: Counts = useItemStore(
    itemsById,
    transformItemsForCounts,
    countsInitialValue
  );
  return (
    <Fragment>
      <Typography variant="h1" className={classes.root}>
        {name}
      </Typography>
      <Badge value={getCountPresentationString(counts.total)} />
    </Fragment>
  );
};
