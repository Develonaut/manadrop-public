import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export interface PublicProps {
  lang?: string;
  meta?: [];
  title: string;
  description: string;
}

export const SEO: FunctionComponent<PublicProps> = ({
  description,
  lang = "en",
  meta = [],
  title
}: PublicProps) => {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={`${title} - Manadrop`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          name: "keywords",
          content:
            "mtg, magic, store, buy, buying, gathering, yugioh, world, warcraft, wow, mini, miniature, pokemon, naruto, star, wars, dungeon, card game, decklist, spoiler, dragon, d&d, dnd, trading, online, single, card, booster, box, pack, brick, game, TCG, CCG, CMG, deck, collectible, Magic The Gathering, magic cards, magic the gathering and purchase, magic singles, magic the gathering pricelist, magic the gathering card lists, magic the gathering deck ideas, magic the gathering cards, magic the gathering cards sell, magic the gathering card prices, wizard of the coast, , magic the gathering decks, magic the gathering cardlist."
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ].concat(meta)}
    />
  );
};
