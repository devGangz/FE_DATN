import { Button, ButtonProps } from "@mui/material";
import React from "react";

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
  variant = "contained",
  bgcolor,
  display,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      variant={variant}
      onClick={onClick}
      sx={{
        bgcolor: `${bgcolor}`,
        "&:hover": {
          bgcolor: `${bgcolor}`,
          boxShadow: "0 0 6px 0 #333",
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
