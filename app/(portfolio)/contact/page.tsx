import { getSiteContentUseCase, getProfileContentUseCase } from "@/src/application/di/container";
import ContactPageClient from "./contact-client";

export default async function ContactPage() {
  const [siteContent, profile] = await Promise.all([
    getSiteContentUseCase.execute(),
    getProfileContentUseCase.execute(),
  ]);

  return <ContactPageClient siteContent={siteContent} profile={profile} />;
}
