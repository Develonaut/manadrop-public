import { makeStyles, Theme } from "@material-ui/core/styles";
import { zIndex } from "core/config/theme";

export const headerHeight = 156;
export const smOffset = 100;

export const styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: headerHeight,
    position: "relative",
    maxHeight: theme.spacing(17) + 4,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.lightest,

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.spacing(3)
    },

    "& section": {
      "&:first-of-type": {
        flex: "0 1 auto"
      },
      "&:last-of-type": {
        flex: "1 0 auto"
      },

      [theme.breakpoints.up("lg")]: {
        "&:first-of-type": {
          flex: "1 1 auto",
          marginRight: theme.spacing(2)
        },
        "&:last-of-type": {
          flex: "0 0 auto",
          marginLeft: theme.spacing(4)
        }
      }
    }
  },
  innerWrapper: {
    margin: "0 auto",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  countsWrapper: {},
  detailsWrapper: {
    height: 80,
    maxWidth: theme.breakpoints.values.sm - smOffset,
    width: "100%",

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      justifyContent: "center",
      maxWidth: 738
    },

    [theme.breakpoints.up("lg")]: {
      height: 94,
      justifyContent: "flex-start",
      margin: 0
    }
  },
  details: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    zIndex: zIndex.collectionDetailsForeground,
    padding: theme.spacing(1.3, 2.2),

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      flex: "0",
      marginBottom: -10,
      padding: 0
    },

    [theme.breakpoints.up("lg")]: {
      alignItems: "flex-start",
      paddingLeft: theme.spacing(2)
    }
  },
  detailsAdornment: {
    display: "none",
    zIndex: zIndex.collectionDetailsBackground,

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      transform: "scale(.75)",
      display: "inline-block",
      flex: "0 0 auto",
      width: 124,
      overflow: "visible"
    },

    [theme.breakpoints.up("lg")]: {
      transform: "scale(1)"
    }
  },
  divider: {
    width: 1,
    height: theme.spacing(2),
    margin: theme.spacing(0, 1)
  },
  name: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: theme.spacing(1) - 6,

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      justifyContent: "flex-start"
    }
  },
  timestamps: {
    width: "100%",
    maxWidth: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: theme.spacing(2),

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      justifyContent: "flex-start"
    },

    [theme.breakpoints.up("lg")]: {
      maxWidth: "100%"
    }
  }
}));
