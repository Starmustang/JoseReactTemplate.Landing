'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import VideoFrame from '../../shared/VideoFrame';
import { serif } from '@/utils/theme/Typography';

const Hero = () => {
  const { t } = useTranslation();
  // The title carries a line break: the second line is the promise, set in
  // italic serif — the only italic headline on the page.
  const [titleLead, titleEm] = t('hero.title').split('\n');

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

          <Typography variant="h1" component="h1">
            {titleLead}
            <br />
            <Box
              component="span"
              sx={{ fontStyle: 'italic', color: 'primary.dark', fontFamily: serif.style.fontFamily }}
            >
              {titleEm}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 3, mx: 'auto', maxWidth: 640 }}
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

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 3, display: 'block' }}
          >
            {t('hero.proof')}
          </Typography>
        </Box>

        <Box id="recorrido" sx={{ mt: { xs: 6, md: 8 }, scrollMarginTop: '96px' }}>
          <VideoFrame
            name="hero"
            label={t('hero.videoCaption')}
            autoPlay
          />

          <Typography
            variant="caption"
            component="p"
            sx={{ mt: 2, textAlign: 'center', color: 'text.secondary' }}
          >
            {t('hero.videoCaption')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
