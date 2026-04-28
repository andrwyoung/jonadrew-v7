"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useCartStore, cartCount } from "@/store/cart-store";
import { CartDrawer } from "@/components/store/cart-drawer";

const links = [
  { href: "/", label: "Portfolio" },
  // { href: "/comics", label: "Comics" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
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
      <LuShoppingBag size={22} />
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-8 py-3 flex items-center justify-between z-150 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${atTop ? "" : "backdrop-blur-md bg-white/80"}`}
      >
        <div>
          <Link
            href="/"
            className="text-3xl text-text hover:text-secondary-text font-logo transition"
          >
            Jonadrew
          </Link>
          {/* <h3 className="font-bold text-xs leading-4">Andrew Yong</h3> */}
        </div>

        <div className="flex items-center gap-6">
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
      </nav>
      <CartDrawer />
    </>
  );
}
