'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { CONTACT_HREF } from '@/utils/constants/contact';

const C2a = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'background.band',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ maxWidth: 620, mx: 'auto' }}
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
            <Button
              href={CONTACT_HREF || '#recorrido'}
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 3 }}
            >
              {t(CONTACT_HREF ? 'c2a.primary' : 'c2a.fallback')}
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
