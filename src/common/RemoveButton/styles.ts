import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    width: 130,
    display: "block",
    margin: "0 auto",
    backgroundColor: "#f35c6f",
    borderColor: "#f35c6f",
    "&:hover": {
      backgroundColor: "#ef4459",
      borderColor: "#ef4459"
    },
    "&:active": {
      backgroundColor: "#f76b7c",
      borderColor: "#f76b7c"
    }
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
