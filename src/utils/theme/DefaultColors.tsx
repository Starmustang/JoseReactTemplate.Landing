/**
 * Design tokens lifted from JoseReactTemplate.UI (`src/utils/theme/DefaultColors.tsx`
 * `baselightTheme`), warmed for the landing page: the same teal family as the
 * product's light mode shifted one step deeper (`#1F7AA5` -> `#23707F`), the
 * product's status hues verbatim, and an ivory canvas instead of the app's
 * cool grey so the page reads warm and human rather than clinical.
 */
const baselightTheme = {
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: {
      main: '#23707F',
      light: '#E4F0F1',
      dark: '#1A5864',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6B7785',
      light: '#EEF1F4',
      dark: '#5A6573',
    },
    success: {
      main: '#3FAE7A',
      light: '#E4F5EC',
      dark: '#359A69',
      contrastText: '#ffffff',
    },
    info: {
      main: '#4A9FC4',
      light: '#E6F2F7',
      dark: '#3A8BAE',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D65A4E',
      light: '#FBEAE8',
      dark: '#BF4A3F',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#E0A24A',
      light: '#FBF1DD',
      dark: '#C68B3A',
      contrastText: '#ffffff',
    },
    grey: {
      100: '#F2F6F8',
      200: '#EDF1F4',
      300: '#DCE3E9',
      400: '#7C8B9A',
      500: '#5A6A7A',
      600: '#1A2533',
    },
    text: {
      primary: '#1E2A33',
      secondary: '#56626C',
    },
    action: {
      disabledBackground: 'rgba(30,42,51,0.10)',
      hoverOpacity: 0.04,
      hover: '#EEF1F4',
    },
    divider: '#E7E0D5',
    background: {
      default: '#FAF7F2',
      paper: '#FFFFFF',
      /** Warm band for alternating sections. */
      band: '#F3EEE6',
    },
  },
};

export { baselightTheme };
