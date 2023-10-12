import { Box } from "@mui/material";
import React from "react";
import { SwiperSlider } from "../../components/Swiper";
import FeaturedProduct from "../../components/FeaturedProduct/indext";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box>
      <SwiperSlider />
      <FeaturedProduct title="Sản phẩm khuyến mãi hot nhất" />
      <FeaturedProduct title="Máy tính xách tay" />
      <FeaturedProduct title="Màn hình amsy tính" />
    </Box>
  );
};

export default Home;
