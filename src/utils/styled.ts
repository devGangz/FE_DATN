import { Box, DialogContent, Tab, styled } from "@mui/material";
import { AppColor } from "../constants/color";
import { TabPanel } from "@mui/lab";

export const TabCustom = styled(Tab)({
  fontSize: 18,
  fontWeight: 700,
  color: AppColor.black,
  "&.MuiTab-root": {
    textTransform: "none",
  },
});

export const TabPanelCustom = styled(TabPanel)({
  "&.MuiTabPanel-root": {
    padding: "0 0 20px 0",
  },
});

export const BoxStyle = styled(Box)({
  overflowY: "auto",

  "&.MuiBox-root:hover": {
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bdbdbd",
      borderRadius: "50px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#9e9e9e",
    },
  },
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "50px",
  },
});
