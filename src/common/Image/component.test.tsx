import { render } from "@testing-library/react";
import React from "react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { Image } from "./component";

const defaultProps = {
  src: "testsrc.test",
  alt: "test"
};

describe("Image", () => {
  test("should render with lazyloading enabled", () => {
    const { getAllByTestId, unmount } = render(<Image {...defaultProps} />);
    // This causes all (existing) IntersectionObservers to be set as intersecting
    mockAllIsIntersecting(true);
    expect(getAllByTestId("image")).toHaveLength(1);
    unmount();
  });

  test("should render without lazyloading enabled", () => {
    const { getAllByTestId, unmount } = render(
      <Image {...defaultProps} lazyload={false} />
    );
    expect(getAllByTestId("image")).toHaveLength(1);
    unmount();
  });
});
