"use client";

import { useState, useEffect } from "react";
import {
  Smartphone,
  Target,
  Settings,
  ShieldCheck,
  Globe,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MethodologySection } from "@/components/portfolio/MethodologySection";
import { WorkOverview, Project } from "@/src/domain/entities/WorkItem";
import { SiteContent } from "@/src/domain/entities/Content";
import { urlForImage } from "@/src/infrastructure/sanity/image";

// Plain object type for serialization (matches WorkItem but without class)
type WorkItemPlain = {
  id: string;
  title: string;
  type: string;
  description: string;
  isEnterprise: boolean;
  isMobile?: boolean;
  period?: string;
  logoInitials?: string;
  coverImage?: {
    asset: { _ref: string };
  };
  overview?: WorkOverview;
  projects?: Project[];
  context?: string;
  problem?: string;
  solution?: string;
  tags?: string[];
};

interface HomePageClientProps {
  siteContent?: SiteContent | null;
  workItems: WorkItemPlain[];
}

export function HomePageClient({
  siteContent,
  workItems,
}: Readonly<HomePageClientProps>) {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const headline = siteContent?.hero.headline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= headline!.length) {
        setTypedText(headline!.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [headline]);

  return (
    <>
      <section className="mb-24 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="inline-block sketch-border bg-yellow-100 px-6 py-4 mb-6 rotate-[-1deg] min-h-[4rem] flex items-center relative group">
            <div className="absolute -top-3 -left-3 bg-white border-2 border-black px-2 text-[10px] font-black uppercase rotate-[-5deg] shadow-sm">
              {siteContent?.hero.experienceBadge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              {typedText}
              <span className="typing-cursor"></span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
            {siteContent?.hero.subheadline}
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="sketch-button py-3 px-8 text-lg bg-blue-50"
            >
              {siteContent?.hero.ctaPrimary}
            </Link>
            <Link href="/resume" className="sketch-button py-3 px-8 text-lg">
              {siteContent?.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div
          className="relative w-48 h-48 md:w-64 md:h-64 cursor-help"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        >
          <div
            className={`absolute inset-0 border-2 border-black border-dashed flex items-center justify-center bg-blue-50 duration-500 transition-[transform,opacity] ${isProfileHovered ? "rotate-6 translate-x-4 translate-y-4 opacity-100" : "rotate-0 opacity-0 scale-95"}`}
          >
            <Image
              src="/Personality.png"
              alt="personality image"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div
            className={`absolute inset-0 border-2 border-black bg-gray-50 duration-500 transition-[transform,opacity,filter] ${isProfileHovered ? "-rotate-12 -translate-x-8 -translate-y-4 opacity-20 grayscale" : "rotate-2 opacity-100"}`}
          >
            <Image
              src="/Profile.png"
              alt="profile image"
              className="object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      <div className="hand-drawn-line mb-20 opacity-50"></div>

      <MethodologySection colorClass="bg-blue-100" siteContent={siteContent} />

      {/* Work Section */}
      <section className="relative mb-32">
        <div className="absolute -top-12 left-0 bg-blue-100 border-2 border-black p-2 px-6 rotate-[-2deg] font-bold shadow-sm z-10">
          {siteContent?.workSectionTitle || ""}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {workItems.map((item) => (
            <Link
              key={item.id}
              href={`/work/${encodeURIComponent(item.id)}`}
              onMouseEnter={() => setHoveredWorkId(item.id)}
              onMouseLeave={() => setHoveredWorkId(null)}
              className={`sketch-card p-6 cursor-pointer hover:translate-y-[-4px] transition-transform block ${item.isEnterprise ? "enterprise-stack bg-gray-50" : "tape-effect bg-white"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center rotate-[-3deg] shadow-sm">
                    {item.isEnterprise ? (
                      <span className="font-black text-xs">
                        {item.logoInitials}
                      </span>
                    ) : item.isMobile ? (
                      <Smartphone size={18} />
                    ) : (
                      <Monitor size={18} />
                    )}
                  </div>
                  {item.isEnterprise && (
                    <div className="p-1.5 border border-black bg-white rounded-full">
                      <ShieldCheck size={14} className="text-blue-600" />
                    </div>
                  )}
                </div>
                <div
                  className={`px-2 py-0.5 border border-black text-[10px] font-bold ${item.isEnterprise ? "bg-yellow-100" : "bg-gray-100"}`}
                >
                  {item.type}
                </div>
              </div>

              <h3 className="text-2xl font-black mb-1 uppercase tracking-tight leading-none">
                {item.title}
              </h3>
              <p className="mb-4 opacity-75 text-sm italic">
                {item.description}
              </p>

              <div className="mb-6 overflow-hidden">
                <div className="mx-auto relative">
                  <div
                    className={`absolute inset-0 z-20 bg-blue-50/95 border-2 border-black border-dashed p-4 duration-500 transition-[transform,opacity] ${hoveredWorkId === item.id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                  >
                    <div className="h-full flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2">
                        <Target size={14} className="text-blue-600" />
                        <span className="text-[10px] font-black uppercase">
                          Objective:
                        </span>
                      </div>
                      <p className="text-[11px] leading-tight italic">
                        {item.overview?.goal}
                      </p>
                      <div className="flex items-center gap-2">
                        {item.isEnterprise ? (
                          <Globe size={14} className="text-blue-600" />
                        ) : (
                          <Settings size={14} className="text-blue-600" />
                        )}
                        <span className="text-[10px] font-black uppercase">
                          {item.isEnterprise
                            ? "Tenure Impact:"
                            : "Design Logic:"}
                        </span>
                      </div>
                      <p className="text-[11px] leading-tight italic">
                        {item.overview?.logic}
                      </p>
                      <div className="bg-white border border-black p-2 text-center rotate-2">
                        <span className="text-xs font-black uppercase">
                          {item.overview?.stat}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mx-auto bg-white border-2 border-black p-2 relative transition-transform duration-500 overflow-hidden ${hoveredWorkId === item.id ? "scale-95 opacity-20 blur-sm" : "scale-100"} ${!item.isEnterprise && item.isMobile ? "w-32 h-56 rounded-[20px]" : "w-full h-40 rounded-sm"}`}
                  >
                    {item.isEnterprise ? (
                      <div className="border border-black h-full bg-gray-50 flex flex-col relative overflow-hidden rounded-sm">
                        <div className="bg-white h-6 border-b border-black flex items-center px-2 gap-1 shrink-0">
                          <div className="w-2 h-1 bg-black/20"></div>
                          <div className="w-10 h-1 bg-black/20"></div>
                        </div>
                        <div className="flex-1 relative min-h-0">
                          {item.coverImage ? (
                            <Image
                              src={urlForImage(item.coverImage)
                                .width(800)
                                .height(400)
                                .url()}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`border border-black h-full flex flex-col overflow-hidden ${item.isMobile ? "rounded-[15px]" : "rounded-sm"}`}
                      >
                        <div className="bg-gray-100 h-4 border-b border-black flex items-center px-1 gap-1 shrink-0">
                          <div className="w-1 h-1 rounded-full bg-black/30"></div>
                          <div className="w-1 h-1 rounded-full bg-black/30"></div>
                        </div>
                        <div className="flex-1 min-h-0 relative">
                          {item.coverImage ? (
                            <Image
                              src={urlForImage(item.coverImage)
                                .width(800)
                                .height(400)
                                .url()}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 128px, 50vw"
                            />
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {(item.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 border border-black px-2 py-0.5 text-[10px] uppercase font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase underline decoration-2 decoration-blue-500 underline-offset-4">
                  Explore {item.isEnterprise ? "Tenure" : "Study"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
