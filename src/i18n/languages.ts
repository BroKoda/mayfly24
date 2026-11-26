export interface SupportedLanguage {
  readonly code: string;
  readonly label: string;
}

/**
 * Only list a language here once its resource in `src/i18n/locales/<code>/translation.json`
 * is a complete translation. `LanguageSwitcher` renders nothing while this has a single
 * entry, so adding Hungarian or Serbian here (plus their resource file and the import in
 * `src/i18n/index.ts`) is what turns the switcher on — no component changes needed.
 */
export const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = [
  { code: 'en', label: 'English' },
  { code: 'hu', label: 'Magyar' },
];

export const DEFAULT_LANGUAGE = 'en';
