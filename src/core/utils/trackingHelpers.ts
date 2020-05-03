import { Analytics } from "core/lib/Analytics";
import { getCollectionById } from "core/store/selectors/CollectionSelectors";

export const EVENTS = {
  PAGE_VIEW: "Page View",
  COLLECTION_CREATE: "Collection - Create",
  COLLECTION_DELETE: "Collection - Delete",
  COLLECTION_SELECT: "Collection - Select",
  COLLECTION_RENAME: "Collection - Rename",
  COLLECTION_ITEM_ADD: "Collection Item - Add",
  COLLECTION_ITEM_INCREASE: "Collection Item - Increase",
  COLLECTION_ITEM_DECREASE: "Collection Item - Decrease",
  COLLECTION_ITEM_REMOVE: "Collection Item - Remove",
  SPEED_DIAL_ADD: "Speed Dial - Add",
  SEARCH_PORTAL_SEARCH: "Search Portal - Search",
  SEARCH_PORTAL_CLOSE: "Search Portal - Close"
};

export function track({ action }: any) {
  const eventName = action.eventName;
  const eventProperties = action.eventProperties;
  switch (eventName) {
    default:
      break;
  }

  Analytics.track({
    eventName,
    eventProperties
  });
}

export function trackPageView({
  state: { router: { location: { pathname = "", search = "" } = {} } = {} }
}: any) {
  Analytics.track({
    eventName: EVENTS.PAGE_VIEW,
    eventProperties: {
      path: pathname,
      query: search
    }
  });
}

export function trackCollectionCreate({ action: { collection } }: any) {
  const { itemsById, ...restCollection } = collection;
  Analytics.track({
    eventName: EVENTS.COLLECTION_CREATE,
    eventProperties: {
      ...restCollection,
      totalItems: Object.keys(itemsById).length
    }
  });
}

export function trackCollectionDelete({ action: { id }, state }: any) {
  const { itemsById = {}, ...restCollection } =
    getCollectionById(state)(id) || {};
  Analytics.track({
    eventName: EVENTS.COLLECTION_DELETE,
    eventProperties: {
      ...restCollection,
      totalItems: Object.keys(itemsById).length
    }
  });
}

export function trackCollectionSelect({ action: { id }, state }: any) {
  const { itemsById, ...restCollection } = getCollectionById(state)(id);
  Analytics.track({
    eventName: EVENTS.COLLECTION_SELECT,
    eventProperties: {
      ...restCollection,
      totalItems: Object.keys(itemsById).length
    }
  });
}

export function trackCollectionItemAdd({ action: { item } }: any) {
  const { name, id } = item;
  Analytics.track({
    eventName: EVENTS.COLLECTION_ITEM_ADD,
    eventProperties: {
      name,
      id
    }
  });
}

export function trackCollectionItemRemove({ action: { item } }: any) {
  const { quantity, name, id } = item;
  Analytics.track({
    eventName: EVENTS.COLLECTION_ITEM_REMOVE,
    eventProperties: {
      quantity,
      name,
      id
    }
  });
}
