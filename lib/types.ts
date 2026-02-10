export interface WorkOverview {
  goal: string;
  logic: string;
  stat: string;
}

export interface Project {
  name: string;
  desc: string;
  details: string;
}

export interface WorkItem {
  id: string;
  title: string;
  type: string;
  description: string;
  isEnterprise: boolean;
  isMobile?: boolean;
  period?: string;
  logoInitials?: string;
  overview?: WorkOverview;
  projects?: Project[];
  context?: string;
  problem?: string;
  solution?: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}
