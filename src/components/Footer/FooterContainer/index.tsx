import React from "react";
import { Box, Container, Stack } from "@mui/material";
import CustomListItem from "./CustomListItem";

const generalInfo = {
  title: "Thông tin chung",
  lists: [
    "Giới thiệu về Smart Tech Solutions",
    "Tin tuyển dụng",
    "Tin tức",
    "Tin khuyến mãi",
    "Liên hệ, góp ý",
    "Khách hàng doanh nghiệp",
  ],
};
const customerSupport = {
  title: "Hỗ trợ khách hàng",
  lists: [
    "Tìm hiểu về mua trả góp",
    "Chính sách vận chuyển, giao hàng",
    "Chính sách, quy định chung",
    "Chính sách bảo hành",
    "Chính sách đổi hàng",
    "Bảo mật thông tin khách hàng",
  ],
};
const smartTechSolutions = {
  title: "Smart Tech Solutions",
  lists: [
    "Thời gian làm việc: 07h30 - 20h30",
    "Showroom: 138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An",
    "Điện thoại: 02363 888 111 - 02363 816 111",
    "Email: nghean@smarttechsolutions.com.vn",
    "Fax: 02363 111 000",
  ],
};
const customersCare = {
  title: "Customer's Care",
  lists: [
    "Trung tâm Bảo Hành và Sửa chữa: 138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An (Giờ LV: 7:30 - 11:30 và 13:30 - 17:30 )",
    "Gọi sửa chữa: (0236)3 655 111 ( 7:30 - 11:30 và 13:30 - 17:30 )",
    "Hotline sửa chữa: 0911 299 111 ( 7:30 - 11:30 và 13:30 - 17:30 )",
    "Gọi kỹ thuật: (0236)3 872 111 ( 7:30 - 11:30 và 13:30 - 17:30 )",
    "Quản lý chất lượng dịch vụ: 1800 1111 ( 7:30 - 11:30 và 13:30 - 17:30 )",
    "Email: nghean@smarttechsolutions.com.vn",
  ],
};

const FooterContainer: React.FC = () => {
  return (
    <Box>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <CustomListItem listsData={generalInfo} />
          <CustomListItem listsData={customerSupport} />
          <CustomListItem listsData={smartTechSolutions} />
          <CustomListItem listsData={customersCare} />
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterContainer;
