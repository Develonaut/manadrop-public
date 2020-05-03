import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  },
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
  arrowHelper: {
    position: "absolute",
    bottom: theme.spacing(9) + 6,
    right: theme.spacing(5),
    animation: "$float 6s ease-in-out infinite"
  },
  speedDial: {
    backgroundColor: theme.palette.common.liliana,
    "&:hover": {
      backgroundColor: theme.palette.common.liliana
    }
  },
  speedDialAction: {
    color: theme.palette.common.vraska
  },
  speedDialIcon: {
    width: theme.spacing(1.6),
    height: theme.spacing(1.6)
  }
}));
