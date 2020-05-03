import { ClickAwayListener, useMediaQuery, useTheme } from "@material-ui/core";
import classNames from "classnames";
import { Card as ICard, defaultImageUris } from "core/types/Card";
import React, {
  FunctionComponent,
  memo,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { isMobile as isMobileDevice } from "react-device-detect";

import { Image } from "common/Image";
import { Overlay } from "../Overlay";
import { Popover } from "../Popover";

import { styles } from "./styles";

export interface PublicProps {
  type?: string;
  item: ICard;
}

function areEqual(
  { item: prevItem }: PublicProps,
  { item: nextItem }: PublicProps
) {
  if (prevItem.quantity !== nextItem.quantity) return false;
  return true;
}

export const Card: FunctionComponent<PublicProps> = memo(
  ({ item, type = "collection" }: PublicProps) => {
    const classes = styles();
    const { name, quantity = 1, image_uris = defaultImageUris } = item;
    const skewed = quantity > 1;
    const [skewDirection] = useState(
      Math.floor(Math.random() * 2) === 1 ? "left" : "right"
    );

    const theme = useTheme();
    const isSmallHook = useMediaQuery(theme.breakpoints.down("xs"));
    const [isSmallViewport, setIsSmall] = useState(false);

    useEffect(() => {
      setIsSmall(isSmallHook);
    }, [isSmallHook]);

    // Hover (Desktop)/Click (Mobile) state.
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleClose = () => setAnchorEl(null);
    const eventListeners = !isMobileDevice
      ? {
          onMouseEnter: (event: MouseEvent<HTMLElement>) =>
            setAnchorEl(event.currentTarget),
          onMouseLeave: () => setAnchorEl(null)
        }
      : {
          onClick: (event: MouseEvent<HTMLElement>) =>
            setAnchorEl(Boolean(anchorEl) ? null : event.currentTarget)
        };

    const cardClass = classNames(classes.card, {
      [classes.cardActive]: Boolean(anchorEl)
    });

    const skewedClass = classNames({
      [classes.skewed]: skewed,
      [classes.skewRight]: skewed && skewDirection === "right",
      [classes.skewLeft]: skewed && skewDirection === "left"
    });

    return (
      <ClickAwayListener onClickAway={handleClose}>
        <div
          className={classes.root}
          {...eventListeners}
          data-test-selector="card"
        >
          <Overlay open={Boolean(anchorEl)} type={type} item={item} />
          <div className={cardClass}>
            <span className={classes.imageWrapper}>
              <Image
                lazyload={false}
                alt={name}
                className={classes.image}
                src={image_uris.normal}
              />
            </span>
            {quantity > 1 && (
              <span className={classNames(classes.imageWrapper, skewedClass)}>
                <Image
                  lazyload={false}
                  alt={name}
                  className={classes.image}
                  src={image_uris.normal}
                />
              </span>
            )}
          </div>
          {!isMobileDevice && !isSmallViewport && type === "collection" && (
            <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} item={item} />
          )}
        </div>
      </ClickAwayListener>
    );
  },
  areEqual
);
