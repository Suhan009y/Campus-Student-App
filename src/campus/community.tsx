import { useState } from "react";
import { Check, Heart, MessageCircle, Plus, Search, Share2 } from "lucide-react";
import {
  announcements,
  college,
  departments,
  events,
  lecturers,
  notices,
  timetables,
  type DeptCode,
} from "@/campus/data";
import { useNav } from "@/campus/nav";
import { useCampus } from "@/campus/store";
import {
  Avatar,
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

const categories = ["All", "Exams", "Campus", "Fees", "Placement", "Welfare"] as const;

export function AnnouncementsScreen() {
  const { push } = useNav();
  const readIds = useCampus((state) => state.readIds);
  const markRead = useCampus((state) => state.markRead);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const items = announcements.filter((item) => {
    if (item.scope !== "college") return false;
    if (category !== "All" && item.category !== category) return false;
    const hay = `${item.title} ${item.summary} ${item.category}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });

  return (
    <div className="scroll h-full">
      <div className="sticky top-0 z-10 border-b border-line bg-canvas px-4 py-3">
        <h1 className="font-display text-2xl text-ink">Announcements</h1>
        <label className="mt-3 flex min-h-12 items-center gap-2 rounded-control border border-line bg-surface px-3">
          <Search className="size-4 text-faint" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search announcements"
            className="w-full bg-transparent text-base text-ink outline-none placeholder:text-faint"
            aria-label="Search announcements"
          />
        </label>
        <div className="chip-row mt-3">
          {categories.map((item) => (
            <Chip key={item} active={category === item} onClick={() => setCategory(item)}>
              {item}
            </Chip>
          ))}
        </div>
      </div>
      <div className="space-y-2 px-4 py-4">
        {items.length === 0 ? (
          <EmptyState title="No announcements" body="Try another word or category. The list is sample college news." />
        ) : (
          items.map((item) => {
            const read = readIds.includes(item.id);
            return (
              <div key={item.id} className="flex items-stretch gap-2 rounded-card border border-line bg-surface p-2">
                <button
                  type="button"
                  onClick={() => {
                    markRead(item.id);
                    push({ kind: "announcement", announcementId: item.id });
                  }}
                  className="press min-w-0 flex-1 rounded-control px-2 py-2 text-left"
                >
                  <span className="flex flex-wrap items-center gap-2">
                    {!read ? <span className="size-2 rounded-full bg-primary" aria-hidden /> : null}
                    <Badge tone={item.important ? "amber" : "neutral"}>{item.important ? "Important" : item.category}</Badge>
                    <span className="text-xs text-muted">
                      {item.dateLabel} · {item.time}
                    </span>
                  </span>
                  <span className={`mt-2 block ${read ? "font-medium text-ink" : "font-semibold text-ink"}`}>
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.summary}</span>
                </button>
                {!read ? (
                  <button
                    type="button"
                    aria-label={`Mark ${item.title} as read`}
                    onClick={() => markRead(item.id)}
                    className="press flex size-11 shrink-0 items-center justify-center self-center rounded-control text-primary"
                  >
                    <Check className="size-5" />
                  </button>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const relatedCopy = {
  hall: { label: "Open hall ticket", screen: { kind: "hall" as const } },
  fees: { label: "Review fees", screen: { kind: "fees" as const } },
  help: { label: "Help contacts", screen: { kind: "help" as const } },
  events: { label: "Browse events", screen: { kind: "events" as const } },
  placement: { label: "Open placement", screen: { kind: "placement" as const } },
};

export function AnnouncementDetail({ id }: { id: string }) {
  const item = announcements.find((entry) => entry.id === id);
  const { push, toast } = useNav();
  const markRead = useCampus((state) => state.markRead);
  const read = useCampus((state) => state.readIds.includes(id));
  if (!item) {
    return (
      <ScreenShell title="Announcement">
        <EmptyState title="Missing notice" body="That sample announcement is not in this preview." />
      </ScreenShell>
    );
  }
  const related = item.related ? relatedCopy[item.related] : null;
  return (
    <ScreenShell
      title="Announcement"
      action={
        <button
          type="button"
          className="press mr-1 min-h-11 rounded-control px-3 text-sm font-medium text-primary"
          onClick={() => {
            markRead(item.id);
            toast(read ? "Already marked read on this device." : "Marked as read on this device.");
          }}
        >
          {read ? "Read" : "Mark read"}
        </button>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge tone={item.important ? "amber" : "primary"}>{item.category}</Badge>
          {item.scope !== "college" ? <Badge tone="neutral">{item.scope} only</Badge> : null}
        </div>
        <h2 className="font-display text-2xl text-ink">{item.title}</h2>
        <p className="text-sm text-muted">
          {item.dateLabel} · {item.time}
        </p>
        {item.body.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-ink">
            {paragraph}
          </p>
        ))}
        <Note>Sample notice. Opening it does not notify the college.</Note>
        {related ? <PrimaryButton onClick={() => push(related.screen)}>{related.label}</PrimaryButton> : null}
      </div>
    </ScreenShell>
  );
}

export function PostsScreen() {
  const { push, toast } = useNav();
  const posts = useCampus((state) => state.posts);
  const toggleLike = useCampus((state) => state.toggleLike);

  async function share(author: string, body: string) {
    const text = `${author}\n${body}\n— shared from Meridian (sample, not posted publicly)`;
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied a share note. Nothing was posted.");
    } catch {
      toast("Could not copy on this device. Nothing was posted.");
    }
  }

  return (
    <div className="scroll h-full">
      <div className="flex items-center justify-between gap-3 px-4 pt-4">
        <div>
          <h1 className="font-display text-2xl text-ink">Posts</h1>
          <p className="text-sm text-muted">Campus feed · this device only</p>
        </div>
        <button
          type="button"
          onClick={() => push({ kind: "create-post" })}
          className="press inline-flex min-h-11 items-center gap-1 rounded-control bg-primary px-3 text-sm font-semibold text-primary-ink"
        >
          <Plus className="size-4" />
          Post
        </button>
      </div>
      <div className="space-y-3 px-4 py-4">
        {posts.length === 0 ? (
          <EmptyState title="No posts yet" body="Write the first note for this preview." />
        ) : (
          posts.map((post) => (
            <article key={post.id} className="rounded-card border border-line bg-surface p-3">
              <div className="flex items-center gap-3">
                <Avatar name={post.author} className="size-11 text-sm" />
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{post.author}</p>
                  <p className="truncate text-xs text-muted">
                    {post.department} · {post.time}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink">{post.body}</p>
              <div className="mt-3 flex items-center gap-1 border-t border-line pt-2">
                <button
                  type="button"
                  aria-pressed={post.liked}
                  onClick={() => toggleLike(post.id)}
                  className="press inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink"
                >
                  <Heart className={post.liked ? "size-4 fill-primary text-primary" : "size-4"} />
                  <span className="tabular-nums">{post.likes}</span>
                </button>
                <button
                  type="button"
                  onClick={() => push({ kind: "comments", postId: post.id })}
                  className="press inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink"
                >
                  <MessageCircle className="size-4" />
                  <span className="tabular-nums">{post.comments.length}</span>
                </button>
                <button
                  type="button"
                  onClick={() => void share(post.author, post.body)}
                  className="press ml-auto inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink"
                >
                  <Share2 className="size-4" />
                  Share
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export function CreatePostScreen() {
  const { pop, toast } = useNav();
  const addPost = useCampus((state) => state.addPost);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const trimmed = body.trim();

  return (
    <ScreenShell title="New post">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (trimmed.length < 2) {
            setError("Write at least a short sentence.");
            return;
          }
          if (trimmed.length > 500) {
            setError("Keep it under 500 characters.");
            return;
          }
          addPost(trimmed);
          toast("Posted on this device. Nobody else can see it.");
          pop();
        }}
      >
        <Field label="What should the section know?" error={error} hint={`${trimmed.length}/500`}>
          <textarea
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
              setError("");
            }}
            className={`${fieldClass} min-h-36 py-3`}
            placeholder="A class change, a lab note, a question."
            maxLength={500}
          />
        </Field>
        <PrimaryButton type="submit">Publish sample post</PrimaryButton>
        <Note>Likes and comments stay in this preview. There is no public feed.</Note>
      </form>
    </ScreenShell>
  );
}

export function CommentsScreen({ postId }: { postId: string }) {
  const post = useCampus((state) => state.posts.find((item) => item.id === postId));
  const addComment = useCampus((state) => state.addComment);
  const { toast } = useNav();
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  if (!post) {
    return (
      <ScreenShell title="Comments">
        <EmptyState title="Post unavailable" body="It may have been from an older preview session." />
      </ScreenShell>
    );
  }

  return (
    <ScreenShell title="Comments">
      <p className="text-sm leading-relaxed text-ink">{post.body}</p>
      <p className="mt-1 text-xs text-muted">
        {post.author} · {post.time}
      </p>
      <div className="mt-4 space-y-2">
        {post.comments.length === 0 ? (
          <EmptyState title="No comments yet" body="Add a sample reply. It stays on this device." />
        ) : (
          post.comments.map((comment) => (
            <div key={comment.id} className="rounded-card border border-line bg-surface px-3 py-3">
              <p className="text-sm font-medium text-ink">{comment.author}</p>
              <p className="mt-1 text-sm text-ink">{comment.body}</p>
              <p className="mt-1 text-xs text-muted">{comment.time}</p>
            </div>
          ))
        )}
      </div>
      <form
        className="mt-4 space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          const trimmed = body.trim();
          if (trimmed.length < 1) {
            setError("Write a comment before sending.");
            return;
          }
          addComment(post.id, trimmed);
          setBody("");
          toast("Comment saved on this device.");
        }}
      >
        <Field label="Reply" error={error}>
          <textarea
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
              setError("");
            }}
            className={`${fieldClass} min-h-24 py-3`}
            placeholder="Keep it useful."
          />
        </Field>
        <PrimaryButton type="submit">Add comment</PrimaryButton>
      </form>
    </ScreenShell>
  );
}

const deptPanels = ["Overview", "Faculty", "Notices", "Events", "Schedule", "Academics"] as const;

export function DepartmentScreen() {
  const student = useCampus((state) => state.student);
  const { push } = useNav();
  const [panel, setPanel] = useState<(typeof deptPanels)[number]>("Overview");
  const dept = student.department;
  const info = departments[dept];
  const notes = announcements.filter((item) => item.scope === dept);
  const deptEvents = events.filter((item) => item.scope === dept);
  const faculty = lecturers.filter(
    (person) => person.department === dept || (dept === "MCA" && person.department === "Humanities"),
  );

  return (
    <div className="scroll h-full">
      <div className="sticky top-0 z-10 border-b border-line bg-canvas px-4 py-3">
        <h1 className="font-display text-2xl text-ink">Department</h1>
        <p className="text-sm text-muted">
          {dept} · registered department
        </p>
        <div className="chip-row mt-3">
          {deptPanels.map((item) => (
            <Chip key={item} active={panel === item} onClick={() => setPanel(item)}>
              {item}
            </Chip>
          ))}
        </div>
      </div>
      <div className="space-y-3 px-4 py-4">
        {panel === "Overview" ? (
          <>
            <div className="rounded-card border border-line bg-surface p-4">
              <p className="text-xs font-medium text-primary">{info.full}</p>
              <h2 className="mt-1 font-display text-xl text-ink">{info.hod}</h2>
              <p className="text-sm text-muted">Head of department</p>
              <p className="mt-3 text-sm leading-relaxed text-ink">{info.about}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {info.stats.map((stat) => (
                <div key={stat.label} className="rounded-card border border-line bg-surface px-2 py-3 text-center">
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
            <SectionLabel>Resources</SectionLabel>
            <div className="space-y-2">
              <ListRow title="Question papers" meta={`${dept} papers and other departments`} onClick={() => push({ kind: "papers" })} />
              <ListRow title="Handbook" meta="Rules, exams, attendance, conduct" onClick={() => push({ kind: "handbook" })} />
              <ListRow title="Achievements" meta="Student and college highlights" onClick={() => push({ kind: "achievements" })} />
              <ListRow title="Weekly timetable" meta="Days, rooms, and faculty" onClick={() => push({ kind: "timetable" })} />
            </div>
            <Note>Change the registered department from Account → Edit profile. MBA shows a different department.</Note>
          </>
        ) : null}
        {panel === "Faculty" ? (
          <div className="space-y-2">
            {faculty.map((person) => (
              <ListRow
                key={person.id}
                title={person.name}
                meta={`${person.designation} · ${person.subject}`}
                onClick={() => push({ kind: "lecturer", lecturerId: person.id })}
              />
            ))}
          </div>
        ) : null}
        {panel === "Notices" ? (
          notes.length ? (
            notes.map((item) => (
              <ListRow
                key={item.id}
                title={item.title}
                meta={`${item.dateLabel} · ${item.category}`}
                onClick={() => push({ kind: "announcement", announcementId: item.id })}
              />
            ))
          ) : (
            <EmptyState title="No department notices" body="Sample notices appear here for the registered department." />
          )
        ) : null}
        {panel === "Events" ? (
          deptEvents.length ? (
            deptEvents.map((item) => (
              <ListRow
                key={item.id}
                title={item.title}
                meta={`${item.dateLabel} · ${item.place}`}
                onClick={() => push({ kind: "event", eventId: item.id })}
              />
            ))
          ) : (
            <EmptyState title="No department events" body="College-wide events stay on the Events screen." />
          )
        ) : null}
        {panel === "Schedule" ? <DeptSchedule dept={dept} /> : null}
        {panel === "Academics" ? (
          <div className="space-y-3">
            <div className="rounded-card border border-line bg-surface p-4">
              {info.academics.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-3 border-b border-line py-2 last:border-b-0">
                  <span className="text-sm text-muted">{row.label}</span>
                  <span className="text-right text-sm font-medium text-ink">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-ink">{info.electives}</p>
            <p className="text-sm text-muted">Office · {info.office}</p>
            <p className="text-sm text-muted">{info.email}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DeptSchedule({ dept }: { dept: DeptCode }) {
  const { push } = useNav();
  const rows = timetables[dept].Thu;
  return (
    <div className="space-y-2">
      <Note>Thursday sample for a mid-week teaching day. The full week is on the timetable.</Note>
      {rows.map((row) => (
        <div key={`${row.start}${row.subject}`} className="rounded-card border border-line bg-surface px-3 py-3">
          <p className="text-xs tabular-nums text-muted">
            {row.start}–{row.end} · {row.room}
          </p>
          <p className="font-medium text-ink">{row.subject}</p>
          <p className="text-sm text-muted">{row.faculty}</p>
        </div>
      ))}
      <SecondaryButton onClick={() => push({ kind: "timetable" })}>Full weekly timetable</SecondaryButton>
    </div>
  );
}

export function AccountScreen() {
  const student = useCampus((state) => state.student);
  const { push, confirm, signOut } = useNav();
  const rows = [
    ["Register number", student.registerNo],
    ["Department", `${student.department} · ${departments[student.department].full}`],
    ["Semester", student.semester],
    ["Section", student.section],
    ["Academic year", student.year],
    ["Batch", student.batch],
    ["CGPA", student.cgpa],
    ["Email", student.email],
    ["Phone", student.phone],
    ["Date of birth", student.dob],
    ["Blood group", student.bloodGroup],
    ["Guardian", student.guardian],
    ["Address", student.address],
  ] as const;

  return (
    <div className="scroll h-full">
      <div className="px-4 pt-5">
        <div className="flex items-center gap-4">
          <Avatar name={student.name} className="size-16 text-lg" />
          <div className="min-w-0">
            <h1 className="truncate font-display text-2xl text-ink">{student.name}</h1>
            <p className="text-sm text-muted">
              {student.registerNo} · {student.department}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 px-4 py-4">
        <div className="rounded-card border border-line bg-surface px-3">
          {rows.map(([label, value]) => (
            <div key={label} className="flex items-start justify-between gap-3 border-b border-line py-3 last:border-b-0">
              <span className="text-sm text-muted">{label}</span>
              <span className="max-w-[60%] text-right text-sm font-medium text-ink">{value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <PrimaryButton onClick={() => push({ kind: "edit-profile" })}>Edit profile</PrimaryButton>
          <SecondaryButton onClick={() => push({ kind: "settings" })}>Settings</SecondaryButton>
        </div>
        <ListRow title="Notification preferences" meta="Choose what the bell counts" onClick={() => push({ kind: "settings" })} />
        <ListRow title="Help and support" meta="How this preview behaves" onClick={() => push({ kind: "support" })} />
        <ListRow title="About Meridian" meta={college.full} onClick={() => push({ kind: "about" })} />
        <SecondaryButton
          onClick={() =>
            confirm({
              title: "Leave this preview?",
              body: "There is no account server. Sample posts, votes, and profile edits stay on this device until you clear site data.",
              confirmLabel: "Log out",
              onConfirm: signOut,
            })
          }
        >
          Log out
        </SecondaryButton>
      </div>
    </div>
  );
}

const semesters = ["I", "II", "III", "IV"] as const;
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export function EditProfileScreen() {
  const student = useCampus((state) => state.student);
  const updateStudent = useCampus((state) => state.updateStudent);
  const { pop, toast } = useNav();
  const [form, setForm] = useState(student);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <ScreenShell title="Edit profile">
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          const next: Record<string, string> = {};
          if (form.name.trim().length < 2) next.name = "Enter the name used on the identity card.";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter an email address.";
          if (!/^\d{10}$/.test(form.phone)) next.phone = "Use a 10-digit sample number.";
          if (form.registerNo.trim().length < 4) next.registerNo = "Enter a register number.";
          if (form.address.trim().length < 3) next.address = "Enter an address.";
          if (form.guardian.trim().length < 2) next.guardian = "Enter a guardian name.";
          setErrors(next);
          if (Object.keys(next).length) return;
          updateStudent({ ...form, name: form.name.trim() });
          toast("Profile saved on this device. The department tab follows this choice.");
          pop();
        }}
      >
        <Field label="Full name" error={errors.name}>
          <input className={fieldClass} value={form.name} onChange={(event) => set("name", event.target.value)} />
        </Field>
        <Field label="Register number" error={errors.registerNo}>
          <input className={fieldClass} value={form.registerNo} onChange={(event) => set("registerNo", event.target.value)} />
        </Field>
        <Field label="Department" hint="The Department tab, timetable, and hall ticket follow this.">
          <select
            className={fieldClass}
            value={form.department}
            onChange={(event) => set("department", event.target.value as DeptCode)}
          >
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
          </select>
        </Field>
        <Field label="Semester">
          <select
            className={fieldClass}
            value={form.semester}
            onChange={(event) => set("semester", event.target.value as (typeof semesters)[number])}
          >
            {semesters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Email" error={errors.email}>
          <input className={fieldClass} value={form.email} onChange={(event) => set("email", event.target.value)} inputMode="email" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={fieldClass} value={form.phone} onChange={(event) => set("phone", event.target.value)} inputMode="numeric" />
        </Field>
        <Field label="Blood group">
          <select className={fieldClass} value={form.bloodGroup} onChange={(event) => set("bloodGroup", event.target.value)}>
            {bloodGroups.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="Guardian" error={errors.guardian}>
          <input className={fieldClass} value={form.guardian} onChange={(event) => set("guardian", event.target.value)} />
        </Field>
        <Field label="Address" error={errors.address}>
          <input className={fieldClass} value={form.address} onChange={(event) => set("address", event.target.value)} />
        </Field>
        <Note>Use sample details. This is not a private college account.</Note>
        <PrimaryButton type="submit">Save on this device</PrimaryButton>
      </form>
    </ScreenShell>
  );
}

export function SettingsScreen() {
  const prefs = useCampus((state) => state.prefs);
  const setPref = useCampus((state) => state.setPref);
  const items: { key: keyof typeof prefs; label: string; detail: string }[] = [
    { key: "exams", label: "Exams", detail: "Timetable and hall ticket reminders" },
    { key: "fees", label: "Fees", detail: "Balance and deadline notes" },
    { key: "events", label: "Events", detail: "Talks, drives, and welfare weeks" },
    { key: "posts", label: "Posts", detail: "New notes in the campus feed" },
  ];
  return (
    <ScreenShell title="Settings">
      <SectionLabel>Notifications</SectionLabel>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.key} className="flex items-center gap-3 rounded-card border border-line bg-surface px-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="font-medium text-ink">{item.label}</p>
              <p className="text-sm text-muted">{item.detail}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={prefs[item.key]}
              aria-label={item.label}
              onClick={() => setPref(item.key, !prefs[item.key])}
              className={`press relative h-7 w-12 rounded-chip ${prefs[item.key] ? "bg-primary" : "bg-line-strong"}`}
            >
              <span
                className={`absolute top-1 size-5 rounded-full bg-surface transition-transform duration-200 ${prefs[item.key] ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">Preferences only change the bell on this device. They do not contact a server.</p>
    </ScreenShell>
  );
}

export function NotificationsScreen() {
  const { push, setTab, closeStack, toast } = useNav();
  const readIds = useCampus((state) => state.readIds);
  const markRead = useCampus((state) => state.markRead);
  const prefs = useCampus((state) => state.prefs);
  const visible = notices.filter((item) => prefs[item.pref]);

  return (
    <ScreenShell title="Notifications">
      {visible.length === 0 ? (
        <EmptyState title="Notifications are muted" body="Turn a category back on in Settings. Sample notices are still stored." />
      ) : (
        <div className="space-y-2">
          {visible.map((item) => {
            const read = readIds.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  markRead(item.id);
                  if (item.link?.kind === "announcement") markRead(item.link.announcementId);
                  if (item.tab) {
                    closeStack();
                    setTab(item.tab);
                    toast("Opened Posts.");
                    return;
                  }
                  if (item.link) push(item.link);
                }}
                className="press flex w-full items-start gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left"
              >
                {!read ? <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" /> : <span className="mt-2 size-2 shrink-0" />}
                <span>
                  <span className="block font-medium text-ink">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
      <div className="mt-4">
        <SecondaryButton
          onClick={() => {
            visible.forEach((item) => markRead(item.id));
            toast("Visible notices marked read on this device.");
          }}
        >
          Mark visible as read
        </SecondaryButton>
      </div>
    </ScreenShell>
  );
}

const faqs = [
  {
    q: "Did my payment go through?",
    a: "No. Pay Fees only flips a local balance so you can see the paid state. No UPI app or college ledger is contacted.",
  },
  {
    q: "Can faculty see my post?",
    a: "No. Posts, votes, claims, and print requests never leave this browser.",
  },
  {
    q: "Why do help numbers look real?",
    a: "They are fictional 98000 numbers so the screen can be practised. Do not treat them as official contacts.",
  },
  {
    q: "How do I switch from MCA to MBA?",
    a: "Edit profile and change the department. Timetable, attendance, hall ticket, and the Department tab follow it.",
  },
];

export function SupportScreen() {
  const { push } = useNav();
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);
  return (
    <ScreenShell title="Help and support">
      <div className="space-y-2">
        {faqs.map((item) => {
          const expanded = open === item.q;
          return (
            <div key={item.q} className="rounded-card border border-line bg-surface">
              <button
                type="button"
                className="press flex min-h-12 w-full items-center justify-between gap-3 px-3 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : item.q)}
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span className="text-muted">{expanded ? "–" : "+"}</span>
              </button>
              {expanded ? <p className="px-3 pb-3 text-sm leading-relaxed text-muted">{item.a}</p> : null}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <PrimaryButton onClick={() => push({ kind: "help" })}>Anti-ragging and help contacts</PrimaryButton>
      </div>
    </ScreenShell>
  );
}

export function AboutScreen() {
  return (
    <ScreenShell title="About">
      <div className="space-y-3 text-sm leading-relaxed text-ink">
        <p className="font-display text-2xl">Meridian</p>
        <p>{college.full} · {college.city}. A frontend campus companion for a sample MCA student.</p>
        <p>Version 1.0 · preview. There is no backend, database, or payment gateway.</p>
        <p>
          The layout borrows the spirit of restrained campus print: a paper surface, one academic blue, and short motion on press.
          It does not include third-party web component kits.
        </p>
        <Note>College name, people, phones, and fees are fiction for the interface.</Note>
      </div>
    </ScreenShell>
  );
}
