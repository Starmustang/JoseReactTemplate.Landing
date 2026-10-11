'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { IconCheck } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';
import AnimationFadeIn from '../../shared/AnimationFadeIn';
import useCalBooking from './useCalBooking';
import { CONTACT_HREF } from '@/utils/constants/contact';
import { CAL_LINK } from '@/utils/constants/booking';

const PricingSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const features = t('pricing.features', { returnObjects: true }) as string[];
  const { openBooking, preloadBooking } = useCalBooking();
  // With a booking link the CTA opens the calendar; otherwise it falls back to
  // the sales contact, or to the walkthrough when there is no contact yet.
  const canBook = Boolean(CAL_LINK);
  const ctaProps = canBook
    ? { onClick: openBooking, onMouseEnter: preloadBooking, onFocus: preloadBooking }
    : { href: CONTACT_HREF || '#recorrido' };
  const ctaLabel = canBook || CONTACT_HREF ? 'pricing.cta' : 'pricing.ctaFallback';

  return (
    <Box
      id="precios"
      component="section"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: '96px' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
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
              borderRadius: '16px',
              bgcolor: 'background.paper',
              boxShadow: '0 1px 2px rgba(30, 42, 51, 0.06), 0 8px 24px rgba(30, 42, 51, 0.06)',
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography variant="h3" component="h3">
              {t('pricing.planTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {t('pricing.planBody')}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mt: 1.5 }}
            >
              {t('pricing.priceNote')}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
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
                    <IconCheck size={16} color={theme.palette.primary.main} strokeWidth={2.2} />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              {...ctaProps}
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3.5, width: '100%', px: 3 }}
            >
              {t(ctaLabel)}
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
