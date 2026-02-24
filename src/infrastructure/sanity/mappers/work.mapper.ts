import { WorkItem, Project } from "../../../domain/entities/WorkItem";

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
  role?: string;
  tools?: string[];
  timeline?: string;
  overview?: {
    goal: string;
    logic: string;
    stat: string;
  };
  projects?: Array<{
    name: string;
    slug?: {
      current: string;
    };
    desc: string;
    details: any;
    fullDocumentation?: any;
    solutionImages?: Array<{
      asset: { _ref: string };
      alt?: string;
      caption?: string;
    }>;
  }>;
  context?: string;
  problem?: string;
  solution?: string;
  tags?: string[];
}

export function mapSanityWorkItemToDomain(sanityItem: SanityWorkItem): WorkItem {
  return new WorkItem(
    sanityItem._id || "",
    sanityItem.title || "",
    sanityItem.type || "",
    sanityItem.description || "",
    sanityItem.isEnterprise ?? false,
    sanityItem.isMobile,
    sanityItem.period,
    sanityItem.logoInitials,
    sanityItem.coverImage ?? undefined,
    sanityItem.role,
    sanityItem.tools,
    sanityItem.timeline,
    sanityItem.overview
      ? {
        goal: sanityItem.overview.goal || "",
        logic: sanityItem.overview.logic || "",
        stat: sanityItem.overview.stat || "",
      }
      : undefined,
    sanityItem.projects?.map(
      (p) =>
        ({
          name: p.name || "",
          slug: p.slug?.current || "",
          desc: p.desc || "",
          details: p.details || "",
          fullDocumentation: p.fullDocumentation,
          solutionImages: p.solutionImages,
        }) as Project
    ),
    sanityItem.context,
    sanityItem.problem,
    sanityItem.solution,
    sanityItem.tags || []
  );
}
