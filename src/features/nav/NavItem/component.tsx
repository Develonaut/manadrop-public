import { Nav } from "core/config/routes";
import React, { Fragment, FunctionComponent } from "react";
import { RouteComponentProps } from "react-router";
import { matchPath, NavLink } from "react-router-dom";

import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import { styles } from "./styles";

export interface PublicProps extends RouteComponentProps {
  path: string;
  to: string;
  name: string;
  nav: Nav;
}

export const NavItemPresentation: FunctionComponent<PublicProps> = ({
  path,
  name,
  to,
  location: { pathname },
  nav: { Component, Icon, props }
}) => {
  // Compares the current location's pathname against the passed in path.
  // If active, matchPath will return an object;
  const isActive: boolean = !!matchPath(pathname, { path });
  const classes = styles();
  return (
    <Fragment>
      <NavLink
        to={to}
        className={classes.root}
        activeClassName={classes.active}
      >
        <div className={classes.label}>
          <FontAwesomeIcon className={classes.icon} icon={Icon} />
          <Typography className={classes.text} variant="h6">
            {name}
          </Typography>
        </div>
        <FontAwesomeIcon icon={isActive ? faCaretDown : faCaretRight} />
      </NavLink>
      {isActive && <Component className={classes.subRoot} {...props} />}
    </Fragment>
  );
};
