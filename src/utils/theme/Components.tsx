import { Theme } from '@mui/material/styles';

/**
 * Component overrides mirroring JoseReactTemplate.UI's theme so buttons, cards
 * and surfaces on the landing page behave like the product's own.
 */
const components: any = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      '*': { boxSizing: 'border-box' },
      html: { height: '100%', width: '100%', scrollBehavior: 'smooth' },
      body: { height: '100%', margin: 0, padding: 0 },
      a: { textDecoration: 'none' },
      '::selection': {
        backgroundColor: theme.palette.primary.main,
        color: '#101B24',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { backgroundImage: 'none' },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        fontWeight: 600,
      },
      containedPrimary: {
        '&:hover': { boxShadow: 'none' },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: { fontWeight: 500 },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: { textDecoration: 'none' },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: '#101B24',
        border: `1px solid ${theme.palette.divider}`,
        fontSize: '0.75rem',
        padding: '6px 10px',
      },
    },
  },
});

export default components;
