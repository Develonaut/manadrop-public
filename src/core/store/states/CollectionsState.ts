import { Collection, CollectionId } from "core/lib/Collection";
import { formatToItemsByIds } from "core/utils/FTUCollection";

export interface SetsById {
  [key: string]: Collection;
}

export interface CollectionsState {
  selectedId: CollectionId;
  setsById: SetsById;
}

const initCollection = new Collection({
  name: "My First Collection",
  itemsById: formatToItemsByIds()
});

export const initialState: CollectionsState = {
  selectedId: initCollection.id,
  setsById: {
    [initCollection.id]: initCollection
  }
};
