'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { mono } from '@/utils/theme/Typography';
import {
  PAINTABLE_SURFACES,
  ToothStatus,
  ToothSurface,
  TOOTH_STATUSES,
  TOOTH_STATUS_BY_KEY,
} from '@/utils/constants/product';

const DEMO_TOOTH = 16;

/** Starts on the same history the chart shows for tooth 16: crowned, mesial caries. */
const initialSurfaces = (): Record<number, ToothStatus> => ({
  [ToothSurface.Buccal]: ToothStatus.Crown,
  [ToothSurface.Mesial]: ToothStatus.Caries,
  [ToothSurface.Occlusal]: ToothStatus.Crown,
  [ToothSurface.Distal]: ToothStatus.Crown,
  [ToothSurface.Lingual]: ToothStatus.Crown,
});

const CELLS: { surface: ToothSurface; column: number; row: number }[] = [
  { surface: ToothSurface.Buccal, column: 2, row: 1 },
  { surface: ToothSurface.Mesial, column: 1, row: 2 },
  { surface: ToothSurface.Occlusal, column: 2, row: 2 },
  { surface: ToothSurface.Distal, column: 3, row: 2 },
  { surface: ToothSurface.Lingual, column: 2, row: 3 },
];

const Swatch = ({ color, size = 12 }: { color: string; size?: number }) => (
  <Box
    sx={{
      width: size,
      height: size,
      borderRadius: '3px',
      bgcolor: color,
      flexShrink: 0,
    }}
  />
);

const ToothDetail = () => {
  const { t } = useTranslation();
  const [surfaces, setSurfaces] = React.useState<Record<number, ToothStatus>>(
    initialSurfaces,
  );
  const [selected, setSelected] = React.useState<ToothStatus>(ToothStatus.Caries);

  const paint = (surface: ToothSurface) =>
    setSurfaces((current) => ({ ...current, [surface]: selected }));

  /**
   * The tooth's own status is the highest-priority status across its surfaces —
   * the regression guard the backend enforces on every ToothTreatment.
   */
  const toothStatus = React.useMemo(() => {
    const painted = Object.values(surfaces) as ToothStatus[];
    return painted.reduce<ToothStatus>(
      (worst, status) =>
        TOOTH_STATUS_BY_KEY[status].priority > TOOTH_STATUS_BY_KEY[worst].priority
          ? status
          : worst,
      ToothStatus.Healthy,
    );
  }, [surfaces]);

  const selectedMeta = TOOTH_STATUS_BY_KEY[selected];
  const toothMeta = TOOTH_STATUS_BY_KEY[toothStatus];

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2.5,
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
        <Typography variant="subtitle2" sx={{ letterSpacing: '0.08em' }}>
          {t('odontogram.demoTitle').toUpperCase()}
        </Typography>
        <Typography
          sx={{
            fontFamily: mono.style.fontFamily,
            fontSize: '0.75rem',
            color: 'text.secondary',
          }}
        >
          FDI {DEMO_TOOTH}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'auto 1fr' },
          gap: { xs: 3, md: 4 },
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}
          >
            {t('odontogram.surfacesLabel')}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 54px)',
              gridTemplateRows: 'repeat(3, 54px)',
              gap: '4px',
            }}
          >
            {CELLS.map(({ surface, column, row }) => {
              const status = surfaces[surface];
              const meta = TOOTH_STATUS_BY_KEY[status];
              const surfaceMeta = PAINTABLE_SURFACES.find((s) => s.key === surface)!;

              return (
                <Tooltip
                  key={surface}
                  title={`${surfaceMeta.label} · ${meta.label}`}
                  arrow
                  placement="top"
                >
                  <Box
                    className="surface-cell"
                    component="button"
                    type="button"
                    onClick={() => paint(surface)}
                    aria-label={`${surfaceMeta.label} · ${meta.label}`}
                    sx={{
                      gridColumn: column,
                      gridRow: row,
                      cursor: 'pointer',
                      borderRadius: 1.25,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: meta.color,
                      color: '#101B24',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.25,
                      p: 0,
                      fontFamily: 'inherit',
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ fontSize: '0.875rem', fontWeight: 700, lineHeight: 1 }}
                    >
                      {surfaceMeta.abbr}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        opacity: 0.75,
                        lineHeight: 1,
                      }}
                    >
                      {meta.label}
                    </Box>
                  </Box>
                </Tooltip>
              );
            })}
          </Box>

          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{
                fontFamily: mono.style.fontFamily,
                fontSize: '0.75rem',
                color: 'text.secondary',
              }}
            >
              {t('odontogram.paintHint')}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}
          >
            {t('odontogram.paletteLabel')}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 0.75,
            }}
          >
            {TOOTH_STATUSES.map((status) => {
              const isSelected = status.key === selected;
              return (
                <Box
                  key={status.key}
                  component="button"
                  type="button"
                  onClick={() => setSelected(status.key)}
                  aria-pressed={isSelected}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.25,
                    py: 0.75,
                    borderRadius: 1,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    border: '1px solid',
                    borderColor: isSelected ? 'primary.main' : 'divider',
                    bgcolor: isSelected ? 'primary.light' : 'background.default',
                    transition: 'border-color 120ms ease, background-color 120ms ease',
                    '&:hover': { borderColor: 'primary.main' },
                  }}
                >
                  <Swatch color={status.color} />
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: isSelected ? 600 : 400,
                      color: isSelected ? 'text.primary' : 'text.secondary',
                      flexGrow: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    {status.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: mono.style.fontFamily,
                      fontSize: '0.625rem',
                      color: 'text.secondary',
                    }}
                  >
                    {status.priority}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 3 },
          py: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          gap: { xs: 2, md: 4 },
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', display: 'block', fontSize: '0.625rem' }}
          >
            {t('odontogram.selectedStatus')}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Swatch color={selectedMeta.color} />
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              {selectedMeta.label}
            </Typography>
            <Typography
              sx={{
                fontFamily: mono.style.fontFamily,
                fontSize: '0.75rem',
                color: 'text.secondary',
              }}
            >
              {t('odontogram.priorityLabel')} {selectedMeta.priority}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', display: 'block', fontSize: '0.625rem' }}
          >
            {t('odontogram.demoTooth')} {DEMO_TOOTH}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Swatch color={toothMeta.color} />
            <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              {toothMeta.label}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant="outlined"
          color="inherit"
          size="small"
          onClick={() => setSurfaces(initialSurfaces())}
          sx={{ color: 'text.secondary' }}
        >
          {t('odontogram.clear')}
        </Button>
      </Box>
    </Box>
  );
};

export default ToothDetail;
