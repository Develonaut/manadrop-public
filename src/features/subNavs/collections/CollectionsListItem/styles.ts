import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    height: 42,
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: "none",
    opacity: 0.6,
    "&:hover $text": {
      color: theme.palette.common.ajani
    }
  },
  rootActive: {
    opacity: 1,
    "&:hover $text, & $text": {
      color: theme.palette.common.gideon
    }
  },
  text: {
    flex: "1 1 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.common.karn,
    maxWidth: theme.spacing(15) + 1,
    marginLeft: theme.spacing(1),
    lineHeight: theme.typography.pxToRem(16),
    fontSize: theme.typography.pxToRem(14)
  }
}));
