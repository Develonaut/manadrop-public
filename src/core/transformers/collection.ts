import { CollectionId, CollectionItemsById } from "core/lib/Collection";
import { Card } from "core/types/Card";
import { getItemsStore, ItemsStore } from "core/utils/itemsStore";

export interface Counts {
  [key: string]: number;
  total: number;
  mythic: number;
  rare: number;
  uncommon: number;
  common: number;
}

export type TransformedItem = Card;

export const countsInitialValue = {
  total: 0,
  mythic: 0,
  rare: 0,
  uncommon: 0,
  common: 0
};

export async function transformItemsForDisplay(
  itemsById: CollectionItemsById
): Promise<Card[]> {
  const storedItems: ItemsStore = await getItemsStore();
  if (!storedItems || !Object.keys(storedItems).length) return [];
  return Object.keys(itemsById).reduce(
    (transformedItems: Card[], id: CollectionId) => {
      if (!storedItems[id]) return [...transformedItems];
      const card = storedItems[id];
      return [
        ...transformedItems,
        {
          ...card,
          ...itemsById[id]
        }
      ];
    },
    []
  );
}

export async function transformItemsForCounts(
  itemsById: CollectionItemsById
): Promise<Counts> {
  const storedItems: ItemsStore = await getItemsStore();
  if (!storedItems || !Object.keys(storedItems).length)
    return countsInitialValue;
  return Object.keys(itemsById).reduce((counts: Counts, id: CollectionId) => {
    if (!storedItems[id]) return counts;
    const { quantity } = itemsById[id];
    const { rarity } = storedItems[id];
    return {
      ...counts,
      [rarity]: counts[rarity] + quantity,
      total: counts.total + quantity
    };
  }, countsInitialValue);
}
