import {
  Collection,
  CollectionId,
  CollectionItemsById,
  CollectionName
} from "core/lib/Collection";
import { Store } from "core/store/reducers";
import { SetsById } from "core/store/states/CollectionsState";
import memoize from "lodash.memoize";
import { Moment } from "moment";
import { createSelector } from "reselect";

export type CollectionIds = CollectionId[];

// Selected Id Selector
export const SelectedIdSelector = ({ collections }: Store) =>
  collections.selectedId;
// Selected Collection Selector
export const SelectedCollectionSelector = ({ collections }: Store) =>
  collections.setsById[collections.selectedId] || {};
// Collection SetsById Selector
export const SetsByIdSelector = ({ collections }: Store) =>
  collections.setsById;

export const getCollectionsSets = createSelector(
  [SetsByIdSelector],
  (setsById: SetsById): SetsById => setsById
);

export const getCollectionsSetsIds = createSelector(
  [SetsByIdSelector],
  (setsById: SetsById): CollectionId[] => Object.keys(setsById)
);

export const getSelectedCollection = createSelector(
  [SelectedCollectionSelector],
  (collection: Collection): Collection => collection
);

export const getSelectedCollectionCreatedTimestamp = createSelector(
  [SelectedCollectionSelector],
  ({ dateCreated }: Collection): Moment => dateCreated
);

export const getSelectedCollectionUpdatedTimestamp = createSelector(
  [SelectedCollectionSelector],
  ({ lastUpdated }: Collection): Moment => lastUpdated
);

export const getSelectedCollectionId = createSelector(
  [SelectedIdSelector],
  (selectedId: CollectionId): CollectionId => selectedId
);

export const getSelectedCollectionName = createSelector(
  [SelectedCollectionSelector],
  ({ name = "" }: Collection): CollectionName => name
);

export const getSelectedCollectionItemsById = createSelector(
  [SelectedCollectionSelector],
  ({ itemsById = {} }: Collection) => itemsById
);

export const getCollectionById = createSelector(
  [SetsByIdSelector, SelectedIdSelector],
  (setsById: SetsById, selectedId) =>
    memoize((id: CollectionId = selectedId): Collection => setsById[id])
);

export const getCollectionNameById = createSelector(
  [SetsByIdSelector, SelectedIdSelector],
  (setsById: SetsById, selectedId) =>
    memoize(
      (id: CollectionId = selectedId): CollectionName => setsById[id].name
    )
);

export const getCollectionItemsById = createSelector(
  [SetsByIdSelector, SelectedIdSelector],
  (setsById: SetsById, selectedId) =>
    memoize(
      (id: CollectionId = selectedId): CollectionItemsById =>
        setsById[id].itemsById
    )
);
