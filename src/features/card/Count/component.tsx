import { getCountPresentationString } from "core/utils/collections";
import { EVENTS } from "core/utils/trackingHelpers";
import React, { FunctionComponent, MouseEvent } from "react";
import { ReduxMappedDispatchProps } from "./container";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Typography } from "@material-ui/core";
import { Card } from "core/types/Card";

import { styles } from "./styles";

export interface PublicProps {
  item: Card;
}

type Props = ReduxMappedDispatchProps & PublicProps;

export const CountPresentation: FunctionComponent<Props> = ({
  item,
  updateCollectionItem: dispatchUpdateCollectionItem,
  track: dispatchTrack
}: Props) => {
  const classes = styles();
  const { id, quantity = 1 } = item;
  const updateCardQuantity = (updatedQuantity: number) => {
    if (updatedQuantity < 1) return;
    dispatchTrack({
      eventName:
        updatedQuantity > quantity
          ? EVENTS.COLLECTION_ITEM_INCREASE
          : EVENTS.COLLECTION_ITEM_DECREASE,
      eventProperties: {
        quantity: updatedQuantity
      }
    });
    dispatchUpdateCollectionItem({
      id,
      quantity: updatedQuantity
    });
  };

  const handleIncrement = (event: MouseEvent) => {
    event.stopPropagation();
    updateCardQuantity(quantity + 1);
  };
  const handleDecrement = (event: MouseEvent) => {
    event.stopPropagation();
    updateCardQuantity(quantity - 1);
  };
  return (
    <section data-test-selector="count" className={classes.root}>
      <div className={classes.count}>
        <Typography className={classes.countText}>
          {getCountPresentationString(quantity)}
        </Typography>
      </div>
      <IconButton onClick={handleDecrement} className={classes.button}>
        <FontAwesomeIcon className={classes.icon} icon={faCaretDown} />
      </IconButton>
      <IconButton onClick={handleIncrement} className={classes.button}>
        <FontAwesomeIcon className={classes.icon} icon={faCaretUp} />
      </IconButton>
    </section>
  );
};
