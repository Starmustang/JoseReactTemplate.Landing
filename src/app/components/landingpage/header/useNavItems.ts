'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

export type NavItem = { label: string; href: string };

export const useNavItems = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    { label: t('nav.product'), href: '#sistema' },
    { label: t('nav.odontogram'), href: '#odontograma' },
    { label: t('nav.schedule'), href: '#agenda' },
    { label: t('nav.workflow'), href: '#flujo' },
    { label: t('nav.stack'), href: '#arquitectura' },
  ];
};

export default useNavItems;
