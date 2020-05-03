import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    margin: "0 auto",
    overflow: "auto",
    "& > div": {
      position: "relative",
      margin: "0 auto"
    }
  }
}));
