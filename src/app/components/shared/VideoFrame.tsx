'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { assetPath } from '@/utils/assetPath';

type Props = {
  /** Film name as written under /public/videos; the language suffix and the deployment base path are applied here. */
  name: 'hero' | 'workflow' | 'modules';
  label: string;
  /** Both films loop silently as animated banners. */
  autoPlay?: boolean;
  /** Native controls; neither film shows them. */
  controls?: boolean;
};

/**
 * A video in a plain light frame: 1px divider border, 16px radius, one soft
 * shadow. The films themselves stay light — they read as product screens.
 *
 * The <video> only mounts once the frame nears the viewport, so neither film
 * competes with the first paint; the poster holds the frame until then.
 */
const VideoFrame = ({ name, label, autoPlay = false, controls = false }: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '300px 0px' });
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es';

  const mediaSx = {
    display: 'block',
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
    // The films are light product screens; keep the frame's well light too.
    bgcolor: 'background.default',
  };

  return (
    <Box ref={ref} sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '16px',
          overflow: 'hidden',
          bgcolor: 'background.default',
          boxShadow: '0 1px 2px rgba(30, 42, 51, 0.06), 0 8px 24px rgba(30, 42, 51, 0.08)',
        }}
      >
        {inView ? (
          <Box
            key={lang}
            component="video"
            poster={assetPath(`/videos/${name}-${lang}.jpg`)}
            aria-label={label}
            autoPlay={autoPlay}
            controls={controls}
            muted={autoPlay}
            loop={autoPlay}
            playsInline
            preload={autoPlay ? 'auto' : 'metadata'}
            sx={mediaSx}
          >
            <source src={assetPath(`/videos/${name}-${lang}.webm`)} type="video/webm" />
            <source src={assetPath(`/videos/${name}-${lang}.mp4`)} type="video/mp4" />
          </Box>
        ) : (
          <Box
            component="img"
            src={assetPath(`/videos/${name}-${lang}.jpg`)}
            alt={label}
            decoding="async"
            sx={{ ...mediaSx, objectFit: 'cover' }}
          />
        )}
      </Box>
    </Box>
  );
};

export default VideoFrame;
