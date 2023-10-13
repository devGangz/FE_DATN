import React from "react";
import {
  Box,
  List,
  ListItem as ListItemMui,
  ListItemText,
  Typography,
} from "@mui/material";

interface CustomListItemProps {
  listsData: {
    title: string;
    lists: string[];
  };
}

const CustomListItem: React.FC<CustomListItemProps> = ({ listsData }) => {
  return (
    <Box flex={1}>
      <Typography
        component={"h3"}
        variant="body1"
        sx={{ fontSize: "18px", fontWeight: 600, mb: "15px", mt: "18px" }}
      >
        {listsData.title}
      </Typography>
      <List>
        {listsData.lists.map((item) => (
          <ListItemMui
            key={item}
            sx={{ p: "3px 0", minHeight: "26px", padding: "3px 0" }}
          >
            <ListItemText
              secondary={item}
              sx={{
                fontSize: "14px",
                "&.MuiListItemText-root": { fontWeight: 500 },
              }}
            />
          </ListItemMui>
        ))}
      </List>
    </Box>
  );
};

export default CustomListItem;
