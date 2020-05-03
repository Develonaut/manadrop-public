import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: theme.spacing(1) + 1
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: "50px",
      background: theme.palette.background.darkest,
      border: "2px solid transparent",
      backgroundClip: "content-box"
    },
    "*::-webkit-scrollbar-track": {
      border: "none",
      borderRadius: "0px"
    },
    "*::-webkit-scrollbar-corner": {
      background: "transparent"
    }
  },
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "stretch",
    backgroundColor: theme.palette.common.vraska
  },
  content: {
    position: "relative",
    flex: "1 1 auto",
    alignSelf: "stretch",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "stretch",
    overflow: "hidden"
  }
}));
