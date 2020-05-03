import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {},
  icon: {
    display: "none",
    color: theme.palette.common.karn,
    fontSize: theme.typography.pxToRem(14),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  inputRoot: {
    width: "100%",
    padding: `0 ${theme.spacing(3) - 2}px`
  },
  inputInput: {
    fontSize: theme.typography.pxToRem(16),
    padding: `${theme.spacing(2) - 2}px 0`,
    paddingLeft: theme.spacing(2) - 4,
    maxHeight: 53
  }
}));
