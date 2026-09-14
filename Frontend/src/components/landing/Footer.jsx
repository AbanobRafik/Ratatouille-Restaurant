export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <a
            className="font-serif text-2xl font-semibold text-black"
            href="#home"
          >
            Ratatouille<span className="text-[#e55d38]">.</span>
          </a>
          <p className="mt-3 text-sm text-black/50">
            Anyone Can Cook. Everyone Can Order.
          </p>
        </div>
      </div>
    </footer>
  );
}
