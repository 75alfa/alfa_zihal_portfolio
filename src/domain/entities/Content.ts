export interface HeroContent {
  name: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  experienceBadge: string;
  heroImageOne?: {
    asset: { _ref: string };
  };
  heroImageTwo?: {
    asset: { _ref: string };
  };
}

export interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyContent {
  title: string;
  steps: MethodologyStep[];
  quote: string;
}

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  availabilityText: string;
  rateText: string;
}

export interface NavigationContent {
  canvasView: string;
  workHistory: string;
  contact: string;
  blog: string;
}

export interface FooterContent {
  tagline: string;
  linkedinLabel: string;
  dribbbleLabel: string;
  twitterLabel: string;
}

export class SiteContent {
  constructor(
    public readonly hero: HeroContent,
    public readonly methodology: MethodologyContent,
    public readonly cta: CTAContent,
    public readonly navigation: NavigationContent,
    public readonly footer: FooterContent,
    public readonly workSectionTitle: string
  ) {}
}
