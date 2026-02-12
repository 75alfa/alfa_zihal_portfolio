"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/src/infrastructure/sanity/image";
import { uiLabels } from "@/src/infrastructure/config/ui-labels";

interface ProjectDetailClientProps {
  workItemId: string;
  workItemTitle: string;
  project: {
    name: string;
    slug: string;
    desc: string;
    details: string;
    fullDocumentation?: unknown;
    solutionImages?: Array<{
      asset: { _ref: string };
      alt?: string;
      caption?: string;
    }>;
  };
}

export default function ProjectDetailClient({
  workItemId,
  workItemTitle,
  project,
}: Readonly<ProjectDetailClientProps>) {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {uiLabels.navigation.back}
        </Link>
        <span className="opacity-30">/</span>
        <Link
          href={`/work/${encodeURIComponent(workItemId)}`}
          className="text-sm font-bold opacity-50 uppercase tracking-widest hover:opacity-75 transition-opacity"
        >
          {workItemTitle}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          {project.name}
        </span>
      </div>

      {/* Project Header */}
      <div className="sketch-border bg-white p-8 mb-12">
        <h1 className="text-5xl font-black uppercase mb-4">{project.name}</h1>
        {project.desc && (
          <p className="text-xl mb-6 opacity-75 italic">{project.desc}</p>
        )}
        {project.details && (
          <div className="p-4 border-2 border-black border-dashed bg-gray-50 text-md leading-relaxed">
            <span className="font-black uppercase text-sm">
              {uiLabels.sections.notes}:{" "}
            </span>
            {project.details}
          </div>
        )}
      </div>

      {/* Full Documentation */}
      {project.fullDocumentation && (
        <div className="sketch-card bg-white p-8 mb-12">
          <h2 className="text-3xl font-black uppercase mb-6 underline decoration-4">
            Full Documentation
          </h2>
          <div className="prose prose-lg max-w-none sketch-content">
            <PortableText
              value={project.fullDocumentation}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4 leading-relaxed">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-black uppercase mt-8 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-black uppercase mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-black uppercase mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="ml-4">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="ml-4">{children}</li>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-black">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  link: ({ children, value }) => (
                    <a
                      href={value?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-600 hover:text-blue-800"
                    >
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }) => {
                    if (!value?.asset) return null;
                    return (
                      <div className="my-8">
                        <Image
                          src={urlForImage({ asset: value.asset })
                            .width(800)
                            .height(600)
                            .url()}
                          alt={value.alt || "Documentation image"}
                          width={800}
                          height={600}
                          className="w-full h-auto border-2 border-black"
                        />
                        {value.alt && (
                          <p className="text-sm italic opacity-75 mt-2">
                            {value.alt}
                          </p>
                        )}
                      </div>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      )}

      {/* Solution Images Gallery */}
      {project.solutionImages && project.solutionImages.length > 0 && (
        <div className="sketch-card bg-white p-8">
          <h2 className="text-3xl font-black uppercase mb-6 underline decoration-4">
            Solution Images
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.solutionImages.map((img) => (
              <div key={img.asset._ref} className="flex flex-col gap-2">
                <div className="relative aspect-[4/3] border-2 border-black overflow-hidden">
                  <Image
                    src={urlForImage({ asset: img.asset })
                      .width(600)
                      .height(450)
                      .url()}
                    alt={img.alt || `Solution image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {img.caption && (
                  <p className="text-sm italic opacity-75 text-center">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
