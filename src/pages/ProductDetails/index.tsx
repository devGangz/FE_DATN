import React from "react";
import { useParams } from "react-router-dom";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  const param = useParams();
  console.log("param:", param);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
