'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { mono } from '@/utils/theme/Typography';
import {
  FDI_LOWER,
  FDI_UPPER,
  ToothStatus,
  ToothSurface,
  TOOTH_STATUS_BY_KEY,
} from '@/utils/constants/product';

/**
 * A plausible clinical history so the chart shows the real thing: whole-tooth
 * statuses plus findings that live on a single surface.
 */
const TOOTH_HISTORY: Record<number, ToothStatus> = {
  18: ToothStatus.Extracted,
  17: ToothStatus.Restored,
  16: ToothStatus.Crown,
  14: ToothStatus.Caries,
  24: ToothStatus.Endodontic,
  25: ToothStatus.Restored,
  26: ToothStatus.Caries,
  27: ToothStatus.Implant,
  28: ToothStatus.NotErupted,
  48: ToothStatus.Extracted,
  46: ToothStatus.Restored,
  34: ToothStatus.Caries,
  36: ToothStatus.Crown,
  37: ToothStatus.Restored,
  38: ToothStatus.Missing,
};

const SURFACE_FINDINGS: Record<
  number,
  Partial<Record<ToothSurface, ToothStatus>>
> = {
  16: { [ToothSurface.Mesial]: ToothStatus.Caries },
  36: { [ToothSurface.Occlusal]: ToothStatus.Caries },
  24: { [ToothSurface.Buccal]: ToothStatus.Restored },
  26: { [ToothSurface.Distal]: ToothStatus.Fracture },
};

const UNPAINTED = '#38465A';

/** Cross layout the app's tooth detail panel uses: V above, M/O/D across, L below. */
const CELLS: { surface: ToothSurface; column: number; row: number }[] = [
  { surface: ToothSurface.Buccal, column: 2, row: 1 },
  { surface: ToothSurface.Mesial, column: 1, row: 2 },
  { surface: ToothSurface.Occlusal, column: 2, row: 2 },
  { surface: ToothSurface.Distal, column: 3, row: 2 },
  { surface: ToothSurface.Lingual, column: 2, row: 3 },
];

export const surfaceColor = (tooth: number, surface: ToothSurface) => {
  const status =
    SURFACE_FINDINGS[tooth]?.[surface] ?? TOOTH_HISTORY[tooth] ?? ToothStatus.Healthy;
  return TOOTH_STATUS_BY_KEY[status]?.color ?? UNPAINTED;
};

const Tooth = ({ number, cell }: { number: number; cell: number }) => (
  <Box sx={{ width: cell * 3 + 4, flexShrink: 0 }}>
    <Typography
      sx={{
        fontFamily: mono.style.fontFamily,
        fontSize: '0.625rem',
        color: 'text.secondary',
        textAlign: 'center',
        lineHeight: 1.6,
        letterSpacing: '0.02em',
      }}
    >
      {number}
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(3, ${cell}px)`,
        gridTemplateRows: `repeat(3, ${cell}px)`,
        gap: '2px',
        justifyContent: 'center',
      }}
    >
      {CELLS.map(({ surface, column, row }) => (
        <Box
          key={surface}
          sx={{
            gridColumn: column,
            gridRow: row,
            borderRadius: '2px',
            bgcolor: surfaceColor(number, surface),
            opacity: TOOTH_HISTORY[number] === ToothStatus.NotErupted ? 0.45 : 1,
          }}
        />
      ))}
    </Box>
  </Box>
);

const ChartRow = ({ teeth, cell }: { teeth: number[]; cell: number }) => (
  <Box sx={{ display: 'flex', gap: `${cell * 0.6}px`, justifyContent: 'center' }}>
    {teeth.map((number) => (
      <Tooth key={number} number={number} cell={cell} />
    ))}
  </Box>
);

/**
 * The full 32-tooth FDI chart. Arranged as the patient's view, which is how the
 * app mirrors clinical view: upper jaw on top, quadrants 1|2 and 4|3.
 */
const ToothChart = ({ cell = 13 }: { cell?: number }) => {
  const { t } = useTranslation();

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
          {t('odontogram.chartTitle').toUpperCase()}
        </Typography>
        <Typography
          sx={{
            fontFamily: mono.style.fontFamily,
            fontSize: '0.75rem',
            color: 'text.secondary',
          }}
        >
          {t('odontogram.chartHint')}
        </Typography>
      </Box>

      <Box sx={{ overflowX: 'auto', px: 2.5, py: 3 }}>
        <Box sx={{ minWidth: cell === 13 ? 720 : undefined, display: 'inline-block' }}>
          <ChartRow teeth={FDI_UPPER.slice(0, 8)} cell={cell} />
          <Box
            sx={{
              height: 1,
              bgcolor: 'divider',
              my: 2.5,
              mx: 'auto',
              width: '90%',
            }}
          />
          <ChartRow teeth={FDI_UPPER.slice(8)} cell={cell} />
          <Box sx={{ height: 22 }} />
          <ChartRow teeth={FDI_LOWER.slice(0, 8)} cell={cell} />
          <Box
            sx={{
              height: 1,
              bgcolor: 'divider',
              my: 2.5,
              mx: 'auto',
              width: '90%',
            }}
          />
          <ChartRow teeth={FDI_LOWER.slice(8)} cell={cell} />
        </Box>
      </Box>

      <Box
        sx={{
          px: 2.5,
          py: 1.5,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          gap: 2.5,
          flexWrap: 'wrap',
        }}
      >
        {[
          ToothStatus.Healthy,
          ToothStatus.Caries,
          ToothStatus.Restored,
          ToothStatus.Crown,
          ToothStatus.Endodontic,
          ToothStatus.Implant,
          ToothStatus.Extracted,
          ToothStatus.Missing,
        ].map((status) => (
          <Box key={status} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box
              sx={{
                width: 9,
                height: 9,
                borderRadius: '2px',
                bgcolor: TOOTH_STATUS_BY_KEY[status].color,
              }}
            />
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              {TOOTH_STATUS_BY_KEY[status].label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToothChart;
export { UNPAINTED };
