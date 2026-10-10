'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { serif } from '@/utils/theme/Typography';

/**
 * The wordmark the header and the footer wear in place of a logo file: the
 * product name in the page's serif, over a small spaced "software".
 */
const BrandMark = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography
      component="span"
      sx={{
        display: 'block',
        fontFamily: serif.style.fontFamily,
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.1,
        color: 'text.primary',
      }}
    >
      N. Florentino
    </Typography>
    <Typography
      component="span"
      sx={{
        display: 'block',
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: '0.14em',
        lineHeight: 1.4,
        color: 'text.secondary',
      }}
    >
      software
    </Typography>
  </Box>
);

export default BrandMark;
