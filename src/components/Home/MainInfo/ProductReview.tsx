import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton.tsx";
import { AppColor } from "../../../constants/color";

interface ProductReviewProps {}

const ProductReview: React.FC<ProductReviewProps> = ({}) => {
  return (
    <Box sx={{ mt: "20px", pb: "15px" }}>
      <Typography
        component={"h3"}
        variant="body1"
        sx={{ fontSize: 16, fontWeight: 700, margin: "16px 0" }}
      >
        Đánh giá & Nhận xét về MacBook Pro M2 2022 13.3 inch (MNEH3SA/A) (8 core
        CPU, 10 core GPU, Ram 8GB, SSD 256G) màu xám, chính hãng
      </Typography>
      <Box>
        <Stack
          direction={"row"}
          sx={{ border: `1px solid ${AppColor.grey1}`, padding: "10px 0" }}
        >
          <Stack direction={"column"} alignItems={"center"} flex={1}>
            <Typography component={"p"} sx={{ fontSize: "18px" }}>
              0/5
            </Typography>
            <Rating
              size="small"
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              0 đánh giá & nhận xét
            </Typography>
          </Stack>
          <Box flex={1}>Star</Box>
          <Stack direction={"column"} gap={1} alignItems={"center"} flex={1}>
            <Typography component={"p"} sx={{ fontSize: 14 }}>
              Bạn đã dùng sản phẩm này?
            </Typography>
            <CustomButton
              sx={{
                bgcolor: AppColor.textColorButton,
                fontSize: "15px",
                textTransform: "none",
                padding: "4px 20px",
                "&:hover": {
                  bgcolor: AppColor.textColorButton,
                  color: AppColor.white,
                },
              }}
            >
              Gửi đánh giá của bạn
            </CustomButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductReview;
