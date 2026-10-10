import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  maxWidth?: number | string;
};

/**
 * Section header: a small sans-serif eyebrow in the brand teal, a serif
 * headline, and secondary copy. No rules or ornaments — the type carries it.
 */
const SectionHeading = ({ eyebrow, title, body, align = 'left', maxWidth = 720 }: Props) => {
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

      <Typography variant="h2" component="h2">
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
    </Box>
  );
};

export default SectionHeading;
