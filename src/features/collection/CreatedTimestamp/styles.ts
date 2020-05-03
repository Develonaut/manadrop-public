import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    lineHeight: theme.typography.pxToRem(11),
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.common.karn,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}));
