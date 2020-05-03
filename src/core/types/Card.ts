export const defaultImageUris = {
  small: "",
  normal: "",
  large: "",
  png: "",
  art_crop: "",
  border_crop: ""
};

export interface Legalities {
  standard: string;
  future: string;
  frontier: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  duel: string;
  "1v1"?: string;
  brawl?: string;
}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface Prices {
  usd: string | null;
  usd_foil: string | null;
  eur: string | null;
  tix: string | null;
}

export interface PurchaseUris {
  amazon?: string;
  ebay?: string;
  tcgplayer?: string;
  magiccardmarket?: string;
  cardhoarder?: string;
  card_kingdom?: string;
  mtgo_traders?: string;
  coolstuffinc?: string;
  [key: string]: string | undefined;
}

export interface RelatedUris {
  gatherer?: string;
  tcgplayer_decks?: string;
  edhrec?: string;
  mtgtop8?: string;
  [key: string]: string | undefined;
}

export interface CardPart {
  id: string;
  name: string;
  uri: string;
}

export interface CardFace {
  object: string;
  artist?: string | null;
  color_indicator?: string[] | null;
  colors: string[];
  flavor_text?: string | null;
  illustration_id?: string | null;
  image_uris?: ImageUris | null;
  loyalty?: string | null;
  mana_cost: string;
  name: string;
  oracle_text?: string | null;
  power?: string | null;
  printed_name?: string | null;
  printed_text?: string | null;
  printed_type_line?: string | null;
  toughness?: string | null;
  type_line: string;
  watermark?: string | null;
}

export interface Card {
  object: string;

  // manadrop fields
  quantity?: number;

  // core fields
  arena_id?: number;
  id: string;
  lang: string;
  mtgo_id?: number | null;
  mtgo_foil_id?: number | null;
  multiverse_ids?: number[] | null;
  tcgplayer_id?: number | null;
  oracle_id: string;
  prints_search_uri: string;
  rulings_uri: string;
  scryfall_uri: string;
  uri: string;
  // gameplay fields
  all_parts?: CardPart[] | null;
  card_faces?: CardFace[] | null;
  cmc: number;
  colors: string[];
  color_identity: string[];
  color_indicator?: string[] | null;
  edhrec_rank?: number | null;
  foil: boolean;
  hand_modifier?: string | null;
  layout: string;
  legalities: Legalities | object;
  life_modifier?: string | null;
  loyalty?: string | null;
  mana_cost?: string;
  name: string;
  nonfoil: boolean;
  oracle_text?: string | null;
  oversized: boolean;
  power?: string | null;
  reserved: boolean;
  toughness?: string | null;
  type_line?: string | null;
  // print fields
  artist?: string | null;
  border_color: string;
  collector_number: string;
  digital: boolean;
  flavor_text?: string | null;
  frame_effect?: string | null;
  frame: number | string;
  full_art: boolean;
  games: string[];
  highres_image: boolean;
  illustration_id?: string | null;
  image_uris?: ImageUris | undefined;
  prices: Prices;
  printed_name?: string | null;
  printed_text?: string | null;
  printed_type_line?: string | null;
  promo: boolean;
  purchase_uris: PurchaseUris;
  rarity: string;
  related_uris: RelatedUris;
  released_at: string;
  reprint: boolean;
  scryfall_set_uri: string;
  set_name: string;
  set_search_uri: string;
  set_uri: string;
  set: string;
  story_spotlight: boolean;
  watermark?: string | null;
}
