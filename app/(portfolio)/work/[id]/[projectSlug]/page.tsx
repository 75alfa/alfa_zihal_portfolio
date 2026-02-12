import { notFound } from "next/navigation";
import { getWorkItemByIdUseCase } from "@/src/application/di/container";
import ProjectDetailClient from "./project-detail-client";

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

  const project = workItem.projects?.find(
    (p) => p.slug === decodedSlug
  );

  if (!project) {
    notFound();
  }

  // Convert project to plain object for client component serialization
  const projectPlain = {
    name: project.name,
    slug: project.slug,
    desc: project.desc,
    details: project.details,
    fullDocumentation: project.fullDocumentation,
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
