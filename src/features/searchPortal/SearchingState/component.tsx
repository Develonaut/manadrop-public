import React, { FunctionComponent, memo } from "react";

import { SearchingState as SearchingStateSVG } from "common/SVGs";

import { I18n } from "@aws-amplify/core";
import { Typography } from "@material-ui/core";
import { styles } from "./styles";

export const SearchingState: FunctionComponent = memo(() => {
  const classes = styles();
  return (
    <section className={classes.root}>
      <SearchingStateSVG className={classes.image} />
      <Typography className={classes.label} variant="h3">
        {I18n.get("Searching...")}
      </Typography>
    </section>
  );
});
