import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { Box, BoxProps } from "@mui/material";

type IconifyProps = BoxProps & {
  sx?: any;
  width?: number | string;
  icon: string;
};

const Iconify: React.FC<IconifyProps> = forwardRef(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

export default Iconify;
