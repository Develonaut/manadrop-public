import { resetUI, setUI } from "core/store/actions/UIActions";

describe("UIActions", () => {
  test("setUI should update the 'UI' state", () => {
    expect(setUI({ nav: true })).toEqual({
      state: {
        nav: true
      },
      type: "UI_SET"
    });
  });

  test("resetUI should reset the 'UI' state to its initial state", () => {
    expect(resetUI()).toEqual({
      type: "UI_RESET"
    });
  });
});
