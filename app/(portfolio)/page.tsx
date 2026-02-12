import { BlogTeaserSection } from "@/components/portfolio/BlogTeaserSection";
import { FinalCTASection } from "@/components/portfolio/FinalCTASection";
import { HomePageClient } from "@/components/portfolio/HomePageClient";
import { getSiteContentUseCase, getWorkItemsUseCase } from "@/src/application/di/container";

export default async function HomePage() {
  const [siteContent, workItems] = await Promise.all([
    getSiteContentUseCase.execute(),
    getWorkItemsUseCase.execute(),
  ]);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-32 pt-24 md:pt-32">
      <HomePageClient siteContent={siteContent} workItems={workItems} />
      <BlogTeaserSection />
      <FinalCTASection siteContent={siteContent} />
    </main>
  );
}
