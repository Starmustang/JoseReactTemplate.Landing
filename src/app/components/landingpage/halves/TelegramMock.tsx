'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { IconCheck, IconSend } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const Bubble = ({
  children,
  tone = 'bot',
}: {
  children: React.ReactNode;
  tone?: 'bot' | 'system';
}) => (
  <Box
    sx={{
      alignSelf: 'flex-start',
      maxWidth: '92%',
      px: 1.75,
      py: 1.25,
      borderRadius: 2,
      borderTopLeftRadius: tone === 'bot' ? 4 : 8,
      bgcolor: 'background.default',
      border: '1px solid',
      borderColor: 'divider',
      fontSize: '0.8125rem',
      lineHeight: 1.55,
      color: 'text.primary',
    }}
  >
    {children}
  </Box>
);

const KeyboardButton = ({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) => (
  <Box
    sx={{
      textAlign: 'center',
      py: 1,
      px: 1.5,
      borderRadius: 1,
      border: '1px solid',
      borderColor: primary ? 'primary.main' : 'divider',
      bgcolor: primary ? 'primary.main' : 'background.paper',
      color: primary ? '#101B24' : 'text.primary',
      fontSize: '0.8125rem',
      fontWeight: primary ? 600 : 500,
      lineHeight: 1.4,
    }}
  >
    {children}
  </Box>
);

/**
 * A static rendering of the real conversation: every line is copy the bot
 * actually sends (TelegramService / TelegramMessageBuilder), including the
 * four-item main menu.
 */
const TelegramMock = () => {
  const { t } = useTranslation();
  const menu = t('halves.telegramMenu', { returnObjects: true }) as string[];

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2.5,
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2,
          py: 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid',
            borderColor: 'primary.main',
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.02em',
          }}
        >
          BO
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.3 }}>
            Asistente virtual
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.4 }}>
            Breton Otaño · en línea
          </Typography>
        </Box>
        <IconSend size={18} color="#A6B2C0" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.25,
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        <Bubble>{t('halves.telegramWelcome')}</Bubble>
        <KeyboardButton primary>{t('halves.telegramShare')}</KeyboardButton>

        <Bubble>{t('halves.telegramBack')}</Bubble>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 1,
          }}
        >
          {menu.map((item) => (
            <KeyboardButton key={item}>{item}</KeyboardButton>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, my: 0.25 }}>
          <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
          <Chip
            label={t('halves.telegramTag')}
            size="small"
            sx={{
              height: 20,
              fontSize: '0.75rem',
              bgcolor: 'primary.light',
              color: 'primary.main',
              border: '1px solid',
              borderColor: 'primary.main',
            }}
          />
          <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
        </Box>

        <Bubble>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
            <IconCheck size={16} color="#4BD08B" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{t('halves.telegramConfirmed')}</span>
          </Box>
        </Bubble>
      </Box>

      <Box
        sx={{
          px: 2,
          py: 1.25,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
          {t('halves.telegramNote')}
        </Typography>
      </Box>
    </Box>
  );
};

export default TelegramMock;
