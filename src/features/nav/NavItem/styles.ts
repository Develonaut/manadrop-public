import { makeStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: theme.spacing(5),
    color: theme.palette.common.karn,
    textDecoration: "none",
    borderLeft: "4px solid transparent",
    marginLeft: -theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  subRoot: {
    backgroundColor: theme.palette.background.light,
    margin: `${theme.spacing(1)}px -${theme.spacing(2)}px 0`,
    padding: `${theme.spacing(2)}px ${theme.spacing(2) + 2}px ${theme.spacing(
      2
    )}px ${theme.spacing(3) + 4}px`
  },
  active: {
    color: theme.palette.common.gideon,
    borderColor: theme.palette.common.liliana
  },
  label: {
    flex: "1 1 auto",
    display: "flex"
  },
  icon: {
    fontSize: theme.typography.pxToRem(24),
    marginRight: theme.spacing(2)
  },
  text: {
    fontSize: theme.typography.pxToRem(14)
  }
}));
