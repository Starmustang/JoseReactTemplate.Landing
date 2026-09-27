'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import {
  IconBroadcast,
  IconBuildingHospital,
  IconCalendar,
  IconFirstAidKit,
  IconSettings,
  IconShieldLock,
  IconStethoscope,
  IconUsers,
} from '@tabler/icons-react';

/** Top-level entries of the real sidebar (`MenuItems.ts`), in the app's order. */
const groups = [
  { icon: IconCalendar, label: 'Citas', children: ['Mis citas', 'Citas'] },
  { icon: IconUsers, label: 'Pacientes', children: [] as string[] },
  { icon: IconBuildingHospital, label: 'Clínicas', children: [] as string[] },
  { icon: IconStethoscope, label: 'Doctores', children: [] as string[] },
  {
    icon: IconFirstAidKit,
    label: 'Tratamientos',
    children: ['Tipos de Tratamiento', 'Especialidades', 'Odontogramas'],
  },
  { icon: IconBroadcast, label: 'Broadcast', children: [] as string[] },
  {
    icon: IconSettings,
    label: 'Configuraciones',
    children: [
      'Horarios de Clínica',
      'Días de Excepción de Clínica',
      'Horarios de Doctor',
      'Días de Excepción de Doctor',
    ],
  },
  {
    icon: IconShieldLock,
    label: 'Seguridad',
    children: ['Usuarios', 'Roles', 'Permisos'],
  },
];

/**
 * The clinic console's navigation rail, with the module names the app actually
 * ships. Shown instead of a fake dashboard so nothing on the page is invented UI.
 */
const ConsoleMock = () => {
  const { t } = useTranslation();

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
      <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontSize: '0.625rem' }}
        >
          {t('halves.consoleTitle')}
        </Typography>
      </Box>

      <Box sx={{ p: 1.5 }}>
        {groups.map((group) => (
          <Box key={group.label} sx={{ mb: 1.25, '&:last-of-type': { mb: 0 } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                px: 1,
                py: 0.75,
                borderRadius: 1,
              }}
            >
              <group.icon size={17} color="#3D9CB0" strokeWidth={1.6} />
              <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, lineHeight: 1.3 }}>
                {group.label}
              </Typography>
            </Box>

            {group.children.map((child) => (
              <Box
                key={child}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  pl: 4.25,
                  pr: 1,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: 'divider',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.5 }}
                >
                  {child}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box sx={{ px: 2, py: 1.25, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
          {t('halves.consoleNote')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConsoleMock;
