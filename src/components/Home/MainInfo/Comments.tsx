import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  return (
    <Box>
      <Typography
        component={"h3"}
        variant="body1"
        sx={{ fontSize: 16, fontWeight: 700, margin: "16px 0" }}
      >
        Hỏi đáp về MacBook Pro M2 2022 13.3 inch (MNEH3SA/A) (8 core CPU, 10
        core GPU, Ram 8GB, SSD 256G) màu xám, chính hãng
      </Typography>
      <Box>
        <Box sx={{ padding: "10px 0" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flex={1}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              0 comments
            </Typography>
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Sort by
            </Typography>
          </Stack>
          <Box>Comment</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Comments;
