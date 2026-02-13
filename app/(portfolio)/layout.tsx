import { getSiteContentUseCase } from "@/src/application/di/container";
import { PortfolioLayoutClient } from "./layout-client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteContent = await getSiteContentUseCase.execute();

  // Convert SiteContent class instance to plain object for client component serialization
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
    <PortfolioLayoutClient siteContent={siteContentPlain}>
      {children}
    </PortfolioLayoutClient>
  );
}
