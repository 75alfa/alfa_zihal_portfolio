import type { WorkItem, BlogPost } from "./types";

export const workItems: WorkItem[] = [
  {
    id: "ent1",
    title: "Global Tech Corp",
    type: "Enterprise",
    description: "Senior UX Designer (Contract)",
    isEnterprise: true,
    period: "2026 - Present",
    logoInitials: "GT",
    overview: {
      goal: "Lead internal design ops",
      logic: "Atomic System Architecture",
      stat: "3+ Scaled Products",
    },
    projects: [
      {
        name: "Internal CRM Overhaul",
        desc: "Simplified lead management for 500+ agents.",
        details: "Cohesive interface design.",
      },
      {
        name: "Cloud Admin Dashboard",
        desc: "Logic-mapping for complex server instances.",
        details: "Reduced errors by 30%.",
      },
      {
        name: "HR Portal",
        desc: "Redesigned onboarding flow.",
        details: "Condensed 12 steps into 4.",
      },
    ],
    tags: ["Enterprise", "B2B"],
    coverImage: "placeholder.png",
  },
  {
    id: "ent2",
    title: "FinStream Inc.",
    type: "Enterprise",
    description: "Lead Product Designer",
    period: "2026 - 2030",
    isEnterprise: true,
    logoInitials: "FS",
    overview: {
      goal: "Modernize legacy wealth app",
      logic: "Modular Logic Components",
      stat: "2.4x User Growth",
    },
    projects: [
      {
        name: "Wealth Management App",
        desc: "Design system for HNW clients.",
        details: "Charting and asset allocation.",
      },
      {
        name: "Risk Assessment Tool",
        desc: "Visualizing data for banking analysts.",
        details: "Automated report UI.",
      },
    ],
    tags: ["Finance", "SaaS"],
    coverImage: "placeholder.png",
  },
  {
    id: "p1",
    title: "SwiftPay FinTech",
    type: "Mobile App",
    description: "Low-fi mockup of the cross-border payment flow.",
    isEnterprise: false,
    isMobile: true,
    overview: {
      goal: "Reduce cross-border friction",
      logic: "Centralized Ledger System",
      stat: "+14% Success Rate",
    },
    context: "Digital Nomads struggle with hidden fees.",
    problem: "Opaque transaction finality.",
    solution: "Real-Time Calculator + Status Tracker.",
    tags: ["Mobile", "Individual"],
    coverImage: "placeholder.png",
  },
  {
    id: "p2",
    title: "EcoStore E-com",
    type: "Web Design",
    description: "Checkout flow and carbon-offset integration sketch.",
    isEnterprise: false,
    isMobile: false,
    overview: {
      goal: "Integrate carbon transparency",
      logic: "Embedded Offset API",
      stat: "8k trees planted",
    },
    context: "Sustainability impact is often hidden.",
    problem: "Low engagement with carbon metrics.",
    solution: "Integrated 'Tree points' in primary CTA.",
    tags: ["Web", "Individual"],
    coverImage: "placeholder.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Logic of Low-Fi sketching",
    date: "Jan 12, 2026",
    excerpt:
      "Why mapping out logical flows in wireframe mode saves weeks of rework during the high-fidelity phase.",
    tags: ["Strategy", "Philosophy"],
  },
  {
    id: "b2",
    title: "Designing for High-Density Data",
    date: "Dec 05, 2025",
    excerpt:
      "Lessons learned from building complex cloud dashboards for technical server administrators.",
    tags: ["Enterprise", "IA"],
  },
  {
    id: "b3",
    title: "Mobile Accessibility Hacks",
    date: "Nov 20, 2025",
    excerpt:
      "Quick wins for making complex fintech apps more accessible for diverse user capabilities.",
    tags: ["Accessibility", "Mobile"],
  },
];

export function getWorkItemById(id: string): WorkItem | undefined {
  return workItems.find((item) => item.id === id);
}
