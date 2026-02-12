import { Profile, Skill, Education, ContactInfo } from "../../../domain/entities/Profile";

export interface SanityProfile {
  profileText: string;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  contactInfo: {
    email: string;
    linkedin: string;
  };
  availability: string;
}

export function mapSanityProfileToDomain(sanityProfile: SanityProfile): Profile {
  return new Profile(
    sanityProfile.profileText,
    sanityProfile.skills.map(
      (s) =>
        ({
          category: s.category,
          items: s.items,
        }) as Skill
    ),
    sanityProfile.education.map(
      (e) =>
        ({
          degree: e.degree,
          institution: e.institution,
          year: e.year,
        }) as Education
    ),
    {
      email: sanityProfile.contactInfo.email,
      linkedin: sanityProfile.contactInfo.linkedin,
    } as ContactInfo,
    sanityProfile.availability
  );
}
