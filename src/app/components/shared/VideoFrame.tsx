'use client';
import React from 'react';
import Box from '@mui/material/Box';

type Props = {
  src: string;
  poster: string;
  label: string;
  /** The hero loops silently as an animated banner; the deep-dive gets controls. */
  autoPlay?: boolean;
  controls?: boolean;
};

/**
 * A video in the frame both walkthrough films use for their own UI cards:
 * 1px divider border, rounded corners, flat — plus the soft accent halo the
 * compositions bloom behind their panels.
 */
const VideoFrame = ({
  src,
  poster,
  label,
  autoPlay = false,
  controls = false,
}: Props) => (
  <Box sx={{ position: 'relative' }}>
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
      <Box
        component="video"
        src={src}
        poster={poster}
        aria-label={label}
        autoPlay={autoPlay}
        controls={controls}
        muted={autoPlay}
        loop={autoPlay}
        playsInline
        preload={autoPlay ? 'auto' : 'metadata'}
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          aspectRatio: '16 / 9',
          bgcolor: 'background.default',
        }}
      />
    </Box>
  </Box>
);

export default VideoFrame;
