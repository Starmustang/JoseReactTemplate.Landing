'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import { mono } from '@/utils/theme/Typography';

const StackSection = () => {
  const { t } = useTranslation();
  const rows = t('stack.rows', { returnObjects: true }) as {
    label: string;
    value: string;
  }[];
  const guarantees = t('stack.guarantees', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  return (
    <Box
      id="arquitectura"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '96px' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <AnimationFadeIn>
              <Box>
                <SectionHeading
                  eyebrow={t('stack.eyebrow')}
                  title={t('stack.title')}
                  body={t('stack.body')}
                  maxWidth={520}
                />

                <Box
                  sx={{
                    mt: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2.5,
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                  }}
                >
                  {rows.map((row, index) => (
                    <Box
                      key={row.label}
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '132px 1fr' },
                        gap: { xs: 0.25, sm: 2 },
                        px: 2,
                        py: 1.5,
                        borderTop: index === 0 ? 'none' : '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: mono.style.fontFamily,
                          fontSize: '0.75rem',
                          color: 'text.secondary',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          pt: 0.25,
                        }}
                      >
                        {row.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500 }}>
                        {row.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </AnimationFadeIn>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <AnimationFadeIn delay={0.1}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: 'text.secondary', display: 'block', mb: 2.5 }}
                >
                  {t('stack.guaranteesTitle')}
                </Typography>

                <Grid container spacing={2}>
                  {guarantees.map((item) => (
                    <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                      <Box
                        sx={{
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 2.5,
                          bgcolor: 'background.paper',
                          p: 2.5,
                          // Inset rather than a left border, so the accent
                          // follows the card's rounded corners.
                          boxShadow: 'inset 2px 0 0 0 #3D9CB0',
                        }}
                      >
                        <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '0.9375rem' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.body}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </AnimationFadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StackSection;
