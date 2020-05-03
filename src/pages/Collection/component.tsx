import { useItemStore } from "core/hooks/collections";
import { transformItemsForDisplay } from "core/transformers/collection";
import { Card } from "core/types/Card";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ReduxMappedStateProps } from "./container";

import { useMediaQuery, useTheme } from "@material-ui/core";
import { AsyncRenameDialog, Header, SpeedDial } from "features/collection";
import { Item } from "features/collection/Item";
import { NoItems } from "features/collection/NoItems";
import { Grid } from "features/grid";
import { NoCollections } from "features/noCollections";
import { AsyncPortal } from "features/searchPortal";
import { DefaultPageContainer } from "../containers/DefaultPageContainer";

interface ItemSize {
  [key: string]: number;
  default: number;
  medium: number;
  small: number;
}

export const CollectionPresentation: FunctionComponent<
  ReduxMappedStateProps
> = ({ itemsById, setsById, selectedCollection }: ReduxMappedStateProps) => {
  const theme = useTheme();
  const isSmallHook = useMediaQuery(theme.breakpoints.down("xs"));
  const isMediumHook = useMediaQuery(theme.breakpoints.down("md"));
  const [itemSize, setSize] = useState("default");

  const itemWidths: ItemSize = {
    default: 168,
    medium: 195,
    small: 219
  };

  const itemHeights: ItemSize = {
    default: 232,
    medium: 272,
    small: 305
  };

  useEffect(() => {
    if (isSmallHook) return setSize("small");
    if (isMediumHook) return setSize("medium");
    setSize("default");
  }, [isSmallHook, isMediumHook]);

  // Use React Hooks to get decorated card data from the ids.
  const items: Card[] = useItemStore(itemsById, transformItemsForDisplay, []);
  return Object.keys(setsById).length === 0 ? (
    <NoCollections />
  ) : (
    <DefaultPageContainer
      seo={{
        title: selectedCollection.name,
        description:
          "Manage your card collection all in one place! with Manadrop you can add, remove and even share your cards on the go!"
      }}
    >
      <Header />
      {!!Object.keys(itemsById).length ? (
        <Grid
          itemWidth={itemWidths[itemSize]}
          itemHeight={itemHeights[itemSize]}
          itemSpacing={18}
          heightOffset={192}
          padding={[36, 27]}
          items={items}
          ItemComponent={Item}
        />
      ) : (
        <NoItems />
      )}
      <SpeedDial />
      <AsyncRenameDialog />
      <AsyncPortal />
    </DefaultPageContainer>
  );
};
