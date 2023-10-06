import React from "react";

interface HeaderProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({}) => {
  return <div>Header</div>;
};

export default Header;
