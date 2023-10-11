import { Box } from "@mui/material";
import React from "react";
import { SwiperSlider } from "../../components/Swiper";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box height={"408px"}>
      <SwiperSlider />
    </Box>
  );
};

export default Home;
