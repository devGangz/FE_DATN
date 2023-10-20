import { Box, Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/Home/ProductDetail";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  const param = useParams();
  console.log("param:", param);
  return (
    <Box>
      <Container>
        <Breadcrumb />
      </Container>
      <ProductDetail />
    </Box>
  );
};

export default ProductDetails;
