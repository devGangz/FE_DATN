import { Outlet, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook/useTypedSeletor";
import { useEffect } from "react";
import { getUserId } from "../utils/storage";

const PrivateRoute: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken: string | null = useAppSelector(
    (state) => state.user.accessToken
  );
  console.log("🚀 ~ file: PrivateRoutes.tsx:11 ~ accessToken:", accessToken);

  useEffect(() => {
    const userId = getUserId();
    // if (userId) dispatch(getUser(userId));
  }, [dispatch]);

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
