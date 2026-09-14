import { LockKeyhole, X } from "lucide-react";
import { Link } from "react-router";

export default function CartLoginModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-required-title"
      onMouseDown={onClose}
    >
      <section
        className="relative w-full max-w-md overflow-hidden rounded-4xl bg-[#fffaf4] p-8 text-center shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full text-black/45 transition hover:bg-black/5 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#ffdf4f]">
          <LockKeyhole size={24} />
        </div>
        <img
          className="mx-auto mt-4 h-40 w-full object-contain"
          src="/assets/images/characters/skinner.png"
          alt="Chef Skinner"
        />
        <h2 id="login-required-title" className="mt-2 font-serif text-3xl">
          You must login first
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/60">
          Please sign in to add delicious dishes to your cart and place an
          order.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link
            className="rounded-xl bg-[#252525] px-5 py-3 font-medium text-white transition hover:bg-[#e55d38]"
            to="/login"
            onClick={onClose}
          >
            Login
          </Link>
          <Link
            className="rounded-xl border border-black/15 px-5 py-3 font-medium transition hover:border-black hover:bg-[#ffdf4f]"
            to="/register"
            onClick={onClose}
          >
            Create account
          </Link>
        </div>
      </section>
    </div>
  );
}
