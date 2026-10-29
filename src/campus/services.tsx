import { useMemo, useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
import {
  achievements,
  claimSubjects,
  dayOrder,
  handbook,
  helpContacts,
  lecturers,
  papers,
  places,
  polls,
  timetables,
  type DayKey,
} from "@/campus/data";
import { inr, isDayKey, printQuote, weekdayKey, weekdayLabel } from "@/campus/logic";
import { useNav } from "@/campus/nav";
import { useCampus } from "@/campus/store";
import {
  Badge,
  Chip,
  EmptyState,
  Field,
  ListRow,
  Note,
  PrimaryButton,
  ScreenShell,
  SecondaryButton,
  SectionLabel,
  fieldClass,
} from "@/campus/ui";

export function TimetableScreen() {
  const dept = useCampus((state) => state.student.department);
  const today = weekdayKey();
  const initial: DayKey = isDayKey(today) ? today : "Mon";
  const [day, setDay] = useState<DayKey>(initial);
  const slots = timetables[dept][day];
  return (
    <ScreenShell
      title="Timetable"
      toolbar={
        <div className="chip-row">
          {dayOrder.map((item) => (
            <Chip key={item} active={day === item} onClick={() => setDay(item)}>
              {item}
              {item === initial ? " · today" : ""}
            </Chip>
          ))}
        </div>
      }
    >
      <p className="mb-3 text-sm text-muted">
        {dept} · {weekdayLabel(day)}
        {day === initial ? " · highlighted as today" : ""}
      </p>
      <div className="space-y-2">
        {slots.map((slot) => (
          <div
            key={`${slot.start}${slot.subject}`}
            className={`rounded-card border px-3 py-3 ${day === initial ? "border-primary bg-primary-soft" : "border-line bg-surface"}`}
          >
            <p className="text-xs tabular-nums text-muted">
              {slot.start}–{slot.end}
            </p>
            <p className="font-medium text-ink">{slot.subject}</p>
            <p className="text-sm text-muted">
              {slot.faculty} · {slot.room}
            </p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function PapersScreen() {
  const dept = useCampus((state) => state.student.department);
  const { push } = useNav();
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState<"All" | "MCA" | "MBA">(dept);
  const [exam, setExam] = useState("All");
  const exams = ["All", ...new Set(papers.map((paper) => paper.exam))];
  const items = papers.filter((paper) => {
    if (department !== "All" && paper.department !== department) return false;
    if (exam !== "All" && paper.exam !== exam) return false;
    return `${paper.subject} ${paper.year} ${paper.semester}`.toLowerCase().includes(query.trim().toLowerCase());
  });
  return (
    <ScreenShell
      title="Question papers"
      toolbar={
        <div className="space-y-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search subject"
            aria-label="Search question papers"
            className={fieldClass}
          />
          <div className="chip-row">
            {(["All", "MCA", "MBA"] as const).map((item) => (
              <Chip key={item} active={department === item} onClick={() => setDepartment(item)}>
                {item === "All" ? "All depts" : item}
              </Chip>
            ))}
            {exams.map((item) => (
              <Chip key={item} active={exam === item} onClick={() => setExam(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        {items.length === 0 ? (
          <EmptyState title="No papers" body="Adjust the filters. These are short sample papers, not an archive." />
        ) : (
          items.map((paper) => (
            <ListRow
              key={paper.id}
              title={paper.subject}
              meta={`${paper.department} · Sem ${paper.semester} · ${paper.year} · ${paper.exam}`}
              onClick={() => push({ kind: "paper", paperId: paper.id })}
            />
          ))
        )}
      </div>
    </ScreenShell>
  );
}

export function PaperDetail({ id }: { id: string }) {
  const paper = papers.find((item) => item.id === id);
  const { toast } = useNav();
  if (!paper) {
    return (
      <ScreenShell title="Paper">
        <EmptyState title="Paper missing" body="That sample paper is not stored." />
      </ScreenShell>
    );
  }
  return (
    <ScreenShell title="Paper">
      <Badge tone="primary">{paper.exam}</Badge>
      <h2 className="mt-2 font-display text-2xl text-ink">{paper.subject}</h2>
      <p className="text-sm text-muted">
        {paper.department} · Semester {paper.semester} · {paper.year}
      </p>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink">
        {paper.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <div className="mt-4">
        <PrimaryButton onClick={() => toast("View stays in the app. No file was downloaded.")}>
          Mark as viewed locally
        </PrimaryButton>
      </div>
    </ScreenShell>
  );
}

export function HandbookScreen() {
  const [open, setOpen] = useState(handbook[0]?.id ?? "");
  return (
    <ScreenShell title="Handbook">
      <div className="space-y-2">
        {handbook.map((section) => {
          const expanded = open === section.id;
          return (
            <section key={section.id} className="rounded-card border border-line bg-surface">
              <button
                type="button"
                className="press flex min-h-12 w-full items-center justify-between px-3 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? "" : section.id)}
              >
                <span className="font-medium text-ink">{section.title}</span>
                <span className="text-sm text-muted">{expanded ? "Hide" : "Read"}</span>
              </button>
              {expanded ? (
                <div className="space-y-2 px-3 pb-3 text-sm leading-relaxed text-ink">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 18)}>{paragraph}</p>
                  ))}
                  <ul className="list-disc space-y-1 pl-4 text-muted">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </ScreenShell>
  );
}

export function ClaimScreen() {
  const claims = useCampus((state) => state.claims);
  const addClaim = useCampus((state) => state.addClaim);
  const { toast } = useNav();
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [attached, setAttached] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <ScreenShell title="Attendance claim">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const next: Record<string, string> = {};
          if (!date) next.date = "Choose the class date.";
          else if (date > new Date().toISOString().slice(0, 10)) next.date = "A claim has to be for a past class.";
          if (!subject) next.subject = "Choose a subject.";
          if (reason.trim().length < 12) next.reason = "Give a reason of at least 12 characters.";
          setErrors(next);
          if (Object.keys(next).length) return;
          addClaim({
            date,
            subject,
            reason: reason.trim(),
            attachment: attached ? "medical-note.pdf (sample)" : "None",
          });
          setDate("");
          setSubject("");
          setReason("");
          setAttached(false);
          toast("Claim stored on this device. No office received it.");
        }}
      >
        <Field label="Date" error={errors.date}>
          <input type="date" className={fieldClass} value={date} onChange={(event) => setDate(event.target.value)} />
        </Field>
        <Field label="Subject" error={errors.subject}>
          <select className={fieldClass} value={subject} onChange={(event) => setSubject(event.target.value)}>
            <option value="">Select</option>
            {claimSubjects.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Reason" error={errors.reason}>
          <textarea className={`${fieldClass} min-h-28 py-3`} value={reason} onChange={(event) => setReason(event.target.value)} />
        </Field>
        <SecondaryButton
          type="button"
          onClick={() => {
            setAttached((value) => !value);
            toast(attached ? "Sample note removed." : "Attached medical-note.pdf as a sample. No file was uploaded.");
          }}
        >
          {attached ? "Remove sample note" : "Attach sample note"}
        </SecondaryButton>
        <PrimaryButton type="submit">Submit claim</PrimaryButton>
        <Note>Validation runs locally. Status labels that say “sample” or “simulated” were never reviewed.</Note>
      </form>
      <div className="mt-6 space-y-2">
        <SectionLabel>Claim history</SectionLabel>
        {claims.map((claim) => (
          <div key={claim.id} className="rounded-card border border-line bg-surface px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <p className="font-medium text-ink">{claim.subject}</p>
              <Badge tone={claim.status.startsWith("Approved") ? "teal" : claim.status.startsWith("Pending") ? "amber" : "primary"}>
                {claim.status}
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted">
              {claim.date} · {claim.attachment}
            </p>
            <p className="mt-1 text-sm text-muted">{claim.reason}</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function PrintingScreen() {
  const prints = useCampus((state) => state.prints);
  const addPrint = useCampus((state) => state.addPrint);
  const { toast } = useNav();
  const [name, setName] = useState("");
  const [pages, setPages] = useState("1");
  const [copies, setCopies] = useState("1");
  const [color, setColor] = useState(false);
  const [duplex, setDuplex] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const quote = printQuote(Number(pages), Number(copies), color, duplex);

  return (
    <ScreenShell title="Xerox / Printing">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const pageCount = Number(pages);
          const copyCount = Number(copies);
          const next: Record<string, string> = {};
          if (name.trim().length < 2) next.name = "Name the document.";
          if (!Number.isInteger(pageCount) || pageCount < 1 || pageCount > 500) next.pages = "Enter 1 to 500 pages.";
          if (!Number.isInteger(copyCount) || copyCount < 1 || copyCount > 50) next.copies = "Enter 1 to 50 copies.";
          setErrors(next);
          if (Object.keys(next).length || !quote) return;
          addPrint({
            name: name.trim(),
            pages: pageCount,
            copies: copyCount,
            color,
            duplex,
            price: quote.price,
          });
          setName("");
          toast("Request queued on this device. The print counter was not notified.");
        }}
      >
        <Field label="Document name" error={errors.name}>
          <input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Pages" error={errors.pages}>
            <input className={fieldClass} inputMode="numeric" value={pages} onChange={(event) => setPages(event.target.value)} />
          </Field>
          <Field label="Copies" error={errors.copies}>
            <input className={fieldClass} inputMode="numeric" value={copies} onChange={(event) => setCopies(event.target.value)} />
          </Field>
        </div>
        <div className="chip-row">
          <Chip active={!color} onClick={() => setColor(false)}>
            Black and white
          </Chip>
          <Chip active={color} onClick={() => setColor(true)}>
            Colour
          </Chip>
          <Chip active={!duplex} onClick={() => setDuplex(false)}>
            Single-sided
          </Chip>
          <Chip active={duplex} onClick={() => setDuplex(true)}>
            Double-sided
          </Chip>
        </div>
        <div className="rounded-card border border-line bg-surface px-3 py-3">
          <p className="text-sm text-muted">Estimated price · sample tariff</p>
          <p className="font-display text-2xl tabular-nums text-ink">{quote ? inr(quote.price, 2) : "—"}</p>
          <p className="text-xs text-muted">
            {quote ? `${quote.sheets} sheet${quote.sheets === 1 ? "" : "s"} · ${color ? "₹8" : "₹1.50"} each` : "Enter pages and copies."}
          </p>
        </div>
        <PrimaryButton type="submit">Submit request</PrimaryButton>
      </form>
      <div className="mt-6 space-y-2">
        <SectionLabel>Requests</SectionLabel>
        {prints.map((job) => (
          <div key={job.id} className="rounded-card border border-line bg-surface px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <p className="font-medium text-ink">{job.name}</p>
              <Badge tone="primary">{job.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted">
              {job.pages} pages · {job.copies} {job.copies === 1 ? "copy" : "copies"} · {job.color ? "Colour" : "Black and white"} ·{" "}
              {job.duplex ? "Double-sided" : "Single-sided"}
            </p>
            <p className="text-sm font-medium tabular-nums text-ink">{inr(job.price, 2)}</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function PollsScreen() {
  const votes = useCampus((state) => state.votes);
  const vote = useCampus((state) => state.vote);
  const { toast } = useNav();
  return (
    <ScreenShell title="Polls">
      <div className="space-y-4">
        {polls.map((poll) => {
          const choice = votes[poll.id];
          const total = poll.options.reduce((sum, option) => sum + option.votes, 0) + (choice ? 1 : 0);
          return (
            <article key={poll.id} className="rounded-card border border-line bg-surface p-3">
              <h2 className="font-medium text-ink">{poll.question}</h2>
              <p className="mt-1 text-sm text-muted">{poll.detail}</p>
              <div className="mt-3 space-y-2">
                {poll.options.map((option) => {
                  const count = option.votes + (choice === option.id ? 1 : 0);
                  const share = total ? Math.round((count / total) * 100) : 0;
                  if (!choice) {
                    return (
                      <button
                        key={option.id}
                        type="button"
                        className="press min-h-11 w-full rounded-control border border-line px-3 text-left text-sm text-ink"
                        onClick={() => {
                          const ok = vote(poll.id, option.id);
                          toast(ok ? "Vote saved for this session on this device." : "You already voted in this poll.");
                        }}
                      >
                        {option.label}
                      </button>
                    );
                  }
                  return (
                    <div key={option.id} className="rounded-control border border-line px-3 py-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className={choice === option.id ? "font-semibold text-primary" : "text-ink"}>
                          {option.label}
                          {choice === option.id ? " · your vote" : ""}
                        </span>
                        <span className="tabular-nums text-muted">{share}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-chip bg-surface-2">
                        <div className="h-full bg-primary" style={{ width: `${share}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-3">
        <Note>A second vote in the same poll is blocked until this preview’s saved data is cleared.</Note>
      </p>
    </ScreenShell>
  );
}

export function LecturersScreen() {
  const { push } = useNav();
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const departments = ["All", ...new Set(lecturers.map((person) => person.department))];
  const items = lecturers.filter((person) => {
    if (department !== "All" && person.department !== department) return false;
    return `${person.name} ${person.subject} ${person.designation}`.toLowerCase().includes(query.trim().toLowerCase());
  });
  return (
    <ScreenShell
      title="Lecturers"
      toolbar={
        <div className="space-y-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name or subject"
            aria-label="Search lecturers"
            className={fieldClass}
          />
          <div className="chip-row">
            {departments.map((item) => (
              <Chip key={item} active={department === item} onClick={() => setDepartment(item)}>
                {item}
              </Chip>
            ))}
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        {items.length === 0 ? (
          <EmptyState title="No matches" body="Try another name, subject, or department." />
        ) : (
          items.map((person) => (
            <ListRow
              key={person.id}
              title={person.name}
              meta={`${person.designation} · ${person.subject}`}
              onClick={() => push({ kind: "lecturer", lecturerId: person.id })}
            />
          ))
        )}
      </div>
    </ScreenShell>
  );
}

export function LecturerDetail({ id }: { id: string }) {
  const person = lecturers.find((item) => item.id === id);
  const { toast } = useNav();
  if (!person) {
    return (
      <ScreenShell title="Lecturer">
        <EmptyState title="Not listed" body="That sample contact is missing." />
      </ScreenShell>
    );
  }
  async function copy(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      toast(`Copied a sample ${label}. This is not a live directory.`);
    } catch {
      toast("Could not copy on this device.");
    }
  }
  return (
    <ScreenShell title="Lecturer">
      <h2 className="font-display text-2xl text-ink">{person.name}</h2>
      <p className="text-sm text-muted">{person.designation}</p>
      <div className="mt-4 space-y-2 text-sm">
        <p>Department · {person.department}</p>
        <p>Subject · {person.subject}</p>
        <p>Room · {person.room}</p>
        <p>Office hour · {person.hours}</p>
      </div>
      <div className="mt-4 space-y-2">
        <SecondaryButton type="button" onClick={() => void copy(person.email, "email")}>
          <Mail className="size-4" />
          {person.email}
        </SecondaryButton>
        <SecondaryButton type="button" onClick={() => void copy(person.phone, "phone")}>
          <Phone className="size-4" />
          {person.phone}
        </SecondaryButton>
      </div>
      <p className="mt-3">
        <Note>Emails and phones are fictional. Copying them does not place a call.</Note>
      </p>
    </ScreenShell>
  );
}

export function HelpScreen() {
  const { toast } = useNav();
  const urgent = helpContacts.filter((item) => item.group === "urgent");
  const support = helpContacts.filter((item) => item.group === "support");
  async function copy(phone: string) {
    try {
      await navigator.clipboard.writeText(phone);
      toast("Copied a fictional sample number. It is not an official helpline.");
    } catch {
      toast("Could not copy. The number is still only a sample.");
    }
  }
  return (
    <ScreenShell title="Help contacts">
      <div className="rounded-card border border-danger bg-danger-soft px-3 py-3 text-sm leading-relaxed text-danger">
        These numbers are fictional sample data so the screen can be reviewed. They are not real college, police, or emergency contacts.
      </div>
      <div className="mt-4 space-y-2">
        <SectionLabel>Urgent support</SectionLabel>
        {urgent.map((item) => (
          <div key={item.id} className="rounded-card border border-line bg-surface px-3 py-3">
            <p className="font-medium text-ink">{item.name}</p>
            <p className="text-sm text-muted">{item.role}</p>
            <p className="mt-1 text-sm text-ink">{item.note}</p>
            <button type="button" className="press mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary" onClick={() => void copy(item.phone)}>
              <Copy className="size-4" />
              {item.phone}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <SectionLabel>Student help groups</SectionLabel>
        {support.map((item) => (
          <div key={item.id} className="rounded-card border border-line bg-surface px-3 py-3">
            <p className="font-medium text-ink">{item.name}</p>
            <p className="text-sm text-muted">{item.role}</p>
            <p className="mt-1 text-sm text-muted">{item.note}</p>
            <button type="button" className="press mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary" onClick={() => void copy(item.phone)}>
              <Copy className="size-4" />
              {item.phone}
            </button>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function MapScreen() {
  const [selected, setSelected] = useState(places[0]?.id ?? "");
  const place = places.find((item) => item.id === selected) ?? places[0];
  return (
    <ScreenShell title="College map">
      <div className="relative h-80 overflow-hidden rounded-card border border-line bg-surface-2">
        <div className="absolute inset-x-8 top-1/2 h-px bg-line-strong" />
        <div className="absolute inset-y-8 left-1/2 w-px bg-line-strong" />
        <p className="absolute left-3 top-2 text-xs text-faint">North</p>
        {places.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item.id)}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            className={`press absolute max-w-28 -translate-x-1/2 -translate-y-1/2 rounded-control border px-2 py-2 text-xs font-medium ${
              selected === item.id ? "border-primary bg-primary text-primary-ink" : "border-line bg-surface text-ink"
            }`}
          >
            {item.mapLabel}
          </button>
        ))}
      </div>
      {place ? (
        <div className="mt-4 rounded-card border border-line bg-surface px-3 py-3">
          <p className="font-display text-xl text-ink">{place.name}</p>
          <p className="text-sm text-muted">
            {place.zone} · {place.hours}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{place.note}</p>
        </div>
      ) : null}
      <div className="mt-3 space-y-2">
        {places.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item.id)}
            className={`press flex min-h-11 w-full items-center justify-between rounded-control border px-3 text-left text-sm ${
              selected === item.id ? "border-primary bg-primary-soft text-ink" : "border-line bg-surface text-ink"
            }`}
          >
            {item.name}
            <span className="text-xs text-muted">{item.zone}</span>
          </button>
        ))}
      </div>
      <p className="mt-3">
        <Note>A schematic of the sample campus. It does not use a maps service.</Note>
      </p>
    </ScreenShell>
  );
}

const achievementFilters = ["All", "Student", "College", "Sports", "Research"] as const;

export function AchievementsScreen() {
  const [filter, setFilter] = useState<(typeof achievementFilters)[number]>("All");
  const items = useMemo(
    () =>
      achievements.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Student") return item.audience === "student";
        if (filter === "College") return item.audience === "college";
        return item.category === filter;
      }),
    [filter],
  );
  return (
    <ScreenShell
      title="Achievements"
      toolbar={
        <div className="chip-row">
          {achievementFilters.map((item) => (
            <Chip key={item} active={filter === item} onClick={() => setFilter(item)}>
              {item}
            </Chip>
          ))}
        </div>
      }
    >
      <div className="space-y-2">
        {items.length === 0 ? (
          <EmptyState title="Nothing in this filter" body="Try All to see the sample highlights." />
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-card border border-line bg-surface px-3 py-3">
              <div className="flex flex-wrap gap-2">
                <Badge tone="primary">{item.category}</Badge>
                <Badge tone="neutral">{item.audience === "student" ? "Student" : "College"}</Badge>
              </div>
              <h2 className="mt-2 font-medium text-ink">{item.title}</h2>
              <p className="text-sm text-muted">
                {item.who} · {item.date}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.detail}</p>
            </article>
          ))
        )}
      </div>
    </ScreenShell>
  );
}
