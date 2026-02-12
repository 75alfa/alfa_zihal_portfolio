import { WorkItem, WorkOverview, Project } from "../../../domain/entities/WorkItem";

export interface SanityWorkItem {
  _id: string;
  title: string;
  type: string;
  description: string;
  isEnterprise: boolean;
  isMobile?: boolean;
  period?: string;
  logoInitials?: string;
  coverImage?: {
    asset: { _ref: string };
  };
  overview?: {
    goal: string;
    logic: string;
    stat: string;
  };
  projects?: Array<{
    name: string;
    desc: string;
    details: string;
  }>;
  context?: string;
  problem?: string;
  solution?: string;
  tags?: string[];
}

export function mapSanityWorkItemToDomain(sanityItem: SanityWorkItem): WorkItem {
  return new WorkItem(
    sanityItem._id,
    sanityItem.title,
    sanityItem.type,
    sanityItem.description,
    sanityItem.isEnterprise,
    sanityItem.isMobile,
    sanityItem.period,
    sanityItem.logoInitials,
    sanityItem.coverImage ? sanityItem.coverImage : undefined,
    sanityItem.overview
      ? {
          goal: sanityItem.overview.goal,
          logic: sanityItem.overview.logic,
          stat: sanityItem.overview.stat,
        }
      : undefined,
    sanityItem.projects?.map(
      (p) =>
        ({
          name: p.name,
          desc: p.desc,
          details: p.details,
        }) as Project
    ),
    sanityItem.context,
    sanityItem.problem,
    sanityItem.solution,
    sanityItem.tags
  );
}
