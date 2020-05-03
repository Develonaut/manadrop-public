import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    maringTop: theme.spacing(1)
  },
  divider: {
    width: 1,
    height: theme.spacing(3)
  },
  iconButton: {
    margin: `0 ${theme.spacing(1) - 5}px`,
    color: theme.palette.common.ral,
    fontSize: theme.typography.pxToRem(14),
    "&:hover": {
      color: theme.palette.common.liliana
    }
  }
}));
