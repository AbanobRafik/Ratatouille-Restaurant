import { Trash2 } from "lucide-react";
import { useDeleteCart } from "../hooks/useDeleteCart";

export default function CartCard({ item }) {
  const { dish, quantity } = item;

  const itemTotal = dish.price * quantity;

  const handleRemoveFromCart = useDeleteCart();

  return (
    <article className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4">
      {/* Image */}
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#eee8df]">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl font-semibold">{dish.name}</h2>

            <p className="mt-1 text-sm text-black/50">${dish.price} each</p>
          </div>

          <span className="shrink-0 font-semibold text-[#e55d38]">
            ${itemTotal}
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between">
          {/* Quantity */}
          <span className="text-sm text-black/55">
            Quantity: <span className="font-medium text-black">{quantity}</span>
          </span>

          {/* Remove */}
          <button
            type="button"
            className="grid size-8 place-items-center rounded-full text-black/40 transition hover:bg-red-50 hover:text-red-500"
            aria-label={`Remove ${dish.name}`}
            onClick={() => handleRemoveFromCart(dish._id)}
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
