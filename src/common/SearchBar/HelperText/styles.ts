import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  label: {
    margin: theme.spacing(1),
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.common.karn
  },
  bold: {
    textTransform: "uppercase",
    fontWeight: "bold"
  }
}));
