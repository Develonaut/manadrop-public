import { makeStyles, Theme } from "@material-ui/core/styles";
import { zIndex } from "core/config/theme";
import { smOffset } from "../Header/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    position: "relative",
    zIndex: zIndex.collectionCountForeground,
    backgroundColor: theme.palette.background.darkest,
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "transparent"
    }
  },
  frame: {
    height: 76,
    maxWidth: 320,
    position: "relative",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      maxWidth: 448,
      backgroundColor: theme.palette.background.darkest
    },

    [theme.breakpoints.up("lg")]: {
      maxWidth: "auto",
      height: theme.spacing(10) + 4,
      padding: `${theme.spacing(3) - 4}px ${theme.spacing(5) + 5}px`
    }
  },
  rightAdornment: {
    display: "none",
    right: -17,
    bottom: -22,
    position: "absolute",

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      display: "inline-block",
      transform: "scale(1)",
      right: -14,
      bottom: -2
    },

    [theme.breakpoints.up("lg")]: {
      right: "-21px",
      bottom: "-6px"
    }
  },
  leftAdornment: {
    display: "none",
    left: -12,
    bottom: -21,
    position: "absolute",

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      display: "inline-block",
      transform: "scale(1)",
      left: -13,
      bottom: -1
    },

    [theme.breakpoints.up("lg")]: {
      left: "-21px",
      bottom: "-6px"
    }
  },
  background: {
    display: "none",
    position: "absolute",
    left: "-14px",
    bottom: "-13px",
    transform: "scale(1.1)",
    zIndex: zIndex.collectionCountBackground,

    [theme.breakpoints.up("lg")]: {
      display: "block"
    }
  }
}));
