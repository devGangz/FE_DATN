import { Box } from "@mui/material";
import React from "react";
import FooterContainer from "./FooterContainer";
import CopyRight from "./CopyRight";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box component={"footer"} sx={{ marginTop: "20px" }}>
      <FooterContainer />
      <CopyRight />
    </Box>
  );
};

export default Footer;
