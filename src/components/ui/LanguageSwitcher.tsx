import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n/languages';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  if (SUPPORTED_LANGUAGES.length < 2) {
    return null;
  }

  return (
    <select
      aria-label="Select language"
      className="form-select form-select-sm w-auto"
      value={i18n.resolvedLanguage ?? i18n.language}
      onChange={(event) => {
        void i18n.changeLanguage(event.target.value);
      }}
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
