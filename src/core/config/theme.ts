/// <reference types="./theme" />

import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme";

export const drawerWidth = 279;

const zIndexScale = {
  zIndex0: 0,
  zIndex1: 100,
  zIndex2: 200,
  zIndex3: 300,
  zIndex4: 400,
  zIndex5: 500,
  zIndex6: 600,
  zIndex7: 700,
  zIndex8: 800,
  zIndex9: 900,
  zIndex10: 1000
};

export const zIndex = {
  collectionDetailsBackground: zIndexScale.zIndex4,
  collectionCountBackground: zIndexScale.zIndex4,
  collectionDetailsForeground: zIndexScale.zIndex5,
  collectionCountForeground: zIndexScale.zIndex5,
  cardPopover: zIndexScale.zIndex5,
  cardCount: zIndexScale.zIndex5
};

export const colors = {
  gideon: "#fafefd",
  ajani: "#eae8fd",
  karn: "#9d96af",
  mana: "#281a3a",
  rakdos: "#33214a",
  vraska: "#3a2655",
  swamp: "#452f63",
  ral: "#9170a2",
  liliana: "#bc73ff",
  chandra: "#ffa000",
  plains: "#e5a52f",
  mountain: "#f35c6f",
  nissa: "#01c7c8",
  forest: "#09b8b9",
  island: "#4a40e8"
};

const backgrounds = {
  darkest: colors.mana,
  dark: colors.rakdos,
  light: colors.vraska,
  lightest: colors.swamp
};

export const createTheme = ({ palette }: ThemeOptions = {}) => {
  return createMuiTheme({
    palette: {
      primary: {
        light: "#f1a4ff",
        main: colors.liliana,
        dark: "#8844cb",
        contrastText: colors.gideon
      },
      secondary: {
        light: "#876dff",
        main: colors.island,
        dark: "#0015b4",
        contrastText: colors.gideon
      },
      common: colors,
      background: {
        ...backgrounds
      },
      ...palette
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "Roboto",
        "Helvetica Neue",
        "Segoe UI",
        "-apple-system",
        "BlinkMacSystemFont",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ].join(",")
    },
    dimensions: {
      widths: {
        desktop: 1020,
        tablet: 720,
        mobile: 420
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: colors.swamp
        }
      },
      MuiTypography: {
        root: {
          letterSpacing: "0.024rem"
        }
      },
      MuiButton: {
        root: {
          minHeight: 33,
          textTransform: "initial"
        },
        label: {
          color: colors.ajani
        }
      },
      MuiInput: {
        root: {
          border: "2px solid transparent",
          transition: "border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: 4,
          color: colors.karn,
          backgroundColor: backgrounds.darkest,
          "&:before, &:after": {
            display: "none"
          },
          "&:hover": {
            borderColor: colors.ral,

            "& $input, & > svg": {
              color: colors.ajani
            }
          },
          "&:hover&:focus-within, &:focus-within": {
            borderColor: colors.liliana,

            "& $input, & > svg": {
              color: colors.gideon
            }
          }
        },
        input: {
          padding: "13px 18px",
          fontSize: "14px"
        }
      },
      MuiAppBar: {
        root: {
          boxShadow: "none",
          backgroundColor: backgrounds.dark
        }
      },
      MuiToolbar: {
        regular: {
          maxHeight: "50px !important",
          minHeight: "50px !important"
        }
      },
      MuiSnackbarContent: {
        root: {
          backgroundColor: colors.liliana
        },
        message: {
          color: colors.gideon
        }
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: colors.ral
        }
      }
    },
    spacing: 9
  });
};
