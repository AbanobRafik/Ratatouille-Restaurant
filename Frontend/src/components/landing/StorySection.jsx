import ImagePlaceholder from "./ImagePlaceholder";
export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32" id="about">
      <div className="absolute -left-24 top-1/4 size-72 rounded-full bg-[#e55d38]/30 blur-3xl" />
      <div className="absolute -right-16 bottom-0 size-96 rounded-full bg-[#b9dcf1]/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.9fr_1.2fr_.9fr] lg:px-8">
        <div className="order-2 aspect-square overflow-hidden rounded-full border border-white/20 bg-white/10 lg:order-1">
          <ImagePlaceholder
            src="/assets/images/characters/remy1.png"
            alt="Remy"
            title="Remy"
            type="Character"
            className="bg-white/95"
            imageClassName="object-contain p-5"
          />
        </div>
        <div className="order-1 text-center lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#ffdf4f]">
            The story continues
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Great Food Can Come From Anywhere
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-white/65">
            At Ratatouille, we believe that creativity has no limits and great
            food can come from anyone with enough passion.
          </p>
          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#e55d38]" />
        </div>
        <div className="order-3 aspect-[.8] overflow-hidden rounded-[8rem_8rem_2rem_2rem] border border-white/20 bg-white/10">
          <ImagePlaceholder
            src="/assets/images/characters/linguini.png"
            alt="Linguini"
            title="Linguini"
            type="Character"
            className="bg-[#f5f5f3]"
            imageClassName="object-contain p-5"
          />
        </div>
      </div>
    </section>
  );
}
