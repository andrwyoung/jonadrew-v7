"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCartStore, cartCount } from "@/store/cart-store";
import { CartDrawer } from "@/components/store/cart-drawer";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const links = [
  { href: "/", label: "Portfolio" },
  // { href: "/comics", label: "Comics" },
  { href: "/about", label: "About" },
  { href: "/store", label: "Store" },
];

function CartIconButton() {
  const { openCart, items } = useCartStore();
  const count = cartCount(items);
  return (
    <button
      type="button"
      onClick={openCart}
      className="relative text-text hover:text-secondary-text transition-colors cursor-pointer"
      aria-label="Open cart"
    >
      <FaCartShopping size={20} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      setAtTop(currentY < 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-150 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${atTop && !menuOpen ? "" : "backdrop-blur-md bg-white/80"}`}
      >
        <div className="px-8 py-3 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="text-3xl text-text hover:text-secondary-text font-logo transition"
            >
              Jonadrew
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <ul className="flex gap-6">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`text-md transition-colors font-header hover:text-secondary-text ${
                        active
                          ? "text-text font-bold underline"
                          : "text-text font-semibold"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <CartIconButton />
          </div>

          {/* Mobile right side */}
          <div className="flex sm:hidden items-center gap-4">
            <CartIconButton />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="text-text hover:text-secondary-text transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden border-t border-black/10 px-8 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-lg font-header hover:text-secondary-text transition-colors ${
                    active
                      ? "text-text font-bold underline"
                      : "text-text font-semibold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  );
}
