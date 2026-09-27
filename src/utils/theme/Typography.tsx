import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

export const plus = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

/**
 * The two walkthrough videos set their metadata lines ("ODONTOGRAMA",
 * "CONFIRMACIÓN") in JetBrains Mono, so the landing page uses it for the same
 * role: eyebrows, spec values and small labels.
 */
export const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
});

const typography: any = {
  fontFamily: plus.style.fontFamily,
  h1: {
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '2.6rem',
    letterSpacing: '-0.015em',
  },
  h2: {
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '2.2rem',
    letterSpacing: '-0.0125em',
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '1.9rem',
    letterSpacing: '-0.01em',
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.3125rem',
    lineHeight: '1.7rem',
    letterSpacing: '-0.005em',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.55rem',
  },
  h6: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '1.4rem',
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    letterSpacing: '0.01em',
  },
  body1: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: '1.65rem',
  },
  body2: {
    fontSize: '0.875rem',
    letterSpacing: '0rem',
    fontWeight: 400,
    lineHeight: '1.45rem',
  },
  subtitle1: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: '1.4rem',
  },
  subtitle2: {
    fontSize: '0.8125rem',
    fontWeight: 500,
    lineHeight: '1.25rem',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: '1.1rem',
  },
  overline: {
    fontFamily: mono.style.fontFamily,
    fontSize: '0.6875rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    lineHeight: '1.2rem',
    textTransform: 'uppercase',
  },
};

export default typography;
