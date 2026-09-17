import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthenticatedRouter = () => {
  const { user, status, initialized } = useSelector((state) => state.auth);

  if (!initialized || status === "loading") {
    return <div>loading</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthenticatedRouter;
