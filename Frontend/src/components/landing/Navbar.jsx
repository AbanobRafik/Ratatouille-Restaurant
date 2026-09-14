import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import CartLoginModal from "../CartLoginModal";
import { useLogout } from "../../hooks/useLogout";

const links = ["Home", "Menu", "Orders"];

function NavigationLink({ link, onClick }) {
  if (link === "Home") {
    return (
      <Link
        to="/"
        onClick={onClick}
        className="transition hover:text-[#e55d38]"
      >
        Home
      </Link>
    );
  }

  if (link === "Menu") {
    return (
      <Link
        to="/menu"
        onClick={onClick}
        className="transition hover:text-[#e55d38]"
      >
        Menu
      </Link>
    );
  }

  if (link === "Orders") {
    return (
      <Link
        to="/orders"
        onClick={onClick}
        className="transition hover:text-[#e55d38]"
      >
        Orders
      </Link>
    );
  }

  return (
    <Link
      to={`/#${link.toLowerCase()}`}
      onClick={onClick}
      className="transition hover:text-[#e55d38]"
    >
      {link}
    </Link>
  );
}

function CartButton({ user, onClick, compact = false, onOpenModal }) {
  if (user) {
    return (
      <Link
        to="/cart"
        onClick={onClick}
        aria-label="Cart"
        className={
          compact
            ? "ml-auto"
            : "grid size-10 place-items-center rounded-full border border-black/15 transition hover:border-black hover:bg-[#ffdf4f]"
        }
      >
        <ShoppingBag size={18} strokeWidth={1.7} />
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label="Cart"
      onClick={() => {
        onClick?.();
        onOpenModal();
      }}
      className={
        compact
          ? "ml-auto"
          : "grid size-10 place-items-center rounded-full border border-black/15 transition hover:border-black hover:bg-[#ffdf4f]"
      }
    >
      <ShoppingBag size={18} strokeWidth={1.7} />
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { user, status } = useSelector((state) => state.auth);
  const { handleLogout } = useLogout();

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleMobileLogout = () => {
    setIsOpen(false);
    handleLogout();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl font-semibold tracking-tight text-black"
          onClick={closeMobileMenu}
        >
          Ratatouille<span className="text-[#e55d38]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 text-sm font-medium text-black/65 md:flex">
          {links.map((link) => (
            <NavigationLink key={link} link={link} />
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          {user ? (
            <>
              <span className="text-black/65">Hi, {user.username}</span>

              <button
                type="button"
                onClick={handleLogout}
                disabled={status === "loading"}
                className="rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-[#e55d38] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-black/65 transition hover:text-black"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-[#e55d38]"
              >
                Register
              </Link>
            </>
          )}

          <CartButton
            user={user}
            onOpenModal={() => setIsCartModalOpen(true)}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-black/15 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={19} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-6 rounded-2xl border border-black/10 bg-white p-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <NavigationLink
                key={link}
                link={link}
                onClick={closeMobileMenu}
              />
            ))}

            <div className="mt-2 flex gap-4 border-t border-black/10 pt-4">
              {user ? (
                <>
                  <span className="text-black/65">Hi, {user.username}</span>

                  <button type="button" onClick={handleMobileLogout}>
                    {status === "loading" ? "Logging out..." : "Logout"}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMobileMenu}>
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                    className="text-[#e55d38]"
                  >
                    Register
                  </Link>
                </>
              )}

              <CartButton
                user={user}
                compact
                onClick={closeMobileMenu}
                onOpenModal={() => setIsCartModalOpen(true)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cart Login Modal */}
      {isCartModalOpen && (
        <CartLoginModal onClose={() => setIsCartModalOpen(false)} />
      )}
    </header>
  );
}
