"use client";

import React, { useState, useEffect } from "react";
import {
  ImageIcon,
  Smartphone,
  Briefcase,
  Target,
  Settings,
  ShieldCheck,
  Globe,
  FileText,
  Clock,
  Monitor,
  Zap,
  Search,
  PenTool,
  GitBranch,
  Hand,
  Minus,
  Plus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MethodologySection } from "@/components/portfolio/MethodologySection";
import { workItems, blogPosts } from "@/lib/data";

export default function HomePage() {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const headline = "Alfa Zihal: UX & Product Designer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= headline.length) {
        setTypedText(headline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-32 pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="inline-block sketch-border bg-yellow-100 px-6 py-4 mb-6 rotate-[-1deg] min-h-[4rem] flex items-center relative group">
            <div className="absolute -top-3 -left-3 bg-white border-2 border-black px-2 text-[10px] font-black uppercase rotate-[-5deg] shadow-sm">
              {"+5 years experience"}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              {typedText}
              <span className="typing-cursor"></span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
            {"I focus on the logic before the pixels. I build the foundation, define flows, and create structured systems that turn complex problems into intuitive experiences."}
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="sketch-button py-3 px-8 text-lg bg-blue-50"
            >
              Hire me !
            </Link>
            <Link href="/resume" className="sketch-button py-3 px-8 text-lg">
              Work History
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

      <MethodologySection colorClass="bg-blue-100" />

      {/* Work Section */}
      <section className="relative mb-32">
        <div className="absolute -top-12 left-0 bg-blue-100 border-2 border-black p-2 px-6 rotate-[-2deg] font-bold shadow-sm z-10">
          {"SOME OF MY WORK"}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {workItems.map((item) => (
            <Link
              key={item.id}
              href={`/work/${item.id}`}
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
              <p className="mb-4 opacity-75 text-sm italic">{item.description}</p>

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
                    className={`mx-auto bg-white border-2 border-black p-2 relative transition-transform duration-500 ${hoveredWorkId === item.id ? "scale-95 opacity-20 blur-sm" : "scale-100"} ${!item.isEnterprise && item.isMobile ? "w-32 h-56 rounded-[20px]" : "w-full h-40 rounded-sm"}`}
                  >
                    {item.isEnterprise ? (
                      <div className="border border-black h-full bg-gray-50 flex flex-col relative overflow-hidden">
                        <div className="bg-white h-6 border-b border-black flex items-center px-2 gap-1">
                          <div className="w-2 h-1 bg-black/20"></div>
                          <div className="w-10 h-1 bg-black/20"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center opacity-10">
                          <Briefcase size={48} />
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`border border-black h-full flex flex-col ${item.isMobile ? "rounded-[15px]" : ""}`}
                      >
                        <div className="bg-gray-100 h-4 border-b border-black flex items-center px-1 gap-1">
                          <div className="w-1 h-1 rounded-full bg-black/30"></div>
                          <div className="w-1 h-1 rounded-full bg-black/30"></div>
                        </div>
                        <div className="flex-1 p-2 flex flex-col justify-center items-center">
                          <ImageIcon size={24} className="opacity-10" />
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

      {/* Blog Section */}
      <section className="relative mt-40">
        <div className="absolute -top-12 left-0 bg-yellow-100 border-2 border-black p-2 px-6 rotate-[1.5deg] font-bold shadow-sm z-10">
          {"MY WRITTINGS"}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href="/blog"
              className="sketch-card bg-white p-6 hover:rotate-1 hover:translate-y-[-2px] transition-transform block group"
            >
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black opacity-40 uppercase">
                <Clock size={12} /> {post.date}
              </div>
              <h4 className="text-xl font-black uppercase mb-3 leading-tight underline decoration-2 decoration-transparent group-hover:decoration-black transition-[text-decoration-color]">
                {post.title}
              </h4>
              <p className="text-sm opacity-75 mb-6 italic leading-relaxed">
                {`"${post.excerpt}"`}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-black rounded-full text-[9px] font-black uppercase tracking-tighter"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-black border-dashed">
                <span className="text-[10px] font-black uppercase flex items-center gap-1">
                  Read Script <FileText size={12} />
                </span>
                <Plus size={14} className="opacity-20" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative mt-52 mb-20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-100 border-2 border-black p-2 px-8 rotate-[-1deg] font-black uppercase shadow-sm z-10">
          {"Final Logic Check"}
        </div>

        <div className="sketch-card bg-white p-12 text-center relative overflow-hidden">
          <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
            <div className="w-24 h-24 border-2 border-black bg-yellow-50 rotate-[-8deg] flex flex-col items-center justify-center p-2 shadow-sm">
              <Search size={24} className="mb-1" />
              <span className="text-[8px] font-black uppercase">Research</span>
              <div className="w-full h-px bg-black/10 mt-2"></div>
              <div className="w-2/3 h-px bg-black/10 mt-1"></div>
            </div>
            <div className="w-24 h-24 border-2 border-black bg-blue-50 rotate-[12deg] translate-x-4 flex flex-col items-center justify-center p-2 shadow-sm">
              <PenTool size={24} className="mb-1" />
              <span className="text-[8px] font-black uppercase">Wireframe</span>
              <div className="grid grid-cols-2 gap-1 w-full mt-2">
                <div className="h-4 border border-black/10"></div>
                <div className="h-4 border border-black/10"></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
            <div className="w-24 h-24 border-2 border-black bg-green-50 rotate-[6deg] flex flex-col items-center justify-center p-2 shadow-sm">
              <GitBranch size={24} className="mb-1" />
              <span className="text-[8px] font-black uppercase">User_Flow</span>
              <div className="flex gap-1 items-center mt-2">
                <div className="w-2 h-2 rounded-full border border-black/20"></div>
                <div className="w-4 h-px bg-black/20"></div>
                <div className="w-2 h-2 rounded-full border border-black/20"></div>
              </div>
            </div>
            <div className="w-24 h-24 border-2 border-black bg-red-50 rotate-[-10deg] -translate-x-4 flex flex-col items-center justify-center p-2 shadow-sm">
              <Hand size={24} className="mb-1" />
              <span className="text-[8px] font-black uppercase">Usability</span>
              <div className="w-full h-2 border-2 border-black/10 rounded-full mt-2"></div>
            </div>
          </div>

          <div className="max-w-xl mx-auto py-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter italic">
              Ready to start the next flow?
            </h2>
            <p className="text-lg opacity-60 mb-10 leading-relaxed font-bold">
              {"I'm currently looking for new puzzles and complex system challenges to solve. Let's wireframe your vision together."}
            </p>
            <Link
              href="/contact"
              className="sketch-button py-5 px-12 bg-indigo-600 text-black text-xl font-black uppercase flex items-center gap-4 mx-auto group w-fit"
            >
              Start a Project <Zap size={24} className="group-hover:animate-pulse" />
            </Link>
            <div className="mt-8 flex items-center justify-center gap-3 opacity-30 text-[10px] font-black uppercase">
              <ShieldCheck size={14} /> NDA Friendly <Minus size={12} /> Logic-Driven
              Design
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
