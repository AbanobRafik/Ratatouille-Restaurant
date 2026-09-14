import ImagePlaceholder from "./ImagePlaceholder";
export default function Atmosphere() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="flex min-h-80 flex-col justify-center rounded-3xl bg-black p-8 text-white lg:col-span-5 lg:min-h-152 lg:p-12">
            <div className="mb-7 h-1 w-14 rounded-full bg-[#ffdf4f]" />
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ffdf4f]">
              From Paris, with warmth
            </p>
            <h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight sm:text-5xl">
              A table made for lingering.
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-white/65">
              The sounds of a busy kitchen, the glow of the city, and a dish
              worth gathering around.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="aspect-16/7 overflow-hidden rounded-3xl border border-black/10">
              <ImagePlaceholder
                src="/assets/images/restaurant/kitchen.jpg"
                alt="French restaurant kitchen"
                title="French Kitchen"
                type="Restaurant"
                imageClassName="object-cover"
              />
            </div>
            <div className="aspect-16/7 overflow-hidden rounded-3xl border border-black/10">
              <ImagePlaceholder
                src="/assets/images/restaurant/paris.jpg"
                alt="Paris at dusk"
                title="Paris"
                type="Restaurant"
                className="bg-[#eef7fb]"
                imageClassName="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
