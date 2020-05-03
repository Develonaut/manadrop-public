import { Analytics } from "core/lib/Analytics";
import {
  track,
  trackCollectionCreate,
  trackCollectionDelete,
  trackCollectionItemAdd,
  trackCollectionItemRemove,
  trackCollectionSelect,
  trackPageView
} from "core/utils/trackingHelpers";
import { Dispatch } from "redux";
import {
  ANALYTICS_INIT,
  ANALYTICS_TRACK,
  AnalyticsActions
} from "../actions/AnalyticsActions";
import {
  COLLECTION_CREATE,
  COLLECTION_DELETE,
  COLLECTION_ITEM_ADD,
  COLLECTION_ITEM_REMOVE,
  COLLECTION_SELECT
} from "../actions/CollectionActions";
import { ROUTER_LOCATION_CHANGE } from "../actions/RouterActions";

export const eventsMap = {
  [ANALYTICS_INIT]: Analytics.init,
  [ANALYTICS_TRACK]: track,
  [ROUTER_LOCATION_CHANGE]: trackPageView,
  [COLLECTION_CREATE]: trackCollectionCreate,
  [COLLECTION_DELETE]: trackCollectionDelete,
  [COLLECTION_SELECT]: trackCollectionSelect,
  [COLLECTION_ITEM_ADD]: trackCollectionItemAdd,
  [COLLECTION_ITEM_REMOVE]: trackCollectionItemRemove
};

let getState: any = null;

export const AnalyticsMiddleware = ({ getState: storeGetState }: any) => {
  getState = storeGetState;
  return (next: Dispatch) => (action: AnalyticsActions) => {
    if (eventsMap[action.type])
      try {
        eventsMap[action.type]({
          action,
          state: getState()
        });
      } catch (error) {
        throw new Error(error);
      }
    return next(action);
  };
};
