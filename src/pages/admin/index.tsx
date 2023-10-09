import React from "react";
import { useAppSelector } from "../../redux/hook/useTypedSeletor";

const Admin: React.FC = () => {
  const accessToken = useAppSelector((state) => state.user.accessToken);

  return <div>Admin page</div>;
};

export default Admin;
