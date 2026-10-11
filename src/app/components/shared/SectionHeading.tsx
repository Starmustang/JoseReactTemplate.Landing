import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  body?: string;
  align?: 'left' | 'center';
  maxWidth?: number | string;
};

/**
 * Section header: a serif headline and secondary copy. No rules or ornaments —
 * the type carries it.
 */
const SectionHeading = ({ title, body, align = 'left', maxWidth = 720 }: Props) => {
  const centered = align === 'center';

  return (
    <Box
      sx={{
        maxWidth,
        mx: centered ? 'auto' : 0,
        textAlign: centered ? 'center' : 'left',
      }}
    >
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
