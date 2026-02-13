import {
  getSiteContentUseCase,
  getProfileContentUseCase,
} from "@/src/application/di/container";
import ContactPageClient from "./contact-client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ContactPage() {
  const [siteContent, profile] = await Promise.all([
    getSiteContentUseCase.execute(),
    getProfileContentUseCase.execute(),
  ]);

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

  const profilePlain = profile
    ? {
        profileText: profile.profileText,
        skills: profile.skills,
        education: profile.education,
        contactInfo: profile.contactInfo,
        availability: profile.availability,
      }
    : null;

  return (
    <ContactPageClient siteContent={siteContentPlain} profile={profilePlain} />
  );
}
