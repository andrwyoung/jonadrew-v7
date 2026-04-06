"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-3 flex items-center justify-between bg-primary z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <Link
          href="/"
          className="text-3xl text-text hover:text-primary"
          style={{ fontFamily: "var(--font-jonadrew-logo)" }}
        >
          Jonadrew
        </Link>
        {/* <h3 className="font-bold text-xs leading-4">Andrew Yong</h3> */}
      </div>

      <ul className="flex gap-6">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors font-semibold ${
                  active
                    ? "text-secondary-text underline"
                    : "text-secondary-text hover:text-text"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
