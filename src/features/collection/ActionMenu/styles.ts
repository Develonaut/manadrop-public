import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    "&:hover $icon": {
      color: theme.palette.common.gideon
    }
  },
  icon: {
    color: theme.palette.common.karn,
    width: theme.spacing(2),
    height: theme.spacing(2),
    fontSize: theme.typography.pxToRem(18)
  }
}));
