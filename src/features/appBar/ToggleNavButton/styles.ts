import { makeStyles, Theme } from "@material-ui/core/styles";
import { appBarHeight } from "../Bar/styles";

export const styles = makeStyles((theme: Theme) => {
  return {
    root: {
      height: appBarHeight,
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toggle: {
      fontSize: theme.typography.pxToRem(18),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    }
  };
});
