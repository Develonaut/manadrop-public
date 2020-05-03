import React, { FunctionComponent, memo } from "react";

import { EmptyState as EmptyStateSVG } from "common/SVGs";

import { Typography } from "@material-ui/core";
import { styles } from "./styles";

export interface PublicProps {
  title: string;
  subTitle: string;
}

function areEqual(prevProps: PublicProps, nextProps: PublicProps) {
  if (prevProps.title !== nextProps.title) return false;
  return true;
}

export const EmptyState: FunctionComponent<PublicProps> = memo(
  ({ title, subTitle }: PublicProps) => {
    const classes = styles();
    return (
      <section className={classes.root}>
        <header data-test-selector="header" className={classes.header}>
          <Typography className={classes.title} variant="h1">
            {title}
          </Typography>
          <Typography className={classes.subTitle} variant="h3">
            {subTitle}
          </Typography>
        </header>
        <EmptyStateSVG className={classes.image} />
      </section>
    );
  },
  areEqual
);
