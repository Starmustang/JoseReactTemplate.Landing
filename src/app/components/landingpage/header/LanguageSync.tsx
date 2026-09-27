'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { LANGUAGES, LANGUAGE_STORAGE_KEY } from '@/utils/i18n';

const isSupported = (code: string | null | undefined): code is string =>
  !!code && LANGUAGES.some((language) => language.code === code);

/**
 * Resolves the starting language, in order: `?lang=` in the URL, then the stored
 * preference, then Spanish (the default). Also keeps the document title and the
 * `lang` attribute in step with i18next. Rendered once, outputs nothing.
 */
const LanguageSync = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const next = isSupported(fromUrl) ? fromUrl : isSupported(stored) ? stored : null;

    if (!next || next === i18n.language) return;

    // Each component subscribes to i18next from its own mount effect, and this
    // effect belongs to the first child of the page, so it runs before its
    // siblings'. Changing the language here would emit `languageChanged` before
    // they are listening, leaving the header translated and the body not.
    // Deferring one tick lets every subscriber register first.
    const timer = window.setTimeout(() => i18n.changeLanguage(next), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = t('meta.title');
    document.documentElement.lang = i18n.language;
  }, [t]);

  return null;
};

export default LanguageSync;
