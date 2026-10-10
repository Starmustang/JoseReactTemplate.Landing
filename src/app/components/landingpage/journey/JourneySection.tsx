'use client';
import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../../shared/SectionHeading';

type Step = { label: string; title: string; body: string };

/**
 * One step of the journey. It highlights itself while it crosses the middle of
 * the viewport — the same band the travelling indicator passes through — so the
 * card, not a global counter, decides what reads as current.
 */
const JourneyCard = ({
  step,
  index,
  active,
}: {
  step: Step;
  index: number;
  active: boolean;
}) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 460,
      border: '1px solid',
      borderColor: active ? 'primary.main' : 'divider',
      borderRadius: '16px',
      bgcolor: 'background.paper',
      p: { xs: 2.5, md: 3 },
      boxShadow: active
        ? '0 1px 2px rgba(30, 42, 51, 0.06), 0 12px 32px rgba(30, 42, 51, 0.12)'
        : '0 1px 2px rgba(30, 42, 51, 0.06), 0 8px 24px rgba(30, 42, 51, 0.06)',
      transition: 'border-color 300ms ease, box-shadow 300ms ease',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          flexShrink: 0,
          bgcolor: active ? 'primary.main' : 'primary.light',
          color: active ? '#ffffff' : 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.875rem',
          fontWeight: 700,
          transition: 'background-color 300ms ease, color 300ms ease',
        }}
      >
        {index + 1}
      </Box>
      <Typography
        variant="overline"
        component="p"
        sx={{ color: active ? 'primary.main' : 'text.secondary', transition: 'color 300ms ease' }}
      >
        {step.label}
      </Typography>
    </Box>

    <Typography variant="h4" component="h3" sx={{ mt: 2 }}>
      {step.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      {step.body}
    </Typography>
  </Box>
);

const JourneyCardWithState = ({
  step,
  index,
  active,
  reduceMotion,
  onEnter,
}: {
  step: Step;
  index: number;
  active: boolean;
  reduceMotion: boolean;
  onEnter: (index: number) => void;
}) => {
  const [ref, inView] = useInView({ rootMargin: '-48% 0px -48% 0px' });

  // The zig-zag makes two cards share the middle band at once; the one that
  // entered most recently is the one the reader is on.
  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <JourneyCard step={step} index={index} active={reduceMotion || active} />
    </Box>
  );
};

/**
 * "El recorrido": the arc of one patient, from the first Telegram message to
 * the next appointment. A vertical bar pins itself under the header and fills
 * as the section scrolls, with the step cards zig-zagging either side of it —
 * the travelling indicator marks the reader's place.
 *
 * Readers who ask for reduced motion get no pinning and no scroll math: the
 * cards sit still and every one of them reads as current.
 */
const JourneySection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const steps = t('journey.steps', { returnObjects: true }) as Step[];
  const [active, setActive] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const indicatorTop = useMotionTemplate`${useTransform(progress, [0, 1], [0, 100])}%`;

  return (
    <Box
      id="recorrido-paciente"
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
          eyebrow={t('journey.eyebrow')}
          title={t('journey.title')}
          body={t('journey.body')}
          maxWidth={720}
        />

        <Box ref={trackRef} sx={{ position: 'relative', mt: { xs: 5, md: 7 } }}>
          {/* The rail lives in a viewport-tall sticky box, and the cards below
              are pulled back up over it — so the bar is bounded by the box and
              can never spill past the section, while still spanning the pinned
              viewport. On xs the bar moves to the left edge and the cards keep
              their full width. */}
          {!reduceMotion ? (
            <Box
              aria-hidden="true"
              sx={{
                position: 'sticky',
                top: { xs: 68, md: 76 },
                height: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 76px)' },
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 8, md: 12 },
                  bottom: { xs: 8, md: 12 },
                  left: { xs: 20, md: '50%' },
                  transform: { xs: 'none', md: 'translateX(-50%)' },
                  width: 8,
                  borderRadius: 4,
                  bgcolor: 'divider',
                }}
              >
                <Box
                  component={motion.div}
                  style={{ scaleY: progress }}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 4,
                    bgcolor: 'primary.main',
                    transformOrigin: 'top center',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 20,
                    height: 'calc(100% - 20px)',
                  }}
                >
                  <Box
                    component={motion.div}
                    style={{ top: indicatorTop }}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      width: 20,
                      height: 20,
                      borderRadius: '6px',
                      bgcolor: 'background.paper',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      boxShadow: '0 2px 8px rgba(30, 42, 51, 0.18)',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ) : null}

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              pl: { xs: 6, md: 0 },
              pb: { xs: 3, md: 10 },
              mt: reduceMotion
                ? 0
                : { xs: 'calc(-100vh + 68px)', md: 'calc(-100vh + 76px)' },
            }}
          >
            <Grid container rowSpacing={{ xs: 3, md: 10 }} columnSpacing={{ xs: 0, md: 10 }}>
              {steps.map((step, index) => {
                const onRight = index % 2 === 1;
                return (
                  <Grid
                    key={step.label}
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: 'flex',
                      justifyContent: onRight ? { xs: 'flex-start', md: 'flex-end' } : 'flex-start',
                      // The right column starts lower, so the cards zig-zag
                      // down the rail instead of pairing off in rows. The tall
                      // offset and the row spacing are what give the rail room
                      // to travel while the cards scroll past it.
                      pt: { md: onRight ? 18 : 0 },
                    }}
                  >
                    <JourneyCardWithState
                      step={step}
                      index={index}
                      active={active === index}
                      reduceMotion={!!reduceMotion}
                      onEnter={setActive}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JourneySection;
