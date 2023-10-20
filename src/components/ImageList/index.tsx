import { Box, Typography } from "@mui/material";
import React from "react";
import { AppColor } from "../../constants/color";

interface ImageListProps {
  urlPreview: string;
}

const ImageList: React.FC<ImageListProps> = ({ urlPreview }) => {
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        width: "73px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        component={"a"}
        sx={{
          padding: "2px",
          margin: "2px",
          border: `1px solid ${AppColor.borderImage}`,
          width: "60px",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      >
        <img
          src={urlPreview}
          alt="Uploaded file"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "40px",
            cursor: "pointer",
          }}
        />
      </Typography>
    </Box>
  );
};

export default ImageList;
