import React from "react";
import {
  Dialog,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import CustomerInfo from "../ProductDetail/CustomerInfo";
import { AppColor } from "../../../constants/color";
import { BoxStyle } from "../../../utils/styled";
import { Close } from "@mui/icons-material";

interface ModalInfoProps {
  handleClose: () => void;
  open: boolean;
  description?: string;
  onClick?: () => void;
  data: string[];
}

const ModalInfo: React.FC<ModalInfoProps> = ({ handleClose, open, data }) => {
  return (
    <Dialog
      maxWidth={"md"}
      fullWidth
      onClose={handleClose}
      open={open}
      sx={{ minHeight: "200px" }}
    >
      <Stack
        sx={{
          flexDirection: "column",
          padding: "20px",
          height: "90vh",
          position: "relative",
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "16px !important",
            fontWeight: 700,
            padding: "0 0 10px 0",
          }}
        >
          Thông số kĩ thuật Macbook Pro M2 2022 13.3 inch (MNEJ3SA/A) (8 core
          CPU, 10 core GPU, Ram 8GB, SSD 512GB) màu xám, chính hãng
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{ position: "absolute", right: 4, top: 4 }}
        >
          <Close fontSize="small" />
        </IconButton>
        <Divider />
        <BoxStyle>
          <DialogContentText sx={{ padding: "0" }}>
            <CustomerInfo
              padding={"0"}
              listStyleType="none"
              title="Bộ xử lý"
              color={AppColor.black}
              textColor={AppColor.sidebarButtonColor}
              data={data}
              paddingItem={"14px 0 14px 10px"}
            />
          </DialogContentText>
          <DialogContentText sx={{ padding: "0" }}>
            <CustomerInfo
              padding={"0"}
              listStyleType="none"
              title="Bộ xử lý"
              color={AppColor.black}
              textColor={AppColor.sidebarButtonColor}
              data={data}
              paddingItem={"14px 0 14px 10px"}
            />
          </DialogContentText>
          <DialogContentText sx={{ padding: "0" }}>
            <CustomerInfo
              padding={"0"}
              listStyleType="none"
              title="Bộ xử lý"
              color={AppColor.black}
              textColor={AppColor.sidebarButtonColor}
              data={data}
              paddingItem={"14px 0 14px 10px"}
            />
          </DialogContentText>
        </BoxStyle>
      </Stack>
    </Dialog>
  );
};

export default ModalInfo;
