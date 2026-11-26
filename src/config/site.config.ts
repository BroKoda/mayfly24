export const SECTION_IDS = {
  about: 'about',
  activities: 'what-we-do',
  community: 'community',
  collaboration: 'collaboration',
  values: 'values',
  vision: 'vision',
  contact: 'contact',
} as const;

/** The anchor every contact-referencing nav link and CTA points to — see `features.contact`. */
export const CONTACT_HREF = `#${SECTION_IDS.contact}`;

/**
 * No verified contact mailbox or social profile has been supplied for Mayfly24 yet.
 * Fill these in once confirmed — components only render a channel when it is non-null,
 * so leaving a value as `null` keeps the site free of broken or misleading links.
 */
export const siteConfig = {
  productionUrl: null as string | null,
  contact: {
    email: null as string | null,
  },
  social: [] as ReadonlyArray<{ readonly label: string; readonly href: string }>,
  /**
   * Temporarily hides the Contact section and everything that links to it (nav link, the
   * nav "Get in touch" CTA, and the Hero/Community/Collaboration CTAs) without deleting any
   * of that content — flip back to `true` to bring it all back.
   */
  features: {
    contact: false,
  },
} as const;
