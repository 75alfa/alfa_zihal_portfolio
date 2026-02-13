import { notFound } from "next/navigation";
import { getWorkItemByIdUseCase } from "@/src/application/di/container";
import ProjectDetailClient from "./project-detail-client";
import { type PortableTextBlock } from "@portabletext/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ProjectDetailPageProps {
  readonly params: Promise<{ id: string; projectSlug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id, projectSlug } = await params;
  const decodedId = decodeURIComponent(id);
  const decodedSlug = decodeURIComponent(projectSlug);

  const workItem = await getWorkItemByIdUseCase.execute(decodedId);

  if (!workItem) {
    notFound();
  }

  const generateSlug = (name: string): string => {
    let slug = name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
    if (slug.startsWith("-")) slug = slug.slice(1);
    if (slug.endsWith("-")) slug = slug.slice(0, -1);
    return slug;
  };
  const project = workItem.projects?.find((p) => {
    const projectSlug = p.slug || generateSlug(p.name);
    return projectSlug === decodedSlug;
  });

  if (!project) {
    notFound();
  }

  const projectPlain: {
    name: string;
    slug: string;
    desc: string;
    details: string;
    fullDocumentation?: PortableTextBlock[];
    solutionImages?: Array<{
      asset: { _ref: string };
      alt?: string;
      caption?: string;
    }>;
  } = {
    name: project.name,
    slug: project.slug,
    desc: project.desc,
    details: project.details,
    fullDocumentation: project.fullDocumentation as PortableTextBlock[] | undefined,
    solutionImages: project.solutionImages,
  };

  return (
    <ProjectDetailClient
      workItemId={workItem.id}
      workItemTitle={workItem.title}
      project={projectPlain}
    />
  );
}
