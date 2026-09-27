'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import {
  IconBroadcast,
  IconBuildingHospital,
  IconCalendarEvent,
  IconCertificate,
  IconDental,
  IconFirstAidKit,
  IconShieldLock,
  IconStethoscope,
  IconUsers,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';

const ICONS = [
  IconCalendarEvent,
  IconDental,
  IconUsers,
  IconStethoscope,
  IconBuildingHospital,
  IconFirstAidKit,
  IconCertificate,
  IconBroadcast,
  IconShieldLock,
];

const ModulesSection = () => {
  const { t } = useTranslation();
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
        bgcolor: 'background.paper',
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

        <Grid container spacing={2} sx={{ mt: { xs: 3, md: 5 } }}>
          {modules.map((module, index) => {
            const Icon = ICONS[index];
            return (
              <Grid key={module.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <AnimationFadeIn delay={Math.min(index * 0.04, 0.24)}>
                  <Box
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2.5,
                      bgcolor: 'background.default',
                      p: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 1.5,
                        bgcolor: 'primary.light',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Icon size={20} color="#3D9CB0" strokeWidth={1.6} />
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      {module.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {module.body}
                    </Typography>
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
