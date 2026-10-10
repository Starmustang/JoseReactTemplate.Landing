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
 * The twelve clinical statuses. Labels are verbatim from the app; `color` and
 * `bgColor` are the app's light-theme `TOOTH_STATUS_META` chip pair
 * (odontogramConstants.tsx). Swatches and chart cells paint `color`; the
 * interactive demo's surface cells use `bgColor` with `color` text, the same
 * pairing the app's chips use. `NotErupted` was darkened one step
 * (`#9CA3AF` -> `#6B7280`) so its label stays readable on `#F3F4F6`.
 */
export const TOOTH_STATUSES: {
  key: ToothStatus;
  label: string;
  color: string;
  bgColor: string;
  /** Higher priority wins — a lower-priority treatment cannot regress it. */
  priority: number;
}[] = [
  { key: ToothStatus.Healthy, label: 'Sano', color: '#1B5E20', bgColor: '#E8F5E9', priority: 0 },
  { key: ToothStatus.Caries, label: 'Caries', color: '#BF360C', bgColor: '#FFF3E0', priority: 3 },
  { key: ToothStatus.Restored, label: 'Restaurado', color: '#0D47A1', bgColor: '#E3F2FD', priority: 2 },
  { key: ToothStatus.Endodontic, label: 'Endodoncia', color: '#4A148C', bgColor: '#F3E5F5', priority: 5 },
  { key: ToothStatus.Crown, label: 'Corona', color: '#827717', bgColor: '#F9FBE7', priority: 6 },
  { key: ToothStatus.Implant, label: 'Implante', color: '#006064', bgColor: '#E0F7FA', priority: 8 },
  { key: ToothStatus.Missing, label: 'Ausente', color: '#616161', bgColor: '#EEEEEE', priority: 7 },
  { key: ToothStatus.Extracted, label: 'Extraído', color: '#B71C1C', bgColor: '#FFEBEE', priority: 9 },
  { key: ToothStatus.Fracture, label: 'Fractura', color: '#F97316', bgColor: '#FFF7ED', priority: 4 },
  { key: ToothStatus.Bridge, label: 'Puente', color: '#6366F1', bgColor: '#EEF2FF', priority: 7 },
  { key: ToothStatus.ExtractionIndicated, label: 'Extracción indicada', color: '#DC2626', bgColor: '#FEF2F2', priority: 8 },
  { key: ToothStatus.NotErupted, label: 'No erupcionado', color: '#6B7280', bgColor: '#F3F4F6', priority: 1 },
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

/**
 * Status colours verbatim from the calendar's light-mode map
 * (`useAppointmentCalendar.ts`, the `color` entries). Blocks paint the hue as a
 * pale tint with a full-strength left edge, so labels stay dark text.
 */
export const APPOINTMENT_STATUSES = [
  { label: 'Pendiente', color: '#FF9800' },
  { label: 'Confirmada', color: '#4CAF50' },
  { label: 'Completada', color: '#2196F3' },
  { label: 'Cancelada', color: '#F44336' },
  { label: 'No Asistió', color: '#FFC107' },
];

/** The clinic's timezone; every date and audit stamp is resolved in it. */
export const TIMEZONE = 'America/Halifax';
