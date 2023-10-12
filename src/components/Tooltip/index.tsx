import { Tooltip, Zoom } from "@mui/material";
import React from "react";

interface CustomTooltipProps {
  title: string;
  children: React.ReactElement;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  children,
  title,
  ...rest
}) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={title}
      enterDelay={700}
      enterNextDelay={700}
      leaveDelay={200}
      followCursor
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
