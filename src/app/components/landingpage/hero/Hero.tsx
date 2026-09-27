'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import VideoFrame from '../../shared/VideoFrame';

const Hero = () => {
  const { t } = useTranslation();
  const specs = t('hero.specs', { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  return (
    <Box id="top" component="section" sx={{ pt: { xs: 6, md: 9 }, pb: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 860, mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', mb: 2 }}
          >
            {t('hero.eyebrow')}
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
              lineHeight: { xs: '2.6rem', sm: '3.4rem', md: '4.1rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              whiteSpace: 'pre-line',
            }}
          >
            {t('hero.title')}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 3, fontSize: '1.0625rem', lineHeight: 1.7, mx: 'auto', maxWidth: 720 }}
          >
            {t('hero.body')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 4.5 }}
          >
            <Button href="#recorrido" variant="contained" color="primary" size="large" sx={{ px: 3 }}>
              {t('hero.primary')}
            </Button>
            <Button href="#flujo" variant="outlined" color="primary" size="large" sx={{ px: 3 }}>
              {t('hero.secondary')}
            </Button>
          </Stack>
        </Box>

        <Box id="recorrido" sx={{ mt: { xs: 6, md: 8 }, scrollMarginTop: '96px' }}>
          <VideoFrame
            src="/videos/brag.mp4"
            poster="/videos/brag.jpg"
            label={t('hero.videoCaption')}
            autoPlay
          />

          <Typography
            variant="caption"
            component="p"
            sx={{
              mt: 2,
              textAlign: 'center',
              color: 'text.secondary',
              fontFamily: 'monospace',
              letterSpacing: '0.08em',
            }}
          >
            {t('hero.videoCaption')}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
            py: { xs: 3, md: 4 },
          }}
        >
          <Grid container spacing={{ xs: 3, md: 2 }}>
            {specs.map((spec) => (
              <Grid key={spec.label} size={{ xs: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'primary.main',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {spec.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, display: 'block' }}
                  >
                    {spec.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
