import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomeRoute from "../components/HomeRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import OrdersPage from "../pages/OrdersPage";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRouter from "../components/ProtectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: "menu", element: <MenuPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <CartPage /> },
      { path: "orders", element: <OrdersPage /> },
      {
        element: <ProtectedRouter />,
        children: [
          {
            path: "admin",
            element: <AdminDashboard />,
          },
          {
            path: "admin/dashboard",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
]);
