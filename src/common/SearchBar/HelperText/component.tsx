import { Fade, Typography } from "@material-ui/core";
import React, { FunctionComponent, memo } from "react";
import { styles } from "./styles";

export interface PublicProps {
  active?: boolean;
}

function arePropsEqual(prevProps: PublicProps, nextProps: PublicProps) {
  if (prevProps.active !== nextProps.active) return false;
  return true;
}

export const HelperText: FunctionComponent<PublicProps> = memo(
  ({ active = false }) => {
    const classes = styles();
    return (
      <Fade in={active}>
        <Typography className={classes.label}>
          Press <strong className={classes.bold}>Enter</strong> to search
        </Typography>
      </Fade>
    );
  },
  arePropsEqual
);
