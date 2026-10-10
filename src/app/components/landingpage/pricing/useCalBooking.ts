'use client';
import { useCallback } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { CAL_LINK } from '@/utils/constants/booking';

/**
 * Opens the Cal.com calendar in a modal, tinted with the brand colour.
 * `preloadBooking` fetches the embed script on intent (hover/focus) so the
 * first click opens without a pause, and readers who never book never
 * download it.
 */
export const useCalBooking = () => {
  const brandColor = useTheme().palette.primary.main;
  const { i18n } = useTranslation();
  const language = i18n.language;

  const preloadBooking = useCallback(() => {
    void getCalApi();
  }, []);

  const openBooking = useCallback(async () => {
    const cal = await getCalApi();
    cal('ui', {
      theme: 'light',
      layout: 'month_view',
      hideEventTypeDetails: false,
      styles: { branding: { brandColor } },
    });
    cal('modal', {
      calLink: CAL_LINK,
      // `language` reaches the booking page but Cal currently ignores it: the
      // calendar's own UI follows the visitor's browser language, so the ES/EN
      // toggle only switches our copy, not Cal's. Kept for when Cal honours it.
      config: { layout: 'month_view', theme: 'light', language },
    });
  }, [brandColor, language]);

  return { openBooking, preloadBooking };
};

export default useCalBooking;
