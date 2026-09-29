import { feria, type FeriaDay } from "../data/feria";

export const TIMEZONE_HONDURAS = "America/Tegucigalpa";

export type FairStatus = "BEFORE" | "DURING" | "AFTER";

export interface FairState {
  status: FairStatus;
  hondurasDateISO: string; // "YYYY-MM-DD"
  currentDayIndex: number; // 0..6 si DURING; 0 como fallback en BEFORE/AFTER
  currentDay?: FeriaDay;
  dayNumber?: number; // 1..7 si DURING
  daysUntil?: number; // Días restantes hasta el 5 de oct (si BEFORE)
  dateFormatted: string; // Ej: "Martes 6 de octubre"
  dateRangeLabel: string; // Ej: "5–11 de octubre de 2026"
  isBefore: boolean;
  isDuring: boolean;
  isAfter: boolean;
}

/**
 * Obtiene los componentes de fecha (año, mes, día) y el string ISO (YYYY-MM-DD)
 * en la zona horaria oficial de Honduras ("America/Tegucigalpa").
 */
export function getHondurasDateParts(dateInput?: Date | string): {
  year: number;
  month: number;
  day: number;
  iso: string;
} {
  let date: Date;

  if (!dateInput) {
    date = new Date();
  } else if (typeof dateInput === "string") {
    // Si viene solo "YYYY-MM-DD", creamos la fecha al mediodía con offset de Honduras (UTC-6)
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
      date = new Date(`${dateInput}T12:00:00-06:00`);
    } else {
      date = new Date(dateInput);
    }
  } else {
    date = dateInput;
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE_HONDURAS,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);
  const year = parts.find((p) => p.type === "year")?.value ?? "2026";
  const month = parts.find((p) => p.type === "month")?.value ?? "10";
  const day = parts.find((p) => p.type === "day")?.value ?? "05";

  const iso = `${year}-${month}-${day}`;
  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    day: parseInt(day, 10),
    iso,
  };
}

/**
 * Retorna la fecha actual en Honduras en formato ISO "YYYY-MM-DD".
 */
export function getHondurasDateISO(dateInput?: Date | string): string {
  return getHondurasDateParts(dateInput).iso;
}

/**
 * Formatea una fecha ISO en español con la zona horaria de Honduras.
 */
export function formatHondurasDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00-06:00`);
  const weekday = d.toLocaleDateString("es-HN", {
    timeZone: TIMEZONE_HONDURAS,
    weekday: "long",
  });
  const day = d.toLocaleDateString("es-HN", {
    timeZone: TIMEZONE_HONDURAS,
    day: "numeric",
  });
  const month = d.toLocaleDateString("es-HN", {
    timeZone: TIMEZONE_HONDURAS,
    month: "long",
  });
  const weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  return `${weekdayCap} ${day} de ${month}`;
}

/**
 * ÚNICA FUENTE DE VERDAD para el estado temporal de la Feria Patronal de Belén 2026.
 *
 * Lógica oficial:
 * - Antes del 5 de octubre de 2026 (< "2026-10-05")  → BEFORE
 * - Del 5 al 11 de octubre de 2026 ("2026-10-05" .. "2026-10-11") → DURING
 * - A partir del 12 de octubre de 2026 (> "2026-10-11") → AFTER
 *
 * Acepta una fecha opcional (Date o string "YYYY-MM-DD") para testeo puro.
 */
export function getFairState(customDate?: Date | string): FairState {
  const { iso: hondurasISO, year, month, day } = getHondurasDateParts(customDate);
  const startDateISO = feria.startDate; // "2026-10-05"
  const endDateISO = feria.endDate; // "2026-10-11"

  let status: FairStatus;
  let currentDayIndex = 0;
  let currentDay: FeriaDay | undefined;
  let dayNumber: number | undefined;
  let daysUntil: number | undefined;

  if (hondurasISO < startDateISO) {
    status = "BEFORE";
    currentDayIndex = 0;
    currentDay = feria.days[0];

    // Cálculo de días restantes
    const [sY, sM, sD] = startDateISO.split("-").map(Number);
    const startUtc = Date.UTC(sY, sM - 1, sD);
    const todayUtc = Date.UTC(year, month - 1, day);
    const diffMs = startUtc - todayUtc;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    daysUntil = Math.max(1, diffDays);
  } else if (hondurasISO > endDateISO) {
    status = "AFTER";
    currentDayIndex = feria.days.length - 1;
    currentDay = feria.days[currentDayIndex];
  } else {
    status = "DURING";
    const foundIdx = feria.days.findIndex((d) => d.date === hondurasISO);
    currentDayIndex = foundIdx !== -1 ? foundIdx : 0;
    currentDay = feria.days[currentDayIndex];
    dayNumber = currentDayIndex + 1;
  }

  // Formato de fecha legible
  const dateFormatted = formatHondurasDate(hondurasISO);
  const dateRangeLabel = "5 al 11 de octubre de 2026";

  return {
    status,
    hondurasDateISO: hondurasISO,
    currentDayIndex,
    currentDay,
    dayNumber,
    daysUntil,
    dateFormatted,
    dateRangeLabel,
    isBefore: status === "BEFORE",
    isDuring: status === "DURING",
    isAfter: status === "AFTER",
  };
}
