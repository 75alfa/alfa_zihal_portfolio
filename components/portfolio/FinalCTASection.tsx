import {
  Search,
  PenTool,
  GitBranch,
  Hand,
  Zap,
  ShieldCheck,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { SiteContent } from "@/src/domain/entities/Content";
import { uiLabels } from "@/src/infrastructure/config/ui-labels";

interface FinalCTASectionProps {
  siteContent?: SiteContent | null;
}

export function FinalCTASection({
  siteContent,
}: Readonly<FinalCTASectionProps>) {
  const cta = siteContent?.cta;

  return (
    <section className="relative mt-52 mb-20">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-100 border-2 border-black p-2 px-8 rotate-[-1deg] font-black uppercase shadow-sm z-10">
        {cta?.title || uiLabels.sections.finalLogicCheck}
      </div>

      <div className="sketch-card bg-white p-12 text-center relative overflow-hidden">
        <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col gap-12">
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

        <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-12">
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
            {cta?.availabilityText}
          </h2>
          <p className="text-lg opacity-60 mb-10 leading-relaxed font-bold">
            {cta?.description}
          </p>
          <Link
            href="/contact"
            className="sketch-button py-5 px-12 bg-indigo-600 text-black text-xl font-black uppercase flex items-center gap-4 mx-auto group w-fit"
          >
            {cta?.buttonText}{" "}
            <Zap size={24} className="group-hover:animate-pulse" />
          </Link>
          <div className="mt-8 flex items-center justify-center gap-3 opacity-30 text-[10px] font-black uppercase">
            <ShieldCheck size={14} /> NDA Friendly <Minus size={12} />{" "}
            {cta?.rateText}
          </div>
        </div>
      </div>
    </section>
  );
}
