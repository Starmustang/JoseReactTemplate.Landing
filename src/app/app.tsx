'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { BuildTheme } from '@/utils/theme/Theme';
import '@/utils/i18n';

const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = React.useMemo(() => BuildTheme(), []);

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MyApp;
