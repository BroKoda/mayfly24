export const SECTION_IDS = {
  about: 'about',
  activities: 'what-we-do',
  community: 'community',
  collaboration: 'collaboration',
  values: 'values',
  vision: 'vision',
  contact: 'contact',
} as const;

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
} as const;
