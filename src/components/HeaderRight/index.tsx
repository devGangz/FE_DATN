import {
  LaptopChromebook,
  Newspaper,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, Fab, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { AppColor } from "../../constants/color";
import { useNavigate } from "react-router-dom";

interface HeaderRightProps {}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  cursor: "pointer",
  alignItems: "center",

  "&:hover": {
    color: AppColor.sidebarTextColor,
  },
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
}));

const FabStyle = styled(Fab)(({ theme }) => ({
  borderRadius: "10px",
  "&.MuiFab-root": {
    minHeight: "30px",
    width: "30px",
    height: "30px",
  },
}));

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} justifyContent={"flex-end"} gap={6} flex={2}>
      {/* <BoxStyle onClick={() => navigate("/news")}>
        <FabStyle size="small">
          <Newspaper />
        </FabStyle>
        <TypographyStyle>Tin tức</TypographyStyle>
      </BoxStyle> */}
      <BoxStyle onClick={() => navigate("/buildpc")}>
        <FabStyle size="small">
          <LaptopChromebook fontSize="small" />
        </FabStyle>
        <TypographyStyle>Xây dựng PC</TypographyStyle>
      </BoxStyle>
      <BoxStyle onClick={() => navigate("/cart")}>
        <FabStyle size="small">
          <ShoppingCart fontSize="small" />
        </FabStyle>
        <TypographyStyle>Giỏ hàng</TypographyStyle>
      </BoxStyle>
      <BoxStyle sx={{}} onClick={() => navigate("/cart")}>
        <FabStyle size="small">
          <Person fontSize="small" />
        </FabStyle>
        <TypographyStyle>Đăng nhập</TypographyStyle>
      </BoxStyle>
    </Stack>
  );
};

export default HeaderRight;
