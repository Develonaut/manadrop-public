import { makeStyles, Theme } from "@material-ui/core/styles";
import { drawerWidth } from "core/config/theme";
import { appBarHeight } from "features/appBar/Bar/styles";

const paperMargin = 30;

export const styles = makeStyles((theme: Theme) => ({
  center: {
    maxWidth: "875px",
    width: "100%",
    margin: "0 auto"
  },
  backdropRoot: {
    position: "absolute",
    backgroundColor: "transparent"
  },
  scrollPaper: {
    position: "relative",
    marginLeft: drawerWidth,
    marginTop: appBarHeight,
    backgroundColor: "rgba(69, 47, 99, 0.9)",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  paperRoot: {
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
    minWidth: "100%",
    margin: `${paperMargin}px auto`,
    marginBottom: 0,
    minHeight: `calc(100vh - ${paperMargin + appBarHeight}px)`,
    padding: `0 20px`,

    [theme.breakpoints.up("sm")]: {
      padding: `0 ${paperMargin}px`
    }
  },
  header: {
    extend: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.common.ajani,
    marginBottom: theme.spacing(2)
  },
  headerLabel: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: 700
  },
  divider: {
    backgroundColor: theme.palette.background.light
  },
  searchBar: {
    extend: "center"
  },
  grid: {
    extend: "center",
    maxWidth: "1015px"
  }
}));
