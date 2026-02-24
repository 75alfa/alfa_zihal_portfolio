export interface WorkOverview {
  goal: string;
  logic: string;
  stat: string;
}

export interface Project {
  name: string;
  slug: string;
  desc: string;
  details: any; // PortableText type
  fullDocumentation?: any; // PortableText type
  solutionImages?: Array<{
    asset: { _ref: string };
    alt?: string;
    caption?: string;
  }>;
}

export class WorkItem {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly type: string,
    public readonly description: string,
    public readonly isEnterprise: boolean,
    public readonly isMobile?: boolean,
    public readonly period?: string,
    public readonly logoInitials?: string,
    public readonly coverImage?: {
      asset: { _ref: string };
    },
    public readonly role?: string,
    public readonly tools?: string[],
    public readonly timeline?: string,
    public readonly overview?: WorkOverview,
    public readonly projects?: Project[],
    public readonly context?: string,
    public readonly problem?: string,
    public readonly solution?: string,
    public readonly tags?: string[]
  ) { }
}
