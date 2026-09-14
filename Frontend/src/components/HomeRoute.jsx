import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import MainPage from "../pages/MainPage";

export default function HomeRoute() {
  const { user, initialized } = useSelector((state) => state.auth);

  if (!initialized) {
    return <div>loading</div>;
  }

  if (user?.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return <MainPage />;
}
