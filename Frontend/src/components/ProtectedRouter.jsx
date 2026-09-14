import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRouter = () => {
  const { user, status, initialized } = useSelector((state) => state.auth);

  if (!initialized || status === "loading") {
    return <div>loading</div>;
  }

  if (!user) {
    return <Navigate to={"/login"} replace={true} />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRouter;
