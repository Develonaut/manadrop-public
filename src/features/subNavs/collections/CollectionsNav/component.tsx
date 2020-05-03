import { AddCollection, CollectionsList } from "features/subNavs/collections";
import React, { FunctionComponent } from "react";

export interface PublicProps {
  className?: string;
}

export const CollectionsNav: FunctionComponent<PublicProps> = ({
  className
}) => {
  return (
    <div className={className}>
      <CollectionsList />
      <AddCollection />
    </div>
  );
};
