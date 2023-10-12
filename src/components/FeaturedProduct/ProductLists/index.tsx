import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Navigation } from "swiper/modules";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { AppColor } from "../../../constants/color";

interface ProductListsProps {
  isHovered?: boolean;
}

const productLists = [
  {
    key: "",
    image: "../images/manhinh/u2422h.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/laptop-asus/asus1.jpg",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/laptop-dell/dell1.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/laptop-hp/hp1.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/laptop-lenovo/lenovo1.jpg",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/laptop-msi/msi1.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/manhinh/u2422h.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/manhinh/u2422h.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
  {
    key: "",
    image: "../images/manhinh/u2422h.png",
    logo: "../images/logo/dell.png",
    label: "Bán chạy",
    name: `PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD 500GB, RTX
      3050, PSU 650W) PC MSI GM3050 (i5 12400F, B760M-E, RAM 16GB, SSD
      500GB, RTX 3050, PSU 650W)`,
    unprice: "5.000.000",
    price: "15.000.000",
    promotion:
      " 4 Khuyến mãi: Balo đựng laptop chính hãng Asus trị giá 290.000đ",
  },
];

const ProductLists: React.FC<ProductListsProps> = ({ isHovered }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      loop={true}
      navigation={isHovered}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Keyboard, Autoplay, Navigation]}
      className="productSwiper"
    >
      {productLists.map((productList) => (
        <SwiperSlide key={productList.key}>
          <Box
            sx={{
              padding: "0 10px 10px",
              bgcolor: AppColor.white,
              width: "301px",
              cursor: "pointer",
            }}
          >
            <Stack direction={"column"} alignItems={"flex-start"}>
              <Typography
                component={"a"}
                sx={{
                  position: "relative",
                  paddingBottom: "80%",
                  width: "100%",
                  "&:hover": {
                    transition: ".3s ease-out",
                  },
                }}
              >
                <img
                  className="imageProduct"
                  src={`${productList.image}`}
                  alt="manhinh"
                />
              </Typography>
              <Typography sx={{ height: "40px" }}>
                <Avatar
                  sx={{ width: "auto", height: "unset", maxWidth: "80px" }}
                  variant="square"
                  alt="logo"
                  src={`${productList.logo}`}
                />
              </Typography>
              <Typography sx={{ marginTop: "25px" }}>
                <Chip
                  component={"span"}
                  label={`${productList.label}`}
                  sx={{
                    color: AppColor.white,
                    bgcolor: AppColor.orange,
                    border: "none",
                  }}
                />
              </Typography>
              <Typography
                component={"h4"}
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  m: "10px 0",
                  textAlign: "left",
                  height: "38px",
                  width: "100%",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                  display: "-webkit-box",
                }}
              >
                {productList.name}
              </Typography>
              <Typography
                component={"span"}
                variant="body1"
                sx={{ fontSize: "14px" }}
              >
                {`${productList.unprice} đ`}
              </Typography>
              <Typography
                component={"span"}
                variant="body1"
                sx={{
                  fontSize: "21px",
                  fontWeight: "600",
                  color: AppColor.sidebarButtonColor,
                }}
              >
                {`${productList.price} đ`}
              </Typography>
              <Typography
                component={"span"}
                variant="body1"
                sx={{
                  fontSize: "12px",
                  marginTop: "10px",
                  width: "100%",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {productList.promotion}
              </Typography>
            </Stack>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductLists;
