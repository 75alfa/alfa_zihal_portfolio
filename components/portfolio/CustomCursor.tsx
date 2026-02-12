"use client";

import { useState, useEffect } from "react";
import { MousePointer2 } from "lucide-react";
import { SiteContent } from "@/src/domain/entities/Content";

interface CustomCursorProps {
  siteContent?: SiteContent | null;
}

export function CustomCursor({ siteContent }: Readonly<CustomCursorProps>) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-hoverable]") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-help")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-hoverable]") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-help")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ left: mousePos.x, top: mousePos.y }}
    >
      <MousePointer2
        size={24}
        fill={isHovering ? "#3b82f6" : "#000"}
        stroke="white"
        strokeWidth={1}
        className="-rotate-[15deg]"
      />
      <div className="bg-white border-2 border-black px-2 py-0.5 ml-4 -mt-2 text-xs font-bold shadow-sm">
        {siteContent?.hero?.name} {isHovering ? "?" : ""}
      </div>
    </div>
  );
}
