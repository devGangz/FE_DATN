import { Box, List, ListItem, Typography, styled } from "@mui/material";
import React from "react";
import { AppColor } from "../../../constants/color";

interface CustomerInfoProps {
  title: string;
  data: string[];
  listStyleType?: string;
  padding?: string | number;
  textColor?: string;
  margin?: string | number;
  marginItem?: string | number;
  hoverColor?: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  title,
  data,
  listStyleType,
  padding,
  textColor,
  margin,
  marginItem,
  hoverColor,
}) => {
  return (
    <Box sx={{ margin: `${margin}` }}>
      <Typography
        component={"h4"}
        variant="body1"
        sx={{
          padding: "5px 0",
          fontSize: "14px",
          fontWeight: 700,
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
        {data.map((info) => (
          <ListItem
            key={info}
            sx={{
              cursor: "pointer",
              display: "list-item",
              padding: "1px 0",
              margin: `${marginItem}`,
              color: `${textColor}`,
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
