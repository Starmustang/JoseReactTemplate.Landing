'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { IconShieldCheck } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import PhotoFrame from '../../shared/PhotoFrame';
import ToothChart from './ToothChart';
import ToothDetail from './ToothDetail';

const OdontogramSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      id="odontograma"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '96px' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeading
              eyebrow={t('odontogram.eyebrow')}
              title={t('odontogram.title')}
              body={t('odontogram.body')}
              maxWidth={760}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimationFadeIn delay={0.1}>
              <PhotoFrame
                src="/images/content/clinical-exam.avif"
                alt={t('photos.odontogram')}
                aspectRatio="4 / 3"
              />
            </AnimationFadeIn>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <AnimationFadeIn>
            <ToothChart />
          </AnimationFadeIn>
        </Box>

        <Grid container spacing={4} sx={{ mt: { xs: 2, md: 3 } }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <AnimationFadeIn>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
                  {t('odontogram.demoBody')}
                </Typography>
                <ToothDetail />
              </Box>
            </AnimationFadeIn>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <AnimationFadeIn delay={0.1}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '16px',
                  bgcolor: 'background.paper',
                  p: 3,
                  position: { lg: 'sticky' },
                  top: { lg: 104 },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <IconShieldCheck size={22} color={theme.palette.primary.main} strokeWidth={1.6} />
                  <Typography variant="h5" component="h3">
                    {t('odontogram.regressionTitle')}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {t('odontogram.regressionBody')}
                </Typography>
              </Box>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OdontogramSection;
