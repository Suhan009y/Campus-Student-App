import { useMemo, useState } from "react";
import {
  attendanceByDept,
  books,
  dateNotes,
  events,
  examsByDept,
  FEE_ALREADY_PAID,
  FEE_TOTAL,
  feeHistory,
  feeLines,
  recentAttendance,
  roles,
} from "@/campus/data";
import { attendanceTone, inr, percent, summarize, todayIso } from "@/campus/logic";
import { useNav } from "@/campus/nav";
import { useCampus } from "@/campus/store";
import {
  Avatar,
  Badge,
  Chip,
  EmptyState,
  ListRow,
  Mark,
  Note,
  PrimaryButton,
  ScreenShell,
  SecondaryButton,
  SectionLabel,
  fieldClass,
} from "@/campus/ui";

const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];

export function CalendarScreen() {
  const now = new Date();
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() });
  const [selected, setSelected] = useState(todayIso());
  const { push } = useNav();
  const first = new Date(cursor.year, cursor.month, 1);
  const startPad = (first.getDay() + 6) % 7;
  const days = new Date(cursor.year, cursor.month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(startPad).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)];
  while (cells.length % 7 !== 0) cells.push(null);
  const label = first.toLocaleString("en-IN", { month: "long", year: "numeric" });
  const notes = dateNotes.filter((note) => note.date === selected);
  const marked = new Set(dateNotes.map((note) => note.date));
  const today = todayIso();

  function shift(delta: number) {
    const next = new Date(cursor.year, cursor.month + delta, 1);
    setCursor({ year: next.getFullYear(), month: next.getMonth() });
  }

  return (
    <ScreenShell title="College calendar">
      <div className="rounded-card border border-line bg-surface p-3">
        <div className="mb-3 flex items-center justify-between gap-2">
          <button type="button" className="press min-h-11 rounded-control px-3 text-sm font-medium text-primary" onClick={() => shift(-1)}>
            Previous
          </button>
          <p className="font-display text-lg text-ink">{label}</p>
          <button type="button" className="press min-h-11 rounded-control px-3 text-sm font-medium text-primary" onClick={() => shift(1)}>
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted">
          {weekLabels.map((day, index) => (
            <span key={`${day}${index}`}>{day}</span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((day, index) => {
            if (!day) return <span key={`e${index}`} />;
            const iso = `${cursor.year}-${String(cursor.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const active = iso === selected;
            return (
              <button
                key={iso}
                type="button"
                onClick={() => setSelected(iso)}
                className={`press relative flex min-h-11 items-center justify-center rounded-control text-sm tabular-nums ${
                  active ? "bg-primary text-primary-ink" : iso === today ? "bg-primary-soft text-primary" : "text-ink"
                }`}
              >
                {day}
                {marked.has(iso) ? (
                  <span className={`absolute bottom-1 size-1 rounded-full ${active ? "bg-primary-ink" : "bg-amber"}`} />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <SectionLabel>On this date</SectionLabel>
        {notes.length === 0 ? (
          <EmptyState title="Nothing scheduled" body="College dates in this preview are samples. Try November for exams and events." />
        ) : (
          notes.map((note) => (
            <div key={note.title} className="rounded-card border border-line bg-surface px-3 py-3">
              <Badge tone={note.kind === "holiday" ? "neutral" : note.kind === "deadline" ? "amber" : note.kind === "exam" ? "danger" : "primary"}>
                {note.kind}
              </Badge>
              <p className="mt-2 font-medium text-ink">{note.title}</p>
              <p className="mt-1 text-sm text-muted">{note.detail}</p>
              {note.eventId ? (
                <button
                  type="button"
                  className="press mt-2 min-h-11 text-sm font-medium text-primary"
                  onClick={() => push({ kind: "event", eventId: note.eventId as string })}
                >
                  Open event
                </button>
              ) : null}
            </div>
          ))
        )}
      </div>
    </ScreenShell>
  );
}

export function AttendanceScreen() {
  const dept = useCampus((state) => state.student.department);
  const rows = attendanceByDept[dept];
  const summary = summarize(rows);
  const tone = attendanceTone(summary.percent);
  const history = recentAttendance[dept];
  return (
    <ScreenShell title="Attendance">
      <div className={`rounded-card border border-line p-4 ${tone === "danger" ? "bg-danger-soft" : "bg-surface"}`}>
        <p className="text-sm text-muted">Overall · {dept}</p>
        <p className="font-display text-4xl tabular-nums text-ink">{summary.percent}%</p>
        <p className="mt-1 text-sm text-muted">
          {summary.present} present · {summary.absent} absent · {summary.total} classes
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-chip bg-surface-2">
          <div className={`h-full ${tone === "teal" ? "bg-teal" : tone === "amber" ? "bg-amber" : "bg-danger"}`} style={{ width: `${summary.percent}%` }} />
        </div>
        {summary.percent < 75 ? <p className="mt-2 text-sm text-danger">Below the 75% sample bar.</p> : null}
      </div>
      <div className="mt-4 space-y-2">
        <SectionLabel>Subjects</SectionLabel>
        {rows.map((row) => {
          const value = percent(row.present, row.total);
          const rowTone = attendanceTone(value);
          return (
            <div
              key={row.subject}
              className={`rounded-card border px-3 py-3 ${rowTone === "danger" ? "border-danger bg-danger-soft" : "border-line bg-surface"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-ink">{row.subject}</p>
                  <p className="text-xs text-muted">{row.faculty}</p>
                </div>
                <p className={`font-semibold tabular-nums ${rowTone === "danger" ? "text-danger" : rowTone === "amber" ? "text-amber" : "text-teal"}`}>
                  {value}%
                </p>
              </div>
              <p className="mt-1 text-xs text-muted">
                {row.present} present · {row.total - row.present} absent
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-chip bg-canvas">
                <div
                  className={`h-full ${rowTone === "teal" ? "bg-teal" : rowTone === "amber" ? "bg-amber" : "bg-danger"}`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 space-y-2">
        <SectionLabel>Recent records</SectionLabel>
        {history.map((item) => (
          <div key={`${item.date}${item.subject}`} className="flex items-center justify-between rounded-card border border-line bg-surface px-3 py-3">
            <div>
              <p className="text-sm font-medium text-ink">{item.subject}</p>
              <p className="text-xs text-muted">{item.date}</p>
            </div>
            <Badge tone={item.status === "Present" ? "teal" : "danger"}>{item.status}</Badge>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function FeesScreen() {
  const feePaid = useCampus((state) => state.feePaid);
  const payFees = useCampus((state) => state.payFees);
  const { confirm, toast } = useNav();
  const paid = feePaid ? FEE_TOTAL : FEE_ALREADY_PAID;
  const pending = FEE_TOTAL - paid;
  const history = feePaid
    ? [...feeHistory, { id: "sim", date: "Today", label: "Simulated balance", amount: FEE_TOTAL - FEE_ALREADY_PAID }]
    : feeHistory;

  return (
    <ScreenShell title="Pay fees">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Total", FEE_TOTAL],
          ["Paid", paid],
          ["Pending", pending],
        ].map(([label, amount]) => (
          <div key={String(label)} className="rounded-card border border-line bg-surface px-2 py-3 text-center">
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-1 text-sm font-semibold tabular-nums text-ink">{inr(Number(amount))}</p>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <Badge tone={pending === 0 ? "teal" : "amber"}>{pending === 0 ? "Paid · simulated" : "Balance open · sample"}</Badge>
      </div>
      <div className="mt-4 rounded-card border border-line bg-surface px-3">
        {feeLines.map((line) => (
          <div key={line.label} className="flex items-center justify-between border-b border-line py-3 last:border-b-0">
            <span className="text-sm text-ink">{line.label}</span>
            <span className="text-sm font-medium tabular-nums text-ink">{inr(line.amount)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <PrimaryButton
          disabled={pending === 0}
          onClick={() =>
            confirm({
              title: "Simulate this payment?",
              body: `This records ${inr(pending)} as paid only inside the preview. No bank, UPI app, or college account is contacted.`,
              confirmLabel: "Record sample payment",
              onConfirm: () => {
                payFees();
                toast("Marked as paid on this device. No payment was processed.");
              },
            })
          }
        >
          {pending === 0 ? "Nothing pending" : `Pay ${inr(pending)} · sample`}
        </PrimaryButton>
      </div>
      <div className="mt-5 space-y-2">
        <SectionLabel>Payment history</SectionLabel>
        {history.map((item) => (
          <div key={item.id} className="rounded-card border border-line bg-surface px-3 py-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-ink">{item.label}</p>
                <p className="text-xs text-muted">{item.date}</p>
              </div>
              <p className="text-sm font-semibold tabular-nums text-ink">{inr(item.amount)}</p>
            </div>
            {item.id === "sim" ? <p className="mt-1 text-xs text-amber">Not a real receipt.</p> : null}
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function EventsScreen() {
  const { push } = useNav();
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const items = events.filter((item) => item.scope === "college" && item.status === filter);
  return (
    <ScreenShell
      title="Events"
      toolbar={
        <div className="chip-row">
          <Chip active={filter === "upcoming"} onClick={() => setFilter("upcoming")}>
            Upcoming
          </Chip>
          <Chip active={filter === "past"} onClick={() => setFilter("past")}>
            Past
          </Chip>
        </div>
      }
    >
      <div className="space-y-2">
        {items.map((item) => (
          <ListRow
            key={item.id}
            title={item.title}
            meta={`${item.dateLabel} · ${item.time} · ${item.place}`}
            onClick={() => push({ kind: "event", eventId: item.id })}
          />
        ))}
      </div>
    </ScreenShell>
  );
}

export function EventDetail({ id }: { id: string }) {
  const item = events.find((entry) => entry.id === id);
  const registrations = useCampus((state) => state.registrations);
  const registerEvent = useCampus((state) => state.registerEvent);
  const { confirm, toast } = useNav();
  if (!item) {
    return (
      <ScreenShell title="Event">
        <EmptyState title="Event missing" body="That sample event is not in this preview." />
      </ScreenShell>
    );
  }
  const registered = registrations.includes(item.id);
  return (
    <ScreenShell title="Event">
      <div className="flex gap-3">
        <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-control bg-primary py-3 text-primary-ink">
          <span className="font-display text-2xl tabular-nums">{item.dayNum}</span>
          <span className="text-2xs">{item.month}</span>
        </div>
        <div>
          <Badge tone={item.status === "upcoming" ? "amber" : "neutral"}>{item.status}</Badge>
          <h2 className="mt-2 font-display text-2xl text-ink">{item.title}</h2>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        {item.dateLabel} · {item.time}
      </p>
      <p className="text-sm text-muted">{item.place}</p>
      <div className="mt-3 space-y-3">
        {item.body.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 20)} className="text-sm leading-relaxed text-ink">
            {paragraph}
          </p>
        ))}
      </div>
      {item.status === "upcoming" ? (
        <div className="mt-4">
          <PrimaryButton
            disabled={registered}
            onClick={() =>
              confirm({
                title: "Register interest?",
                body: "This stores a sample registration on this device. The event organisers are not notified.",
                confirmLabel: "Save registration",
                onConfirm: () => {
                  registerEvent(item.id);
                  toast("Registered in this preview only.");
                },
              })
            }
          >
            {registered ? "Registered · simulated" : "Register interest"}
          </PrimaryButton>
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted">This event has already happened in the sample calendar.</p>
      )}
    </ScreenShell>
  );
}

const bookCategories = ["All", "Algorithms", "Databases", "Networks", "Software", "Data"];

export function LibraryScreen() {
  const { push } = useNav();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const items = books.filter((book) => {
    if (category !== "All" && book.category !== category) return false;
    return `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query.trim().toLowerCase());
  });
  return (
    <ScreenShell
      title="Library"
      toolbar={
        <div className="space-y-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title or author"
            aria-label="Search books"
            className={fieldClass}
          />
          <div className="chip-row">
            {bookCategories.map((item) => (
              <Chip key={item} active={category === item} onClick={() => setCategory(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        {items.length === 0 ? (
          <EmptyState title="No books" body="Try another title or category. The shelf is a sample catalogue." />
        ) : (
          items.map((book) => (
            <ListRow
              key={book.id}
              title={book.title}
              meta={`${book.author} · ${book.category}`}
              badge={<Badge tone={book.copies > 0 ? "teal" : "amber"}>{book.copies > 0 ? "Available" : "Out"}</Badge>}
              onClick={() => push({ kind: "book", bookId: book.id })}
            />
          ))
        )}
      </div>
    </ScreenShell>
  );
}

export function BookDetail({ id }: { id: string }) {
  const book = books.find((item) => item.id === id);
  const reserved = useCampus((state) => state.reservations.includes(id));
  const reserveBook = useCampus((state) => state.reserveBook);
  const { confirm, toast } = useNav();
  if (!book) {
    return (
      <ScreenShell title="Book">
        <EmptyState title="Not in the catalogue" body="That sample record is missing." />
      </ScreenShell>
    );
  }
  return (
    <ScreenShell title="Book">
      <Badge tone={book.copies > 0 ? "teal" : "amber"}>{book.copies > 0 ? `${book.copies} available` : "No copies on shelf"}</Badge>
      <h2 className="mt-3 font-display text-2xl text-ink">{book.title}</h2>
      <p className="mt-1 text-sm text-muted">{book.author}</p>
      <div className="mt-4 space-y-2 rounded-card border border-line bg-surface px-3 py-2 text-sm">
        <p>Category · {book.category}</p>
        <p>Shelf · {book.shelf}</p>
        <p>Edition year · {book.year}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink">{book.blurb}</p>
      <div className="mt-4">
        <PrimaryButton
          disabled={reserved}
          onClick={() =>
            confirm({
              title: "Reserve this copy?",
              body: "The reservation is stored in the preview only. The library desk will not see it.",
              confirmLabel: "Save reservation",
              onConfirm: () => {
                reserveBook(book.id);
                toast("Reservation saved on this device.");
              },
            })
          }
        >
          {reserved ? "Reserved · simulated" : "Reserve (sample)"}
        </PrimaryButton>
      </div>
    </ScreenShell>
  );
}

export function HallScreen() {
  const student = useCampus((state) => state.student);
  const ticket = examsByDept[student.department];
  const { toast } = useNav();
  return (
    <ScreenShell title="Hall ticket">
      <article className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="border-b border-line bg-primary-soft px-4 py-3">
          <p className="text-xs font-medium text-primary">Examination hall ticket · sample</p>
          <h2 className="font-display text-xl text-ink">{ticket.title}</h2>
          <p className="text-sm text-muted">{ticket.window}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 py-3 text-sm">
          <p>
            <span className="block text-xs text-muted">Student</span>
            {student.name}
          </p>
          <p>
            <span className="block text-xs text-muted">Register no.</span>
            {student.registerNo}
          </p>
          <p>
            <span className="block text-xs text-muted">Department</span>
            {student.department} · Sem {student.semester}
          </p>
          <p>
            <span className="block text-xs text-muted">Section</span>
            {student.section}
          </p>
        </div>
        <div className="space-y-2 px-4 pb-4">
          {ticket.papers.map((paper) => (
            <div key={paper.code} className="rounded-control border border-line px-3 py-2">
              <p className="text-xs text-muted">
                {paper.code} · {paper.date}
              </p>
              <p className="text-sm font-medium text-ink">{paper.name}</p>
              <p className="text-xs text-muted">
                {paper.session} · {paper.venue}
              </p>
            </div>
          ))}
        </div>
      </article>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <PrimaryButton
          onClick={() => toast("A sample PDF was prepared on this device. Nothing was sent to a printer or inbox.")}
        >
          Sample PDF
        </PrimaryButton>
        <SecondaryButton
          onClick={() => toast("Print dialog was not opened. This only confirms the sample ticket.")}
        >
          Sample print
        </SecondaryButton>
      </div>
      <p className="mt-3">
        <Note>Show this preview at the door only as a design. It is not an official hall ticket.</Note>
      </p>
    </ScreenShell>
  );
}

export function PlacementScreen() {
  const { push } = useNav();
  const applications = useCampus((state) => state.applications);
  const student = useCampus((state) => state.student);
  return (
    <ScreenShell title="Placement">
      <div className="rounded-card border border-line bg-surface p-4">
        <p className="text-sm text-muted">Profile used for eligibility checks</p>
        <p className="font-display text-xl text-ink">{student.name}</p>
        <p className="text-sm text-muted">
          {student.department} · CGPA {student.cgpa} · sample figure
        </p>
      </div>
      <div className="mt-4 space-y-2">
        {roles.map((role) => (
          <ListRow
            key={role.id}
            title={`${role.company} · ${role.title}`}
            meta={`${role.kind} · deadline ${role.deadline}`}
            badge={
              <Badge tone={!role.open ? "neutral" : applications.includes(role.id) ? "teal" : "primary"}>
                {!role.open ? "Closed" : applications.includes(role.id) ? "Applied" : "Open"}
              </Badge>
            }
            onClick={() => push({ kind: "role", roleId: role.id })}
          />
        ))}
      </div>
    </ScreenShell>
  );
}

export function RoleDetail({ id }: { id: string }) {
  const role = roles.find((item) => item.id === id);
  const applied = useCampus((state) => state.applications.includes(id));
  const applyRole = useCampus((state) => state.applyRole);
  const { confirm, toast } = useNav();
  if (!role) {
    return (
      <ScreenShell title="Role">
        <EmptyState title="Role unavailable" body="That sample posting is missing." />
      </ScreenShell>
    );
  }
  return (
    <ScreenShell title="Role">
      <Badge tone={role.open ? "primary" : "neutral"}>{role.open ? role.kind : "Closed"}</Badge>
      <h2 className="mt-2 font-display text-2xl text-ink">{role.title}</h2>
      <p className="text-sm text-muted">{role.company}</p>
      <div className="mt-4 space-y-2 text-sm">
        <p>Deadline · {role.deadline}</p>
        <p>Location · {role.location}</p>
        <p>Pay note · {role.stipend}</p>
        <p className="leading-relaxed">Eligibility · {role.eligibility}</p>
        <p className="leading-relaxed text-ink">{role.about}</p>
      </div>
      <div className="mt-4">
        <PrimaryButton
          disabled={!role.open || applied}
          onClick={() =>
            confirm({
              title: "Submit a sample application?",
              body: `${role.company} will not receive this. It is stored only in the preview.`,
              confirmLabel: "Save application",
              onConfirm: () => {
                applyRole(role.id);
                toast("Application saved on this device. The company was not contacted.");
              },
            })
          }
        >
          {applied ? "Applied · simulated" : role.open ? "Submit sample application" : "Applications closed"}
        </PrimaryButton>
      </div>
    </ScreenShell>
  );
}

export function IdScreen() {
  const student = useCampus((state) => state.student);
  const { toast } = useNav();
  const bars = useMemo(() => student.registerNo.split("").map((char) => 6 + (char.charCodeAt(0) % 10)), [student.registerNo]);
  return (
    <ScreenShell title="ID card">
      <article className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="hero-grid px-4 py-4 text-surface">
          <div className="flex items-center gap-2">
            <Mark className="size-6" />
            <div>
              <p className="font-display text-lg leading-none">Meridian</p>
              <p className="text-xs text-surface/80">Student identity · sample</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 px-4 py-4">
          <Avatar name={student.name} className="size-20 text-xl" />
          <div className="min-w-0">
            <h2 className="font-display text-2xl leading-tight text-ink">{student.name}</h2>
            <p className="text-sm text-muted">{student.registerNo}</p>
            <p className="text-sm text-muted">
              {student.department} · {student.year}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-line px-4 py-3 text-sm">
          <p>
            <span className="block text-xs text-muted">Semester</span>
            {student.semester} · Section {student.section}
          </p>
          <p>
            <span className="block text-xs text-muted">Blood group</span>
            {student.bloodGroup}
          </p>
          <p>
            <span className="block text-xs text-muted">Valid</span>
            Academic year {student.year}
          </p>
          <p>
            <span className="block text-xs text-muted">Campus</span>
            Pune
          </p>
        </div>
        <div className="flex items-end gap-0.5 px-4 pb-4" aria-hidden="true">
          {bars.map((width, index) => (
            <span key={`${width}-${index}`} className="bg-ink" style={{ width, height: 28 + (index % 3) * 4 }} />
          ))}
        </div>
      </article>
      <p className="mt-2 text-xs text-muted">Pattern is decorative. It will not scan as a credential.</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <PrimaryButton
          onClick={() => {
            const text = `${student.name} · ${student.registerNo} · ${student.department} · Meridian sample ID`;
            void navigator.clipboard.writeText(text).then(
              () => toast("Copied a sample identity line. Nothing was shared."),
              () => toast("Could not copy. Nothing was shared."),
            );
          }}
        >
          Copy share card
        </PrimaryButton>
        <SecondaryButton onClick={() => toast("A sample image was prepared locally. No file left this device.")}>
          Sample download
        </SecondaryButton>
      </div>
    </ScreenShell>
  );
}
