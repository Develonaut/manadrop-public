import { createBrowserHistory } from "history";
import React from "react";
import { setupShallowTest } from "tests/utils";

import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { routes } from "core/config/routes";
import { PublicProps, renderRouteComponent, Router } from "./component";

const getDefaultProps = (props?: PublicProps) => ({
    history: createBrowserHistory()
});

const setupShallow = setupShallowTest(Router, getDefaultProps);

describe("Router", () => {
  test("should render with ThemeProvider, BrowserRouter, ConnectedRouter, Switch, and Routes", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    expect(wrapper.find(ConnectedRouter)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(1);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

  test("renderRouteComponent() should return a React component", () => {
    routes.forEach(({ page: { Component, props } }) => {
      expect(renderRouteComponent.call({ Component, props })).toStrictEqual(
        React.createElement(Component, props)
      );
    });
  });
});
