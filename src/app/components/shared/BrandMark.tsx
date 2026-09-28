'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * The wordmark the header and the footer wear in place of a logo file: the
 * product name set in the same two-line treatment the brand mark used to carry.
 */
const BrandMark = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
      N. Florentino
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
      }}
    >
      software
    </Typography>
  </Box>
);

export default BrandMark;
