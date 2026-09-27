'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import ConsoleMock from './ConsoleMock';
import TelegramMock from './TelegramMock';

const BulletList = ({ items }: { items: string[] }) => (
  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
    {items.map((item) => (
      <Box
        component="li"
        key={item}
        sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start', mb: 1.25 }}
      >
        <IconCheck
          size={17}
          color="#3D9CB0"
          strokeWidth={2}
          style={{ flexShrink: 0, marginTop: 3 }}
        />
        <Typography variant="body2" color="text.secondary">
          {item}
        </Typography>
      </Box>
    ))}
  </Box>
);

const TwoHalves = () => {
  const { t } = useTranslation();
  const clinicPoints = t('halves.clinicPoints', { returnObjects: true }) as string[];
  const patientPoints = t('halves.patientPoints', { returnObjects: true }) as string[];

  return (
    <Box
      id="sistema"
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: '96px',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow={t('halves.eyebrow')}
          title={t('halves.title')}
          body={t('halves.body')}
          align="center"
          maxWidth={880}
        />

        <Grid container spacing={4} sx={{ mt: { xs: 3, md: 5 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimationFadeIn>
              <Box>
                <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                  {t('halves.clinicTitle')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t('halves.clinicBody')}
                </Typography>
                <BulletList items={clinicPoints} />
                <Box sx={{ mt: 4 }}>
                  <ConsoleMock />
                </Box>
              </Box>
            </AnimationFadeIn>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <AnimationFadeIn delay={0.1}>
              <Box>
                <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                  {t('halves.patientTitle')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t('halves.patientBody')}
                </Typography>
                <BulletList items={patientPoints} />
                <Box sx={{ mt: 4 }}>
                  <TelegramMock />
                </Box>
              </Box>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TwoHalves;
