import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { getUrl, Urls } from "core/config/urls";
import { ComponentType } from "react";

import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { CollectionsNav } from "features/subNavs/collections/CollectionsNav";
import { Collection } from "pages/Collection";

export interface RouteComponentProps {
  className?: string;
}

export interface RouteComponent {
  Component: ComponentType<RouteComponentProps>;
  props: object;
}

export interface Nav extends RouteComponent {
  Icon: IconDefinition;
}

export interface Routes {
  key: string;
  name: string;
  path: string;
  to: string;
  page: RouteComponent;
  nav: Nav;
}

export const routes = [
  {
    key: "collections",
    name: "Collections",
    nav: {
      Component: CollectionsNav,
      Icon: faThLarge,
      props: {}
    },
    path: Urls.COLLECTIONS,
    to: getUrl({ url: Urls.COLLECTIONS }),
    page: {
      Component: Collection,
      props: {}
    }
  }
];
