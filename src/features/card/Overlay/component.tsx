import classNames from "classnames";
import { Card } from "core/types/Card";
import React, { FunctionComponent, MouseEvent } from "react";
import { ReduxMappedDispatchProps } from "./container";

import { Fade } from "@material-ui/core";
import { AddButton } from "common/AddButton";
import { RemoveButton } from "common/RemoveButton";
import { Count } from "../Count";

import { styles } from "./styles";

export interface PublicProps {
  type?: string;
  open: boolean;
  item: Card;
}

export type Props = ReduxMappedDispatchProps & PublicProps;

export const OverlayPresentation: FunctionComponent<Props> = ({
  open,
  item,
  type = "collection",
  deleteCollectionItem: dispatchDeleteCollectionItem,
  addCollectionItem: dispatchAddCollectionItem
}: Props) => {
  const classes = styles();
  const handleDeleteClick = (event: MouseEvent) => {
    event.stopPropagation();
    dispatchDeleteCollectionItem(item);
  };
  const handleAddClick = (event: MouseEvent) => {
    event.stopPropagation();
    dispatchAddCollectionItem(item);
  };

  return (
    <Fade in={open} timeout={100}>
      <div
        data-test-selector="overlay"
        className={classNames(classes.root, {
          [classes.open]: open
        })}
      >
        <div className={classes.innerWrapper}>
          {type === "collection" && <Count item={item} />}
          {type === "collection" && (
            <RemoveButton onClick={handleDeleteClick} />
          )}
          {type === "search" && <AddButton onClick={handleAddClick} />}
        </div>
      </div>
    </Fade>
  );
};
