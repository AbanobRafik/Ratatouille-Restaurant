import OrderItem from "./OrderItem";
import OrderStatus from "./OrderStatus";

export default function OrderCard({ order }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(73,43,24,.10)]">
      <div className="border-b border-black/10 bg-white px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e55d38]">
              Order
            </p>

            <p className="mt-1 text-sm text-black/50">{order.date}</p>
          </div>

          <OrderStatus status={order.status} />
        </div>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-7">
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-black/10 bg-[#fffaf4] px-5 py-5 sm:px-7">
        <span className="text-sm font-medium text-black/55">Total</span>

        <span className="font-serif text-2xl font-semibold text-[#252525]">
          ${order.totalPrice.toFixed(2)}
        </span>
      </div>
    </article>
  );
}
