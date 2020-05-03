import React, { FunctionComponent, memo } from "react";

import { Card, PublicProps } from "features/card";

function areEqual(
  { item: prevItem }: PublicProps,
  { item: curItem }: PublicProps
) {
  if (prevItem.quantity !== curItem.quantity) return false;
  return true;
}

export const Item: FunctionComponent<PublicProps> = memo(
  ({ item }: PublicProps) => <Card type="search" item={item} />,
  areEqual
);
