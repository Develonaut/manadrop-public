import { I18n } from "@aws-amplify/core";
import classNames from "classnames";
import { getCountPresentationString } from "core/utils/collections";
import React, { FunctionComponent, memo } from "react";

import { Typography } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  rarity: string;
  count: number;
}

function preventRender(
  { count: prevCount }: PublicProps,
  { count: nextCount }: PublicProps
) {
  if (prevCount !== nextCount) {
    return false;
  }
  return true;
}

export const Count: FunctionComponent<PublicProps> = memo(
  ({ rarity, count }: PublicProps) => {
    const classes = styles();
    return (
      <div data-test-selector="count" className={classes.count}>
        <Typography
          className={classNames([classes.countText, rarity.toLowerCase()])}
        >
          {getCountPresentationString(count)}
        </Typography>
        <Typography className={classes.countRarity}>
          {I18n.get(`${rarity.charAt(0).toUpperCase() + rarity.slice(1)}`)}
        </Typography>
      </div>
    );
  },
  preventRender
);
