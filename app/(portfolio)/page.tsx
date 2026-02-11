import { BlogTeaserSection } from "@/components/portfolio/BlogTeaserSection";
import { FinalCTASection } from "@/components/portfolio/FinalCTASection";
import { HomePageClient } from "@/components/portfolio/HomePageClient";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-32 pt-24 md:pt-32">
      <HomePageClient />
      <BlogTeaserSection />
      <FinalCTASection />
    </main>
  );
}
