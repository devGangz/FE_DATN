import {
  Box,
  Container,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import SideBar from "../SideBar";
import { AppColor } from "../../constants/color";

interface indexProps {
  drawerWidth: string;
}

const BoxStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

const TypographyStyled = styled(Typography)({
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "uppercase",
  color: AppColor.black,
  cursor: "pointer",
  "&:hover": {
    color: AppColor.sidebarTextColor,
  },
});

const MenuHeader: React.FC<indexProps> = ({ drawerWidth }) => {
  const [isHovered, setIsHovered] = useState<boolean>(true);

  return (
    <Container
      sx={{
        minHeight: "40px",
        display: "flex",
        alignItems: "center",
        padding: "0",
        bgcolor: AppColor.white,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={1}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            minWidth: drawerWidth,
            bgcolor: AppColor.sidebarButtonColor,
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            cursor: "pointer",
            pl: "16px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <MenuIcon sx={{ color: AppColor.white }} />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              color: AppColor.white,
            }}
          >
            Danh mục sản phẩm
          </Typography>
          {isHovered && <SideBar />}
        </Stack>

        <Stack
          direction={"row"}
          gap={3}
          width={"100%"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <BoxStyled>
            <img src="../images/hopqua.gif" alt="hopqua" loading="lazy" />
            <TypographyStyled>Sắm laptop tựu trường</TypographyStyled>
          </BoxStyled>
          <BoxStyled>
            <TypographyStyled>Màn hình samsung giá chất</TypographyStyled>
          </BoxStyled>
          <BoxStyled>
            <TypographyStyled>Build PC AMD nhận quà khủng</TypographyStyled>
          </BoxStyled>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MenuHeader;
