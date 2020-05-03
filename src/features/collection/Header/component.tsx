import classNames from "classnames";
import React, { FunctionComponent } from "react";

import { Divider } from "@material-ui/core";
import { CollectionNameAdornment } from "common/SVGs";

import {
  Counts,
  CreatedTimestamp,
  Name,
  UpdatedTimestamp
} from "../../collection";

import { styles } from "./styles";

export const Header: FunctionComponent = () => {
  const classes = styles();
  return (
    <header className={classes.root}>
      <section>
        <div
          className={classNames(classes.innerWrapper, classes.detailsWrapper)}
        >
          <CollectionNameAdornment className={classes.detailsAdornment} />
          <div className={classes.details}>
            <div className={classes.name}>
              <Name />
            </div>
            <div className={classes.timestamps}>
              <CreatedTimestamp />
              <Divider className={classes.divider} />
              <UpdatedTimestamp />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={classNames(classes.innerWrapper, classes.countsWrapper)}
        >
          <Counts />
        </div>
      </section>
    </header>
  );
};
