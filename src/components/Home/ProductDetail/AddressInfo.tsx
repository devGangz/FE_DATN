import { Box } from "@mui/material";
import React from "react";
import Map from "../../Map";
import CustomerInfo from "./CustomerInfo";
import { AppColor } from "../../../constants/color";

interface AddressInfoProps {}

const helps = [
  "Hướng dẫn mua hàng nhanh chóng",
  "Chính sách bảo hành tại Smart Tech Solutions",
  "Chính sách đổi hàng",
];
const advises = [
  "Bùi Hoàng Ân - 0911 299 230",
  "Nguyễn Đình Hoàng - 0911 299 230",
  "Nguyễn Đình Thành - 0911 299 230",
];
const address = [
  "138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An ",
  "138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An ",
  "138 - Hà Huy Tập, Phường Hà Huy Tập, TP Vinh, Nghệ An ",
];

const AddressInfo: React.FC<AddressInfoProps> = ({}) => {
  return (
    <Box sx={{ width: "25%", paddingLeft: "15px" }}>
      <CustomerInfo
        margin={"0 0 20px 0"}
        padding={"0 0 0 24px"}
        listStyleType="disc"
        title={"Trợ giúp"}
        data={helps}
        hoverColor={AppColor.textColor}
      />
      <CustomerInfo
        margin={"0 0 20px 0"}
        listStyleType="disc"
        padding={"0 0 0 24px"}
        title={"Điện thoại tư vấn - đặt hàng:"}
        data={advises}
        hoverColor={AppColor.textColor}
      />
      <CustomerInfo
        margin={"0 0 20px 0"}
        padding={"0 0 0 24px"}
        listStyleType="disc"
        title={"Địa chỉ mua hàng:"}
        data={address}
        hoverColor={AppColor.textColor}
      />
      <Map
        height="200px"
        width="100%"
        urlMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.2041852612567!2d105.67784317317306!3d18.692866099256477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce0e472e306f%3A0x942966940e3f0b4e!2zMTM4IMSQxrDhu51uZyBIw6AgSHV5IFThuq1wLCBIw6AgSHV5IFThuq1wLCBUaMOgbmggcGjhu5EgVmluaCwgTmdo4buHIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697770747410!5m2!1svi!2s"
      />
    </Box>
  );
};

export default AddressInfo;
