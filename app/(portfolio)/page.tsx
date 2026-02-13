import { BlogTeaserSection } from "@/components/portfolio/BlogTeaserSection";
import { FinalCTASection } from "@/components/portfolio/FinalCTASection";
import { HomePageClient } from "@/components/portfolio/HomePageClient";
import {
  getSiteContentUseCase,
  getWorkItemsUseCase,
} from "@/src/application/di/container";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const [siteContent, workItems] = await Promise.all([
    getSiteContentUseCase.execute(),
    getWorkItemsUseCase.execute(),
  ]);

  const workItemsPlain = workItems.map((item) => ({
    id: item.id,
    title: item.title,
    type: item.type,
    description: item.description,
    isEnterprise: item.isEnterprise,
    isMobile: item.isMobile,
    period: item.period,
    logoInitials: item.logoInitials,
    coverImage: item.coverImage,
    overview: item.overview,
    projects: item.projects,
    context: item.context,
    problem: item.problem,
    solution: item.solution,
    tags: item.tags,
  }));

  const siteContentPlain = siteContent
    ? {
        hero: siteContent.hero,
        methodology: siteContent.methodology,
        cta: siteContent.cta,
        navigation: siteContent.navigation,
        footer: siteContent.footer,
        workSectionTitle: siteContent.workSectionTitle,
      }
    : null;

  return (
    <main className="max-w-5xl mx-auto px-6 pb-32 pt-24 md:pt-32">
      <HomePageClient
        siteContent={siteContentPlain}
        workItems={workItemsPlain}
      />
      <BlogTeaserSection />
      <FinalCTASection siteContent={siteContentPlain} />
    </main>
  );
}
