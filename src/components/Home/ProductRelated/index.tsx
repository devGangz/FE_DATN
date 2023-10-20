import React from "react";
import ProductLists from "../../FeaturedProduct/ProductLists";
import { Box } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { TabCustom, TabPanelCustom } from "../../../utils/styled";

interface ProductRelatedProps {}

const ProductRelated: React.FC<ProductRelatedProps> = ({}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <TabCustom disableRipple label="Sản phẩm tương tự" value="1" />
              <TabCustom disableRipple label="Sản phẩm cùng hãng" value="2" />
            </TabList>
          </Box>
          <TabPanelCustom value="1">
            <ProductLists isProductRelated />
          </TabPanelCustom>
          <TabPanelCustom value="2">
            <ProductLists isProductRelated />
          </TabPanelCustom>
        </TabContext>
      </Box>
    </Box>
  );
};

export default ProductRelated;
