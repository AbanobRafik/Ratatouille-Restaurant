import { Outlet, useLocation } from "react-router";
import Navbar from "./landing/Navbar";

const authRoutes = ["/login", "/register"];
const adminRoutes = ["/admin", "/admin/dashboard"];

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      {!authRoutes.includes(pathname) && !adminRoutes.includes(pathname) && (
        <Navbar />
      )}
      <Outlet />
    </>
  );
}
