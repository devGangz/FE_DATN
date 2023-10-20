import React from "react";
import { Box, List, ListItem, Stack, Typography, styled } from "@mui/material";
import { AppColor } from "../../../constants/color";
import CustomButton from "../../CustomButton.tsx";

interface EntrySummaryProps {}

const TypographyStyle = styled(Typography)({
  cursor: "pointer",
  "&:hover": {
    color: AppColor.textColor,
  },
});

const EntrySummary: React.FC<EntrySummaryProps> = ({}) => {
  return (
    <Box flex={2.4}>
      <Box>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500 }}
          component={"span"}
          variant="body1"
        >
          {`Giá chính hãng: `}
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            color: AppColor.black1,
            textDecorationLine: "line-through",
          }}
          component={"span"}
          variant="body1"
        >
          34.490.000đ
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500 }}
          component={"span"}
          variant="body1"
        >
          {`Giá khuyến mãi: `}
        </Typography>
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: 700,
            color: AppColor.sidebarButtonColor,
          }}
          component={"span"}
          variant="body1"
        >
          {`30.290.000đ `}
        </Typography>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500 }}
          component={"span"}
          variant="body1"
        >
          (Giá đã bao gồm VAT)
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography
          component={"h4"}
          variant="body1"
          sx={{
            bgcolor: "rgb(52, 161, 5)",
            borderBottom: "1px dashed rgb(225, 225, 225)",
            padding: "12px 6px",
            fontSize: "14px",
            fontWeight: 700,
            color: AppColor.white,
          }}
        >
          Khuyến mãi - Quà tặng
        </Typography>

        <List
          sx={{
            listStyleType: "disc",
            paddingLeft: "24px",
            border: "1px dashed rgb(225, 225, 225)",
          }}
        >
          <ListItem
            sx={{
              display: "list-item",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Trả góp lãi suất 0% áp dụng cho thẻ tín dụng Sacombank, VPbank.
              Trả góp lãi suất ưu đãi áp dụng cho nhà tài chính HD Saison và
              ACS. Trả góp lãi suất uư đãi thông qua cổng MPOS áp dụng cho thẻ
              tín dụng: Citibank, Eximbank, HSBC, MSB, Techcombank, Nam Á,
              Shinhan bank, TP bank, Seabank, Kiên Long bank, OCB, VIB, ACB, MB,
              Vietcombank, SHB...
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ paddingTop: "20px", marginBottom: "15px" }}>
        <Stack direction={"row"} gap={1} mb={"10px"}>
          <Typography
            component={"span"}
            variant="body1"
            sx={{ fontSize: "16px" }}
          >
            Phiên bản:
          </Typography>
          <Box
            sx={{
              border: `1px solid ${AppColor.textColor}`,
              borderRadius: "10px",
              padding: "10px 7px",
              textAlign: "center",
            }}
          >
            <TypographyStyle>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                SSD 256GB
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                30.290.000đ
              </Typography>
            </TypographyStyle>
          </Box>
          <Box
            sx={{
              border: "1px solid rgb(225, 225, 225)",
              borderRadius: "10px",
              padding: "10px 7px",
              textAlign: "center",
            }}
          >
            <TypographyStyle>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                SSD 512GB
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                35.490.000đ
              </Typography>
            </TypographyStyle>
          </Box>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <Typography
            component={"div"}
            variant="body1"
            sx={{ fontSize: "16px", minWidth: "67px", display: "inline-block" }}
          >
            Màu sắc:
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
            <Box
              sx={{
                border: "1px solid rgb(238, 27, 37)",
                borderRadius: "10px",
                padding: "10px 7px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                style={{ height: "30px" }}
                src="../images/laptop-macbook/macbook-pro.jpg"
                alt="images"
              />
              <TypographyStyle sx={{ fontSize: "14px", fontWeight: 500 }}>
                30.290.000đ
              </TypographyStyle>
            </Box>
            <Box
              sx={{
                border: "1px solid rgb(238, 27, 37)",
                borderRadius: "10px",
                padding: "10px 7px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                style={{ height: "30px" }}
                src="../images/laptop-macbook/macbook-pro.jpg"
                alt="images"
              />
              <TypographyStyle sx={{ fontSize: "14px", fontWeight: 500 }}>
                30.290.000đ
              </TypographyStyle>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <CustomButton
        sx={{
          bgcolor: AppColor.sidebarButtonColor,
          height: "60px",
          fontSize: "18px",
          fontWeight: 700,
          color: AppColor.white,
          width: "100%",
          "&:hover": {
            bgcolor: AppColor.sidebarButtonColor,
            boxShadow: "0 0 6px 0 #333",
          },
        }}
      >
        Mua ngay
      </CustomButton>
      <Typography
        component={"p"}
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          margin: "18px 0",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Gọi ngay{" "}
        <Typography
          sx={{
            color: AppColor.sidebarButtonColor,
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
          }}
          component={"a"}
        >
          0983439381
        </Typography>{" "}
        để giữ hàng
      </Typography>
    </Box>
  );
};

export default EntrySummary;
