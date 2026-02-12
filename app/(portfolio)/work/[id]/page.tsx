import {
  ArrowLeft,
  Briefcase,
  Info,
  CheckCircle,
  AlertCircle,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkItemByIdUseCase } from "@/src/application/di/container";
import { uiLabels } from "@/src/infrastructure/config/ui-labels";

interface WorkDetailPageProps {
  readonly params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({
  params,
}: Readonly<WorkDetailPageProps>) {
  const { id } = await params;
  // Decode the ID from URL (handles Sanity _id format)
  const decodedId = decodeURIComponent(id);
  const item = await getWorkItemByIdUseCase.execute(decodedId);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {uiLabels.navigation.back}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          {item.title}
        </span>
      </div>

      {item.isEnterprise ? (
        <div className="flex flex-col gap-12">
          <div className="sketch-border bg-white p-8">
            <h2 className="text-5xl font-black uppercase mb-2">{item.title}</h2>
            <div className="flex gap-4 text-lg mb-6">
              <span className="flex items-center gap-2 italic">
                <Briefcase size={20} /> {item.description}
              </span>
              <span className="opacity-30">|</span>
              <span className="font-bold">{item.period || "Current"}</span>
            </div>
            <p className="text-xl max-w-3xl border-t-2 border-black border-dashed pt-6 italic">
              Focused on enterprise-scale logic and system wireframing.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <h3 className="text-3xl font-black uppercase underline decoration-4">
              {uiLabels.sections.subProjectsArchive}
            </h3>
            {item.projects?.map((proj) => {
              const ProjectCard = (
                <>
                  <h4 className="text-2xl font-black uppercase mb-2 underline">
                    {proj.name}
                  </h4>
                  {proj.desc && (
                    <p className="text-lg mb-4 opacity-75 italic">
                      {proj.desc}
                    </p>
                  )}
                  <div className="p-4 border-2 border-black border-dashed bg-gray-50 text-md leading-relaxed">
                    {uiLabels.sections.notes} {proj.details}
                  </div>
                </>
              );

              return proj.slug ? (
                <Link
                  key={proj.slug}
                  href={`/work/${encodeURIComponent(item.id)}/${encodeURIComponent(proj.slug)}`}
                  className="sketch-card bg-white p-8 hover:translate-y-[-4px] transition-transform block cursor-pointer"
                >
                  {ProjectCard}
                </Link>
              ) : (
                <div key={proj.name} className="sketch-card bg-white p-8">
                  {ProjectCard}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          <div className="sketch-card bg-white overflow-hidden">
            <div className="bg-[#e0e0e0] border-b-2 border-black p-4 flex items-center justify-between">
              <span className="font-black uppercase italic tracking-tighter">
                {uiLabels.sections.caseStudy} {item.title}
              </span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full border border-black bg-white"></div>
                <div className="w-3 h-3 rounded-full border border-black bg-white"></div>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-black uppercase mb-8 italic underline decoration-8 underline-offset-8 decoration-blue-200">
                {item.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8">
                  <div className="sketch-border p-6 bg-yellow-50 rotate-[-1deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <Info size={18} /> {uiLabels.sections.theChallenge}
                    </h4>
                    <p className="text-lg leading-relaxed">{item.context}</p>
                  </div>
                  <div className="sketch-border p-6 bg-red-50 rotate-[1deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <AlertCircle size={18} /> {uiLabels.sections.theProblem}
                    </h4>
                    <p className="text-lg leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="sketch-border p-6 bg-green-50 rotate-[-0.5deg]">
                    <h4 className="font-black uppercase flex items-center gap-2 mb-2">
                      <CheckCircle size={18} /> {uiLabels.sections.theSolution}
                    </h4>
                    <p className="text-lg leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="aspect-[4/3] bg-white border-4 border-black border-dashed flex items-center justify-center relative shadow-inner">
                    <ImageIcon size={64} className="opacity-20" />
                    <span className="font-bold text-xs uppercase opacity-50">
                      {uiLabels.sections.prototypePreview}
                    </span>
                  </div>
                  <button className="sketch-button w-full py-4 text-xl bg-blue-600 text-white font-black hover:bg-blue-700">
                    {uiLabels.buttons.launchMockup}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
