import { makeStyles, Theme } from "@material-ui/core/styles";

export const appBarHeight = 50;

export const styles = makeStyles((theme: Theme) => {
  return {
    root: {
      height: appBarHeight
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between"
    },
    toggle: {
      fontSize: theme.typography.pxToRem(18),
      marginRight: theme.spacing(2)
    },
    left: {},
    right: {}
  };
});
