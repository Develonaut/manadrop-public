import classNames from "classnames";
import React, { FunctionComponent } from "react";

import { Typography } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  color?: string;
  value: string | number;
}

export const Badge: FunctionComponent<PublicProps> = ({ color, value }) => {
  const classes = styles();
  const badgeClass = classNames([classes.root], {
    [classes.island]: color === "island",
    [classes.liliana]: color === "liliana"
  });
  return (
    <div className={badgeClass}>
      <Typography className={classes.text}>
        {typeof value === "string" ? value.toUpperCase() : value}
      </Typography>
    </div>
  );
};
