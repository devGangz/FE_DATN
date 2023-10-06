import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      dark: "#333",
      main: "#2196f3",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#d32f2f",
    },
    text: {
      primary: "#333",
      secondary: "#566a7f",
    },
    info: {
      main: "#1976d2",
      dark: "#333",
    },
    success: {
      main: "#388e3c",
    },
  },
  typography: {
    fontFamily: "Heebo, sans-serif",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "#333",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
