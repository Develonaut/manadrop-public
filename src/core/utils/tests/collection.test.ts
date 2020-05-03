import { getCountPresentationString } from "../collections";

test("getCountPresentationString should return the passed in value as a two digit minimum", () => {
  expect(getCountPresentationString(3)).toBe("03");
  expect(getCountPresentationString(20)).toBe("20");
});
