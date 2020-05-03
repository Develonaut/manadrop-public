import moment, { Moment } from "moment";
import React, { FunctionComponent } from "react";

import { Typography } from "@material-ui/core";

import { styles } from "./styles";

export interface PublicProps {
  timestamp: Moment;
}

export const UpdatedTimestampPresentation: FunctionComponent<PublicProps> = ({
  timestamp
}: PublicProps) => {
  const classes = styles();
  return (
    <Typography className={classes.root}>
      Updated - {moment(timestamp).fromNow()}
    </Typography>
  );
};
