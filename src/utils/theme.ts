import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { AppColor } from "../constants/color";

// A custom theme for this app
let theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Public Sans, sans-serif",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",

          "@media(min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "1650px",

          "@media(min-width: 900px)": {
            maxWidth: "1650px",
          },
        },
        root: {
          padding: "0",
        },
      },
      variants: [],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "0 !important",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#333",
          opacity: 0.8,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#333",
          fontWeight: "600",
          fontSize: "14px",
          height: "34px",
          lineHeight: 2.5,
          "&:hover": {
            color: AppColor.white,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
