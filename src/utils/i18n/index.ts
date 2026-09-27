import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

export const LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const LANGUAGE_STORAGE_KEY = 'breton-landing-language';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    supportedLngs: LANGUAGES.map((language) => language.code),
    interpolation: { escapeValue: false },
  });
}

export default i18n;
