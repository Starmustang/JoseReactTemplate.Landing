'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { IconBolt, IconCalendarCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import WeekView from './WeekView';

const ScheduleSection = () => {
  const { t } = useTranslation();
  const rules = t('schedule.rules', { returnObjects: true }) as string[];

  return (
    <Box
      id="agenda"
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, lg: 7 }}>
            <AnimationFadeIn>
              <WeekView />
            </AnimationFadeIn>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <AnimationFadeIn delay={0.1}>
              <Box>
                <SectionHeading
                  eyebrow={t('schedule.eyebrow')}
                  title={t('schedule.title')}
                  body={t('schedule.body')}
                  maxWidth={560}
                />

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
                    <IconCalendarCheck size={18} color="#3D9CB0" strokeWidth={1.7} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {t('schedule.rulesTitle')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {rules.map((rule) => (
                      <Chip
                        key={rule}
                        label={rule}
                        size="small"
                        sx={{
                          bgcolor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.secondary',
                          fontFamily: 'monospace',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2, fontSize: '0.8125rem' }}
                  >
                    {t('schedule.slots')}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'flex-start',
                  }}
                >
                  <IconBolt size={18} color="#4BD08B" strokeWidth={1.8} style={{ flexShrink: 0, marginTop: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8125rem' }}>
                    {t('schedule.realtime')}
                  </Typography>
                </Box>
              </Box>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScheduleSection;
