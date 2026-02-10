"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function PortfolioNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 z-40 bg-[#f0f0f0] border-b-4 border-black p-2 flex items-center justify-between shadow-sm">
      <Link href="/">
        <div className="flex items-center gap-4">
          <div className="sketch-border bg-white p-1 px-3 font-bold text-xl uppercase italic">
            Alfa Zihal
          </div>
        </div>
      </Link>
      <div className="flex gap-2">
        <Link
          href="/"
          className={`sketch-button text-xs font-bold ${isHome ? "bg-blue-200" : "bg-white"}`}
        >
          CANVAS VIEW
        </Link>
        <Link
          href="/resume"
          className={`sketch-button text-xs font-bold ${pathname === "/resume" ? "bg-blue-200" : "bg-white"}`}
        >
          WORK HISTORY
        </Link>
        <Link
          href="/contact"
          className={`sketch-button text-xs font-bold ${pathname === "/contact" ? "bg-blue-200" : "bg-white"}`}
        >
          CONTACT
        </Link>
        <Link
          href="/blog"
          className={`sketch-button text-xs font-bold ${pathname === "/blog" ? "bg-blue-200" : "bg-white"}`}
        >
          BLOG
        </Link>
      </div>
    </nav>
  );
}
