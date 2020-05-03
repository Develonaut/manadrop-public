import { makeStyles } from "@material-ui/core/styles";
import { colors } from "core/config/theme";

// Do to where this stylesheet is created, the theme object
// passed along normally isn't fully established so we need to import
// directly from the theme config.

export const styles = makeStyles(() => {
  return {
    success: {
      backgroundColor: colors.forest
    },
    error: {
      backgroundColor: colors.mountain
    },
    warning: {
      backgroundColor: colors.chandra
    },
    info: {
      backgroundColor: colors.island
    }
  };
});
