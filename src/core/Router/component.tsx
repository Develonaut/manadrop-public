import { ConnectedRouter } from "connected-react-router";
import { Routes, routes } from "core/config/routes";
import { History } from "history";
import React, { ComponentType, FunctionComponent } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

interface RouteRender {
  Component: ComponentType;
  props: object;
}

export interface PublicProps {
  history: History;
}

export function renderRouteComponent(this: RouteRender) {
  const { Component, props } = this;
  return <Component {...props} />;
}

export const Router: FunctionComponent<PublicProps> = ({ history }) => {
  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map(({ page: { Component, props }, ...route }: Routes) => (
            <Route
              key={route.path}
              {...route}
              render={renderRouteComponent.bind({ Component, props })}
            />
          ))}
          <Redirect to="/collections" />
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  );
};
