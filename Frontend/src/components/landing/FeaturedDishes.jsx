import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getDishes } from "../../redux/dish/dishSlice";
import MenuCard from "../menuCard";

export default function FeaturedDishes() {
  const dispatch = useDispatch();
  const { dishes, status } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const featuredDishes = dishes.slice(0, 4);

  return (
    <section id="menu" className="bg-[#f7f7f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e55d38]">
              The selection
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight text-black sm:text-5xl">
              Chef&apos;s Favorites
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-black/50">
            Thoughtfully chosen classics, each made with a little extra care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : (
            featuredDishes.map((dish) => (
              <MenuCard key={dish._id} dish={dish} />
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-[#e55d38]"
            to="/menu"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
