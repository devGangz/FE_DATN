import {
  Drafts,
  Home,
  Inbox,
  PeopleAltOutlined,
  ReceiptLong,
  SubjectOutlined,
} from "@mui/icons-material";
import {
  Box,
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
      icon: <Home />,
    },
    {
      title: "Máy Tính Xách Tay",
      link: "",
      icon: <SubjectOutlined />,
    },

    {
      title: "Màn Hình Máy Tính",
      link: "",
      icon: <PeopleAltOutlined />,
    },
    {
      title: "PC Lắp Ráp, Đồng Bộ, AIO",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Apple Center",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Linh Kiện Máy Tính",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Phím chuột, gaming gear",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Loa, Tai nghe, Webcam, Trợ giảng",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Phụ Kiện Công Nghệ",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Máy In, Scan, Vật Tư Máy In",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Thiết Bị Mạng",
      link: "",
      icon: <ReceiptLong />,
    },
    {
      title: "Máy Chiếu, Camera, TBVP",
      link: "",
      icon: <ReceiptLong />,
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
            sx={{ borderRadius: "4px", height: "34px" }}
          >
            <NavLink to={page.link} className={"active-navlink"}>
              <ListItemButton sx={{ gap: 1 }}>
                <ListItemIcon color="#899bbd" sx={{ minWidth: "24px" }}>
                  {page.icon}
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
