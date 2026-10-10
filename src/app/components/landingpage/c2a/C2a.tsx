'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { CONTACT_HREF } from '@/utils/constants/contact';
import { assetPath } from '@/utils/assetPath';

const C2a = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 11 },
      }}
    >
      {/* Real-clinic photo behind a deep teal veil; decorative, text carries the alt. */}
      <Box
        component="img"
        src={assetPath('/images/content/treating-patient.avif')}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 35%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.88),
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ maxWidth: 620, mx: 'auto', color: '#ffffff' }}
          >
            {t('c2a.title')}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, maxWidth: 560, mx: 'auto', color: alpha('#ffffff', 0.85) }}
          >
            {t('c2a.body')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              href={CONTACT_HREF || '#recorrido'}
              variant="contained"
              size="large"
              sx={{
                px: 3,
                bgcolor: '#ffffff',
                color: 'primary.dark',
                '&:hover': { bgcolor: (theme) => alpha('#ffffff', 0.88) },
              }}
            >
              {t(CONTACT_HREF ? 'c2a.primary' : 'c2a.fallback')}
            </Button>
            <Button
              href="#flujo"
              variant="outlined"
              size="large"
              sx={{
                px: 3,
                borderColor: alpha('#ffffff', 0.6),
                color: '#ffffff',
                '&:hover': {
                  borderColor: '#ffffff',
                  bgcolor: alpha('#ffffff', 0.08),
                },
              }}
            >
              {t('c2a.secondary')}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default C2a;
