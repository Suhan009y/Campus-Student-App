import { useEffect, useState } from "react";
import {
  Bell,
  Briefcase,
  CalendarDays,
  CalendarRange,
  ChevronRight,
  ClipboardCheck,
  Clock,
  IdCard,
  IndianRupee,
  Library,
  Menu,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { announcements, college, events, timetables } from "@/campus/data";
import { currentSlot, firstName, greeting, isDayKey, weekdayKey, weekdayLabel } from "@/campus/logic";
import type { Screen } from "@/campus/nav";
import { useNav } from "@/campus/nav";
import { useCampus } from "@/campus/store";
import { Mark } from "@/campus/ui";

const quickAccess: { label: string; icon: LucideIcon; screen: Screen }[] = [
  { label: "College Calendar", icon: CalendarDays, screen: { kind: "calendar" } },
  { label: "Attendance", icon: ClipboardCheck, screen: { kind: "attendance" } },
  { label: "Pay Fees", icon: IndianRupee, screen: { kind: "fees" } },
  { label: "Events", icon: CalendarRange, screen: { kind: "events" } },
  { label: "Library", icon: Library, screen: { kind: "library" } },
  { label: "Hall Ticket", icon: Ticket, screen: { kind: "hall" } },
  { label: "Placement", icon: Briefcase, screen: { kind: "placement" } },
  { label: "ID Card", icon: IdCard, screen: { kind: "id" } },
];

export function HomeScreen() {
  const { push, openDrawer } = useNav();
  const student = useCampus((state) => state.student);
  const readIds = useCampus((state) => state.readIds);
  const prefs = useCampus((state) => state.prefs);
  const [clockReady, setClockReady] = useState(false);
  useEffect(() => setClockReady(true), []);
  const latest = announcements.find((item) => item.scope === "college");
  const upcoming = events
    .filter((item) => item.scope === "college" && item.status === "upcoming")
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  const day = clockReady ? weekdayKey() : "Thu";
  const slots = isDayKey(day) ? timetables[student.department][day] : [];
  const focus = clockReady ? currentSlot(slots) : { slot: slots[0] ?? null, phase: "next" as const };
  const unreadNotices =
    (prefs.exams && !readIds.includes("n1") ? 1 : 0) +
    (prefs.fees && !readIds.includes("n2") ? 1 : 0) +
    (prefs.events && !readIds.includes("n3") ? 1 : 0) +
    (prefs.posts && !readIds.includes("n4") ? 1 : 0) +
    (prefs.events && !readIds.includes("n5") ? 1 : 0);

  return (
    <div className="scroll h-full">
      <header className="flex items-center gap-3 px-4 pt-4">
        <button
          type="button"
          aria-label="Open menu"
          onClick={openDrawer}
          className="press flex size-11 items-center justify-center rounded-control border border-line bg-surface text-ink"
        >
          <Menu className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Mark className="size-5 text-primary" />
            <p className="font-display text-lg leading-none text-ink">Meridian</p>
          </div>
          <p className="mt-1 truncate text-xs text-muted">{college.full.replace("Meridian ", "")}</p>
        </div>
        <button
          type="button"
          aria-label={unreadNotices ? `${unreadNotices} unread notifications` : "Notifications"}
          onClick={() => push({ kind: "notifications" })}
          className="press relative flex size-11 items-center justify-center rounded-control border border-line bg-surface text-ink"
        >
          <Bell className="size-5" />
          {unreadNotices > 0 ? <span className="absolute right-2 top-2 size-2 rounded-full bg-amber" /> : null}
        </button>
      </header>

      <div className="px-4 pt-3">
        <p className="text-sm text-muted">{clockReady ? greeting() : "Welcome"}</p>
        <h1 className="font-display text-xl text-ink">{firstName(student.name)}</h1>
        <p className="text-sm text-muted">
          {student.department} · Semester {student.semester} · Section {student.section}
        </p>
      </div>

      <div className="space-y-2 px-4 py-3">
        {latest ? (
          <button
            type="button"
            onClick={() => push({ kind: "announcement", announcementId: latest.id })}
            className="press hero-grid w-full rounded-card px-4 py-3 text-left text-surface"
          >
            <p className="text-xs text-surface/80">Latest announcement · {latest.dateLabel}</p>
            <p className="mt-1 font-display text-lg leading-tight">{latest.title}</p>
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-surface/80">{latest.summary}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
              Read announcement <ChevronRight className="size-4" />
            </span>
          </button>
        ) : null}

        {upcoming ? (
          <button
            type="button"
            onClick={() => push({ kind: "event", eventId: upcoming.id })}
            className="press flex w-full gap-3 rounded-card border border-line border-l-4 border-l-primary bg-surface p-3 text-left"
          >
            <span className="flex w-16 shrink-0 flex-col items-center justify-center rounded-control bg-primary py-2 text-primary-ink">
              <span className="font-display text-2xl leading-none tabular-nums">{upcoming.dayNum}</span>
              <span className="text-2xs">{upcoming.month}</span>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium text-amber">Upcoming event</span>
              <span className="mt-1 block font-display text-lg leading-tight text-ink">{upcoming.title}</span>
              <span className="mt-1 block text-sm text-muted">
                {upcoming.time} · {upcoming.place}
              </span>
            </span>
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => push({ kind: "timetable" })}
          className="press flex w-full items-center gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-control bg-teal-soft text-teal">
            <Clock className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            {focus.slot ? (
              <>
                <span className="block text-xs text-muted">
                  {focus.phase === "now" ? "Now" : focus.phase === "next" ? "Up next" : "Last class"} ·{" "}
                  {weekdayLabel(day)}
                </span>
                <span className="block truncate font-medium text-ink">{focus.slot.subject}</span>
                <span className="block truncate text-sm text-muted">
                  {focus.slot.start}–{focus.slot.end} · {focus.slot.room}
                </span>
              </>
            ) : (
              <>
                <span className="block text-xs text-muted">{weekdayLabel(day)}</span>
                <span className="block font-medium text-ink">No classes today</span>
                <span className="block text-sm text-muted">Open the weekly timetable</span>
              </>
            )}
          </span>
          <ChevronRight className="size-4 shrink-0 text-faint" />
        </button>
      </div>

      <div className="px-4 pb-4">
        <h2 className="mb-2 font-display text-lg text-ink">Quick access</h2>
        <div className="grid grid-cols-4 gap-2">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => push(item.screen)}
                className="press flex min-h-20 min-w-0 flex-col items-center justify-start gap-1.5 rounded-card border border-line bg-surface px-1 py-2"
              >
                <span className="flex size-10 items-center justify-center rounded-control bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="w-full text-center text-2xs font-medium leading-tight text-ink">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
