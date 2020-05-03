import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(1)
  },
  text: {
    height: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.common.karn,
    lineHeight: theme.typography.pxToRem(16),
    fontSize: theme.typography.pxToRem(14)
  }
}));
