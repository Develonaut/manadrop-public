import classNames from "classnames";
import { Collection, CollectionId } from "core/lib/Collection";
import { SelectCollectionAction } from "core/store/actions/CollectionActions";
import React, { FunctionComponent } from "react";

import { Typography } from "@material-ui/core";
import { Badge } from "common/Badge";

import { useItemStore } from "core/hooks/collections";
import {
  Counts,
  countsInitialValue,
  transformItemsForCounts
} from "core/transformers/collection";
import { getCountPresentationString } from "core/utils/collections";
import { ActionMenu } from "features/collection";
import { styles } from "./styles";

export interface PublicProps {
  selectedId: CollectionId;
  collection: Collection;
}

export interface DispatchProps {
  selectCollection: (id: CollectionId) => SelectCollectionAction;
}

type Props = PublicProps & DispatchProps;

export const CollectionsListItemPresentation: FunctionComponent<Props> = ({
  collection,
  selectedId,
  selectCollection
}: Props) => {
  const classes = styles();
  const { name, id, itemsById } = collection;
  const dispatchSelectCollection = () =>
    selectedId !== id ? selectCollection(id) : undefined;
  const counts: Counts = useItemStore(
    itemsById,
    transformItemsForCounts,
    countsInitialValue
  );
  return (
    <li
      onClick={dispatchSelectCollection}
      className={classNames(classes.root, {
        [classes.rootActive]: selectedId === id
      })}
    >
      <Badge
        color={selectedId === id ? "liliana" : undefined}
        value={getCountPresentationString(counts.total)}
      />
      <Typography className={classes.text}>{name}</Typography>
      {selectedId === id && <ActionMenu />}
    </li>
  );
};
