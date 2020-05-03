import { compile } from "path-to-regexp";
import queryString from "query-string";
import urljoin from "url-join";

export const Urls = {
  COLLECTIONS: "/collections"
};

export const APIUrls = {
  SCRYFALL_CARD_SEARCH: "//api.scryfall.com/cards/search",
  SCRYFALL_CARD_LOOKUP: "//api.scryfall.com/cards/:id",
  SCRYFALL_CARD_NAME: "//api.scryfall.com/cards/named"
};

interface GetUrl {
  url: string;
  pathArgs?: object;
  queryParams?: object;
  encode?: boolean;
}

export function getUrl({
  url,
  pathArgs = {},
  queryParams = {},
  encode = false
}: GetUrl): string {
  const compiledUrl = compile(url)(pathArgs);
  const serializedParams = queryString.stringify(queryParams, { encode });
  const delimeter = url.includes("?") ? "&" : "?";
  return serializedParams
    ? urljoin(`${compiledUrl}${delimeter}${serializedParams}`)
    : urljoin(compiledUrl);
}
