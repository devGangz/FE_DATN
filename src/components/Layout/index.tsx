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
    <Stack direction="column" bgcolor={"red"} height="100vh">
      <Header open={open} setOpen={setOpen} />
      <Stack direction={"row"} sx={{ flexGrow: 1 }}>
        <Box
          component={"main"}
          width="100%"
          sx={{ bgcolor: AppColor.backgroundColor }}
        >
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};
export default Layout;
