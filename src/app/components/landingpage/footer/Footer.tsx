'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import BrandMark from '../../shared/BrandMark';
import LanguageToggle from '../header/LanguageToggle';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.band',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
            <BrandMark />
            <Box>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, mb: 0.5 }}>
                {t('footer.tagline')}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                {t('footer.madeWith')}
              </Typography>
            </Box>
          </Box>

          <LanguageToggle />
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
          {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
