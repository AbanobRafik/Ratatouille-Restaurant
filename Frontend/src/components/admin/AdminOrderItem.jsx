export default function AdminOrderItem({ item }) {
  const dish = item.dish || {};
  const name = item.name || dish.name || "Unnamed dish";
  const price = Number(item.price ?? dish.price ?? 0);
  const quantity = Number(item.quantity || 0);
  return (
    <div className="flex items-center gap-3 border-b border-black/8 py-3 last:border-0">
      <div className="size-12 shrink-0 overflow-hidden rounded-xl bg-[#eee8df]">
        {dish.image ? (
          <img
            src={dish.image}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-[#ffdf4f]/40" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-serif text-base font-semibold">{name}</p>
        <p className="text-xs text-black/50">
          ${price.toFixed(2)} each · quantity {quantity}
        </p>
      </div>
      <p className="shrink-0 text-sm font-semibold text-[#e55d38]">
        ${(price * quantity).toFixed(2)}
      </p>
    </div>
  );
}
