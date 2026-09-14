import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import { useGetCart } from "../hooks/useGetCart";
import CartCard from "../components/CartCard";
import { useCreateOrder } from "../hooks/useCreateOrder";

export default function CartPage() {
  const { cart, error, status } = useGetCart();
  const handleCreateOrder = useCreateOrder();

  const total =
    cart?.items?.reduce(
      (sum, item) => sum + item.dish.price * item.quantity,
      0,
    ) || 0;

  return (
    <main className="min-h-screen bg-[#fffaf4] px-5 py-6 pt-28 text-[#252525] sm:px-8">
      <section className="mx-auto max-w-3xl">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-[#e55d38]"
        >
          <ArrowLeft size={17} />
          Continue browsing
        </Link>

        <div className="mt-8 rounded-4xl border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(73,43,24,.12)] sm:p-10">
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#ffdf4f]">
              <ShoppingBag size={21} />
            </span>

            <div>
              <h1 className="font-serif text-3xl font-semibold">Your cart</h1>

              <p className="mt-1 text-sm text-black/55">Ready when you are.</p>
            </div>
          </div>

          {/* Loading */}
          {status === "loading" ? (
            <p className="mt-8 text-sm text-black/55">Loading your cart...</p>
          ) : status === "error" ? (
            /* Error */
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-800">
                Something went wrong
              </p>

              <p className="mt-1 text-sm text-red-700">
                {error?.message || "Failed to load your cart."}
              </p>
            </div>
          ) : !cart || cart.items?.length === 0 ? (
            /* Empty cart */
            <div className="mt-10 rounded-2xl border border-black/10 bg-[#fffaf4] px-6 py-12 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#ffdf4f]">
                <ShoppingBag size={24} />
              </span>

              <p className="mt-5 font-serif text-2xl">Your cart is empty.</p>

              <p className="mt-2 text-sm text-black/55">
                Find something delicious to add.
              </p>

              <Link
                className="mt-6 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55d38]"
                to="/menu"
              >
                View the menu
              </Link>
            </div>
          ) : (
            /* Cart */
            <div className="mt-8">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartCard key={item._id} item={item} />
                ))}
              </div>

              {/* Total */}
              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/55">Total</span>

                  <span className="font-serif text-2xl font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Order */}
                <Link
                  onClick={handleCreateOrder}
                  className="mt-6 block text-center w-full rounded-full bg-[#252525] py-3.5 text-sm font-medium text-white transition hover:bg-[#e55d38]"
                >
                  Place Order
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
