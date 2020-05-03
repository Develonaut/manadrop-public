import axios from "axios";
import { APIUrls, getUrl } from "core/config/urls";
import { FTUCollectionIds } from "core/data/FTUCollectionIds";
import { FTU } from "core/utils/cookies";
import { setItems } from "core/utils/itemsStore";
import moment from "moment";
import Cookies from "universal-cookie";

export function formatToItemsByIds() {
  return FTUCollectionIds.reduce((items: any, { id, quantity = 1 }: any) => {
    return {
      ...items,
      [id]: {
        quantity
      }
    };
  }, {});
}

export async function installItems() {
  const cookies = new Cookies();
  if (cookies.get(FTU)) return;
  try {
    const cardsPromise = FTUCollectionIds.map(({ id }) =>
      axios(getUrl({ url: APIUrls.SCRYFALL_CARD_LOOKUP, pathArgs: { id } }))
    );
    const res = await Promise.all(cardsPromise);
    const cards = res.map(({ data }) => data);
    await setItems(cards);
    cookies.set(FTU, moment().format(), {
      expires: moment()
        .add(1, "M")
        .toDate()
    });
  } catch (error) {
    throw new Error(error);
  }
}
