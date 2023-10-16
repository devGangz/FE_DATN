import { Avatar, Container, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
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
  const navigator = useNavigate();

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 567) {
        // Show
        setShowSidebar(true);
      } else {
        // Hide
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                className="MagicZoom"
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
      <Box
        sx={{
          bgcolor: AppColor.white,
          width: "100%",
          position: showSidebar ? "fixed" : "",
          zIndex: showSidebar ? 111 : "",
        }}
      >
        <MenuHeader drawerWidth={drawerWidth} />
      </Box>
    </>
  );
};

export default Header;
