import { mockRouteProps } from "tests/routing";
import { setupShallowTest } from "tests/utils";

import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import { routes } from "core/config/routes";
import { NavLink } from "react-router-dom";
import { NavItemPresentation, PublicProps } from "./component";

const getDefaultProps = (props?: PublicProps) => {
  return {
    ...routes[0],
    ...mockRouteProps({
      match: {
        params: {}
      }
    }),
    ...props
  };
};

const setupShallow = setupShallowTest(NavItemPresentation, getDefaultProps);

describe("NavItemPresentation", () => {
  test("should render a div that contains a NavLink along with an Icon, Typography, and a Nav Component", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(NavLink)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2);
    expect(wrapper.find(FontAwesomeIcon).getElements()[1].props.icon).toBe(
      faCaretRight
    );
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  test("should render the routes Nav component, and update the caret icon when the item's isActive() returns true", () => {
    const { wrapper } = setupShallow(
      mockRouteProps({
        match: {
          params: {}
        },
        location: {
          pathname: "/collections/12345"
        }
      })
    );
    expect(wrapper.find(FontAwesomeIcon).getElements()[1].props.icon).toBe(
      faCaretDown
    );
    expect(wrapper.find(routes[0].nav.Component)).toHaveLength(1);
  });
});
