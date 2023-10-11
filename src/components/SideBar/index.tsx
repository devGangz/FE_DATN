import { Home, PeopleAltOutlined, ReceiptLong } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppColor } from "../../constants/color";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const pages = [
    {
      title: "Tin Khuyến Mãi",
      link: "",
      url: "../images/sidebar/tintuc.png",
    },
    {
      title: "Máy Tính Xách Tay",
      link: "",
      url: "../images/sidebar/laptop.png",
    },

    {
      title: "Màn Hình Máy Tính",
      link: "",
      url: "../images/sidebar/manhinh.png",
    },
    {
      title: "PC Lắp Ráp, Đồng Bộ, AIO",
      link: "",
      url: "../images/sidebar/pc.png",
    },
    {
      title: "Apple Center",
      link: "",
      url: "../images/sidebar/apple.png",
    },
    {
      title: "Linh Kiện Máy Tính",
      link: "",
      url: "../images/sidebar/linhkien.png",
    },
    {
      title: "Phím chuột, gaming gear",
      link: "",
      url: "../images/sidebar/phimchuot.png",
    },
    {
      title: "Loa, Tai nghe, Webcam, Trợ giảng",
      link: "",
      url: "../images/sidebar/loatainghe.png",
    },
    {
      title: "Phụ Kiện Công Nghệ",
      link: "",
      url: "../images/sidebar/phukien.jpg",
    },
    {
      title: "Máy In, Scan, Vật Tư Máy In",
      link: "",
      url: "../images/sidebar/mayin.png",
    },
    {
      title: "Thiết Bị Mạng",
      link: "",
      url: "../images/sidebar/mang.png",
    },
    {
      title: "Máy Chiếu, Camera, TBVP",
      link: "",
      url: "../images/sidebar/maychieu.png",
    },
  ];
  return (
    <Stack
      direction={"column"}
      position={"absolute"}
      sx={{
        top: "40px",
        left: 0,
        width: "100%",
        marginLeft: "0 !important",
        bgcolor: AppColor.white,
        zIndex: 2,
      }}
    >
      <List sx={{ p: 0 }}>
        {pages.map((page) => (
          <ListItem
            key={page.link}
            disablePadding
            sx={{
              "&:hover": {
                bgcolor: AppColor.sidebarButtonColor,
              },
            }}
          >
            <NavLink to={page.link} className={"active-navlink"}>
              <ListItemButton
                sx={{
                  gap: "10px",
                  padding: "0 0 0 10px",
                  height: "34px",
                  color: "red",
                }}
              >
                <ListItemIcon
                  color="#899bbd"
                  sx={{ width: "20px", height: "20px", minWidth: "20px" }}
                >
                  <img src={`${page.url}`} alt="laptop" />
                </ListItemIcon>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Stack>
  );
};
export default SideBar;
