import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: theme.spacing(30) + 4,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: theme.typography.pxToRem(28),
    fontWeight: 900,
    color: theme.palette.common.gideon,
    marginRight: theme.spacing(1)
  }
}));
