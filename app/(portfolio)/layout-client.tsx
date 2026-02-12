"use client";

import { useState, useEffect } from "react";
import { BalsamiqStyles } from "@/components/portfolio/BalsamiqStyles";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { MinimalFooter } from "@/components/portfolio/MinimalFooter";
import { SiteContent } from "@/src/domain/entities/Content";

interface PortfolioLayoutClientProps {
  children: React.ReactNode;
  siteContent?: SiteContent | null;
}

export function PortfolioLayoutClient({
  children,
  siteContent,
}: Readonly<PortfolioLayoutClientProps>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in globalThis);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={`min-h-screen graph-paper balsamiq-font text-black ${!isMobile ? "cursor-none" : ""}`}
    >
      <BalsamiqStyles />
      {!isMobile && <CustomCursor />}
      <PortfolioNav siteContent={siteContent} />
      {children}
      <MinimalFooter siteContent={siteContent} />
    </div>
  );
}
