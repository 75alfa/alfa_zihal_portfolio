import {
  ArrowLeft,
  ChevronRight,
  Layers,
  Cpu,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { getWorkItemsUseCase, getProfileContentUseCase } from "@/src/application/di/container";
import { uiLabels } from "@/src/infrastructure/config/ui-labels";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ResumePage() {
  const [workItems, profile] = await Promise.all([
    getWorkItemsUseCase.execute(),
    getProfileContentUseCase.execute(),
  ]);
  
  const enterpriseItems = workItems.filter((i) => i.isEnterprise);

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
          {uiLabels.sections.workHistory}
        </span>
      </div>

      <div className="sketch-card bg-white p-10 flex flex-col gap-12">
        <section>
          <div className="inline-block bg-yellow-100 border-2 border-black px-4 py-1 rotate-[-1deg] mb-4 font-black uppercase">
            {uiLabels.sections.profile}
          </div>
          <p className="text-lg leading-relaxed">
            {profile?.profileText || ""}
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <div className="inline-block bg-blue-100 border-2 border-black px-4 py-1 rotate-[1deg] mb-4 font-black uppercase">
            {uiLabels.sections.workHistory}
          </div>

          {enterpriseItems.map((item) => (
            <div
              key={item.id}
              className="relative pl-8 border-l-2 border-black border-dashed"
            >
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-white border-2 border-black rounded-full"></div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-black uppercase">{item.title}</h4>
                <span className="font-bold text-sm bg-gray-100 px-2 py-0.5 border border-black">
                  {item.period || ""}
                </span>
              </div>
              <p className="italic font-bold text-blue-800 mb-4">
                {item.description}
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                {item.projects?.map((proj, i) => (
                  <li key={i} className="flex gap-2">
                    <ChevronRight size={16} className="shrink-0 mt-0.5" />
                    <span>
                      <strong className="uppercase">{proj.name}:</strong>{" "}
                      {proj.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t-2 border-black border-dashed">
          <section>
            <div className="inline-block bg-green-100 border-2 border-black px-4 py-1 rotate-[-2deg] mb-6 font-black uppercase">
              {uiLabels.sections.skillsStack}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {profile?.skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h5 className="font-black text-xs uppercase flex items-center gap-2">
                    {skill.category === "Design" ? <Layers size={14} /> : <Cpu size={14} />}{" "}
                    {skill.category}
                  </h5>
                  <ul className="text-xs flex flex-col gap-1 opacity-70">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
          <div className="inline-block bg-purple-100 border-2 border-black px-4 py-1 rotate-[1deg] mb-6 font-black uppercase">
            {uiLabels.sections.education}
          </div>
          <div className="flex flex-col gap-4">
            {profile?.education.map((edu, index) => (
              <div key={index} className="flex gap-3">
                <GraduationCap size={24} className="shrink-0" />
                <div>
                  <h5 className="font-black uppercase text-sm">
                    {edu.degree}
                  </h5>
                  <p className="text-xs opacity-60 italic">
                    {edu.institution} | {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </section>
        </div>

        <div className="pt-12 text-center">
          <p className="text-[10px] uppercase font-bold opacity-30 italic mt-8">
            {uiLabels.generatedBy}
          </p>
        </div>
      </div>
    </div>
  );
}
