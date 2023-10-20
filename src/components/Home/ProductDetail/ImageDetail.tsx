import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { AppColor } from "../../../constants/color";
import ImageList from "../../ImageList";
import CustomButton from "../../CustomButton.tsx";
import ReactImageMagnify from "react-image-magnify";

interface ImageDetailProps {}

const listProps = [
  "CPU Apple M2 8 nhân, 2.4Ghz",
  "Ram 8GB LPDDR4/3200Mhz",
  "SSD 256GB M2 PCIe",
  "Màn hình 13.3 inch Retina (2560x1600)",
  "GPU 10 nhân",
  "Hệ điều hành: Mac OS 12",
  "Màu sắc: Bạc, xám",
];

const ImageDetail: React.FC<ImageDetailProps> = ({}) => {
  return (
    <Box sx={{ padding: "0 15px", flex: 3 }}>
      <Box
        sx={{
          height: "400px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ReactImageMagnify
          className="imageMagnify"
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: "../images/laptop-macbook/macbook-pro.jpg",
            },
            largeImage: {
              src: "../images/laptop-macbook/macbook-pro.jpg",
              width: 1800,
              height: 1200,
            },
            isHintEnabled: true,
            shouldUsePositiveSpaceLens: true,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "80%",
          margin: "15px auto",
        }}
      >
        <ImageList urlPreview="../images/laptop-macbook/macbook-pro.jpg" />
        <ImageList urlPreview="../images/laptop-macbook/macbook-pro.jpg" />
        <ImageList urlPreview="../images/laptop-macbook/macbook-pro.jpg" />
        <ImageList urlPreview="../images/laptop-macbook/macbook-pro.jpg" />
        <ImageList urlPreview="../images/laptop-macbook/macbook-pro.jpg" />
      </Box>
      <Box>
        <List
          sx={{
            listStyleType: "disc",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {listProps.map((prop) => (
            <ListItem
              key={prop}
              sx={{
                display: "list-item",
                padding: "0 5px 5px 0",
                width: "50%",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>{prop}</Typography>
            </ListItem>
          ))}
          <CustomButton
            sx={{
              border: "1px solid #4c4c4c ",
              bgcolor: AppColor.white,
              color: AppColor.black,
              padding: "4px 12px 3px 12px",
              borderRadius: "0",
              fontSize: "11px",
              marginTop: "5px",
              "&:hover": {
                bgcolor: AppColor.white,
              },
            }}
          >
            Đọc thêm
          </CustomButton>
        </List>
      </Box>
    </Box>
  );
};

export default ImageDetail;
