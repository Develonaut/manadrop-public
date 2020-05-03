import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
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
    fontSize: theme.typography.pxToRem(38),
    fontWeight: 700,
    color: theme.palette.common.gideon,
    marginBottom: theme.spacing(1)
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 500,
    color: theme.palette.common.gideon,
    marginBottom: theme.spacing(3)
  },
  image: {
    marginTop: theme.spacing(3)
  },
  webUp: {
    position: "absolute",
    right: 0,
    top: 0
  },
  webDown: {
    position: "absolute",
    left: 0,
    bottom: 0
  }
}));
