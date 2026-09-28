'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';

/** Point this at the sales inbox or form once there is one. */
const CONTACT_HREF = '';

const PricingSection = () => {
  const { t } = useTranslation();
  const features = t('pricing.features', { returnObjects: true }) as string[];

  return (
    <Box
      id="precios"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '96px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          body={t('pricing.body')}
          align="center"
          maxWidth={720}
        />

        <AnimationFadeIn>
          <Box
            sx={{
              maxWidth: 560,
              mx: 'auto',
              mt: { xs: 4, md: 5 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2.5,
              bgcolor: 'background.paper',
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography variant="h6" component="h3" sx={{ fontSize: '1.0625rem' }}>
              {t('pricing.planTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {t('pricing.planBody')}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'primary.main',
              }}
            >
              {t('pricing.contactSales')}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              {t('pricing.priceNote')}
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                mt: 3,
                p: 0,
                display: 'grid',
                gap: 1.25,
              }}
            >
              {features.map((feature) => (
                <Box
                  component="li"
                  key={feature}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
                >
                  <Box sx={{ display: 'flex', pt: 0.25 }}>
                    <IconCheck size={16} color="#3D9CB0" strokeWidth={2.2} />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              href={CONTACT_HREF || undefined}
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3.5, width: '100%', px: 3 }}
            >
              {t('pricing.contactSales')}
            </Button>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mt: 1.5, textAlign: 'center' }}
            >
              {t('pricing.ctaNote')}
            </Typography>
          </Box>
        </AnimationFadeIn>
      </Container>
    </Box>
  );
};

export default PricingSection;
