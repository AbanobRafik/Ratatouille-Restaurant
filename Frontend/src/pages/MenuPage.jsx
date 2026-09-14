import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../redux/dish/dishSlice";
import MenuCard from "../components/menuCard";

function MenuCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="aspect-[4/3] bg-[#eee8df]" />

      <div className="p-5">
        <div className="flex justify-between gap-4">
          <div className="h-6 w-32 rounded bg-[#eee8df]" />
          <div className="h-5 w-12 rounded bg-[#eee8df]" />
        </div>

        <div className="mt-4 h-4 w-full rounded bg-[#eee8df]" />
        <div className="mt-2 h-4 w-3/4 rounded bg-[#eee8df]" />

        <div className="mt-6 h-11 w-full rounded-full bg-[#eee8df]" />
      </div>
    </article>
  );
}

export default function MenuPage() {
  const dispatch = useDispatch();

  const { dishes , status } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const loading = status === "loading";

  return (
    <main className="min-h-screen bg-[#fffaf4] pt-28">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e55d38]">
            Our menu
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Made with heart.
          </h1>

          <p className="mt-5 text-base leading-7 text-black/55">
            French-inspired dishes made with fresh ingredients, simple
            techniques, and a little kitchen magic.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <MenuCardSkeleton key={index} />
            ))}
          </div>
        ) : dishes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dishes.map((dish) => (
              <MenuCard key={dish._id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-60 items-center justify-center rounded-2xl border border-black/10 bg-white">
            <p className="text-sm text-black/50">No dishes available.</p>
          </div>
        )}
      </section>
    </main>
  );
}
