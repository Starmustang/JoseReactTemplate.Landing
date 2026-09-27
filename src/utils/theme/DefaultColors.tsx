/**
 * Design tokens lifted from JoseReactTemplate.UI (`src/utils/theme/DefaultColors.tsx`).
 * The landing page uses the product's own dark palette so it reads as the same
 * system the two walkthrough videos were rendered in.
 */
const baseDarkTheme = {
  direction: 'ltr',
  palette: {
    mode: 'dark',
    primary: {
      main: '#3D9CB0',
      light: '#1B3A44',
      dark: '#2C7A8C',
    },
    secondary: {
      main: '#8A98A8',
      light: '#2A3744',
      dark: '#7A8898',
    },
    success: {
      main: '#4BD08B',
      light: '#1B3C48',
      dark: '#02b3a9',
      contrastText: '#ffffff',
    },
    info: {
      main: '#5AB3D6',
      light: '#1E3340',
      dark: '#1682d4',
      contrastText: '#ffffff',
    },
    error: {
      main: '#E07060',
      light: '#3D2A2A',
      dark: '#CF604F',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#E8B25B',
      light: '#3A3220',
      dark: '#C99A47',
      contrastText: '#ffffff',
    },
    grey: {
      100: '#2E3B49',
      200: '#38465A',
      300: '#5A6B7E',
      400: '#8A98A8',
      500: '#C6D1DC',
      600: '#E8EEF2',
    },
    text: {
      primary: '#E8EEF2',
      secondary: '#A6B2C0',
    },
    action: {
      disabledBackground: 'rgba(232,238,242,0.10)',
      hoverOpacity: 0.06,
      hover: '#2E3B49',
    },
    divider: '#33414F',
    background: {
      default: '#1C2733',
      dark: '#1C2733',
      paper: '#26323F',
    },
  },
};

export { baseDarkTheme };
