'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {
  size?: number;
  /** The wordmark is dropped on narrow screens where the header has no room. */
  showWordmark?: boolean;
};

const BrandMark = ({ size = 34, showWordmark = true }: Props) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
    <Image
      src="/images/logos/logo-mark.png"
      alt="Breton Otaño"
      height={size}
      width={Math.round((size * 160) / 173)}
      priority
      style={{ objectFit: 'contain' }}
    />
    {showWordmark ? (
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            color: 'text.primary',
          }}
        >
          BRETON OTAÑO
        </Typography>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            lineHeight: 1.3,
            color: 'text.secondary',
            textTransform: 'uppercase',
          }}
        >
          Dental Office
        </Typography>
      </Box>
    ) : null}
  </Box>
);

export default BrandMark;
