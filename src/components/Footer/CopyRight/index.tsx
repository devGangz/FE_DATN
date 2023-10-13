import React from "react";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { AppColor } from "../../../constants/color";

interface indexProps {}

const TypographyStyled = styled(Typography)({
  margin: "12px 0",
  fontSize: "14px",
  width: "100%",
  textAlign: "center",
});

const CopyRight: React.FC<indexProps> = ({}) => {
  return (
    <Box sx={{ bgcolor: AppColor.backgroundColor }}>
      <Container>
        <Stack direction={"column"} alignItems={"center"}>
          <TypographyStyled>
            {`© ${new Date().getFullYear()}. CÔNG TY TNHH Smart Tech Solutions. Giấy phép kinh
            doanh: 0202127202 - do sở KH & ĐT TP. Vinh cấp ngày: 00/00/0000.
            Địa chỉ: 138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An. Điện thoại: 02363 888 111 - 02363 816 111 - Fax: 02363 111
            000. Email: nghean@smarttechsolutions.com.vn. Chịu trách nhiệm nội dung: Bùi Hoàng Ân - Nguyễn Đình Hoàng.`}
          </TypographyStyled>
          <TypographyStyled>
            Laptop / Dell / Inspiron / Vostro / XPS / G-Series / HP / Pavilion /
            ENVY / EliteBook / Essential / ProBook / Spectre / ZBook / OMEN /
            ASUS / VivoBook / ZenBook / ASUSPRO / TUF Gaming / ROG / Acer /
            Aspire / Swift / Spin / Nitro / Predator / Lenovo / Ideapad /
            ThinkPad / Legion / Yoga / ThinkBook / Apple / MacBook Air / MacBook
            Pro / MSI / Content Creation / GF Gaming / GL Gaming / GP Gaming /
            GE Gaming / GS Gaming / GT Gaming / Xiaomi / LG / Linh kiện laptop /
            Sạc laptop / Bàn phím Laptop / Pin Laptop / Ổ cứng Laptop / HDD 2.5"
            / SSD M.2 SATA / SSD M.2 NVMe / SSD 2.5" / RAM Laptop / Laptop Đồ
            Họa / Laptop Mỏng Nhẹ / Laptop Mini / Avita / Phụ Kiện Laptop / Balô
            laptop / Đế tản nhiệt laptop / Túi đựng laptop / Bàn laptop đa năng
            / Miếng Dán / Laptop Sinh Viên - Văn Phòng / Laptop 2-Trong-1 /
            Laptop Workstation
          </TypographyStyled>
        </Stack>
      </Container>
    </Box>
  );
};

export default CopyRight;
