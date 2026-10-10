'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { mono } from '@/utils/theme/Typography';
import { APPOINTMENT_STATUSES, TIMEZONE } from '@/utils/constants/product';

type Block = {
  day: number;
  slot: number;
  patient: string;
  treatment: string;
  status: number;
  /** Booked through the bot rather than by the front desk. */
  fromTelegram?: boolean;
};

const DAYS = ['Lun 22', 'Mar 23', 'Mié 24', 'Jue 25', 'Vie 26'];
const SLOTS = ['09:00', '10:00', '11:00', '12:00'];

/** Fictional stand-ins — no real patient data appears on this page. */
const WEEK: Block[] = [
  { day: 0, slot: 0, patient: 'María González', treatment: 'Limpieza', status: 1 },
  { day: 0, slot: 2, patient: 'Luis Fernández', treatment: 'Endodoncia', status: 0, fromTelegram: true },
  { day: 1, slot: 1, patient: 'Carla Méndez', treatment: 'Control', status: 2 },
  { day: 2, slot: 0, patient: 'María González', treatment: 'Restauración', status: 1 },
  { day: 2, slot: 3, patient: 'Luis Fernández', treatment: 'Extracción', status: 3 },
  { day: 3, slot: 1, patient: 'Carla Méndez', treatment: 'Limpieza', status: 0, fromTelegram: true },
  { day: 4, slot: 2, patient: 'María González', treatment: 'Control', status: 4 },
];

const WeekView = () => (
  <Box
    sx={{
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: '16px',
      bgcolor: 'background.paper',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        px: 2.5,
        py: 1.5,
        borderBottom: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="subtitle2">Citas · semana</Typography>
      <Typography
        sx={{
          fontFamily: mono.style.fontFamily,
          fontSize: '0.75rem',
          color: 'text.secondary',
        }}
      >
        {TIMEZONE}
      </Typography>
    </Box>

    <Box sx={{ position: 'relative' }}>
      <Box sx={{ overflowX: 'auto', p: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '44px repeat(5, minmax(0, 1fr))',
          gap: '4px',
          minWidth: 620,
        }}
      >
        <Box />
        {DAYS.map((day) => (
          <Typography
            key={day}
            sx={{
              fontFamily: mono.style.fontFamily,
              fontSize: '0.625rem',
              color: 'text.secondary',
              textAlign: 'center',
              letterSpacing: '0.04em',
              pb: 0.5,
            }}
          >
            {day}
          </Typography>
        ))}

        {SLOTS.map((slot, slotIndex) => (
          <React.Fragment key={slot}>
            <Typography
              sx={{
                fontFamily: mono.style.fontFamily,
                fontSize: '0.625rem',
                color: 'text.secondary',
                textAlign: 'right',
                pr: 1,
                pt: 1,
              }}
            >
              {slot}
            </Typography>

            {DAYS.map((day, dayIndex) => {
              const block = WEEK.find((b) => b.day === dayIndex && b.slot === slotIndex);
              const status = block ? APPOINTMENT_STATUSES[block.status] : null;

              return (
                <Box
                  key={`${day}-${slot}`}
                  sx={{
                    minHeight: 58,
                    borderRadius: 1,
                    // Blocks wear a pale tint of the status hue with a
                    // full-strength left edge — readable dark text, calm page.
                    border: '1px solid',
                    borderColor: block ? 'transparent' : 'divider',
                    // Longhand last so the shorthand doesn't reset it.
                    borderLeft: block ? `3px solid ${status!.color}` : undefined,
                    bgcolor: block ? `${status!.color}24` : 'background.band',
                    p: block ? 1 : 0,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  {block ? (
                    <>
                      <Typography
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'text.primary',
                          lineHeight: 1.25,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {block.patient}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.625rem',
                          color: 'text.secondary',
                          lineHeight: 1.3,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {block.treatment}
                      </Typography>
                      {block.fromTelegram ? (
                        <Typography
                          sx={{
                            fontSize: '0.625rem',
                            color: 'text.secondary',
                            mt: 'auto',
                            letterSpacing: '0.02em',
                          }}
                        >
                          por Telegram
                        </Typography>
                      ) : null}
                    </>
                  ) : null}
                </Box>
              );
            })}
          </React.Fragment>
        ))}
      </Box>
      </Box>
      {/* Right-edge fade while the week can scroll (xs–sm only). */}
      <Box
        aria-hidden
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 32,
          background:
            'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
          pointerEvents: 'none',
        }}
      />
    </Box>

    <Box
      sx={{
        px: 2,
        py: 1.5,
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        gap: 1.5,
        flexWrap: 'wrap',
      }}
    >
      {APPOINTMENT_STATUSES.map((status) => (
        <Box key={status.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Box
            sx={{
              width: 9,
              height: 9,
              borderRadius: '2px',
              bgcolor: status.color,
            }}
          />
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
            {status.label}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default WeekView;
