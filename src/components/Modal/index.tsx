import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { Stack } from "@mui/system";
import CustomButton from "../CustomButton.tsx";
import { AppColor } from "../../constants/color";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  description?: string;
  onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  handleClose,
  open,
  description,
  onClick,
}) => {
  return (
    <Dialog
      maxWidth={"xs"}
      fullWidth
      onClose={handleClose}
      open={open}
      sx={{ minHeight: "200px" }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <ErrorOutline
          sx={{ width: "90px", height: "90px", color: "#fdd835" }}
        />
        <DialogTitle sx={{ fontSize: "20px" }}>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ pb: "10px" }} id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton bgcolor={AppColor.red} onClick={handleClose}>
            Cancel
          </CustomButton>
          <CustomButton type="submit" onClick={onClick}>
            Confirm
          </CustomButton>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};

export default Modal;
