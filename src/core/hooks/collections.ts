import { CollectionItemsById } from "core/lib/Collection";
import { Counts } from "core/transformers/collection";
import { Card } from "core/types/Card";
import { getItemsStore, ItemsStore } from "core/utils/itemsStore";
import { useEffect, useState } from "react";

type InitialValues = Counts | any;
export type TransformedValues = Counts | Card[] | ItemsStore;
type StateValues = TransformedValues | ItemsStore;

// Note there are know issues with async actions with the use of hooks and setting state.
// https://stackoverflow.com/questions/56442582/react-hooks-cant-perform-a-react-state-update-on-an-unmounted-component
// There are some common pattern to overcome this using a flag/ref to check before we call setState on a potential
// unmounted component.
// https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a
export function useItemStore(
  itemsById: CollectionItemsById,
  transformer?: (
    itemsById: CollectionItemsById
  ) => Promise<Counts> | Promise<Card[]>,
  initialValue: InitialValues = []
): TransformedValues | InitialValues {
  // Internal Hook State, that will be updated after we query from IDB with localforage.
  const [items, setItems] = useState<StateValues>(initialValue);
  // Out effect function to be called when either new items come in or the transformed changes.
  useEffect(() => {
    // Flag to ensure we don't call setState on an unmounted component.
    let mounted = true;
    // IIFE to fetch and transform the items from the IDB item store.
    (async () => {
      const transformedItems: TransformedValues =
        typeof transformer === "function"
          ? await transformer(itemsById)
          : await getItemsStore();
      // If mounted call setState in our hook.
      if (mounted) setItems(transformedItems);
    })();
    // Cleaup and set the flag to false.
    return () => {
      mounted = false;
    };
  }, [itemsById, transformer]);
  // Return the current value of items in out hook state.
  return items;
}
