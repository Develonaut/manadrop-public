import { makeStyles, Theme } from "@material-ui/core/styles";

const skewDegree = 4;
export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "block",
    position: "relative",
    cursor: "pointer"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    borderRadius: theme.spacing(1)
  },
  cardActive: {
    "& $imageWrapper:before": {
      opacity: 0.8
    }
  },
  imageWrapper: {
    "&:before": {
      transition: theme.transitions.create("opacity", { duration: 150 }),
      borderRadius: theme.spacing(1),
      opacity: 0,
      content: "''",
      display: "block",
      position: "absolute",
      left: "0",
      right: "0",
      top: "0",
      bottom: "-2px",
      flexDirection: "column",
      backgroundColor: theme.palette.background.light
    }
  },
  image: {
    zIndex: 1,
    width: "100%",
    borderRadius: "4%",
    boxShadow: `0 2px 4px 0 ${theme.palette.common.mana}`
  },
  skewed: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1
  },
  skewLeft: {
    transform: `rotate(${skewDegree}deg)`
  },
  skewRight: {
    transform: `rotate(-${skewDegree}deg)`
  }
}));
