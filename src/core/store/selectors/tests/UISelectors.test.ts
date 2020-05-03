import {
  getDialogContext,
  getNavState
} from "core/store/selectors/UISelectors";

import { configureStore } from "core/store/configureStore";
import { createBrowserHistory } from "history";
import { mockStoreState } from "tests/utils";

const history = createBrowserHistory();
const { store } = configureStore({ history });
const state = store.getState();

describe("UISelectors", () => {
  test("getDialogContext should return the dialog property value from state", () => {
    const mockedState = mockStoreState(state, "ui", { dialog: "MOCK_STATE" });
    expect(getDialogContext(mockedState)).toEqual("MOCK_STATE");
  });

  test("getNavState should return the nav property value from state", () => {
    const mockedState = mockStoreState(state, "ui", { nav: true });
    expect(getNavState(mockedState)).toEqual(true);
  });
});
