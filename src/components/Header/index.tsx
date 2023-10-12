import { Avatar, Container, Toolbar } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook/useTypedSeletor";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { AppColor } from "../../constants/color";
import SearchHeader from "../Search";
import HeaderRight from "../HeaderRight";
import MenuHeader from "../MenuHeader";

interface NavigationProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const drawerWidth = "280px";

const Header: React.FC<NavigationProps> = ({ open, setOpen }) => {
  const user = useAppSelector((state) => state.user.currentUser);
  const navigator = useNavigate();

  // set Anchor
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        bgcolor={"white"}
        sx={{
          display: "flex",
          minHeight: "120px",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: `${AppColor.black}`,
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: AppColor.white,
            }}
          >
            <Box
              onClick={() => {
                navigator("/home");
              }}
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer", flex: 1, pr: "40px" }}
            >
              <Avatar
                sx={{ width: "100%", height: "auto" }}
                variant="square"
                src="../images/logoHeader.svg"
                alt="logo"
              />
            </Box>

            <Box flex={3}>
              <SearchHeader />
            </Box>

            <Box flex={2}>
              <HeaderRight />
            </Box>
          </Toolbar>
        </Container>
      </Box>
      <Box bgcolor={AppColor.white}>
        <MenuHeader drawerWidth={drawerWidth} />
      </Box>
    </>
  );
};

export default Header;
