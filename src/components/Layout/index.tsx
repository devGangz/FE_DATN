import { Box } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { AppColor } from "../../constants/color";
import Footer from "../Footer";

const Layout = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack direction="column" height="100vh">
      <Header open={open} setOpen={setOpen} />
      <Stack
        direction={"row"}
        component={"main"}
        sx={{
          flexGrow: 1,
          paddingBottom: "30px",
          bgcolor: AppColor.backgroundColor,
        }}
      >
        <Box component={"main"} width="100%">
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};
export default Layout;
