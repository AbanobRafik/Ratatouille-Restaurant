import AdminEmptyOrders from "./AdminEmptyOrders";
import AdminOrderCard from "./AdminOrderCard";
export default function AdminOrderList({
  orders,
  onStatusChange,
  onDelete,
  updatingId,
  deletingId,
}) {
  if (!orders.length) return <AdminEmptyOrders />;
  return (
    <div className="space-y-5">
      {orders.map((order) => (
        <AdminOrderCard
          key={order._id}
          order={order}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          updating={updatingId === "all" || updatingId === order._id}
          deleting={deletingId === "all" || deletingId === order._id}
        />
      ))}
    </div>
  );
}
