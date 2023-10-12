import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { AppColor } from "../../constants/color";
import ProductLists from "./ProductLists";

interface FeaturedProductProps {
  title?: string;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ title }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Box sx={{ mt: "8px" }}>
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            height: "55px",
            borderBottom: `2px solid ${AppColor.sidebarButtonColor}`,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "20px",
              bgcolor: AppColor.sidebarButtonColor,
              color: AppColor.white,
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              padding: "10px 10px 5px 10px",
              margin: "10px 0 0 0",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"5px"}
            sx={{
              color: AppColor.productListTextColor,
              cursor: "pointer",
              "&:hover": { color: AppColor.sidebarTextColor },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Xem tất cả
            </Typography>
            <KeyboardDoubleArrowRight />
          </Stack>
        </Stack>
        <Box
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProductLists isHovered={isHovered} />
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProduct;
