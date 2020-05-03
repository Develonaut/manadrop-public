import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    width: 130,
    display: "block",
    margin: "0 auto",
    backgroundColor: theme.palette.common.nissa,
    borderColor: theme.palette.common.nissa,
    "&:hover": {
      backgroundColor: theme.palette.common.forest,
      borderColor: theme.palette.common.forest
    },
    "&:active": {
      backgroundColor: theme.palette.common.nissa,
      borderColor: theme.palette.common.nissa
    }
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
