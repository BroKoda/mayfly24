import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n/languages';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

  if (SUPPORTED_LANGUAGES.length < 2) {
    return null;
  }

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {SUPPORTED_LANGUAGES.map((language) => {
        const isActive = activeLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            className={`language-switcher__option ${isActive ? 'is-active' : ''}`.trim()}
            aria-pressed={isActive}
            aria-label={language.label}
            onClick={() => {
              void i18n.changeLanguage(language.code);
            }}
          >
            {language.code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
