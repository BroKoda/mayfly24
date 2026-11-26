/**
 * Thin, namespaced wrapper around `window.localStorage` — the single place any new persisted
 * setting should register a key as the site grows (user preferences, dismissed banners, etc.).
 * Every key lives under one app-specific prefix, so this site's storage never collides with
 * anything else on the same origin, and every call is defensive — private browsing, a full
 * quota, or `localStorage` being disabled all fail silently rather than throwing, since no
 * persisted setting here is ever required for the page to work.
 */

const STORAGE_PREFIX = 'mayfly24:';

/** Centralised registry of every key this app persists to localStorage. */
export const STORAGE_KEYS = {
  language: 'language',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * The literal `localStorage` key for a registered setting. Mainly for wiring a registered key
 * into a third-party option that needs the key name itself (e.g.
 * `i18next-browser-languagedetector`'s `lookupLocalStorage`) rather than going through
 * `getStoredValue`/`setStoredValue` below.
 */
export function getStorageKey(key: StorageKey): string {
  return `${STORAGE_PREFIX}${key}`;
}

export function getStoredValue(key: StorageKey): string | null {
  try {
    return window.localStorage.getItem(getStorageKey(key));
  } catch {
    return null;
  }
}

export function setStoredValue(key: StorageKey, value: string): void {
  try {
    window.localStorage.setItem(getStorageKey(key), value);
  } catch {
    // Storage unavailable — nothing to do; the app works fine without persistence.
  }
}

export function removeStoredValue(key: StorageKey): void {
  try {
    window.localStorage.removeItem(getStorageKey(key));
  } catch {
    // Storage unavailable — nothing to do.
  }
}
