import { Box, Container, Stack, styled } from "@mui/material";
import React from "react";
import { AppColor } from "../../../constants/color";
import EntrySummary from "./EntrySummary";
import AddressInfo from "./AddressInfo";
import ImageDetail from "./ImageDetail";
import HeaderProductDetail from "./HeaderProductDetail";
import ProductRelated from "../ProductRelated";
import MainInfo from "../MainInfo";

interface ProductDetailProps {}

const BoxContainer = styled(Box)({
  backgroundColor: AppColor.white,
  marginBottom: "20px",
});

const ProductDetail: React.FC<ProductDetailProps> = ({}) => {
  return (
    <Box>
      <Container>
        <BoxContainer padding={"10px 15px"}>
          <HeaderProductDetail />
          <Stack direction={"row"}>
            <ImageDetail />
            <EntrySummary />
            <AddressInfo />
          </Stack>
        </BoxContainer>
        <BoxContainer padding={"0 15px"}>
          <ProductRelated />
        </BoxContainer>
        <BoxContainer>
          <MainInfo />
        </BoxContainer>
      </Container>
    </Box>
  );
};

export default ProductDetail;
