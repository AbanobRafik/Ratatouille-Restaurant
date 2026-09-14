export default function OrderItem({ item }) {
  const itemTotal = item.price * item.quantity;

  return (
    <article className="flex gap-4 rounded-2xl border border-black/10 bg-[#fffaf4] p-3 sm:p-4">
      <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-[#eee8df] sm:size-24">
        <img
          src={item.dish.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <h3 className="truncate font-serif text-lg font-semibold text-[#252525] sm:text-xl">
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-black/50">
            ${item.price.toFixed(2)} each
          </p>

          <p className="mt-2 text-sm font-medium text-black/65">
            Quantity: <span className="text-[#252525]">x {item.quantity}</span>
          </p>
        </div>

        <div className="shrink-0 text-left sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
            Item total
          </p>

          <p className="mt-1 font-serif text-xl font-semibold text-[#e55d38]">
            ${itemTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </article>
  );
}
