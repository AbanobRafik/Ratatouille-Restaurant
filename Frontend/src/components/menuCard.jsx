import { Plus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAddCart } from "../hooks/useAddCart";
import CartLoginModal from "./CartLoginModal";

export default function MenuCard({ dish }) {
  const handleAddToCart = useAddCart();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleGuestInteraction = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return true;
    }

    return false;
  };

  const handleAddClick = (event) => {
    event.stopPropagation();

    if (handleGuestInteraction()) return;

    handleAddToCart({
      dishId: dish._id,
      quantity: 1,
    });
  };

  return (
    <>
      <article
        onClick={handleGuestInteraction}
        className="
    group
    flex h-full flex-col overflow-hidden rounded-2xl
    bg-white shadow-sm ring-1 ring-black/5
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl hover:shadow-black/10
  "
      >
        <div className="aspect-4/3 w-full overflow-hidden bg-[#eee8df]">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-serif text-xl font-semibold">{dish.name}</h2>

            <span className="shrink-0 font-semibold text-[#e55d38]">
              ${dish.price}
            </span>
          </div>

          <p className="mt-3 flex-1 text-sm leading-6 text-black/55">
            {dish.description}
          </p>

          <button
            type="button"
            className="mt-6 flex hover:bg-amber-400 duration-1000  h-11 w-full items-center justify-center gap-2 rounded-full bg-[#252525] text-sm font-medium text-white"
            onClick={handleAddClick}
          >
            <Plus size={17} />
            Add to cart
          </button>
        </div>
      </article>
      {isLoginModalOpen && (
        <CartLoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
}
