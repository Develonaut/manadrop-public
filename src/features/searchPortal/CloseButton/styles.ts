import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  button: {
    padding: theme.spacing(1, 2),
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.common.karn,
    "&:hover": {
      color: theme.palette.common.gideon
    }
  },
  buttonIcon: {
    fontSize: theme.typography.pxToRem(18),
    marginLeft: theme.spacing(2)
  }
}));
