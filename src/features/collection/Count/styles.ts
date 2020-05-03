import { makeStyles, Theme } from "@material-ui/core/styles";
import { smOffset } from "../Header/styles";

export const styles = makeStyles((theme: Theme) => ({
  count: {
    marginRight: theme.spacing(2),
    "&:last-of-type": {
      marginRight: 0
    },

    [theme.breakpoints.up(theme.breakpoints.values.sm - smOffset)]: {
      marginRight: theme.spacing(3)
    }
  },
  countText: {
    minWidth: 48,
    lineHeight: theme.typography.pxToRem(32),
    fontSize: theme.typography.pxToRem(32),
    marginBottom: theme.spacing(1) - 3,
    fontWeight: 900,
    "&.mythic": {
      color: theme.palette.common.chandra
    },
    "&.rare": {
      color: theme.palette.common.plains
    },
    "&.uncommon": {
      color: theme.palette.common.karn
    },
    "&.common": {
      color: theme.palette.common.ral
    }
  },
  countRarity: {
    color: theme.palette.common.karn,
    lineHeight: theme.typography.pxToRem(11),
    fontSize: theme.typography.pxToRem(11)
  }
}));
