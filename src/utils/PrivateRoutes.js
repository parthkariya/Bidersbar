import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoutes = () => {
  const { isLogin } = useUserContext();
  //   let auth = { isLogin: false };
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
