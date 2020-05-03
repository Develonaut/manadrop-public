import { useTheme } from "@material-ui/core/styles";
import { routes } from "core/config/routes";
import { SetUIState } from "core/store/states/UIState";
import React, { FunctionComponent, useEffect, useState } from "react";

import { Drawer, useMediaQuery } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Badge } from "common/Badge";
import { NavItem } from "../NavItem";

import { styles } from "./styles";

export interface PublicProps {
  setUI: (state: SetUIState) => void;
  isOpen: boolean;
}

export function getCategories() {
  return [{ name: "main", routes }];
}

export const buildNavContents = (classes: any) => {
  return getCategories().map(({ name, routes: categoryRoutes }) => (
    <section key={name}>
      <header className={classes.header}>
        <Typography className={classes.label}>{name.toUpperCase()}</Typography>
        <Badge color="island" value="beta" />
      </header>
      {categoryRoutes.map(({ key, ...route }) => (
        <NavItem key={key} {...route} />
      ))}
    </section>
  ));
};

export const NavPresentation: FunctionComponent<PublicProps> = ({
  isOpen,
  setUI: dispatchSetUI
}) => {
  const classes = styles();
  const theme = useTheme();
  const isMobileHook = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMobile, setIsMobile] = useState(isMobileHook);

  useEffect(() => {
    setIsMobile(isMobileHook);
  }, [isMobileHook]);

  const handleClose = () => dispatchSetUI({ nav: !isOpen });
  return (
    <nav
      className={classes.drawer}
      data-test-selector="nav"
      aria-label="Navigation"
    >
      <Drawer
        data-test-selector="desktopDrawer"
        className={classes.drawer}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? isOpen : true}
        onClose={isMobile ? handleClose : () => null}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        {buildNavContents(classes)}
      </Drawer>
    </nav>
  );
};
