import { CollectionId } from "core/lib/Collection";
import { Card } from "core/types/Card";
import localforage from "localforage";

export interface ItemsStore {
  [id: string]: Card;
}

const STORE_KEY = "itemsStore";

export async function getItemsStore(): Promise<ItemsStore> {
  return await localforage.getItem(STORE_KEY);
}

export async function getItem(id: CollectionId): Promise<Card> {
  const items: ItemsStore = await getItemsStore();
  return items[id];
}

export async function setItems(items: Card[]): Promise<ItemsStore> {
  const storedItems = await getItemsStore();
  return await localforage.setItem(STORE_KEY, {
    ...storedItems,
    ...items.reduce((transformedItems: ItemsStore, item: Card) => {
      return {
        ...transformedItems,
        [item.id]: item
      };
    }, {})
  });
}

export async function setItem(item: Card): Promise<ItemsStore> {
  return await setItems([item]);
}
