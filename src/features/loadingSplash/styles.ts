import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)"
    },
    "50%": {
      transform: "translatey(-5px)"
    },
    "100%": {
      transform: "translatey(0px)"
    }
  },
  "@keyframes shrink": {
    "0%": {
      transform: "scale(1)",
      filter: "blur(0.5)"
    },
    "50%": {
      transform: "scale(.8)",
      filter: "blur(1px)"
    },
    "100%": {
      transform: "scale(1)",
      filter: "blur(0.5)"
    }
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  icon: {
    flex: "0 0 auto",
    width: 124,
    height: 142,
    marginBottom: theme.spacing(3),
    animation: "$float 6s ease-in-out infinite"
  },
  shadow: {
    borderRadius: "100%",
    width: 124,
    height: 10,
    backgroundColor: theme.palette.background.darkest,
    animation: "$shrink 6s ease-in-out infinite"
  },
  text: {
    marginTop: theme.spacing(3),
    width: "100%",
    padding: theme.spacing(0, 2),
    maxWidth: 502
  },
  label: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 700,
    fontStyle: "italic",
    color: theme.palette.common.gideon,
    marginBottom: theme.spacing(2)
  },
  header: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 700,
    color: theme.palette.common.karn,
    marginBottom: theme.spacing(2)
  }
}));
