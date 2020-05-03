import React, { FunctionComponent } from "react";
import { PublicProps as GridProps } from "../Grid";

import { styles } from "./styles";

type Data = GridProps & {
  itemsPerRow: number;
};

export interface PublicProps {
  data: Data;
  index: number;
  style: object;
}

export const GridRow: FunctionComponent<PublicProps> = ({
  index,
  style,
  data: {
    itemsPerRow,
    items,
    ItemComponent,
    itemHeight,
    itemWidth,
    itemSpacing
  }
}: PublicProps) => {
  const classes = styles();
  const rowItems = [];
  const fromIndex = index * itemsPerRow;
  const toIndex = Math.min(fromIndex + itemsPerRow, items.length);
  for (let i = fromIndex; i < toIndex; i++) {
    rowItems.push(<ItemComponent key={items[i].id} item={items[i]} />);
  }

  return (
    <div
      data-test-selector="grid-row"
      className={classes.root}
      style={{
        ...style,
        gridAutoRows: `${itemHeight}px`,
        gridTemplateColumns: `repeat(auto-fill, ${itemWidth}px)`,
        gridGap: `${itemSpacing}px`
      }}
    >
      {rowItems}
    </div>
  );
};
