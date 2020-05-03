import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1 0 auto"
  },
  label: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: 700,
    color: theme.palette.common.gideon
  },
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)"
    },
    "50%": {
      transform: "translatey(-10px)"
    },
    "100%": {
      transform: "translatey(0px)"
    }
  },
  image: {
    padding: theme.spacing(0, 2),
    width: 279,
    transform: "translatey(0px)",
    animation: "$float 6s ease-in-out infinite"
  }
}));
