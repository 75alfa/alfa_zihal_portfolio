import {
  SiteContent,
  HeroContent,
  MethodologyContent,
  MethodologyStep,
  CTAContent,
  NavigationContent,
  FooterContent,
} from "../../../domain/entities/Content";

export interface SanitySiteContent {
  hero: {
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
  };
  methodology?: {
    title?: string;
    steps?: Array<{
      number: number;
      title: string;
      description: string;
      icon: string;
    }>;
    quote?: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    availabilityText?: string;
    rateText?: string;
  };
  navigation?: {
    canvasView?: string;
    workHistory?: string;
    contact?: string;
    blog?: string;
  } | null;
  footer?: {
    tagline?: string;
    linkedinLabel?: string;
    dribbbleLabel?: string;
    twitterLabel?: string;
  } | null;
  workSectionTitle: string;
}

export function mapSanityContentToDomain(
  sanityContent: SanitySiteContent,
): SiteContent {
  return new SiteContent(
    {
      name: sanityContent.hero?.name || "",
      headline: sanityContent.hero.headline,
      subheadline: sanityContent.hero.subheadline,
      ctaPrimary: sanityContent.hero?.ctaPrimary || "",
      ctaSecondary: sanityContent.hero?.ctaSecondary || "",
      experienceBadge: sanityContent.hero?.experienceBadge || "",
      heroImageOne: sanityContent.hero?.heroImageOne,
      heroImageTwo: sanityContent.hero?.heroImageTwo,
    } as HeroContent,
    {
      title: sanityContent.methodology?.title || "",
      steps: (sanityContent.methodology?.steps || []).map(
        (s) =>
          ({
            number: s.number,
            title: s.title,
            description: s.description,
            icon: s.icon,
          }) as MethodologyStep,
      ),
      quote: sanityContent.methodology?.quote || "",
    } as MethodologyContent,
    {
      title: sanityContent.cta?.title || "",
      description: sanityContent.cta?.description || "",
      buttonText: sanityContent.cta?.buttonText || "",
      availabilityText: sanityContent.cta?.availabilityText || "",
      rateText: sanityContent.cta?.rateText || "",
    } as CTAContent,
    {
      canvasView: sanityContent.navigation?.canvasView || "",
      workHistory: sanityContent.navigation?.workHistory || "",
      contact: sanityContent.navigation?.contact || "",
      blog: sanityContent.navigation?.blog || "",
    } as NavigationContent,
    {
      tagline: sanityContent.footer?.tagline || "",
      linkedinLabel: sanityContent.footer?.linkedinLabel || "",
      dribbbleLabel: sanityContent.footer?.dribbbleLabel || "",
      twitterLabel: sanityContent.footer?.twitterLabel || "",
    } as FooterContent,
    sanityContent.workSectionTitle,
  );
}
