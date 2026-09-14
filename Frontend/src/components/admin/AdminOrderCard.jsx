import { UserRound } from "lucide-react";
import AdminOrderActions from "./AdminOrderActions";
import AdminOrderItem from "./AdminOrderItem";
import AdminOrderStatus from "./AdminOrderStatus";

export default function AdminOrderCard({
  order,
  onStatusChange,
  onDelete,
  updating,
  deleting,
}) {
  const user = order.user || {};

  const total = Number(
    order.totalPrice ??
      order.total ??
      (order.items || []).reduce(
        (sum, item) =>
          sum +
          Number(item.price || item.dish?.price || 0) *
            Number(item.quantity || 0),
        0,
      ),
  );

  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(73,43,24,.08)]">
      <div className="flex flex-col gap-4 border-b border-black/10 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#e55d38]">
            Order #
            {String(order._id || "")
              .slice(-8)
              .toUpperCase() || "—"}
          </p>

          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-black/65">
            <UserRound size={15} />
            {user.username || user.name || user.email || "Guest customer"}
          </p>
        </div>

        <AdminOrderStatus
          status={order.status}
          onChange={(status) => onStatusChange(order._id, status)}
          disabled={updating}
        />
      </div>

      <div className="px-5 py-3 sm:px-7">
        {(order.items || []).map((item, index) => (
          <AdminOrderItem
            key={item._id || item.id || `${order._id}-${index}`}
            item={item}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-black/10 bg-[#fffaf4] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">
            Order total
          </p>

          <p className="mt-1 font-serif text-2xl font-semibold">
            ${total.toFixed(2)}
          </p>
        </div>

        <AdminOrderActions
          onDelete={() => onDelete(order._id)}
          disabled={deleting}
        />
      </div>
    </article>
  );
}
