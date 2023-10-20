import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { AppColor } from "../constants/color";

// A custom theme for this app
let theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Public Sans, sans-serif",
  },
  transitions: {
    duration: {
      standard: 1000,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1650,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",

          "@media(min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthXl: {
          maxWidth: "750px", // Mặc định cho màn hình dưới 768px

          "@media (min-width: 768px) and (max-width: 992px)": {
            maxWidth: "750px", // Cho màn hình từ 768px đến 992px
          },
          "@media (min-width: 992px) and (max-width: 1200px)": {
            maxWidth: "970px", // Cho màn hình từ 992px đến 1200px
          },

          "@media (min-width: 1200px) and (max-width: 1650px)": {
            maxWidth: "1200px", // Cho màn hình từ 1200px đến 1650px
          },

          "@media (min-width: 1650px)": {
            maxWidth: "1650px", // Cho màn hình từ 1650px trở lên
          },
        },
        root: {
          padding: "0 15px !important",
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
        secondary: {
          color: "#333",
          fontWeight: "500",
          fontSize: "14px",
          "&:hover": {
            color: AppColor.sidebarTextColor,
          },
        },
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          lineHeight: "normal",
          minWidth: "50px",
          borderRadius: "4px",
          height: "22px",
          fontSize: "11px",
        },
      },
      variants: [
        {
          props: {
            color: "info",
          },
          style: {
            minWidth: "70px",
          },
        },
      ],
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          transition: "none",
          backgroundColor: AppColor.sidebarButtonColor,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
