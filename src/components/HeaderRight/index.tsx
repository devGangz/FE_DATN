import { LaptopChromebook, Newspaper, ShoppingCart } from "@mui/icons-material";
import { Box, Fab, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { AppColor } from "../../constants/color";
import { useNavigate } from "react-router-dom";

interface HeaderRightProps {}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  cursor: "pointer",
  alignItems: "center",

  "&:hover": {
    color: AppColor.sidebarTextColor,
  },
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
}));

const FabStyle = styled(Fab)(({ theme }) => ({
  borderRadius: "10px",
}));

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} justifyContent={"flex-end"} gap={3} flex={2}>
      <BoxStyle onClick={() => navigate("/news")}>
        <FabStyle size="small">
          <Newspaper />
        </FabStyle>
        <TypographyStyle>Tin tức</TypographyStyle>
      </BoxStyle>
      <BoxStyle onClick={() => navigate("/buildpc")}>
        <FabStyle size="small">
          <LaptopChromebook />
        </FabStyle>
        <TypographyStyle>Xây dựng PC</TypographyStyle>
      </BoxStyle>
      <BoxStyle onClick={() => navigate("/cart")}>
        <FabStyle size="small">
          <ShoppingCart />{" "}
        </FabStyle>
        <TypographyStyle>Giỏ hàng</TypographyStyle>
      </BoxStyle>
    </Stack>
  );
};

export default HeaderRight;
