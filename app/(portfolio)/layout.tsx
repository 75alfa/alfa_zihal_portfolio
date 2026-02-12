import { getSiteContentUseCase } from "@/src/application/di/container";
import { PortfolioLayoutClient } from "./layout-client";

export default async function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteContent = await getSiteContentUseCase.execute();

  return (
    <PortfolioLayoutClient siteContent={siteContent}>
      {children}
    </PortfolioLayoutClient>
  );
}
