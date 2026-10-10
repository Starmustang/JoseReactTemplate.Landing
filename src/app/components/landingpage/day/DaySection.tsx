'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import TelegramMock from './TelegramMock';
import { serif } from '@/utils/theme/Typography';

type Moment = { time: string; title: string; body: string };

/**
 * "Su día": four moments of a clinic day on a vertical timeline, next to the
 * assistant's real conversation. The timeline's shared left border is the
 * connecting line; the serif italic times keep the editorial tone.
 */
const DaySection = () => {
  const { t } = useTranslation();
  const moments = t('day.moments', { returnObjects: true }) as Moment[];

  return (
    <Box
      id="su-dia"
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: 'background.band',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: '96px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6, lg: 8 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimationFadeIn>
              <Box>
                <SectionHeading
                  eyebrow={t('day.eyebrow')}
                  title={t('day.title')}
                  body={t('day.body')}
                  maxWidth={560}
                />

                <Box sx={{ mt: { xs: 3.5, md: 4.5 } }}>
                  {moments.map((moment, index) => (
                    <Box key={moment.time} sx={{ display: 'flex', gap: { xs: 2, md: 2.5 } }}>
                      <Typography
                        sx={{
                          fontFamily: serif.style.fontFamily,
                          fontStyle: 'italic',
                          fontSize: '1.5rem',
                          lineHeight: 1.3,
                          color: 'primary.main',
                          width: 72,
                          flexShrink: 0,
                          pt: 0.25,
                        }}
                      >
                        {moment.time}
                      </Typography>
                      <Box
                        sx={{
                          borderLeft: '1px solid',
                          borderColor: 'divider',
                          pl: { xs: 2.5, md: 3 },
                          pb: index === moments.length - 1 ? 0 : 3.5,
                        }}
                      >
                        <Typography sx={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4 }}>
                          {moment.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.75 }}>
                          {moment.body}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimationFadeIn>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <AnimationFadeIn delay={0.1}>
              <Box>
                <TelegramMock />
                <Typography
                  variant="caption"
                  component="p"
                  sx={{ mt: 1.5, textAlign: 'center', color: 'text.secondary' }}
                >
                  {t('day.chatCaption')}
                </Typography>
              </Box>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DaySection;
