'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { IconMenu2 } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import BrandMark from '../../shared/BrandMark';
import LanguageToggle from './LanguageToggle';
import useNavItems from './useNavItems';
import MobileSidebar from './MobileSidebar';

const Header = () => {
  const { t } = useTranslation();
  const navItems = useNavItems();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const [open, setOpen] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ minHeight: { xs: 68, lg: 76 }, gap: 2 }}
        >
          <Link href="#top" underline="none" sx={{ display: 'flex' }}>
            <BrandMark />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {lgUp ? (
            <>
              <Stack direction="row" spacing={0.5} alignItems="center">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    href={item.href}
                    variant="text"
                    color="inherit"
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'text.secondary',
                      px: 1.5,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <LanguageToggle />
              <Button
                href="#recorrido"
                variant="contained"
                color="primary"
                size="small"
                sx={{ px: 2.25, py: 1 }}
              >
                {t('nav.cta')}
              </Button>
            </>
          ) : (
            <>
              <LanguageToggle compact />
              <IconButton
                color="inherit"
                aria-label={t('nav.menu')}
                onClick={() => setOpen(true)}
                edge="end"
              >
                <IconMenu2 size={20} />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        variant="temporary"
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 288,
            border: 0,
            bgcolor: 'background.paper',
            backgroundImage: 'none',
          },
        }}
      >
        <MobileSidebar onNavigate={() => setOpen(false)} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
