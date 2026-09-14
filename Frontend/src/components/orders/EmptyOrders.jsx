import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export default function EmptyOrders() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white px-6 py-14 text-center shadow-[0_20px_60px_rgba(73,43,24,.10)]">
      <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#ffdf4f] text-[#252525]">
        <ShoppingBag size={24} strokeWidth={1.8} />
      </span>

      <h2 className="mt-6 font-serif text-3xl font-semibold text-[#252525]">
        You haven&apos;t placed any orders yet.
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/55">
        When something delicious is on its way, your orders will appear here.
      </p>

      <Link
        to="/menu"
        className="mt-7 inline-flex rounded-full bg-[#252525] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e55d38]"
      >
        Explore the menu
      </Link>
    </section>
  );
}
