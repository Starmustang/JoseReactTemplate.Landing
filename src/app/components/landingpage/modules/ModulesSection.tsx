'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import {
  IconBuildingHospital,
  IconCalendarEvent,
  IconClipboardList,
  IconCoin,
  IconDental,
  IconMessageCircle,
  IconShieldLock,
  IconStethoscope,
} from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import VideoFrame from '../../shared/VideoFrame';

const ICONS = [
  IconCalendarEvent,
  IconClipboardList,
  IconDental,
  IconStethoscope,
  IconBuildingHospital,
  IconCoin,
  IconMessageCircle,
  IconShieldLock,
];

const ModulesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const modules = t('modules.items', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  return (
    <Box
      id="modulos"
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: 'background.band',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow={t('modules.eyebrow')}
          title={t('modules.title')}
          body={t('modules.body')}
          maxWidth={720}
        />

        <Box sx={{ mt: { xs: 4, md: 5 } }}>
          <AnimationFadeIn>
            <VideoFrame
              name="modules"
              label={t('modules.videoCaption')}
              autoPlay
            />
          </AnimationFadeIn>
          <Typography
            variant="caption"
            component="p"
            sx={{ mt: 2, textAlign: 'center', color: 'text.secondary' }}
          >
            {t('modules.videoCaption')}
          </Typography>
        </Box>

        <Grid
          container
          columnSpacing={{ md: 6 }}
          sx={{ mt: { xs: 3, md: 4 } }}
        >
          {modules.map((module, index) => {
            const Icon = ICONS[index];
            return (
              <Grid key={module.title} size={{ xs: 12, md: 6 }}>
                <AnimationFadeIn delay={Math.min(index * 0.04, 0.24)}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      py: 2.5,
                      // Rule above each row except the first visible one.
                      // Longhands only: a responsive `borderTop` shorthand
                      // would re-set the colour to currentColor.
                      borderTopWidth: { xs: index === 0 ? 0 : 1, md: index < 2 ? 0 : 1 },
                      borderTopStyle: 'solid',
                      borderTopColor: 'divider',
                    }}
                  >
                    <Icon
                      size={20}
                      color={theme.palette.primary.main}
                      strokeWidth={1.6}
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <Box>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}>
                        {module.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {module.body}
                      </Typography>
                    </Box>
                  </Box>
                </AnimationFadeIn>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModulesSection;
