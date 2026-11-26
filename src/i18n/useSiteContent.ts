import { useTranslation } from 'react-i18next';
import type { SiteContent } from '../types/content.types';

/**
 * The structured, typed site copy for the active language — re-renders whenever the
 * language changes. Sections render repeated/nested content directly from this object
 * rather than per-string `t()` calls, since most of it is arrays of objects, not flat text.
 */
export function useSiteContent(): SiteContent {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;

  return i18n.getResourceBundle(language, 'translation') as SiteContent;
}
