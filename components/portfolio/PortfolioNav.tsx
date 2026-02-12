"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteContent } from "@/src/domain/entities/Content";

interface PortfolioNavProps {
  siteContent?: SiteContent | null;
}

export function PortfolioNav({ siteContent }: Readonly<PortfolioNavProps>) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-[#f0f0f0] border-b-4 border-black p-2 flex items-center justify-between shadow-sm">
      <Link href="/">
        <div className="flex items-center gap-4">
          <div className="sketch-border bg-white p-1 px-3 font-bold text-xl uppercase italic">
            {siteContent?.hero?.name}
          </div>
        </div>
      </Link>
      <div className="flex gap-2">
        <Link
          href="/resume"
          className={`sketch-button text-xs font-bold ${pathname === "/resume" ? "bg-blue-200" : "bg-white"}`}
        >
          {siteContent?.navigation?.workHistory}
        </Link>
        <Link
          href="/contact"
          className={`sketch-button text-xs font-bold ${pathname === "/contact" ? "bg-blue-200" : "bg-white"}`}
        >
          {siteContent?.navigation?.contact}
        </Link>
        <Link
          href="/blog"
          className={`sketch-button text-xs font-bold ${pathname === "/blog" ? "bg-blue-200" : "bg-white"}`}
        >
          {siteContent?.navigation?.blog}
        </Link>
      </div>
    </nav>
  );
}
