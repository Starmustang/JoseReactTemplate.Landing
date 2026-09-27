'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const C2a = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 120% at 50% 0%, rgba(61,156,176,0.16), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              lineHeight: { xs: '2.1rem', md: '2.6rem' },
              maxWidth: 620,
              mx: 'auto',
            }}
          >
            {t('c2a.title')}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 560, mx: 'auto' }}
          >
            {t('c2a.body')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button href="#recorrido" variant="contained" color="primary" size="large" sx={{ px: 3 }}>
              {t('c2a.primary')}
            </Button>
            <Button href="#flujo" variant="outlined" color="primary" size="large" sx={{ px: 3 }}>
              {t('c2a.secondary')}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default C2a;
