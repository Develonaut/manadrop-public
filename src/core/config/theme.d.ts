import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Palette } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/colors/common" {
  interface CommonColors {
    gideon: string;
    ajani: string;
    karn: string;
    mana: string;
    rakdos: string;
    vraska: string;
    swamp: string;
    ral: string;
    liliana: string;
    chandra: string;
    plains: string;
    mountain: string;
    forest: string;
    nissa: string;
    island: string;
  }
}
declare module "@material-ui/core/styles/createMuiTheme" {
  // Allow configuration using `createMuiTheme`
  interface ThemeOptions {
    dimensions?: object;
    zIndexScale?: any;
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface TypeBackground {
    darkest: string;
    dark: string;
    light: string;
    lightest: string;
  }
}
