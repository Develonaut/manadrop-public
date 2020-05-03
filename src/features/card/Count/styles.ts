import { makeStyles, Theme } from "@material-ui/core/styles";

import { zIndex } from "core/config/theme";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: zIndex.cardCount,
    marginBottom: theme.spacing(1)
  },
  count: {
    width: 58,
    padding: theme.spacing(1) + 1,
    backgroundColor: theme.palette.background.darkest,
    fontWeight: 500,
    color: theme.palette.common.ajani,
    textAlign: "center",
    borderRadius: theme.spacing(1)
  },
  countText: {
    fontSize: `${theme.typography.pxToRem(12)}`
  },
  button: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.darkest,
    borderColor: theme.palette.background.darkest
  },
  icon: {
    width: `${theme.typography.pxToRem(12)} !important`,
    height: `${theme.typography.pxToRem(12)} !important`,
    fontSize: theme.typography.pxToRem(18)
  }
}));
