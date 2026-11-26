import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import hu from './locales/hu/translation.json';
import { getStorageKey, STORAGE_KEYS } from '../lib/storage';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './languages';

export const i18nReady = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hu: { translation: hu },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES.map((language) => language.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // Namespaced under our own registered key (src/lib/storage.ts) rather than the
      // detector's generic default ("i18nextLng"), so it reads as this app's own persisted
      // setting instead of implicit library behavior.
      lookupLocalStorage: getStorageKey(STORAGE_KEYS.language),
    },
  });

export default i18next;
