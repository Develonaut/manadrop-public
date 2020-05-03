import { I18n } from "@aws-amplify/core";
import axios from "axios";
import { APIUrls, getUrl } from "core/config/urls";
import { EVENTS } from "core/utils/trackingHelpers";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ReduxMappedDispatchProps, ReduxMappedStateProps } from "./container";

import {
  Dialog,
  Divider,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { SearchBar } from "common/SearchBar";
import { Grid } from "features/grid";
import { CloseButton } from "../CloseButton";
import { EmptyState } from "../EmptyState/component";
import { Item } from "../Item";
import { SearchingState } from "../SearchingState";

import { styles } from "./styles";

interface ItemSize {
  [key: string]: number;
  default: number;
  small: number;
}

type Props = ReduxMappedStateProps & ReduxMappedDispatchProps;

async function fetchCards(q: string) {
  try {
    const {
      data: { data }
    } = await axios(
      getUrl({
        url: APIUrls.SCRYFALL_CARD_SEARCH,
        queryParams: { q }
      })
    );
    return data.slice(0, 50);
  } catch (error) {
    return [];
  }
}

export const PortalPresentation: FunctionComponent<Props> = ({
  resetUI: dispatchResetUI,
  track: dispatchTrack,
  isOpen
}: Props) => {
  const classes = styles();
  const [query, setQuery] = useState("");
  const [isSearching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const handleChange = (value: string) => setQuery(value);
  const handleClose = () => {
    dispatchResetUI();
    setResults([]);
    setQuery("");
    dispatchTrack({
      eventName: EVENTS.SEARCH_PORTAL_CLOSE
    });
  };

  const emptyStateTitle = query
    ? `${I18n.get("No matches found")} :(`
    : I18n.get("Feels a bit empty in here...");

  const emptyStateSubTitle = query
    ? I18n.get("Try searching for something else?")
    : I18n.get("Try searching for a card!");

  const theme = useTheme();
  const isSmallHook = useMediaQuery(theme.breakpoints.down("xs"));
  const [itemSize, setSize] = useState("default");

  const itemWidths: ItemSize = {
    default: 195,
    small: 219
  };

  const itemHeights: ItemSize = {
    default: 272,
    small: 305
  };

  useEffect(() => {
    if (isSmallHook) return setSize("small");
    setSize("default");
  }, [isSmallHook]);

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) return;
      setSearching(true);
      const res = await fetchCards(query);
      dispatchTrack({
        eventName: EVENTS.SEARCH_PORTAL_SEARCH,
        eventProperties: {
          query,
          total: res.length
        }
      });
      setResults(res);
      setSearching(false);
    };
    fetchItems();
  }, [dispatchTrack, query]);

  return (
    <Dialog
      disablePortal={true}
      open={isOpen}
      onClose={handleClose}
      classes={{
        scrollPaper: classes.scrollPaper
      }}
      BackdropProps={{
        classes: {
          root: classes.backdropRoot
        }
      }}
      PaperProps={{
        classes: {
          root: classes.paperRoot
        },
        elevation: 0
      }}
    >
      <div className={classes.header}>
        <Typography className={classes.headerLabel}>
          {I18n.get("Search")}
        </Typography>
        <CloseButton onClick={handleClose} />
      </div>
      <SearchBar
        classes={{ root: classes.searchBar }}
        onSubmit={handleChange}
      />
      <Divider className={classes.divider} />
      {isSearching && <SearchingState />}
      {!results.length && !isSearching && (
        <EmptyState title={emptyStateTitle} subTitle={emptyStateSubTitle} />
      )}
      {!!results.length && !isSearching && (
        <Grid
          padding={[36, 27]}
          heightOffset={152}
          itemSpacing={18}
          itemWidth={itemWidths[itemSize]}
          itemHeight={itemHeights[itemSize]}
          items={results}
          ItemComponent={Item}
        />
      )}
    </Dialog>
  );
};
