/**
 * Real product vocabulary, read out of JoseReactTemplate.UI / JoseReactTemplate.App.
 *
 * Nothing here is invented for marketing: the labels, ordering, colours and rules
 * come from the shipped app (`odontogramConstants.tsx`,
 * `useAppointmentCalendar.ts`, `MenuItems.ts`, `TelegramService.cs`).
 */

/* ------------------------------------------------------------------ *
 * Odontogram
 * ------------------------------------------------------------------ */

export enum ToothSurface {
  Mesial = 0,
  Distal = 1,
  Occlusal = 2,
  Buccal = 3,
  Lingual = 4,
}

/** The five surfaces the graphical odontogram can paint. */
export const PAINTABLE_SURFACES: {
  key: ToothSurface;
  abbr: string;
  label: string;
}[] = [
  { key: ToothSurface.Buccal, abbr: 'V', label: 'Vestibular' },
  { key: ToothSurface.Mesial, abbr: 'M', label: 'Mesial' },
  { key: ToothSurface.Occlusal, abbr: 'O', label: 'Oclusal' },
  { key: ToothSurface.Distal, abbr: 'D', label: 'Distal' },
  { key: ToothSurface.Lingual, abbr: 'L', label: 'Lingual' },
];

export enum ToothStatus {
  Healthy = 0,
  Caries = 1,
  Restored = 2,
  Endodontic = 3,
  Crown = 4,
  Implant = 5,
  Missing = 6,
  Extracted = 7,
  Fracture = 8,
  Bridge = 9,
  ExtractionIndicated = 10,
  NotErupted = 11,
}

/**
 * The twelve clinical statuses. Labels are verbatim from the app; the hex values
 * are the app's own hues lifted onto the dark palette (the light-theme chips in
 * `TOOTH_STATUS_META` are unreadable on `#1C2733`).
 */
export const TOOTH_STATUSES: {
  key: ToothStatus;
  label: string;
  color: string;
  /** Higher priority wins — a lower-priority treatment cannot regress it. */
  priority: number;
}[] = [
  { key: ToothStatus.Healthy, label: 'Sano', color: '#4BD08B', priority: 0 },
  { key: ToothStatus.Caries, label: 'Caries', color: '#E07060', priority: 3 },
  { key: ToothStatus.Restored, label: 'Restaurado', color: '#5AB3D6', priority: 2 },
  { key: ToothStatus.Endodontic, label: 'Endodoncia', color: '#9B7FD4', priority: 5 },
  { key: ToothStatus.Crown, label: 'Corona', color: '#E8B25B', priority: 6 },
  { key: ToothStatus.Implant, label: 'Implante', color: '#3D9CB0', priority: 8 },
  { key: ToothStatus.Missing, label: 'Ausente', color: '#6B7785', priority: 7 },
  { key: ToothStatus.Extracted, label: 'Extraído', color: '#C2453A', priority: 9 },
  { key: ToothStatus.Fracture, label: 'Fractura', color: '#F97316', priority: 4 },
  { key: ToothStatus.Bridge, label: 'Puente', color: '#6366F1', priority: 7 },
  { key: ToothStatus.ExtractionIndicated, label: 'Extracción indicada', color: '#DC2626', priority: 8 },
  { key: ToothStatus.NotErupted, label: 'No erupcionado', color: '#9CA3AF', priority: 1 },
];

export const TOOTH_STATUS_BY_KEY = TOOTH_STATUSES.reduce<
  Record<number, (typeof TOOTH_STATUSES)[number]>
>((acc, status) => {
  acc[status.key] = status;
  return acc;
}, {});

/** FDI quadrants, arranged as the patient's view (the app mirrors clinical view). */
export const FDI_UPPER = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
export const FDI_LOWER = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

/* ------------------------------------------------------------------ *
 * Appointments
 * ------------------------------------------------------------------ */

/** Status colours verbatim from the calendar's dark-mode map. */
export const APPOINTMENT_STATUSES = [
  { label: 'Pendiente', color: '#FFB74D' },
  { label: 'Confirmada', color: '#81C784' },
  { label: 'Completada', color: '#64B5F6' },
  { label: 'Cancelada', color: '#E57373' },
  { label: 'No Asistió', color: '#FFD54F' },
];

/** The clinic's timezone; every date and audit stamp is resolved in it. */
export const TIMEZONE = 'America/Halifax';
