import { Box } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";

const Layout = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack direction="column" bgcolor={"#F3F6F5"} height="100vh">
      <Header open={open} setOpen={setOpen} />
      <Stack height="calc(100vh - 64px)" direction={"row"} sx={{ flexGrow: 1 }}>
        <SideBar open={open} setOpen={setOpen} />
        <Box
          component={"main"}
          width="100%"
          padding={2}
          sx={{ overflow: "hidden" }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
};
export default Layout;
