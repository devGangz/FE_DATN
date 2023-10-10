import { LaptopChromebook, Newspaper, ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { AppColor } from "../../constants/color";

interface HeaderRightProps {}

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  cursor: "pointer",
  alignItems: "center",
}));

const TypographyStyle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  "&:hover": {
    color: AppColor.red,
  },
}));

const FabStyle = styled(Fab)(({ theme }) => ({
  borderRadius: "10px",
}));

const headerRightArr = [
  { key: `tintuc`, content: "Tin tức", icon: <Newspaper /> },
  { key: `xaydungpc`, content: "Xây dựng PC", icon: <LaptopChromebook /> },
  { key: `giohang`, content: "Giỏ hàng", icon: <ShoppingCart /> },
];

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  return (
    <Stack direction={"row"} justifyContent={"flex-end"} gap={3} flex={2}>
      {headerRightArr.map((header) => {
        return (
          <BoxStyle key={header.key}>
            <FabStyle size="small">{header.icon}</FabStyle>
            <TypographyStyle>{header.content}</TypographyStyle>
          </BoxStyle>
        );
      })}
    </Stack>
  );
};

export default HeaderRight;
