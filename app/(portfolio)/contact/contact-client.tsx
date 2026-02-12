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
import { uiLabels } from "@/src/infrastructure/config/ui-labels";
import { SiteContent } from "@/src/domain/entities/Content";
import { Profile } from "@/src/domain/entities/Profile";

interface ContactPageClientProps {
  siteContent?: SiteContent | null;
  profile?: Profile | null;
}

export default function ContactPageClient({ siteContent, profile }: ContactPageClientProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {uiLabels.navigation.back}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          {uiLabels.sections.hireRequest}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="sketch-card bg-white p-8 relative">
          <div className="bg-[#e0e0e0] border-2 border-black border-b-4 p-2 mb-6 flex justify-between">
            <span className="font-black text-xs uppercase italic tracking-tighter">
              {uiLabels.sections.requestMockup}
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
            </div>
          </div>

          <h2 className="text-3xl font-black uppercase mb-6 italic underline underline-offset-4 decoration-2">
            {siteContent?.hero.ctaPrimary || uiLabels.sections.letsBuild}
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {uiLabels.form.senderName}
              </label>
              <input
                type="text"
                className="sketch-input"
                placeholder={uiLabels.form.namePlaceholder}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {uiLabels.form.emailAddress}
              </label>
              <input
                type="email"
                className="sketch-input"
                placeholder={uiLabels.form.emailPlaceholder}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase">
                {uiLabels.form.projectScope}
              </label>
              <textarea
                className="sketch-input h-32"
                placeholder={uiLabels.form.scopePlaceholder}
              />
            </div>
            <button
              onClick={() => setIsSubmitted(true)}
              className="sketch-button w-full py-4 bg-indigo-600 text-black font-black uppercase flex items-center justify-center gap-3"
            >
              {uiLabels.buttons.submit} <Send size={18} />
            </button>
          </div>

          {isSubmitted && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-30 flex items-center justify-center p-8">
              <div className="sketch-border bg-yellow-100 p-8 rotate-[-2deg] text-center shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-white border-2 border-black p-2 rotate-[12deg]">
                  <Smile size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">
                  {uiLabels.sections.requestCached}
                </h3>
                <p className="text-sm font-bold">
                  {uiLabels.messages.requestCachedMessage}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 underline text-xs font-black uppercase"
                >
                  {uiLabels.buttons.editDraft}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="sketch-border p-6 bg-blue-50 rotate-[1deg]">
            <h4 className="font-black uppercase flex items-center gap-2 mb-4">
              <MessageSquare size={18} /> {uiLabels.sections.directLinks}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    {uiLabels.sections.email}
                  </p>
                  <p className="font-bold underline">{profile?.contactInfo.email || "aalfajiri75@gmail.com"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase">
                    {uiLabels.sections.professionalNetwork}
                  </p>
                  <p className="font-bold underline">
                    {profile?.contactInfo.linkedin || "linkedin.com/in/alfazihal"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sketch-border p-6 bg-white border-dashed relative">
            <div className="absolute -top-3 -left-3 bg-yellow-100 border-2 border-black px-2 py-1 text-[10px] font-black rotate-[-5deg]">
              {uiLabels.sections.annotation}
            </div>
            <h4 className="font-black uppercase mb-2 text-sm italic">
              {uiLabels.sections.currentAvailability}
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              {profile?.availability || siteContent?.cta.availabilityText || "Open for complex logic puzzles in B2B, B2C, FinTech, Blockchain and GovStack enterprise design systems."}
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-black text-xs">
              <Zap size={14} fill="currentColor" /> {uiLabels.sections.rate} {siteContent?.cta.rateText || uiLabels.sections.fastTrack}
            </div>
          </div>
        </div>
      </div>

      <MethodologySection colorClass="bg-green-100" siteContent={siteContent} />
    </div>
  );
}
