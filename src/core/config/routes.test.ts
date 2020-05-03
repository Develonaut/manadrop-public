import { routes } from "core/config/routes";

describe("routes", () => {
  test("should export an array of objects containg route props", () => {
    expect(routes).toMatchSnapshot();
  });
});
