import React, { FunctionComponent } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

import { Card } from "core/types/Card";
import { GridRow } from "../GridRow";
import { styles } from "./styles";

export interface ItemComponentProps {
  style?: object;
  item: Card;
}

export interface PublicProps {
  heightOffset?: number;
  padding?: number[];
  itemWidth: number;
  itemHeight: number;
  itemSpacing: number;
  items: Card[];
  ItemComponent: FunctionComponent<ItemComponentProps>;
}

export const Grid: FunctionComponent<PublicProps> = (props: PublicProps) => {
  const {
    heightOffset = 0,
    padding = [0, 0],
    itemWidth,
    itemHeight,
    itemSpacing,
    items
  } = props;
  const _classes = styles();
  if (!items.length) return null;
  return (
    <AutoSizer>
      {({ height, width }) => {
        const itemsPerRow =
          Math.floor((width - padding[1] * 2) / (itemWidth + itemSpacing)) || 1;
        const rowCount = Math.ceil(items.length / itemsPerRow);
        return (
          <List
            className={_classes.root}
            height={height - heightOffset}
            itemCount={rowCount}
            itemSize={itemHeight + itemSpacing}
            width={width}
            style={{
              padding: padding.map(p => `${p}px`).join(" ")
            }}
            itemData={{
              ...props,
              itemHeight,
              itemWidth,
              itemsPerRow
            }}
          >
            {GridRow}
          </List>
        );
      }}
    </AutoSizer>
  );
};
