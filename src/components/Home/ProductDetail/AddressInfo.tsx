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
        paddingItem={"0"}
        listStyleType="disc"
        title={"Trợ giúp"}
        data={helps}
        fontWeightTitle="700"
        bgcolor={AppColor.white}
        hoverColor={AppColor.textColor}
      />
      <CustomerInfo
        margin={"0 0 20px 0"}
        listStyleType="disc"
        paddingItem={"0"}
        padding={"0 0 0 24px"}
        bgcolor={AppColor.white}
        fontWeightTitle="700"
        title={"Điện thoại tư vấn - đặt hàng:"}
        data={advises}
        hoverColor={AppColor.textColor}
      />
      <CustomerInfo
        margin={"0 0 20px 0"}
        padding={"0 0 0 24px"}
        paddingItem={"0"}
        listStyleType="disc"
        bgcolor={AppColor.white}
        fontWeightTitle="700"
        title={"Địa chỉ mua hàng:"}
        data={address}
        hoverColor={AppColor.textColor}
      />
      <Map
        height="200px"
        width="100%"
        urlMap={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      />
    </Box>
  );
};

export default AddressInfo;
