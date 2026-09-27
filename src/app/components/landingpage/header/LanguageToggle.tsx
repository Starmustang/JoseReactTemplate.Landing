'use client';
import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import i18n, { LANGUAGES, LANGUAGE_STORAGE_KEY } from '@/utils/i18n';

/**
 * ES / EN segmented toggle. Spanish is the default and the product's own
 * language; English is offered for anyone reading the page from outside.
 */
const LanguageToggle = ({ compact = false }: { compact?: boolean }) => {
  const [active, setActive] = React.useState<string>(i18n.language || 'es');

  React.useEffect(() => {
    const onChange = (lng: string) => setActive(lng);
    i18n.on('languageChanged', onChange);
    return () => {
      i18n.off('languageChanged', onChange);
    };
  }, []);

  const select = (code: string) => {
    i18n.changeLanguage(code);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: '2px',
        gap: '2px',
        bgcolor: 'background.default',
      }}
    >
      {LANGUAGES.map((language) => {
        const selected = active === language.code;
        return (
          <ButtonBase
            key={language.code}
            onClick={() => select(language.code)}
            aria-pressed={selected}
            aria-label={language.name}
            sx={{
              px: compact ? 1.1 : 1.4,
              py: 0.5,
              borderRadius: 0.75,
              fontFamily: 'inherit',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: selected ? '#101B24' : 'text.secondary',
              bgcolor: selected ? 'primary.main' : 'transparent',
              transition: 'background-color 120ms ease, color 120ms ease',
              '&:hover': {
                bgcolor: selected ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            {language.label}
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default LanguageToggle;
