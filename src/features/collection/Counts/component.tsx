import { useItemStore } from "core/hooks/collections";
import { CollectionItemsById } from "core/lib/Collection";
import {
  Counts,
  countsInitialValue,
  transformItemsForCounts
} from "core/transformers/collection";
import React, { Fragment, FunctionComponent } from "react";

import {
  CollectionCountBackground,
  CollectionCountLeftAdornment,
  CollectionCountRightAdornment
} from "common/SVGs";

import { Count } from "../Count";
import { styles } from "./styles";

export interface PublicProps {
  itemsById: CollectionItemsById;
}

export const CountsPresentation: FunctionComponent<PublicProps> = ({
  itemsById
}: PublicProps) => {
  const counts: Counts = useItemStore(
    itemsById,
    transformItemsForCounts,
    countsInitialValue
  );

  const classes = styles();
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.frame}>
          <CollectionCountLeftAdornment className={classes.leftAdornment} />
          {Object.keys(counts)
            .filter(key => key !== "total")
            .map((key: string) => (
              <Count key={key} rarity={key} count={counts[key]} />
            ))}
          <CollectionCountRightAdornment className={classes.rightAdornment} />
        </div>
      </div>
      <CollectionCountBackground className={classes.background} />
    </Fragment>
  );
};
