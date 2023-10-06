import React from "react";

interface SideBarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  return <div>Sidebar</div>;
};
export default SideBar;
