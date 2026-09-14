import ImagePlaceholder from "./ImagePlaceholder";
export default function Introduction() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-black/10">
          <ImagePlaceholder
          src = "/assets/images/restaurant/table.jpg"
            title="Restaurant table"
            type="Atmosphere"
            className="bg-[#f7f4ef]"
          />
          <div className="pointer-events-none absolute inset-7 rounded-2xl border border-black/10" />
        </div>
        <div className="max-w-xl lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e55d38]">
            Our table
          </p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight text-black sm:text-5xl">
            Welcome to Ratatouille
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/60">
            A place where passion meets flavor, and every dish has a story.
            Inspired by the spirit of French cooking, Ratatouille brings
            together creativity, warmth, and unforgettable food.
          </p>
          <div className="mt-8 h-1 w-20 rounded-full bg-[#b9dcf1]" />
        </div>
      </div>
    </section>
  );
}
