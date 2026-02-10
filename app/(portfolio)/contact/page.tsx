"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Send,
  MessageSquare,
  Smile,
  Zap,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { MethodologySection } from "@/components/portfolio/MethodologySection";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {"Back"}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          Hire Request
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="sketch-card bg-white p-8 relative">
          <div className="bg-[#e0e0e0] border-2 border-black border-b-4 p-2 mb-6 flex justify-between">
            <span className="font-black text-xs uppercase italic tracking-tighter">
              Request Mockup
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
            </div>
          </div>

          <h2 className="text-3xl font-black uppercase mb-6 italic underline underline-offset-4 decoration-2">
            {"Let's build !"}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Sender Name"}
              </label>
              <input
                type="text"
                className="sketch-input"
                placeholder="Type name here..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Email Address"}
              </label>
              <input
                type="email"
                className="sketch-input"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {"Project Scope"}
              </label>
              <textarea
                className="sketch-input h-32"
                placeholder="Briefly describe the user logic challenge..."
              />
            </div>
            <button
              onClick={() => setIsSubmitted(true)}
              className="sketch-button w-full py-4 bg-indigo-600 text-black font-black uppercase flex items-center justify-center gap-3"
            >
              Submit Request <Send size={18} />
            </button>
          </div>

          {isSubmitted && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex items-center justify-center p-8">
              <div className="sketch-border bg-yellow-100 p-8 rotate-[-2deg] text-center shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-white border-2 border-black p-2 rotate-[12deg]">
                  <Smile size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">
                  Request Cached!
                </h3>
                <p className="text-sm font-bold">
                  {"I'll review the logic and get back to you within 24 work-hours."}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 underline text-xs font-black uppercase"
                >
                  {"Edit Draft"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="sketch-border p-6 bg-blue-50 rotate-[1deg]">
            <h4 className="font-black uppercase flex items-center gap-2 mb-4">
              <MessageSquare size={18} /> Direct Links
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    E-Mail
                  </p>
                  <p className="font-bold underline">aalfajiri75@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    Professional Network
                  </p>
                  <p className="font-bold underline">
                    linkedin.com/in/alfazihal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sketch-border p-6 bg-white border-dashed relative">
            <div className="absolute -top-3 -left-3 bg-yellow-100 border-2 border-black px-2 py-1 text-[10px] font-black rotate-[-5deg]">
              ANNOTATION
            </div>
            <h4 className="font-black uppercase mb-2 text-sm italic">
              Current availability:
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              {"Open for complex logic puzzles in B2B, B2C, FinTech, Blockchain and GovStack enterprise design systems."}
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-black text-xs">
              <Zap size={14} fill="currentColor" /> RATE: FAST TRACK
            </div>
          </div>
        </div>
      </div>

      <MethodologySection colorClass="bg-green-100" />
    </div>
  );
}
