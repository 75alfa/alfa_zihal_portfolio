import { Search, Settings, PenTool, Activity } from "lucide-react";

interface MethodologySectionProps {
  colorClass?: string;
}

export function MethodologySection({ colorClass = "bg-green-100" }: MethodologySectionProps) {
  return (
    <section className="relative my-24">
      <div
        className={`absolute -top-12 left-0 ${colorClass} border-2 border-black p-2 px-6 rotate-[-1deg] font-black uppercase shadow-sm z-10`}
      >
        {"My Design Methodology"}
      </div>

      <div className="sketch-card bg-white p-10 overflow-hidden">
        <div className="grid md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-black border-dashed z-0 opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-yellow-50 transition-colors">
              <Search size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">01 Research</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                {"Mapping user mental models & defining core logic friction."}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-50 transition-colors">
              <Settings size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">02 Logic Flow</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Architecting high-density systems and data hierarchies.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-green-50 transition-colors">
              <PenTool size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">03 Wireframing</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Rapid lo-fi prototyping to validate functional puzzles.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-sm group-hover:bg-red-50 transition-colors">
              <Activity size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-black uppercase text-xm">04 Iterate</h5>
              <p className="text-[14px] italic leading-tight opacity-60">
                Usability testing and refining logic before the pixels.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-4 border-2 border-black border-dashed bg-gray-200 text-[14px] leading-relaxed text-center italic">
          {
            '"I prioritize functionality and clarity. By staying in the low-fidelity phase longer, we ensure the structural integrity of the user experience before committing to visual aesthetics."'
          }
        </div>
      </div>
    </section>
  );
}
