import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: theme.spacing(4) - 2,
    padding: `${theme.spacing(1) - 5}px ${theme.spacing(1)}px`,
    color: theme.palette.common.ajani,
    backgroundColor: theme.palette.common.mana,
    borderRadius: theme.spacing(1) + 3
  },
  text: {
    fontWeight: 900,
    lineHeight: theme.typography.pxToRem(12),
    fontSize: theme.typography.pxToRem(12)
  },
  liliana: {
    backgroundColor: theme.palette.common.liliana
  },
  island: {
    backgroundColor: theme.palette.common.island
  }
}));
