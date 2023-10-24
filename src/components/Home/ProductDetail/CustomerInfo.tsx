import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { AppColor } from "../../../constants/color";

interface CustomerInfoProps {
  title: string;
  data: string[];
  listStyleType?: string;
  padding?: string | number;
  textColor?: string;
  color?: string;
  bgcolor?: string;
  margin?: string | number;
  paddingItem?: string | number;
  hoverColor?: string;
  fontWeightTitle?: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  title,
  data,
  listStyleType,
  padding,
  textColor,
  color,
  margin,
  paddingItem,
  hoverColor,
  bgcolor,
  fontWeightTitle,
}) => {
  return (
    <Box sx={{ margin: `${margin}` }}>
      <Typography
        component={"h4"}
        variant="body1"
        sx={{
          padding: "5px 0",
          fontSize: "16px",
          fontWeight: `${fontWeightTitle}`,
          color: `${textColor}`,
        }}
      >
        {title}
      </Typography>

      <List
        sx={{
          listStyleType: `${listStyleType}`,
          padding: `${padding}`,
        }}
      >
        {data.map((info, index) => (
          <ListItem
            key={info}
            sx={{
              cursor: "pointer",
              display: "list-item",
              padding: `${paddingItem ?? "none"}`,
              color: `${color}`,
              bgcolor: `${
                bgcolor ?? index % 2 === 0 ? AppColor.white : AppColor.grey1
              }`,
              "&:hover": {
                color: `${hoverColor}`,
              },
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>{info}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomerInfo;
