import { createTheme } from "core/config/theme";

describe("theme", () => {
  test("should return a function that when called returns the Material UI theme", () => {
    expect(createTheme()).toMatchSnapshot();
  });
});
