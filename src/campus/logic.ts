import type { DayKey, Slot, SubjectAttendance } from "@/campus/data";

export function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function inr(amount: number, digits = 0) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(amount);
}

export function percent(present: number, total: number) {
  if (!total) return 0;
  return Math.round((present / total) * 100);
}

export function summarize(rows: SubjectAttendance[]) {
  const present = rows.reduce((sum, row) => sum + row.present, 0);
  const total = rows.reduce((sum, row) => sum + row.total, 0);
  return { present, total, absent: total - present, percent: percent(present, total) };
}

export function attendanceTone(value: number): "danger" | "amber" | "teal" {
  if (value < 75) return "danger";
  if (value < 85) return "amber";
  return "teal";
}

export function greeting(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export function weekdayKey(date = new Date()): (typeof DAYS)[number] {
  return DAYS[date.getDay()] ?? "Mon";
}

export function weekdayLabel(key: string) {
  const map: Record<string, string> = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };
  return map[key] ?? key;
}

export function currentSlot(slots: Slot[], date = new Date()) {
  const mins = date.getHours() * 60 + date.getMinutes();
  const now = slots.find((slot) => mins >= slot.startMin && mins < slot.endMin);
  if (now) return { slot: now, phase: "now" as const };
  const next = slots.find((slot) => slot.startMin >= mins);
  if (next) return { slot: next, phase: "next" as const };
  return { slot: slots[slots.length - 1] ?? null, phase: "done" as const };
}

export function isoDate(year: number, monthIndex: number, day: number) {
  const month = String(monthIndex + 1).padStart(2, "0");
  const date = String(day).padStart(2, "0");
  return `${year}-${month}-${date}`;
}

export function todayIso(date = new Date()) {
  return isoDate(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isDayKey(value: string): value is DayKey {
  return value === "Mon" || value === "Tue" || value === "Wed" || value === "Thu" || value === "Fri" || value === "Sat";
}

export function printQuote(pages: number, copies: number, color: boolean, duplex: boolean) {
  if (!Number.isFinite(pages) || !Number.isFinite(copies) || pages < 1 || copies < 1) return null;
  const sheets = duplex ? Math.ceil(pages / 2) : pages;
  const rate = color ? 8 : 1.5;
  return { sheets, price: sheets * copies * rate };
}

export function firstName(name: string) {
  return name.trim().split(" ")[0] || name;
}

const AVATAR_WELLS = [
  "bg-primary-soft text-primary",
  "bg-teal-soft text-teal",
  "bg-amber-soft text-amber",
] as const;

export function avatarWell(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash + char.charCodeAt(0)) % AVATAR_WELLS.length;
  return AVATAR_WELLS[hash] ?? AVATAR_WELLS[0];
}
