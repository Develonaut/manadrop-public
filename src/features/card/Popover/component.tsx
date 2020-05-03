import { Card, defaultImageUris } from "core/types/Card";
import React, { FunctionComponent } from "react";

import { Popper } from "@material-ui/core";
import { Image } from "common/Image";

import { styles } from "./styles";

export interface PublicProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  item: Card;
}

export const Popover: FunctionComponent<PublicProps> = ({
  item: { name, image_uris = defaultImageUris },
  open,
  anchorEl
}: PublicProps) => {
  const classes = styles();
  return (
    <Popper
      className={classes.root}
      open={open}
      anchorEl={anchorEl}
      placement="right"
      disablePortal={false}
      modifiers={{
        flip: {
          enabled: true
        },
        preventOverflow: {
          boundariesElement: "scrollParent"
        },
        offset: {
          enabled: true,
          offset: "0, 9"
        }
      }}
    >
      <Image
        className={classes.image}
        src={image_uris.normal}
        alt={name}
        lazyload={false}
      />
    </Popper>
  );
};
