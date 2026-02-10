"use client";

import { useState, useEffect } from "react";
import { BalsamiqStyles } from "@/components/portfolio/BalsamiqStyles";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { MinimalFooter } from "@/components/portfolio/MinimalFooter";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
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
      <PortfolioNav />
      {children}
      <MinimalFooter />
    </div>
  );
}
