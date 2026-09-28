'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import { assetPath } from '@/utils/assetPath';

type Props = {
  /** MP4 file as written under /public; the deployment base path is applied here. */
  src: string;
  /** Optional VP9 sibling; browsers that decode it pick it before the MP4. */
  webmSrc?: string;
  poster: string;
  label: string;
  /** Both films loop silently as animated banners. */
  autoPlay?: boolean;
  /** Native controls; neither film shows them. */
  controls?: boolean;
};

/**
 * A video in the frame both walkthrough films use for their own UI cards:
 * 1px divider border, rounded corners, flat — plus the soft accent halo the
 * compositions bloom behind their panels.
 *
 * The <video> only mounts once the frame nears the viewport, so neither film
 * competes with the first paint; the poster holds the frame until then.
 */
const VideoFrame = ({
  src,
  webmSrc,
  poster,
  label,
  autoPlay = false,
  controls = false,
}: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '300px 0px' });

  const mediaSx = {
    display: 'block',
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
    bgcolor: 'background.default',
  };

  return (
    <Box ref={ref} sx={{ position: 'relative' }}>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: '-12% -6% -18% -6%',
          background:
            'radial-gradient(closest-side, rgba(61,156,176,0.22), rgba(61,156,176,0.06) 55%, transparent 78%)',
          filter: 'blur(6px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2.5,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          boxShadow: '0px 12px 26px rgba(0, 0, 0, 0.34)',
        }}
      >
        {inView ? (
          <Box
            component="video"
            poster={assetPath(poster)}
            aria-label={label}
            autoPlay={autoPlay}
            controls={controls}
            muted={autoPlay}
            loop={autoPlay}
            playsInline
            preload={autoPlay ? 'auto' : 'metadata'}
            sx={mediaSx}
          >
            {webmSrc && <source src={assetPath(webmSrc)} type="video/webm" />}
            <source src={assetPath(src)} type="video/mp4" />
          </Box>
        ) : (
          <Box
            component="img"
            src={assetPath(poster)}
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
