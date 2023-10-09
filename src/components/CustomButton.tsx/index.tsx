import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { AppColor } from "../../constants/color";

type ICustomButton = ButtonProps & {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
  variant?: "filled" | "outlined" | "contained";
  disabled?: boolean;
  bgcolor?: string;
  display?: "none" | "flex" | "block";
};

const CustomButton: React.FC<ICustomButton> = ({
  disabled,
  children,
  onClick,
  type = "button",
  variant = "filled",
  bgcolor = AppColor.blue,
  display,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      variant="contained"
      sx={{
        mt: 3,
        bgcolor: "white",
        border: `1px solid ${AppColor.grey}`,
        fontWeight: "700",
        color: `${AppColor.grey}`,

        "&:hover": {
          bgcolor: "white",
          border: "1px solid #2287E0",
          color: "#2287E0",
        },
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
