import { ArrowRight } from "lucide-react";
export default function FinalCTA() {
  return (
    <section className="px-6 pb-24 sm:pb-32 lg:px-8" >
      <div className="mx-auto max-w-7xl overflow-hidden bg-gray-200 rounded-3xl border border-black/10  px-7 py-20 text-center sm:px-12 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e55d38]">
          Your seat is waiting
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl tracking-tight text-black sm:text-5xl">
          Ready to Taste Something Extraordinary?
        </h2>
        <p className="mt-5 text-lg text-black/60">
          Your next favorite dish is waiting.
        </p>
        <a
          href="#menu"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#e55d38]"
        >
          Explore the Menu <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
