import { JetBrains_Mono, Newsreader, Source_Sans_3 } from 'next/font/google';

/**
 * Headlines and the brand mark set in a warm editorial serif; Newsreader's
 * italic carries the one emphasized headline line in the hero.
 */
export const serif = Newsreader({
  style: ['normal', 'italic'],
  axes: ['opsz'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

/** Everything the reader scans — body copy, buttons, labels — in a humanist sans. */
export const sans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

/**
 * Kept only for product mockups where it mirrors the app's own UI — tooth
 * numbers, calendar times, chips inside the mocks. Never marketing text.
 */
export const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
});

const typography: any = {
  fontFamily: sans.style.fontFamily,
  h1: {
    fontFamily: serif.style.fontFamily,
    fontWeight: 500,
    fontSize: '2.5rem',
    lineHeight: 1.08,
    letterSpacing: '-0.015em',
    textWrap: 'balance',
    '@media (min-width:900px)': { fontSize: '3.75rem' },
  },
  h2: {
    fontFamily: serif.style.fontFamily,
    fontWeight: 500,
    fontSize: '2rem',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    textWrap: 'balance',
    '@media (min-width:900px)': { fontSize: '2.75rem' },
  },
  h3: {
    fontFamily: serif.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.25,
    textWrap: 'balance',
  },
  h4: { fontWeight: 600, fontSize: '1.3125rem', lineHeight: '1.7rem' },
  h5: { fontWeight: 600, fontSize: '1.125rem', lineHeight: '1.55rem' },
  h6: { fontWeight: 600, fontSize: '1rem', lineHeight: '1.4rem' },
  button: {
    fontWeight: 600,
    textTransform: 'none',
  },
  body1: {
    fontSize: '1.0625rem',
    fontWeight: 400,
    lineHeight: 1.65,
  },
  body2: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  subtitle1: { fontSize: '1rem', fontWeight: 500, lineHeight: '1.4rem' },
  subtitle2: { fontSize: '0.875rem', fontWeight: 600, lineHeight: '1.35rem' },
  caption: { fontSize: '0.8125rem', fontWeight: 400, lineHeight: '1.15rem' },
  overline: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    lineHeight: 1.4,
    textTransform: 'none',
  },
};

export default typography;
