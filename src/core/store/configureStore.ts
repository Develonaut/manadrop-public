import { routerMiddleware } from "connected-react-router";
import { reducers } from "core/store/reducers";
import { History } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { AnalyticsMiddleware } from "./middleware/AnalyticsMiddleware";

interface ConfigureStore {
  history: History;
}

export const configureStore = ({ history }: ConfigureStore) => {
  const middleware = applyMiddleware(
    thunk,
    routerMiddleware(history),
    AnalyticsMiddleware
  );

  const store = createStore(reducers(history), composeWithDevTools(middleware));
  const persistor = persistStore(store);
  return {
    persistor,
    store
  };
};
