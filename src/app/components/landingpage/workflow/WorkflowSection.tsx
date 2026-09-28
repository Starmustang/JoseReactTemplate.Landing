'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { IconBellRinging } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import VideoFrame from '../../shared/VideoFrame';

const StepRail = ({ steps }: { steps: string[] }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
      gap: 1.5,
    }}
  >
    {steps.map((step, index) => (
      <Box
        key={step}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1.5,
          bgcolor: 'background.paper',
          px: 1.5,
          py: 1.25,
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
        }}
      >
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: 0.75,
            bgcolor: 'primary.light',
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {index + 1}
        </Box>
        <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>
          {step}
        </Typography>
      </Box>
    ))}
  </Box>
);

const WorkflowSection = () => {
  const { t } = useTranslation();
  const notes = t('workflow.notes', { returnObjects: true }) as string[];
  const steps = t('workflow.steps', { returnObjects: true }) as string[];
  const reminders = t('workflow.reminders', { returnObjects: true }) as {
    name: string;
    when: string;
  }[];

  return (
    <Box
      id="flujo"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '96px' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-end">
          <Grid size={{ xs: 12, lg: 8 }}>
            <SectionHeading
              eyebrow={t('workflow.eyebrow')}
              title={t('workflow.title')}
              body={t('workflow.body')}
              maxWidth={640}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 4, md: 5 } }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'text.secondary', mb: 1.5 }}
          >
            {t('workflow.stepsTitle')}
          </Typography>
          <StepRail steps={steps} />
        </Box>

        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <AnimationFadeIn>
            <VideoFrame
              src="/videos/workflow.mp4"
              webmSrc="/videos/workflow.webm"
              poster="/videos/workflow.jpg"
              label={t('workflow.videoCaption')}
              autoPlay
            />
          </AnimationFadeIn>
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
            {t('workflow.videoCaption')}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ mt: { xs: 2, md: 3 } }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {notes.map((note) => (
                <Box
                  component="li"
                  key={note}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    py: 1.75,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      flexShrink: 0,
                      mt: 1,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {note}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2.5,
                bgcolor: 'background.paper',
                p: 2.5,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2 }}>
                <IconBellRinging size={18} color="#3D9CB0" strokeWidth={1.7} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {t('workflow.remindersTitle')}
                </Typography>
              </Box>

              {reminders.map((reminder, index) => (
                <Box
                  key={reminder.name}
                  sx={{
                    py: 1.25,
                    borderTop: index === 0 ? 'none' : '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                    {reminder.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.25 }}>
                    {reminder.when}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkflowSection;
