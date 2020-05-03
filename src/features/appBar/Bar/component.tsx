import React, { FunctionComponent } from "react";

import { AppBar as MUIAppBar, Toolbar } from "@material-ui/core";
import { ToggleNavButton } from "../ToggleNavButton";
import { UpdateButton } from "../UpdateButton";

import { styles } from "./styles";

export const AppBar: FunctionComponent = () => {
  const classes = styles();
  return (
    <MUIAppBar className={classes.root} position="relative" color="inherit">
      <Toolbar className={classes.toolBar}>
        <section>
          <ToggleNavButton />
        </section>
        <section>
          <UpdateButton />
        </section>
      </Toolbar>
    </MUIAppBar>
  );
};
