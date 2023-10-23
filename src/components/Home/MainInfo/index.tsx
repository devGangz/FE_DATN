import { TabContext, TabList } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { TabCustom, TabPanelCustom } from "../../../utils/styled";
import CustomerInfo from "../ProductDetail/CustomerInfo";
import { AppColor } from "../../../constants/color";
import CustomButton from "../../CustomButton.tsx";
import Modal from "../../Modal";
import ModalInfo from "./ModalInfo";
import TabContent from "./TabContent";

interface MainInfoProps {}

const processors = [
  "Công nghệ CPU: Apple M2",
  "Số nhân: 8",
  "Số luồng: Hãng không công bố",
  "Tốc độ CPU: 2.40Ghz",
  "Tốc độ tối đa: Hãng không công bố",
  "Bộ nhớ đệm: Hãng không công bố",
];

const memoryHardDrive = [
  "RAM: 8 GB",
  "Loại RAM: LPDDR3",
  "Tốc độ Bus RAM: 3200Mhz",
  "Hỗ trợ RAM tối đa: Không hỗ trợ nâng cấp",
];

const MainInfo: React.FC<MainInfoProps> = ({}) => {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Stack direction={"row"}>
        <Box
          sx={{ width: "66.66666667%", typography: "body1", padding: "0 15px" }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "10px" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <TabCustom disableRipple label="Đặc điểm nổi bật" value="1" />
                <TabCustom
                  disableRipple
                  label="Đánh giá & Nhận xét"
                  value="2"
                />
                <TabCustom disableRipple label="Hỏi & Đáp" value="3" />
                <TabCustom disableRipple label="Hình ảnh" value="4" />
              </TabList>
            </Box>
            <TabPanelCustom value="1">
              <TabContent />
            </TabPanelCustom>
            <TabPanelCustom value="2"></TabPanelCustom>
          </TabContext>
        </Box>
        <Box sx={{ width: "33.33333333%", padding: "0 15px" }}>
          <Typography
            component={"h4"}
            variant="body1"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: AppColor.green1,
              margin: "18px 0",
            }}
          >
            Thông số kỹ thuật
          </Typography>
          <Box sx={{ maxHeight: "400px", overflow: "hidden" }}>
            <CustomerInfo
              padding={"0"}
              listStyleType="none"
              title="Bộ xử lý"
              textColor={AppColor.green1}
              data={processors}
              marginItem={"14px 0"}
            />
            <CustomerInfo
              padding={"0"}
              textColor={AppColor.green1}
              listStyleType="none"
              title="Bộ nhớ RAM, Ổ cứng"
              data={memoryHardDrive}
              marginItem={"14px 0"}
            />
          </Box>
          <CustomButton
            onClick={handleOpen}
            sx={{
              border: `1px solid ${AppColor.textColorButton}`,
              bgcolor: AppColor.white,
              color: AppColor.textColorButton,
              padding: "8px 0",
              lineHeight: "normal",
              width: "100%",
              "&:hover": {
                bgcolor: AppColor.textColorButton,
                color: AppColor.white,
              },
            }}
          >
            Xem thông số đầy đủ
          </CustomButton>
        </Box>
      </Stack>
      <ModalInfo data={processors} open={open} handleClose={handleClose} />
    </Box>
  );
};

export default MainInfo;
