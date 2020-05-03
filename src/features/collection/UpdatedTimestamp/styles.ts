import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.karn,
    lineHeight: theme.typography.pxToRem(11),
    fontSize: theme.typography.pxToRem(11),
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}));
