import { createBrowserHistory, LocationDescriptorObject } from "history";
import React from "react";
import { RouteComponentProps, Router } from "react-router";
import { withProvider } from "tests/utils";

/**
 *
 * * Wraps a component inside of a <Router> element to preserve routing
 * and other router based components like <Link>. This function calls
 * carbonite.wrap() on the element parameter to ensure it is also wrapped
 * by a <Provider> and has access to the CarboniteStore and its state.
 *
 * See: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
 * for router testing strategies.
 * @export
 * @param {JSX.Element} element
 * @returns
 */
export function withRouter(element: JSX.Element) {
  const history = createBrowserHistory();
  return <Router history={history}>{withProvider(element)}</Router>;
}

interface RoutePropsOverides {
  match?: object;
  location?: object;
  history?: object;
}

/**
 *
 * Mocks the History/Route props used commonly when wrapping components with "withRouter"
 * @export
 * @param {RoutePropsOverides} [{
 *   match = {},
 *   location = {},
 *   history = {}
 * }={}]
 * @returns {RouteComponentProps}
 */
export function mockRouteProps({
  match = {},
  location = {},
  history = {}
}: RoutePropsOverides = {}): RouteComponentProps {
  return {
    match: {
      params: {},
      isExact: true,
      path: "/",
      url: "/",
      ...match
    },
    location: {
      pathname: "",
      search: "",
      hash: "",
      state: {},
      key: "",
      ...location
    },
    history: {
      length: 50,
      action: "POP",
      location: {
        pathname: "",
        search: "",
        hash: "",
        state: {},
        key: ""
      },
      createHref: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      block: jest.fn(),
      listen: jest.fn(),
      ...history
    }
  };
}

/**
 *
 * Mocks route props using the specified location and match params.
 * @export
 * @template MatchParams
 * @param {LocationDescriptorObject} location
 * @param {MatchParams} [matchParams]
 * @returns {RouteComponentProps<MatchParams>}
 */
export function mockRoutePropsWithLocation<MatchParams = {}>(
  location: LocationDescriptorObject,
  matchParams?: MatchParams
): RouteComponentProps<MatchParams> {
  if (!matchParams) {
    matchParams = {} as MatchParams;
  }

  const mockLocation = {
    ...{
      pathname: "/",
      search: "",
      hash: "",
      state: {},
      key: "123456"
    },
    ...location
  };

  return {
    history: {
      action: "POP",
      block: jest.fn(),
      createHref: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      length: 50,
      listen: jest.fn(),
      location: mockLocation,
      push: jest.fn(),
      replace: jest.fn()
    },
    location: mockLocation,
    match: {
      isExact: true,
      params: matchParams,
      path: mockLocation.pathname,
      url: `${mockLocation.pathname}${mockLocation.search}${mockLocation.hash}`
    }
  };
}

/**
 *
 *  Mock the router context for a test. e.g:
 *  setupShallowTest(SettingsRootPresentation, defaultPropGenerator, {
 *   // Provider a router with an initial path:
 *   context: mockRouterContext('/settings/missing/page')
 *  });
 * @export
 * @param {string} [pathname]
 * @returns
 */
export function mockRouterContext(pathname?: string) {
  pathname = pathname || "/";
  return {
    router: {
      history: {},
      route: {
        location: { pathname }
      }
    }
  };
}
