import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Navigation } from "swiper/modules";
import { Avatar, Chip, Stack, Typography, styled } from "@mui/material";
import { AppColor } from "../../../constants/color";
import CustomTooltip from "../../Tooltip";
import { useNavigate } from "react-router-dom";

interface ProductListsProps {
  isHovered?: boolean;
}

const productLists = [
  {
    key: "1",
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
    key: "2",
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
    key: "3",
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
    key: "4",
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
    key: "5",
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
    key: "6",
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
    key: "7",
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
    key: "8",
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
    key: "9",
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

const TypographyStyle = styled(Typography)(({ theme }) => ({
  position: "relative",
  paddingBottom: "80%",
  width: "100%",
  transition: `${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })}`,
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const ProductLists: React.FC<ProductListsProps> = ({ isHovered }) => {
  const navigate = useNavigate();
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
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            sx={{
              padding: "0 10px 10px",
              bgcolor: AppColor.white,
              width: "301px",
            }}
          >
            <CustomTooltip title={`${productList.name}`}>
              <TypographyStyle
                onClick={() => navigate("/product-details/" + productList.name)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <img
                  className="imageProduct"
                  src={`${productList.image}`}
                  alt="manhinh"
                />
              </TypographyStyle>
            </CustomTooltip>
            <Typography component={"p"} sx={{ height: "40px" }}>
              <Avatar
                component={"a"}
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
            <CustomTooltip title={`${productList.name}`}>
              <Typography
                onClick={() => navigate("/product-details/" + productList.name)}
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
                  cursor: "pointer",
                }}
              >
                {productList.name}
              </Typography>
            </CustomTooltip>
            <Typography
              component={"span"}
              variant="body1"
              sx={{ fontSize: "14px", textDecorationLine: "line-through" }}
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductLists;
