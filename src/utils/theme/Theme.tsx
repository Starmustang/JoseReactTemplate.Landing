import { createTheme } from '@mui/material/styles';
import components from './Components';
import typography from './Typography';
import { darkshadows } from './Shadows';
import { baseDarkTheme } from './DefaultColors';

/**
 * The product ships a light and a dark skin; dark is its configured default and
 * the mode both walkthrough videos were rendered in, so the landing page is
 * dark-only and uses the exact same tokens.
 *
 * Component overrides are applied after creation, the same order the app uses,
 * so they can read `theme.shape` and the resolved palette.
 */
export const BuildTheme = () => {
  const theme = createTheme({
    ...(baseDarkTheme as any),
    shape: { borderRadius: 10 },
    shadows: darkshadows,
    typography,
  });

  theme.components = components(theme);

  return theme;
};
