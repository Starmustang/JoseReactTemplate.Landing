'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import BrandMark from '../../shared/BrandMark';
import LanguageToggle from './LanguageToggle';
import useNavItems from './useNavItems';

const MobileSidebar = ({ onNavigate }: { onNavigate: () => void }) => {
  const { t } = useTranslation();
  const navItems = useNavItems();

  return (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <BrandMark size={30} showWordmark={false} />
        <IconButton onClick={onNavigate} aria-label={t('nav.menu')} size="small">
          <IconX size={18} />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <Button
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            variant="text"
            color="inherit"
            sx={{
              justifyContent: 'flex-start',
              color: 'text.primary',
              fontSize: '0.9375rem',
              py: 1.25,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', display: 'block', mb: 1.25 }}
        >
          Idioma / Language
        </Typography>
        <LanguageToggle compact />
      </Box>
    </Box>
  );
};

export default MobileSidebar;
