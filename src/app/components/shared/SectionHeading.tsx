import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  /** Renders the short accent rule under the copy, the motif both videos use. */
  rule?: boolean;
  maxWidth?: number | string;
};

/**
 * Section header built from the videos' own typographic motif: a mono eyebrow,
 * a tight bold headline, secondary copy, and a short accent rule underneath.
 */
const SectionHeading = ({
  eyebrow,
  title,
  body,
  align = 'left',
  rule = true,
  maxWidth = 720,
}: Props) => {
  const centered = align === 'center';

  return (
    <Box
      sx={{
        maxWidth,
        mx: centered ? 'auto' : 0,
        textAlign: centered ? 'center' : 'left',
      }}
    >
      {eyebrow ? (
        <Typography
          variant="overline"
          component="p"
          sx={{ color: 'primary.main', mb: 1.5 }}
        >
          {eyebrow}
        </Typography>
      ) : null}

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          lineHeight: { xs: '2.1rem', md: '2.6rem' },
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>

      {body ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, maxWidth: 620, mx: centered ? 'auto' : 0 }}
        >
          {body}
        </Typography>
      ) : null}

      {rule ? (
        <Box
          sx={{
            width: 56,
            height: 2,
            bgcolor: 'primary.main',
            mt: 3,
            mx: centered ? 'auto' : 0,
          }}
        />
      ) : null}
    </Box>
  );
};

export default SectionHeading;
