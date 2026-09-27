'use client';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';

/**
 * Fade-and-rise on first scroll into view. Same helper the Spike landing page
 * uses; the travel distance is trimmed so it reads as settling, not flying.
 *
 * Readers who ask for reduced motion get the content immediately, with no
 * entrance animation and therefore no invisible-content risk.
 */
function AnimationFadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactElement;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView || reduceMotion) {
      controls.start('visible');
    }
  }, [controls, inView, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={reduceMotion ? 'visible' : 'hidden'}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : delay, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 24 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationFadeIn;
