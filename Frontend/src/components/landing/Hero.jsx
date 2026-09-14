import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white pt-24"
    >
      <div className="absolute -right-32 top-28 size-128 rounded-full bg-[#b9dcf1]/35 blur-3xl" />
      <div className="absolute bottom-0 left-[30%] size-80 rounded-full bg-[#ffdf4f]/25 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="max-w-2xl py-8 lg:py-16">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-black/55">
            <span className="h-px w-9 bg-[#e55d38]" />A little magic in every
            dish
          </p>
          <h1 className="font-serif text-5xl leading-[.98] tracking-tight text-black sm:text-6xl lg:text-8xl">
            Anyone can {" "}
            <em className="relative font-normal">
              <span className="relative z-10">Cook.</span>
              <span className="absolute inset-x-0 bottom-1 h-3 -rotate-1 bg-[#ffdf4f]/80 sm:bottom-2" />
            </em>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-black/60 sm:text-lg">
            Discover delicious dishes inspired by French cuisine, crafted with
            passion and served with love.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/#menu"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#e55d38]"
            >
              Explore Menu <ArrowRight size={17} />
            </a>
            <a
              href="/login"
              className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition hover:border-black hover:bg-[#b9dcf1]/30"
            >
              Login to Order
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[.9] overflow-hidden rounded-[10rem_10rem_2rem_2rem] border border-black/10 bg-[#f5f5f3] shadow-2xl shadow-black/10">
            <ImagePlaceholder
              src="/assets/images/characters/remy1.png"
              alt="Remy"
              title="Remy"
              type="Character"
              imageClassName="object-contain object-center w-full h-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 max-w-52 rounded-2xl border border-black/10 bg-white p-4 shadow-xl shadow-black/10">
            <p className="font-serif text-lg italic text-black">
              "Anyone can cook."
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.15em] text-[#e55d38]">
              The Ratatouille way
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
