export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly headlineLines: readonly string[];
  readonly supportingCopy: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta: { readonly label: string; readonly href: string };
}

export interface AboutHighlight {
  readonly title: string;
  readonly description: string;
}

export interface AboutContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly intro: string;
  readonly highlights: readonly AboutHighlight[];
}

export interface ActivityPillar {
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly status: 'current' | 'evolving';
}

export interface ActivitiesContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly pillars: readonly [ActivityPillar, ActivityPillar];
}

export interface CommunityContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly intro: string;
  readonly offerings: readonly string[];
  readonly initiatives: readonly string[];
  readonly cta: { readonly label: string; readonly href: string };
}

export interface CollaborationContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly principles: readonly string[];
  readonly supportingCopy: string;
  readonly focusAreas: readonly string[];
  readonly cta: { readonly label: string; readonly href: string };
}

export interface ValueItem {
  readonly title: string;
  readonly description: string;
}

export interface ValuesContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly values: readonly ValueItem[];
}

export interface VisionContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly ambitions: readonly string[];
  readonly closingStatement: string;
}

export interface ContactContent {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly intro: string;
  readonly reasons: readonly string[];
}

export interface FooterContent {
  readonly brandStatement: string;
  readonly copyrightHolder: string;
}

export interface SiteContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly brandName: string;
  readonly navLinks: readonly NavLink[];
  readonly navCta: { readonly label: string; readonly href: string };
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly activities: ActivitiesContent;
  readonly community: CommunityContent;
  readonly collaboration: CollaborationContent;
  readonly values: ValuesContent;
  readonly vision: VisionContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
}
