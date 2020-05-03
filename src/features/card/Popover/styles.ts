import { makeStyles, Theme } from "@material-ui/core/styles";
import { zIndex } from "core/config/theme";

export const styles = makeStyles((theme: Theme) => ({
  root: {
    pointerEvents: "none",
    width: "236px",
    height: "340px",
    overflow: "hidden",
    zIndex: zIndex.cardPopover,
    boxShadow: `0 2px 4px 0 ${theme.palette.common.mana}`,
    borderRadius: theme.spacing(1) + 2
  },
  image: {
    width: "100%",
    height: "100%"
  }
}));
