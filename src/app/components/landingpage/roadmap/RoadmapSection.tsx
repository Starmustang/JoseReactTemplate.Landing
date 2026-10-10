'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import {
  IconBrandWhatsapp,
  IconBusinessplan,
  IconMapRoute,
} from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import PhotoFrame from '../../shared/PhotoFrame';

const ICONS = [IconBrandWhatsapp, IconBusinessplan, IconMapRoute];

type RoadmapItem = { title: string; body: string };

/**
 * "En camino": what is being built next. The cards carry an "in development"
 * chip so nothing reads as already shipped, and the photography keeps it from
 * feeling like a changelog.
 */
const RoadmapSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const items = t('roadmap.items', { returnObjects: true }) as RoadmapItem[];

  return (
    <Box
      id="en-camino"
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionHeading
              eyebrow={t('roadmap.eyebrow')}
              title={t('roadmap.title')}
              body={t('roadmap.body')}
              maxWidth={720}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimationFadeIn delay={0.1}>
              <PhotoFrame
                src="/images/content/dental-model.avif"
                alt={t('photos.roadmap')}
                aspectRatio="4 / 3"
              />
            </AnimationFadeIn>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ mt: { xs: 3, md: 4 } }}>
          {items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <AnimationFadeIn delay={Math.min(index * 0.06, 0.18)}>
                  <Box
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '16px',
                      bgcolor: 'background.default',
                      p: { xs: 2.5, md: 3 },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          bgcolor: 'primary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} color={theme.palette.primary.main} strokeWidth={1.6} />
                      </Box>
                      <Chip
                        label={t('roadmap.chip')}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'divider',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    <Typography sx={{ fontSize: '1.0625rem', fontWeight: 600, lineHeight: 1.4, mt: 2.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {item.body}
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

export default RoadmapSection;
