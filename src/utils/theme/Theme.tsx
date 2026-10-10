import { createTheme } from '@mui/material/styles';
import components from './Components';
import typography from './Typography';
import { lightshadows } from './Shadows';
import { baselightTheme } from './DefaultColors';

/**
 * The product ships a light and a dark skin; the landing page uses the product's
 * own light palette — warmed to an ivory canvas — so the page reads like the
 * same system the walkthrough videos were rendered in, seen by daylight.
 *
 * Component overrides are applied after creation, the same order the app uses,
 * so they can read `theme.shape` and the resolved palette.
 */
export const BuildTheme = () => {
  const theme = createTheme({
    ...(baselightTheme as any),
    shape: { borderRadius: 12 },
    shadows: lightshadows,
    typography,
  });

  theme.components = components(theme);

  return theme;
};
