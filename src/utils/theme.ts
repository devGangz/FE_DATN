import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Public Sans, sans-serif",
  },
  components: {},
});

theme = responsiveFontSizes(theme);

export default theme;
