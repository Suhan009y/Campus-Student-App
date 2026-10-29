export type DeptCode = "MCA" | "MBA";

export type Student = {
  name: string;
  registerNo: string;
  department: DeptCode;
  semester: "I" | "II" | "III" | "IV";
  year: string;
  email: string;
  phone: string;
  batch: string;
  dob: string;
  bloodGroup: string;
  guardian: string;
  address: string;
  section: string;
  cgpa: string;
};

export const college = {
  name: "Meridian College",
  full: "Meridian College of Applied Sciences",
  city: "Pune",
};

export const defaultStudent: Student = {
  name: "Ananya Iyer",
  registerNo: "MCA24-118",
  department: "MCA",
  semester: "III",
  year: "2026–27",
  email: "ananya.iyer@student.meridian.edu",
  phone: "9845011820",
  batch: "2024–2027",
  dob: "14 Mar 2003",
  bloodGroup: "B+",
  guardian: "Meera Iyer",
  address: "Kothrud, Pune",
  section: "A",
  cgpa: "8.42",
};

export type Announcement = {
  id: string;
  title: string;
  summary: string;
  body: string;
  dateLabel: string;
  time: string;
  category: "Exams" | "Campus" | "Fees" | "Placement" | "Welfare";
  important: boolean;
  scope: "college" | DeptCode;
  related?: "hall" | "fees" | "help" | "events" | "placement";
};

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Mid-semester timetable is published",
    summary: "Theory papers run 12–21 November. Seating and session details are on the hall ticket.",
    body: "The controller of examinations has published the mid-semester timetable for Semester III.\n\nCarry your hall ticket and college identity card. Bags stay outside Hall B. Students with a timetable clash should write to the department office before 6 November — this preview will not send that mail.\n\nReporting time is 30 minutes before the session printed on the ticket.",
    dateLabel: "29 Oct 2026",
    time: "8:15",
    category: "Exams",
    important: true,
    scope: "college",
    related: "hall",
  },
  {
    id: "a2",
    title: "Library opens early during the exam fortnight",
    summary: "Reading rooms open at 7:30 from 10 November. Group discussion stays on the ground floor.",
    body: "Central Library will open at 7:30 on working days from 10 to 22 November. Silent floors remain floors 2 and 3.\n\nOvernight borrowing is paused on the Sunday before each theory paper. Return desk closes at 19:40.",
    dateLabel: "28 Oct 2026",
    time: "16:05",
    category: "Campus",
    important: false,
    scope: "college",
  },
  {
    id: "a3",
    title: "Odd-semester fee balance due 10 November",
    summary: "Laboratory, library, and examination components are still open on student accounts.",
    body: "Accounts will keep the odd-semester window open until 10 November, 17:00. A sample balance is shown under Pay Fees.\n\nPaying inside this preview only updates the local screen. It does not reach a bank or the college ledger.",
    dateLabel: "27 Oct 2026",
    time: "11:20",
    category: "Fees",
    important: true,
    scope: "college",
    related: "fees",
  },
  {
    id: "a4",
    title: "Horizon Labs visits on 6 November",
    summary: "Associate engineer and intern tracks. Pre-placement talk at 9:30 in the auditorium.",
    body: "Horizon Labs will meet shortlisted students after a common talk in the auditorium. Bring a one-page sample résumé — the app will not upload one.\n\nEligibility notes and a simulated application live under Placement.",
    dateLabel: "26 Oct 2026",
    time: "14:10",
    category: "Placement",
    important: true,
    scope: "college",
    related: "placement",
  },
  {
    id: "a5",
    title: "Sports day heats moved to the east ground",
    summary: "Track events shift off the main quad while the auditorium ramp is repaired.",
    body: "Heats scheduled for 1 November now use the east ground. Report to the sports notice board, not the canteen steps.\n\nThis is a sample campus note.",
    dateLabel: "25 Oct 2026",
    time: "9:00",
    category: "Campus",
    important: false,
    scope: "college",
  },
  {
    id: "a6",
    title: "Anti-ragging week starts Monday",
    summary: "Floor meetings for first-year hostels, plus a reminder of where to ask for help.",
    body: "Wardens will hold short floor meetings next week. Any concern can be raised with the help contacts in this app.\n\nThose contacts are fictional sample numbers for the prototype. They are not real college helplines.",
    dateLabel: "24 Oct 2026",
    time: "18:40",
    category: "Welfare",
    important: true,
    scope: "college",
    related: "help",
  },
  {
    id: "a7",
    title: "Research writing studio for final-year students",
    summary: "Two evening seats on 8 November. Department offices will collect names on paper.",
    body: "The writing studio covers abstracts, citation, and how to talk about a project without inflating it. Seats are limited to twenty.\n\nRegistering in this preview does not reserve a real seat.",
    dateLabel: "22 Oct 2026",
    time: "12:30",
    category: "Campus",
    important: false,
    scope: "college",
    related: "events",
  },
  {
    id: "d1",
    title: "MCA project reviews move to Lab 4",
    summary: "Panel 2 on 8 November now sits in Lab 4 because Hall C is an exam room.",
    body: "Bring a running build or a short slide outline. Faculty will not accept a new team after Friday.\n\nThis notice is only for the MCA department view.",
    dateLabel: "28 Oct 2026",
    time: "13:10",
    category: "Exams",
    important: true,
    scope: "MCA",
  },
  {
    id: "d2",
    title: "Guest lecture: query planners",
    summary: "Prof. Deshmukh hosts a database engineer on 4 November, 15:00, LH-2.",
    body: "The lecture is open to Semester III and IV. Arrive on time — the lab next door has a test at 16:00.\n\nSample department notice. No RSVP is sent.",
    dateLabel: "23 Oct 2026",
    time: "10:00",
    category: "Campus",
    important: false,
    scope: "MCA",
  },
  {
    id: "d3",
    title: "Lab 3 machine maintenance",
    summary: "Computer Networks lab is closed Friday 31 October, 14:00–17:00.",
    body: "Use Lab 1 for unfinished socket exercises. Save work before Thursday evening; images reset overnight.",
    dateLabel: "21 Oct 2026",
    time: "17:45",
    category: "Campus",
    important: false,
    scope: "MCA",
  },
  {
    id: "b1",
    title: "MBA case sprint shortlist",
    summary: "Twelve teams present on 9 November. Order is posted outside the MBA office.",
    body: "Each team has eight minutes and two questions. Slides should be readable from the back of LH-6.\n\nSample MBA notice.",
    dateLabel: "28 Oct 2026",
    time: "9:30",
    category: "Campus",
    important: true,
    scope: "MBA",
  },
  {
    id: "b2",
    title: "Summer internship briefing",
    summary: "Career services meets MBA Semester III on 5 November at 16:00.",
    body: "Bring questions about stipends and conversion offers. The briefing does not replace the campus placement tab.",
    dateLabel: "26 Oct 2026",
    time: "11:00",
    category: "Placement",
    important: false,
    scope: "MBA",
  },
  {
    id: "b3",
    title: "Finance lab software window",
    summary: "Terminals in the MBA lab install a new data pack on Sunday evening.",
    body: "Do not store assignments locally on those machines this weekend. Use the department drive note your faculty already shared in class.",
    dateLabel: "20 Oct 2026",
    time: "15:20",
    category: "Campus",
    important: false,
    scope: "MBA",
  },
];

export type CampusEvent = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  dayNum: string;
  month: string;
  time: string;
  place: string;
  summary: string;
  body: string;
  status: "upcoming" | "past";
  scope: "college" | DeptCode;
};

export const events: CampusEvent[] = [
  {
    id: "e3",
    title: "Alumni talk: product careers, honestly",
    date: "2026-11-02",
    dateLabel: "2 Nov 2026",
    dayNum: "02",
    month: "Nov",
    time: "16:00",
    place: "Auditorium",
    summary: "Two alumni walk through first-year roles, portfolios, and what they would skip.",
    body: "Neel Shah (MCA '22) and Aisha Kamat (MBA '21) will speak for forty minutes and take questions. No recording is promised.\n\nA simulated registration is stored only on this device.",
    status: "upcoming",
    scope: "college",
  },
  {
    id: "e1",
    title: "Horizon Labs placement drive",
    date: "2026-11-06",
    dateLabel: "6 Nov 2026",
    dayNum: "06",
    month: "Nov",
    time: "9:30",
    place: "Auditorium, then interview rooms",
    summary: "Pre-placement talk followed by interviews for associate and intern tracks.",
    body: "The morning talk is open. Interviews are only for students who submit a sample application in Placement before 5 November.\n\nNothing here is sent to Horizon Labs.",
    status: "upcoming",
    scope: "college",
  },
  {
    id: "e6",
    title: "MCA code review clinic",
    date: "2026-11-08",
    dateLabel: "8 Nov 2026",
    dayNum: "08",
    month: "Nov",
    time: "11:00",
    place: "Lab 4",
    summary: "Faculty panel reviews running project builds. Ten-minute slots.",
    body: "Panel 2 sits in Lab 4. Bring a build that starts without a local secret. Sample department event.",
    status: "upcoming",
    scope: "MCA",
  },
  {
    id: "e7",
    title: "MBA case sprint",
    date: "2026-11-09",
    dateLabel: "9 Nov 2026",
    dayNum: "09",
    month: "Nov",
    time: "10:00",
    place: "LH-6",
    summary: "Shortlisted teams present a live case. Faculty and one guest judge.",
    body: "Eight minutes to present, then two questions. Sample MBA event.",
    status: "upcoming",
    scope: "MBA",
  },
  {
    id: "e2",
    title: "Signal — student tech symposium",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    dayNum: "14",
    month: "Nov",
    time: "9:00",
    place: "Auditorium and east foyer",
    summary: "Posters in the morning, five short talks after lunch, project fair till 17:00.",
    body: "Signal is the college's autumn symposium. Poster boards are numbered in the foyer. Talks start at 14:00 sharp.\n\nRegistering here simulates interest only.",
    status: "upcoming",
    scope: "college",
  },
  {
    id: "e4",
    title: "After Hours cultural night",
    date: "2026-10-18",
    dateLabel: "18 Oct 2026",
    dayNum: "18",
    month: "Oct",
    time: "18:00",
    place: "Main quad",
    summary: "Music society, theatre circle, and a short film club screening.",
    body: "The quad programme wrapped at 21:10. A sample recap stays here so past events remain browsable.",
    status: "past",
    scope: "college",
  },
  {
    id: "e5",
    title: "Hack night",
    date: "2026-09-12",
    dateLabel: "12 Sep 2026",
    dayNum: "12",
    month: "Sep",
    time: "18:00",
    place: "Lab 1 and Lab 2",
    summary: "Twelve-hour build night judged by two alumni.",
    body: "Teams shipped small campus tools. Results are listed under Achievements. This entry is a past sample.",
    status: "past",
    scope: "college",
  },
];

export type DateNote = {
  date: string;
  title: string;
  detail: string;
  kind: "event" | "exam" | "holiday" | "deadline";
  eventId?: string;
};

export const dateNotes: DateNote[] = [
  { date: "2026-10-02", title: "Gandhi Jayanti", detail: "College holiday. Library closed.", kind: "holiday" },
  { date: "2026-10-18", title: "After Hours", detail: "Cultural night on the main quad.", kind: "event", eventId: "e4" },
  { date: "2026-10-29", title: "Networks lab", detail: "Semester III lab block in Lab 3. Not a college-wide holiday.", kind: "event" },
  { date: "2026-11-02", title: "Alumni talk", detail: "Product careers, 16:00, auditorium.", kind: "event", eventId: "e3" },
  { date: "2026-11-06", title: "Horizon Labs drive", detail: "Talk at 9:30, interviews after.", kind: "event", eventId: "e1" },
  { date: "2026-11-08", title: "MCA code review clinic", detail: "Lab 4, panel 2.", kind: "event", eventId: "e6" },
  { date: "2026-11-09", title: "MBA case sprint", detail: "LH-6 from 10:00.", kind: "event", eventId: "e7" },
  { date: "2026-11-10", title: "Fee balance deadline", detail: "Odd-semester balance due by 17:00. Sample only.", kind: "deadline" },
  { date: "2026-11-12", title: "Mid-semester exams begin", detail: "First theory paper. See the hall ticket.", kind: "exam" },
  { date: "2026-11-14", title: "Signal symposium", detail: "Talks and project fair. Exam seating still stands that morning.", kind: "event", eventId: "e2" },
  { date: "2026-11-21", title: "Last mid-semester paper", detail: "Python for Data Science practical window.", kind: "exam" },
];

export type Slot = {
  start: string;
  end: string;
  startMin: number;
  endMin: number;
  subject: string;
  faculty: string;
  room: string;
};

export type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export const dayOrder: DayKey[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function slot(start: string, end: string, subject: string, faculty: string, room: string): Slot {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return { start, end, startMin: (sh ?? 0) * 60 + (sm ?? 0), endMin: (eh ?? 0) * 60 + (em ?? 0), subject, faculty, room };
}

export const timetables: Record<DeptCode, Record<DayKey, Slot[]>> = {
  MCA: {
    Mon: [
      slot("08:30", "09:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
      slot("09:30", "10:20", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
      slot("10:30", "11:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4"),
      slot("14:00", "15:20", "Python for Data Science", "Prof. Niharika Rao", "Lab 1"),
    ],
    Tue: [
      slot("08:30", "09:20", "Computer Networks", "Dr. Farhan Qureshi", "LH-3"),
      slot("09:30", "10:50", "Database Systems lab", "Prof. Arun Deshmukh", "Lab 2"),
      slot("11:20", "12:10", "Professional Ethics", "Dr. Ishaan Menon", "LH-1"),
      slot("14:00", "15:20", "Algorithms tutorial", "Dr. Rekha Nair", "LH-2"),
    ],
    Wed: [
      slot("08:30", "09:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4"),
      slot("09:30", "10:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
      slot("11:20", "12:40", "Python for Data Science", "Prof. Niharika Rao", "Lab 1"),
      slot("14:00", "15:00", "Professional Ethics", "Dr. Ishaan Menon", "LH-1"),
    ],
    Thu: [
      slot("08:30", "09:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
      slot("09:30", "10:20", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
      slot("11:20", "12:40", "Computer Networks lab", "Dr. Farhan Qureshi", "Lab 3"),
      slot("14:00", "15:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4"),
    ],
    Fri: [
      slot("08:30", "09:20", "Computer Networks", "Dr. Farhan Qureshi", "LH-3"),
      slot("09:30", "10:50", "Algorithms lab", "Dr. Rekha Nair", "Lab 1"),
      slot("11:20", "12:10", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
      slot("14:00", "15:00", "Mentor hour", "Dr. Rekha Nair", "MCA office"),
    ],
    Sat: [
      slot("09:00", "10:30", "Project studio", "Prof. Smita Kulkarni", "Lab 4"),
      slot("10:40", "12:00", "Seminar", "Rotating faculty", "LH-2"),
    ],
  },
  MBA: {
    Mon: [
      slot("08:30", "09:50", "Marketing Management", "Prof. Leela Raman", "LH-6"),
      slot("10:10", "11:30", "Financial Accounting", "Dr. Kabir Seth", "LH-6"),
      slot("14:00", "15:20", "Organisational Behaviour", "Prof. Maya D'Souza", "LH-5"),
    ],
    Tue: [
      slot("08:30", "09:50", "Business Statistics", "Dr. Kabir Seth", "LH-5"),
      slot("10:10", "11:30", "Marketing Management", "Prof. Leela Raman", "LH-6"),
      slot("14:00", "15:30", "Case workshop", "Prof. Maya D'Souza", "LH-6"),
    ],
    Wed: [
      slot("08:30", "09:50", "Financial Accounting", "Dr. Kabir Seth", "Finance lab"),
      slot("10:10", "11:30", "Operations", "Prof. Harish Bedi", "LH-5"),
      slot("14:00", "15:20", "Business Communication", "Prof. Maya D'Souza", "LH-5"),
    ],
    Thu: [
      slot("08:30", "09:50", "Operations", "Prof. Harish Bedi", "LH-5"),
      slot("10:10", "11:30", "Marketing Management", "Prof. Leela Raman", "LH-6"),
      slot("14:00", "16:00", "Finance lab", "Dr. Kabir Seth", "Finance lab"),
    ],
    Fri: [
      slot("08:30", "09:50", "Organisational Behaviour", "Prof. Maya D'Souza", "LH-5"),
      slot("10:10", "11:30", "Business Statistics", "Dr. Kabir Seth", "LH-6"),
      slot("14:00", "15:00", "Mentor hour", "Prof. Leela Raman", "MBA office"),
    ],
    Sat: [slot("09:00", "12:00", "Live case studio", "Prof. Leela Raman", "LH-6")],
  },
};

export type SubjectAttendance = { subject: string; present: number; total: number; faculty: string };

export const attendanceByDept: Record<DeptCode, SubjectAttendance[]> = {
  MCA: [
    { subject: "Design & Analysis of Algorithms", present: 46, total: 50, faculty: "Dr. Rekha Nair" },
    { subject: "Database Systems", present: 44, total: 50, faculty: "Prof. Arun Deshmukh" },
    { subject: "Computer Networks", present: 37, total: 50, faculty: "Dr. Farhan Qureshi" },
    { subject: "Software Engineering", present: 41, total: 45, faculty: "Prof. Smita Kulkarni" },
    { subject: "Python for Data Science", present: 34, total: 42, faculty: "Prof. Niharika Rao" },
    { subject: "Professional Ethics", present: 27, total: 28, faculty: "Dr. Ishaan Menon" },
  ],
  MBA: [
    { subject: "Marketing Management", present: 40, total: 44, faculty: "Prof. Leela Raman" },
    { subject: "Financial Accounting", present: 30, total: 42, faculty: "Dr. Kabir Seth" },
    { subject: "Organisational Behaviour", present: 36, total: 40, faculty: "Prof. Maya D'Souza" },
    { subject: "Business Statistics", present: 28, total: 36, faculty: "Dr. Kabir Seth" },
    { subject: "Operations", present: 33, total: 38, faculty: "Prof. Harish Bedi" },
  ],
};

export const recentAttendance: Record<DeptCode, { date: string; subject: string; status: "Present" | "Absent" }[]> = {
  MCA: [
    { date: "28 Oct", subject: "Computer Networks", status: "Absent" },
    { date: "28 Oct", subject: "Database Systems", status: "Present" },
    { date: "27 Oct", subject: "Software Engineering", status: "Present" },
    { date: "27 Oct", subject: "Algorithms", status: "Present" },
    { date: "24 Oct", subject: "Python lab", status: "Present" },
    { date: "23 Oct", subject: "Computer Networks", status: "Absent" },
  ],
  MBA: [
    { date: "28 Oct", subject: "Financial Accounting", status: "Absent" },
    { date: "28 Oct", subject: "Marketing Management", status: "Present" },
    { date: "27 Oct", subject: "Operations", status: "Present" },
    { date: "24 Oct", subject: "Statistics", status: "Present" },
  ],
};

export const feeLines = [
  { label: "Tuition", amount: 70000 },
  { label: "Laboratory", amount: 8000 },
  { label: "Library", amount: 2000 },
  { label: "Examination", amount: 5000 },
];

export const FEE_TOTAL = 85000;
export const FEE_ALREADY_PAID = 60000;

export const feeHistory = [
  { id: "fh1", date: "12 Aug 2026", label: "Tuition (part)", amount: 40000 },
  { id: "fh2", date: "2 Sep 2026", label: "Tuition (part)", amount: 20000 },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  copies: number;
  shelf: string;
  year: string;
  blurb: string;
};

export const books: Book[] = [
  {
    id: "bk1",
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    category: "Algorithms",
    copies: 3,
    shelf: "QA 76.9 · Bay 4",
    year: "2022",
    blurb: "The standard algorithms reference used in DAA. Sample catalogue entry.",
  },
  {
    id: "bk2",
    title: "Database System Concepts",
    author: "Silberschatz, Korth, Sudarshan",
    category: "Databases",
    copies: 2,
    shelf: "QA 76.9 · Bay 4",
    year: "2019",
    blurb: "Covers storage, transactions, and query processing for the DBMS paper.",
  },
  {
    id: "bk3",
    title: "Computer Networking: A Top-Down Approach",
    author: "Kurose and Ross",
    category: "Networks",
    copies: 0,
    shelf: "TK 5105 · Bay 6",
    year: "2021",
    blurb: "Currently out with other borrowers. Reservation can be simulated.",
  },
  {
    id: "bk4",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software",
    copies: 4,
    shelf: "QA 76.76 · Bay 2",
    year: "2008",
    blurb: "Short chapters on naming, functions, and tests. Used in Software Engineering.",
  },
  {
    id: "bk5",
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    category: "Data",
    copies: 2,
    shelf: "QA 76.73 · Bay 3",
    year: "2022",
    blurb: "Practical pandas workflows for the Python elective.",
  },
  {
    id: "bk6",
    title: "Design Patterns",
    author: "Gamma, Helm, Johnson, Vlissides",
    category: "Software",
    copies: 0,
    shelf: "QA 76.64 · Bay 2",
    year: "1994",
    blurb: "Both desk copies are out until 4 November in this sample catalogue.",
  },
  {
    id: "bk7",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Russell and Norvig",
    category: "Data",
    copies: 1,
    shelf: "Q 335 · Bay 5",
    year: "2020",
    blurb: "Reference copy. Not a textbook for a current MCA core paper.",
  },
  {
    id: "bk8",
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    category: "Software",
    copies: 3,
    shelf: "QA 76.76 · Bay 2",
    year: "2019",
    blurb: "Career reading. Available for a two-week sample loan.",
  },
];

export type ExamPaper = { code: string; name: string; date: string; session: string; venue: string };

export const examsByDept: Record<DeptCode, { title: string; window: string; papers: ExamPaper[] }> = {
  MCA: {
    title: "MCA Semester III · Mid-semester",
    window: "12–21 Nov 2026",
    papers: [
      { code: "MCA301", name: "Design & Analysis of Algorithms", date: "12 Nov 2026", session: "Forenoon · 10:00", venue: "Hall B" },
      { code: "MCA302", name: "Database Systems", date: "14 Nov 2026", session: "Forenoon · 10:00", venue: "Hall B" },
      { code: "MCA303", name: "Computer Networks", date: "17 Nov 2026", session: "Afternoon · 14:00", venue: "Hall C" },
      { code: "MCA304", name: "Software Engineering", date: "19 Nov 2026", session: "Forenoon · 10:00", venue: "Hall B" },
      { code: "MCA305", name: "Python for Data Science", date: "21 Nov 2026", session: "Forenoon · 10:00", venue: "Lab 1" },
    ],
  },
  MBA: {
    title: "MBA Semester III · Mid-semester",
    window: "12–20 Nov 2026",
    papers: [
      { code: "MBA301", name: "Marketing Management", date: "12 Nov 2026", session: "Afternoon · 14:00", venue: "Hall A" },
      { code: "MBA302", name: "Financial Accounting", date: "15 Nov 2026", session: "Forenoon · 10:00", venue: "Hall A" },
      { code: "MBA303", name: "Organisational Behaviour", date: "18 Nov 2026", session: "Forenoon · 10:00", venue: "Hall A" },
      { code: "MBA304", name: "Operations Management", date: "20 Nov 2026", session: "Afternoon · 14:00", venue: "LH-5" },
    ],
  },
};

export type Role = {
  id: string;
  company: string;
  title: string;
  kind: string;
  deadline: string;
  eligibility: string;
  location: string;
  stipend: string;
  about: string;
  open: boolean;
};

export const roles: Role[] = [
  {
    id: "r1",
    company: "Horizon Labs",
    title: "Associate software engineer",
    kind: "Full-time",
    deadline: "5 Nov 2026",
    eligibility: "CGPA 7.0 or above, no standing backlogs, MCA or related.",
    location: "Pune · hybrid",
    stipend: "Offer discussed after interviews",
    about: "Product engineering on internal tools. The 6 November drive includes this track and an intern track. Applying here only stores a sample application.",
    open: true,
  },
  {
    id: "r2",
    company: "Northwind Analytics",
    title: "Data analyst intern",
    kind: "Internship · 8 weeks",
    deadline: "20 Nov 2026",
    eligibility: "Comfort with SQL and a course project that used real tables. MCA and MBA both eligible.",
    location: "Remote, one onsite week",
    stipend: "₹18,000 / month · sample figure",
    about: "Summer-style internship briefed by career services. The stipend is a sample number, not an offer.",
    open: true,
  },
  {
    id: "r3",
    company: "Paperkite",
    title: "QA trainee",
    kind: "Full-time",
    deadline: "28 Nov 2026",
    eligibility: "Any department. A short testing exercise is shared after the sample application.",
    location: "Pune",
    stipend: "Trainee band · discussed later",
    about: "Paperkite hires a small QA cohort each winter. This card is sample placement copy.",
    open: true,
  },
  {
    id: "r4",
    company: "Campus core drive",
    title: "SDE intern",
    kind: "Closed",
    deadline: "Closed 2 Oct 2026",
    eligibility: "Was limited to pre-final year.",
    location: "Bengaluru",
    stipend: "—",
    about: "Kept on the board so past drives stay visible. Applications are closed.",
    open: false,
  },
];

export type Paper = {
  id: string;
  subject: string;
  department: DeptCode;
  year: string;
  semester: string;
  exam: string;
  questions: string[];
};

export const papers: Paper[] = [
  {
    id: "qp1",
    subject: "Design & Analysis of Algorithms",
    department: "MCA",
    year: "2025–26",
    semester: "III",
    exam: "Mid-semester",
    questions: [
      "Define the master theorem and solve T(n) = 2T(n/2) + n log n.",
      "Compare quicksort and heapsort when the input is nearly sorted.",
      "Write Dijkstra's algorithm and state the condition on edge weights.",
      "A sample question only — not an official paper.",
    ],
  },
  {
    id: "qp2",
    subject: "Database Systems",
    department: "MCA",
    year: "2025–26",
    semester: "III",
    exam: "End-semester",
    questions: [
      "Explain serializability with a short conflicting schedule.",
      "Normalise a given invoice table to BCNF and justify each step.",
      "When would you choose a hash index over a B+ tree?",
      "Sample paper stored in the app. Nothing is downloaded.",
    ],
  },
  {
    id: "qp3",
    subject: "Computer Networks",
    department: "MCA",
    year: "2024–25",
    semester: "III",
    exam: "Mid-semester",
    questions: [
      "Walk through a TCP handshake and one reason it can fail.",
      "Contrast distance-vector and link-state routing in four points.",
      "What does NAT change in an outbound packet?",
    ],
  },
  {
    id: "qp4",
    subject: "Software Engineering",
    department: "MCA",
    year: "2025–26",
    semester: "III",
    exam: "Internal",
    questions: [
      "Write three user stories for a library reservation desk.",
      "Why can a Gantt chart hide a dependency?",
      "Describe one risk in a student project team of four.",
    ],
  },
  {
    id: "qp5",
    subject: "Marketing Management",
    department: "MBA",
    year: "2025–26",
    semester: "III",
    exam: "Mid-semester",
    questions: [
      "Segment a campus canteen's customers without using age alone.",
      "When is penetration pricing a poor fit?",
      "Sample MBA paper.",
    ],
  },
  {
    id: "qp6",
    subject: "Financial Accounting",
    department: "MBA",
    year: "2024–25",
    semester: "III",
    exam: "End-semester",
    questions: [
      "Prepare a short cash-flow classification from the given notes.",
      "Explain one limitation of the current ratio.",
      "Sample paper for the department filter.",
    ],
  },
];

export type HandbookSection = { id: string; title: string; paragraphs: string[]; points: string[] };

export const handbook: HandbookSection[] = [
  {
    id: "h1",
    title: "Academic rules",
    paragraphs: [
      "Meridian runs two-year MCA and MBA programmes. Each semester publishes a scheme of instruction before classes begin.",
      "A student registers for the subjects of their department and section. Extra credit needs the head of department's note. This text is sample policy for the prototype.",
    ],
    points: [
      "Core papers cannot be dropped after the second week.",
      "Department electives lock at the end of week three.",
      "Project teams are filed with the department office, not through this app.",
    ],
  },
  {
    id: "h2",
    title: "Examination guidelines",
    paragraphs: [
      "Mid-semester and end-semester papers follow the seating slip. Identity card and hall ticket are both required in this sample rule set.",
      "A clash or a medical absence is handled by the controller of examinations. The app can only show the ticket.",
    ],
    points: [
      "Report 30 minutes before the session.",
      "No smart watches in the hall.",
      "Malpractice is referred to a committee. This screen does not file a case.",
    ],
  },
  {
    id: "h3",
    title: "Attendance policy",
    paragraphs: [
      "The sample rule asks for 75% attendance in each subject to sit the end-semester paper. Internals may use a higher bar set by the faculty.",
      "Medical or duty absences can be claimed. A claim in this app is stored locally and is not reviewed by an office.",
    ],
    points: [
      "Below 75% is highlighted on the attendance screen.",
      "Duty leave needs a faculty or event note.",
      "Condonation, if any, is a college decision — not a button here.",
    ],
  },
  {
    id: "h4",
    title: "Student code of conduct",
    paragraphs: [
      "The campus expects ordinary courtesy: no ragging, no harassment, and no damage to labs. Disagreements go to the mentor or the help contacts.",
      "Posts in the student feed are visible only inside this preview. Be decent anyway. Nothing is moderated by a server.",
    ],
    points: [
      "Identity cards are worn in labs and the library.",
      "Lab machines are not for stored personal files.",
      "Anti-ragging contacts in the app are fictional.",
    ],
  },
];

export type Lecturer = {
  id: string;
  name: string;
  department: string;
  designation: string;
  subject: string;
  email: string;
  phone: string;
  room: string;
  hours: string;
};

export const lecturers: Lecturer[] = [
  {
    id: "l1",
    name: "Dr. Rekha Nair",
    department: "MCA",
    designation: "Professor and Head",
    subject: "Design & Analysis of Algorithms",
    email: "rekha.nair@meridian.edu",
    phone: "9800001101",
    room: "MCA office, first floor",
    hours: "Fri 14:00–15:00",
  },
  {
    id: "l2",
    name: "Prof. Arun Deshmukh",
    department: "MCA",
    designation: "Associate Professor",
    subject: "Database Systems",
    email: "arun.deshmukh@meridian.edu",
    phone: "9800001102",
    room: "LH-2 annex",
    hours: "Tue 15:30–16:30",
  },
  {
    id: "l3",
    name: "Dr. Farhan Qureshi",
    department: "MCA",
    designation: "Assistant Professor",
    subject: "Computer Networks",
    email: "farhan.qureshi@meridian.edu",
    phone: "9800001103",
    room: "Lab 3 cabin",
    hours: "Thu 15:30–16:15",
  },
  {
    id: "l4",
    name: "Prof. Smita Kulkarni",
    department: "MCA",
    designation: "Associate Professor",
    subject: "Software Engineering",
    email: "smita.kulkarni@meridian.edu",
    phone: "9800001104",
    room: "Lab 4",
    hours: "Mon 15:30–16:30",
  },
  {
    id: "l5",
    name: "Prof. Niharika Rao",
    department: "MCA",
    designation: "Assistant Professor",
    subject: "Python for Data Science",
    email: "niharika.rao@meridian.edu",
    phone: "9800001105",
    room: "Lab 1",
    hours: "Wed 15:30–16:15",
  },
  {
    id: "l6",
    name: "Dr. Ishaan Menon",
    department: "Humanities",
    designation: "Assistant Professor",
    subject: "Professional Ethics",
    email: "ishaan.menon@meridian.edu",
    phone: "9800001106",
    room: "LH-1",
    hours: "Wed 15:10–15:40",
  },
  {
    id: "l7",
    name: "Prof. Leela Raman",
    department: "MBA",
    designation: "Professor and Head",
    subject: "Marketing Management",
    email: "leela.raman@meridian.edu",
    phone: "9800002201",
    room: "MBA office",
    hours: "Fri 14:00–15:00",
  },
  {
    id: "l8",
    name: "Dr. Kabir Seth",
    department: "MBA",
    designation: "Associate Professor",
    subject: "Financial Accounting",
    email: "kabir.seth@meridian.edu",
    phone: "9800002202",
    room: "Finance lab",
    hours: "Thu 16:00–16:40",
  },
  {
    id: "l9",
    name: "Prof. Maya D'Souza",
    department: "MBA",
    designation: "Assistant Professor",
    subject: "Organisational Behaviour",
    email: "maya.dsouza@meridian.edu",
    phone: "9800002203",
    room: "LH-5",
    hours: "Tue 15:40–16:20",
  },
];

export type Poll = { id: string; question: string; detail: string; options: { id: string; label: string; votes: number }[] };

export const polls: Poll[] = [
  {
    id: "p1",
    question: "Which slot works for the MCA project review?",
    detail: "Panel 2 needs a backup if Lab 4 is still an exam room. One vote in this session.",
    options: [
      { id: "a", label: "Monday 14:00", votes: 18 },
      { id: "b", label: "Wednesday 11:00", votes: 27 },
      { id: "c", label: "Friday 16:00", votes: 11 },
    ],
  },
  {
    id: "p2",
    question: "Where should Signal put the poster fair?",
    detail: "College-wide sample poll. Voting stays on this device.",
    options: [
      { id: "a", label: "East foyer", votes: 42 },
      { id: "b", label: "Library lawn", votes: 23 },
      { id: "c", label: "Canteen mezzanine", votes: 15 },
    ],
  },
  {
    id: "p3",
    question: "Mess breakfast window during exams",
    detail: "Hostel council sample. Not a real ballot.",
    options: [
      { id: "a", label: "Keep 7:30–9:30", votes: 31 },
      { id: "b", label: "Extend to 10:00", votes: 46 },
    ],
  },
];

export type Achievement = {
  id: string;
  title: string;
  who: string;
  audience: "student" | "college";
  category: "Research" | "Sports" | "Cultural" | "Academic";
  date: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    id: "ach1",
    title: "Smart India Hackathon — national final",
    who: "MCA team Meridian",
    audience: "student",
    category: "Research",
    date: "18 Sep 2026",
    detail: "Four students reached the national final with a hostel outpass tool. Sample achievement.",
  },
  {
    id: "ach2",
    title: "Best paper mention, department symposium",
    who: "Ananya Iyer · MCA",
    audience: "student",
    category: "Research",
    date: "4 Oct 2026",
    detail: "Short paper on attendance heatmaps for lab sections. Mention, not a published journal.",
  },
  {
    id: "ach3",
    title: "Inter-university basketball bronze",
    who: "College team",
    audience: "college",
    category: "Sports",
    date: "11 Aug 2026",
    detail: "Third place at the west-zone meet. The squad list is on the sports board, not in this app.",
  },
  {
    id: "ach4",
    title: "Reading challenge, 1,200 books",
    who: "Library council",
    audience: "college",
    category: "Cultural",
    date: "30 Sep 2026",
    detail: "Students logged sample pages over September. The figure is illustrative.",
  },
  {
    id: "ach5",
    title: "Case sprint, regional runners-up",
    who: "MBA team North Stair",
    audience: "student",
    category: "Academic",
    date: "16 Oct 2026",
    detail: "Second place at a Pune colleges case meet. Sample result.",
  },
  {
    id: "ach6",
    title: "Lab safety audit cleared",
    who: "Meridian College",
    audience: "college",
    category: "Academic",
    date: "2 Sep 2026",
    detail: "Computing labs cleared a sample internal audit with two minor notes already fixed.",
  },
];

export type Place = {
  id: string;
  name: string;
  mapLabel: string;
  zone: string;
  hours: string;
  note: string;
  x: number;
  y: number;
};

export const places: Place[] = [
  { id: "lib", name: "Central Library", mapLabel: "Library", zone: "North quad", hours: "8:00–20:00", note: "Silent floors 2 and 3. Bag counter at the desk.", x: 22, y: 18 },
  { id: "admin", name: "Admin office", mapLabel: "Admin", zone: "North block", hours: "9:30–16:30", note: "Fees window and student section. Sample hours.", x: 74, y: 16 },
  { id: "audit", name: "Auditorium", mapLabel: "Auditorium", zone: "Central", hours: "Event days", note: "Talks, drives, and examinations when Hall B overflows.", x: 50, y: 40 },
  { id: "mca", name: "MCA block", mapLabel: "MCA", zone: "West academic", hours: "8:00–18:00", note: "Labs 1–4 and the department office.", x: 20, y: 58 },
  { id: "mba", name: "MBA block", mapLabel: "MBA", zone: "East academic", hours: "8:00–18:00", note: "LH-5, LH-6, and the finance lab.", x: 78, y: 56 },
  { id: "canteen", name: "Canteen", mapLabel: "Canteen", zone: "South court", hours: "8:00–19:00", note: "Mess overflow during exam breakfasts.", x: 28, y: 80 },
  { id: "park", name: "Parking", mapLabel: "Parking", zone: "South gate", hours: "Open with the gate", note: "Two-wheelers along the east wall. No overnight parking in this sample map.", x: 74, y: 78 },
];

export type HelpContact = {
  id: string;
  group: "urgent" | "support";
  name: string;
  role: string;
  phone: string;
  note: string;
};

export const helpContacts: HelpContact[] = [
  { id: "hc1", group: "urgent", name: "Anti-ragging cell", role: "Sample desk", phone: "9800009001", note: "Ask for the duty faculty. Fictional number." },
  { id: "hc2", group: "urgent", name: "Campus security", role: "Main gate", phone: "9800009002", note: "Gate cabin, day and night in this sample." },
  { id: "hc3", group: "urgent", name: "Women's safety desk", role: "Admin block", phone: "9800009003", note: "Sample contact. Not a real helpline." },
  { id: "hc4", group: "support", name: "Student counselling", role: "Wellbeing room, library mezzanine", phone: "9800009010", note: "Weekday afternoons. Fictional." },
  { id: "hc5", group: "support", name: "Peer mentors", role: "MCA and MBA second year", phone: "9800009011", note: "Study and campus navigation. Not an emergency line." },
  { id: "hc6", group: "support", name: "Hostel warden", role: "Sample residences", phone: "9800009012", note: "Leave and maintenance questions." },
];

export type DeptInfo = {
  full: string;
  about: string;
  hod: string;
  office: string;
  email: string;
  stats: { label: string; value: string }[];
  academics: { label: string; value: string }[];
  electives: string;
};

export const departments: Record<DeptCode, DeptInfo> = {
  MCA: {
    full: "Master of Computer Applications",
    about: "A two-year programme in software, data, and systems. Semester III is the core lab term: algorithms, databases, networks, and a project studio on Saturdays.",
    hod: "Dr. Rekha Nair",
    office: "MCA office, first floor, west academic block",
    email: "mca@meridian.edu",
    stats: [
      { label: "Section", value: "A · 62 students" },
      { label: "Labs", value: "4" },
      { label: "Mentor", value: "Dr. Nair" },
    ],
    academics: [
      { label: "Duration", value: "4 semesters" },
      { label: "This term", value: "5 theory/lab cores + ethics" },
      { label: "Internals", value: "40 marks" },
      { label: "End-semester", value: "60 marks" },
      { label: "Attendance bar", value: "75% each subject" },
      { label: "Project", value: "Starts this semester" },
    ],
    electives: "Python for Data Science is the locked elective for Section A. A change needs the HOD before 7 November in this sample calendar.",
  },
  MBA: {
    full: "Master of Business Administration",
    about: "A two-year programme built around cases, a finance lab, and a summer internship. Semester III mixes marketing, accounting, operations, and a live case studio.",
    hod: "Prof. Leela Raman",
    office: "MBA office, east academic block",
    email: "mba@meridian.edu",
    stats: [
      { label: "Section", value: "A · 54 students" },
      { label: "Labs", value: "Finance lab" },
      { label: "Mentor", value: "Prof. Raman" },
    ],
    academics: [
      { label: "Duration", value: "4 semesters" },
      { label: "This term", value: "5 cores" },
      { label: "Internals", value: "40 marks" },
      { label: "End-semester", value: "60 marks" },
      { label: "Attendance bar", value: "75% each subject" },
      { label: "Internship", value: "Briefing 5 November" },
    ],
    electives: "The live case studio on Saturday is compulsory this term. Elective preferences for Semester IV open in December.",
  },
};

export type Comment = { id: string; author: string; body: string; time: string };

export type Post = {
  id: string;
  author: string;
  department: string;
  body: string;
  time: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
};

export const seedPosts: Post[] = [
  {
    id: "post1",
    author: "Rohan Kulkarni",
    department: "MCA · Sem III",
    body: "DBMS lab 2 is open early tomorrow for anyone who missed the normalisation exercise. I'll be there at 8:10 with the worksheet.",
    time: "Today · 8:40",
    likes: 12,
    liked: false,
    comments: [
      { id: "cm1", author: "Sara Mathew", body: "Saving me. I missed the second normal form example.", time: "Today · 9:05" },
    ],
  },
  {
    id: "post2",
    author: "Sara Mathew",
    department: "MCA · Sem III",
    body: "If you are sitting Hall B for algorithms, the invigilation note says transparent bottles only. Refill at the foyer tap.",
    time: "Yesterday",
    likes: 9,
    liked: false,
    comments: [],
  },
  {
    id: "post3",
    author: "Imran Shaikh",
    department: "MBA · Sem III",
    body: "Case sprint teams: LH-6's projector crops the right edge. Keep titles inside a wide margin.",
    time: "Tue",
    likes: 6,
    liked: false,
    comments: [{ id: "cm2", author: "Leela's TA", body: "Confirmed with the lab assistant. Sample reply.", time: "Tue" }],
  },
  {
    id: "post4",
    author: "Diya Nambiar",
    department: "MCA · Sem I",
    body: "First-years looking for the library bag counter: it is left of the stairs, not inside the reading room.",
    time: "Mon",
    likes: 15,
    liked: false,
    comments: [],
  },
];

export type Claim = {
  id: string;
  date: string;
  subject: string;
  reason: string;
  attachment: string;
  status: string;
};

export const seedClaims: Claim[] = [
  {
    id: "c1",
    date: "2026-10-14",
    subject: "Computer Networks",
    reason: "Medical appointment. A clinic note was shown to the mentor.",
    attachment: "clinic-note.pdf",
    status: "Approved · sample",
  },
  {
    id: "c2",
    date: "2026-09-03",
    subject: "Database Systems",
    reason: "Represented the department at a hackathon.",
    attachment: "None",
    status: "Pending · sample",
  },
];

export type PrintJob = {
  id: string;
  name: string;
  pages: number;
  copies: number;
  color: boolean;
  duplex: boolean;
  price: number;
  status: string;
};

export const seedPrints: PrintJob[] = [
  {
    id: "pj1",
    name: "DBMS assignment 2",
    pages: 12,
    copies: 1,
    color: false,
    duplex: true,
    price: 9,
    status: "Ready at the counter · sample",
  },
];

export type Prefs = { exams: boolean; fees: boolean; events: boolean; posts: boolean };

export const defaultPrefs: Prefs = { exams: true, fees: true, events: true, posts: true };

export type Notice = {
  id: string;
  pref: keyof Prefs;
  title: string;
  detail: string;
  link?: { kind: "announcement"; announcementId: string } | { kind: "event"; eventId: string } | { kind: "fees" } | { kind: "help" };
  tab?: "posts";
};

export const notices: Notice[] = [
  {
    id: "n1",
    pref: "exams",
    title: "Mid-semester timetable is published",
    detail: "Theory papers begin 12 November.",
    link: { kind: "announcement", announcementId: "a1" },
  },
  {
    id: "n2",
    pref: "fees",
    title: "Fee balance due 10 November",
    detail: "A sample pending amount is open under Pay Fees.",
    link: { kind: "fees" },
  },
  {
    id: "n3",
    pref: "events",
    title: "Alumni talk on 2 November",
    detail: "Auditorium, 16:00. Sample registration only.",
    link: { kind: "event", eventId: "e3" },
  },
  {
    id: "n4",
    pref: "posts",
    title: "Rohan posted about an early DBMS lab",
    detail: "Open the posts feed to read it.",
    tab: "posts",
  },
  {
    id: "n5",
    pref: "events",
    title: "Anti-ragging week",
    detail: "Help contacts in the app are fictional.",
    link: { kind: "help" },
  },
];

export const claimSubjects = [
  "Design & Analysis of Algorithms",
  "Database Systems",
  "Computer Networks",
  "Software Engineering",
  "Python for Data Science",
  "Professional Ethics",
  "Marketing Management",
  "Financial Accounting",
  "Organisational Behaviour",
  "Operations",
];
