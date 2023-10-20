import { Box, Divider, Rating, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { AppColor } from "../../../constants/color";

interface HeaderProductDetailProps {}

const TypographyStyle = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
});

const HeaderProductDetail: React.FC<HeaderProductDetailProps> = ({}) => {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Typography
        component={"h2"}
        sx={{ fontSize: 24, fontWeight: 700, margin: "20px 0 10px" }}
      >
        MacBook Pro M2 2022 13.3 inch (MNEH3SA/A) (8 core CPU, 10 core GPU, Ram
        8GB, SSD 256G) màu xám, chính hãng
      </Typography>
      <Stack spacing={3} direction={"row"} mb={"20px"}>
        <Rating
          size="small"
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
        />
        <Typography
          sx={{
            color: AppColor.black,
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {" "}
          (0 lượt đánh giá)
        </Typography>
        <TypographyStyle
          sx={{
            color: AppColor.green1,
          }}
        >
          {" "}
          Tình Trạng: Còn Hàng
        </TypographyStyle>
        <TypographyStyle
          sx={{
            color: AppColor.orange1,
          }}
        >
          {" "}
          Bảo Hành: 12 Tháng
        </TypographyStyle>
      </Stack>
      <Divider />
    </Box>
  );
};

export default HeaderProductDetail;
