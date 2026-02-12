export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
}

export class Profile {
  constructor(
    public readonly profileText: string,
    public readonly skills: Skill[],
    public readonly education: Education[],
    public readonly contactInfo: ContactInfo,
    public readonly availability: string
  ) {}
}
