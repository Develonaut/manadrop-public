import { makeStyles, Theme } from "@material-ui/core/styles";
import { drawerWidth } from "core/config/theme";

export const styles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      borderRight: 0,
      backgroundColor: theme.palette.background.darkest,
      padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
      width: drawerWidth
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: theme.spacing(3),
      color: theme.palette.common.liliana
    },
    label: {
      marginRight: theme.spacing(1),
      lineHeight: theme.typography.pxToRem(11)
    }
  };
});
