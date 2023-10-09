import { Avatar, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook/useTypedSeletor";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import DiaLogNavbar from "../Dialog";
import { deepOrange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

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
    <Box
      bgcolor={"white"}
      sx={{
        boxShadow: "0px 2px 20px rgba(1, 41, 112, 0.1)",
        display: "flex",
        height: "64px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Menu
          sx={{ pt: "45px", pr: "48px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Box
            onClick={handleCloseUserMenu}
            sx={{ backgroundColor: "#fff", padding: "0" }}
          >
            <DiaLogNavbar />
          </Box>
        </Menu>
        <Box
          onClick={() => {
            navigator("/app/home");
          }}
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
        >
          <IconButton
            size="medium"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={() => setOpen(!open)}
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            sx={{ width: 24, height: 24 }}
            variant="square"
            src="../images/logo.svg"
            alt="logo"
          />
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1,
              paddingLeft: 1,
              color: "green",
            }}
          >
            KIỂM ĐỊNH CHẤT LƯỢNG ĐÀO TẠO
          </Typography>
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="account"
          onClick={handleOpenUserMenu}
          sx={{ p: "1px" }}
        >
          {user?.avatar ? (
            <Avatar
              sx={{
                width: { xs: "30px", lg: "40px" },
                height: { xs: "30px", lg: "40px" },
              }}
              src={user.avatar}
              alt="avatar"
            />
          ) : (
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: { xs: "30px", lg: "40px" },
                height: { xs: "30px", lg: "40px" },
              }}
            >
              {user?.gmail.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default Header;
