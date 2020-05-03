import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1) + 1,
    display: "none",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    flexDirection: "column",
    zIndex: 500,
    borderRadius: "4%",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none"
  },
  innerWrapper: {
    width: "100%",
    maxWidth: 148
  },
  open: {
    pointerEvents: "auto",
    display: "flex"
  }
}));
