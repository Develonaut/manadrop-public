import { configureStore } from "core/store/configureStore";
import { Store } from "core/store/reducers";
import {
  mount,
  MountRendererProps,
  ReactWrapper,
  shallow,
  ShallowRendererProps,
  ShallowWrapper
} from "enzyme";
import { createBrowserHistory } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import * as renderer from "react-test-renderer";
import { PersistGate } from "redux-persist/integration/react";
import { withRouter } from "tests/routing";

type TestableComponent<Props> = React.SFC<Props> | React.ComponentClass<Props>;

/**
 * An component property override generator function that allows
 * you to consume the default properties generated for a test case.
 * Useful for when you need to override a specific key on non-shallow object props.
 */
type PropOverrideFunc<Props> = (defaultProps: Props) => Partial<Props>;

/**
 * Specifies the various ways to override specific component
 * properties for a given test case.
 */
export type PropOverrides<Props> = Partial<Props> | PropOverrideFunc<Props>;

interface EnzymeShallowSetup<Props, State> {
  props: Props;
  wrapper: ShallowWrapper<Props, State>;
}

interface EnzymeMountSetup<Props, WrapperProps, WrapperState> {
  props: Props;
  wrapper: ReactWrapper<WrapperProps, WrapperState>;
}

interface RendererSetup<Props> {
  props: Props;
  tree: renderer.ReactTestRenderer;
}

export type EnzymeShallowGenerator<Props, State> = (
  propOverrides?: PropOverrides<Props>
) => EnzymeShallowSetup<Props, State>;

export type EnzymeMountGenerator<Props, WrapperProps, WrapperState> = (
  propOverrides?: PropOverrides<Props>
) => EnzymeMountSetup<Props, WrapperProps, WrapperState>;

type RendererGenerator<Props> = (
  propOverrides?: PropOverrides<Props>
) => RendererSetup<Props>;

interface MountTestOptions extends MountRendererProps {
  withStore?: boolean;
}

/**
 * Builds the full property set for a component given test suite defaults,
 * and overrides for a specific test case.
 */
function combineProps<Props>(
  defaultPropGenerator?: () => Props,
  overrides?: PropOverrides<Props>
): Props {
  // TODO: Determine if there is a better way to handle the typing this,
  // or if we have to make prop generator mandatory
  const defaultProps = defaultPropGenerator
    ? defaultPropGenerator()
    : ({} as Props);

  if (typeof overrides === "function") {
    return Object.assign<Props, Partial<Props>>(
      defaultProps,
      overrides(defaultProps)
    );
  } else if (typeof overrides === "object") {
    return Object.assign<Props, Partial<Props>>(defaultProps, overrides);
  }

  return defaultProps;
}

export function setupShallowTest<Props, State>(
  Component: TestableComponent<Props>,
  initialPropGenerator?: () => Props,
  options?: ShallowRendererProps
): EnzymeShallowGenerator<Props, State> {
  return (propOverrides?: PropOverrides<Props>) => {
    const combinedProps = combineProps(initialPropGenerator, propOverrides);

    /**
     * Note: "lifecycleExperimental" allows all lifecycle hooks in shallow
     * rendering to be exercised, will be on
     * by default in Enzyme 3.0: https://github.com/airbnb/enzyme/issues/678
     */
    const shallowRenderOptions: ShallowRendererProps = {
      lifecycleExperimental: true,
      ...options
    };
    return {
      props: combinedProps,
      wrapper: shallow<Props, State>(
        React.createElement(Component, combinedProps),
        shallowRenderOptions
      )
    };
  };
}

/**
 * Useful for integration testing the interaction between a presentational
 * component and the higher order components
 * that wrap it.
 */
export function setupMountTest<Props, State>(
  Component: TestableComponent<Props>,
  initialPropGenerator?: () => Props,
  options?: MountTestOptions
): EnzymeMountGenerator<Props, Props, State> {
  return (propOverrides?: PropOverrides<Props>) => {
    const combinedProps = combineProps(initialPropGenerator, propOverrides);

    let component = React.createElement(Component, combinedProps);
    if (options && options.withStore) {
      component = withProvider(component);
    }
    return {
      props: combinedProps,
      wrapper: mount<Props, State>(component, options)
    };
  };
}

/**
 * The wrapper returned is of type ReactWrapper<{}, {}> because the component
 * is wrapped inside of a <Router>, and thus your Props are for the
 * underlying component and not the top-level wrapper. You should not call
 * wrapper.setProps() or wrapper.setState() directly on this returned wrapper.
 */
export function setupMountTestWithRouter<Props, State>(
  Component: TestableComponent<Props>,
  initialPropGenerator?: () => Props,
  options?: MountTestOptions
): EnzymeMountGenerator<Props, {}, State> {
  return (propOverrides?: PropOverrides<Props>) => {
    const combinedProps = combineProps(initialPropGenerator, propOverrides);

    return {
      props: combinedProps,
      wrapper: mount<{}, State>(
        withRouter(<Component {...combinedProps} />),
        options
      )
    };
  };
}

/**
 * Used to setup a snapshot test using the same scaffolding pattern
 * as shallow or mount based tests.
 */
export function setupRenderTest<Props>(
  Component: TestableComponent<Props>,
  initialPropGenerator?: () => Props
): RendererGenerator<Props> {
  return (propOverrides?: PropOverrides<Props>) => {
    const combinedProps = combineProps(initialPropGenerator, propOverrides);

    return {
      props: combinedProps,
      tree: renderer.create(<Component {...combinedProps} />)
    };
  };
}

export function setupRenderTestWithRouter<Props>(
  Component: TestableComponent<Props>,
  initialPropGenerator?: () => Props
): RendererGenerator<Props> {
  return (propOverrides?: PropOverrides<Props>) => {
    const combinedProps = combineProps(initialPropGenerator, propOverrides);
    return {
      props: combinedProps,
      tree: renderer.create(withRouter(<Component {...combinedProps} />))
    };
  };
}

export function withProvider(element: JSX.Element) {
  const history = createBrowserHistory();
  const { persistor, store } = configureStore({ history });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{element}</PersistGate>
    </Provider>
  );
}

export function mockStoreState(
  store: Store,
  storeKey: string,
  propOverides: object
) {
  return {
    ...store,
    [storeKey]: {
      ...store[storeKey],
      ...propOverides
    }
  };
}
