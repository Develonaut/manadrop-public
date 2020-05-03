import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1 0 auto"
  },
  header: {
    textAlign: "center"
  },
  title: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: 700,
    color: theme.palette.common.gideon,
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(38)
    }
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 500,
    color: theme.palette.common.gideon,

    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.pxToRem(18)
    }
  },
  image: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(3),
    minWidth: 279,
    width: "100%",
    maxWidth: 566
  }
}));
