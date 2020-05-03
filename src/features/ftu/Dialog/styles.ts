import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: theme.typography.pxToRem(18)
  },
  date: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.common.karn
  },
  closeButton: {
    width: 48,
    height: 48
  },
  hero: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      height: 300
    }
  },
  contentHeader: {
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    whiteSpace: "nowrap"
  },
  contentHeaderTitle: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.common.nissa
  },
  divider: {
    width: "100%",
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.common.nissa
  },
  list: {
    listStyle: "unset",
    paddingLeft: theme.spacing(2)
  },
  listItem: {
    color: theme.palette.common.ajani,
    margin: theme.spacing(1, 0),
    "& strong": {
      color: theme.palette.common.gideon,
      fontWeight: 700
    }
  }
}));
