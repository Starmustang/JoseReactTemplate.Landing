'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { assetPath } from '@/utils/assetPath';

type Props = {
  /** Path under /public, e.g. `/images/content/dentists-xray.avif`. */
  src: string;
  alt: string;
  aspectRatio?: string;
  /** Defaults to lazy; pass `eager` for an above-the-fold photo. */
  eager?: boolean;
  objectPosition?: string;
};

/**
 * A photo in the same plain light frame as VideoFrame: 1px divider border,
 * 16px radius, one soft shadow. Used for the real-clinic photography that
 * warms up the page; the frame keeps it feeling like the product shots.
 */
const PhotoFrame = ({ src, alt, aspectRatio = '4 / 3', eager = false, objectPosition = 'center' }: Props) => (
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
    <Box
      component="img"
      src={assetPath(src)}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      sx={{
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio,
        objectFit: 'cover',
        objectPosition,
      }}
    />
  </Box>
);

export default PhotoFrame;
