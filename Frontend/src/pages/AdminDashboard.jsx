import { useGetAllOrders } from "../hooks/useGetAllOrders";
import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";
import { useDeleteOrder } from "../hooks/useDeleteOrder";
import { useLogout } from "../hooks/useLogout";

import AdminHeader from "../components/admin/AdminHeader";
import AdminOrderList from "../components/admin/AdminOrderList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../redux/order/orderSlice";
import socket from "../socket/socket";

export default function AdminDashboard() {
  const { orders, status, error } = useGetAllOrders();
  const dispatch = useDispatch();

  const { handleUpdateOrderStatus, status: updateStatus } =
    useUpdateOrderStatus();

  const { handleDeleteOrder, status: deleteStatus } = useDeleteOrder();
  const { handleLogout } = useLogout();

  useEffect(() => {
    const handleNewOrder = (data) => {
      console.log("🔥 NEW ORDER RECEIVED:", data);

      dispatch(getAllOrders());
    };

    socket.on("newOrder", handleNewOrder);

    return () => {
      socket.off("newOrder", handleNewOrder);
    };
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-[#fffaf4] px-5 pb-20 pt-28 text-[#252525] sm:px-8">
      <section className="mx-auto max-w-5xl">
        <AdminHeader orders={orders} onLogout={handleLogout} />

        {status === "loading" && (
          <div className="py-10 text-center">Loading orders...</div>
        )}

        {status === "error" && (
          <div className="py-10 text-center text-red-600">
            {error?.message || "Failed to load orders."}
          </div>
        )}

        {status === "success" && (
          <AdminOrderList
            orders={orders}
            onStatusChange={handleUpdateOrderStatus}
            onDelete={handleDeleteOrder}
            updatingId={updateStatus === "loading" ? "all" : null}
            deletingId={deleteStatus === "loading" ? "all" : null}
          />
        )}
      </section>
    </main>
  );
}
