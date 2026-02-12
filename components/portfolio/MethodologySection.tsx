import { Search, Settings, PenTool, Activity } from "lucide-react";
import { SiteContent } from "@/src/domain/entities/Content";
import { LucideIcon } from "lucide-react";

interface MethodologySectionProps {
  colorClass?: string;
  siteContent?: SiteContent | null;
}

const iconMap: Record<string, LucideIcon> = {
  Search,
  Settings,
  PenTool,
  Activity,
};

export function MethodologySection({
  colorClass = "bg-green-100",
  siteContent,
}: MethodologySectionProps) {
  const methodology = siteContent?.methodology;

  return (
    <section className="relative my-24">
      <div
        className={`absolute -top-12 left-0 ${colorClass} border-2 border-black p-2 px-6 rotate-[-1deg] font-black uppercase shadow-sm z-10`}
      >
        {methodology?.title}
      </div>

      <div className="sketch-card bg-white p-10 overflow-hidden">
        <div className="grid md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-black border-dashed z-0 opacity-20"></div>

          {methodology?.steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Search;
            const hoverColors = [
              "group-hover:bg-yellow-50",
              "group-hover:bg-blue-50",
              "group-hover:bg-green-50",
              "group-hover:bg-red-50",
            ];

            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center gap-4 group"
              >
                <div
                  className={`w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm ${hoverColors[index % hoverColors.length]} transition-colors`}
                >
                  <Icon size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="font-black uppercase text-xm">
                    {String(step.number).padStart(2, "0")} {step.title}
                  </h5>
                  <p className="text-[14px] italic leading-tight opacity-60">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 border-2 border-black border-dashed bg-gray-200 text-[14px] leading-relaxed text-center italic">
          {methodology?.quote ||
            '"I prioritize functionality and clarity. By staying in the low-fidelity phase longer, we ensure the structural integrity of the user experience before committing to visual aesthetics."'}
        </div>
      </div>
    </section>
  );
}
