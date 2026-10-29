import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronLeft, C as Heart, D as Clock, E as Copy, F as Briefcase, I as BookOpen, L as Bell, M as CalendarRange, N as CalendarDays, O as ClipboardCheck, P as Building2, S as House, T as FilePenLine, _ as Mail, b as IndianRupee, c as Search, d as Phone, f as MessageSquare, g as Map, h as Megaphone, i as Trophy, j as Check, k as ChevronRight, l as Printer, m as Menu, n as Vote, o as Ticket, p as MessageCircle, r as UserRound, s as Share2, t as X, u as Plus, v as LifeBuoy, w as FileText, x as IdCard, y as Library } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CPoOOFKf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var college = {
	name: "Meridian College",
	full: "Meridian College of Applied Sciences",
	city: "Pune"
};
var defaultStudent = {
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
	cgpa: "8.42"
};
var announcements = [
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
		related: "hall"
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
		scope: "college"
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
		related: "fees"
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
		related: "placement"
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
		scope: "college"
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
		related: "help"
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
		related: "events"
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
		scope: "MCA"
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
		scope: "MCA"
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
		scope: "MCA"
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
		scope: "MBA"
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
		scope: "MBA"
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
		scope: "MBA"
	}
];
var events = [
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
		scope: "college"
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
		scope: "college"
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
		scope: "MCA"
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
		scope: "MBA"
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
		scope: "college"
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
		scope: "college"
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
		scope: "college"
	}
];
var dateNotes = [
	{
		date: "2026-10-02",
		title: "Gandhi Jayanti",
		detail: "College holiday. Library closed.",
		kind: "holiday"
	},
	{
		date: "2026-10-18",
		title: "After Hours",
		detail: "Cultural night on the main quad.",
		kind: "event",
		eventId: "e4"
	},
	{
		date: "2026-10-29",
		title: "Networks lab",
		detail: "Semester III lab block in Lab 3. Not a college-wide holiday.",
		kind: "event"
	},
	{
		date: "2026-11-02",
		title: "Alumni talk",
		detail: "Product careers, 16:00, auditorium.",
		kind: "event",
		eventId: "e3"
	},
	{
		date: "2026-11-06",
		title: "Horizon Labs drive",
		detail: "Talk at 9:30, interviews after.",
		kind: "event",
		eventId: "e1"
	},
	{
		date: "2026-11-08",
		title: "MCA code review clinic",
		detail: "Lab 4, panel 2.",
		kind: "event",
		eventId: "e6"
	},
	{
		date: "2026-11-09",
		title: "MBA case sprint",
		detail: "LH-6 from 10:00.",
		kind: "event",
		eventId: "e7"
	},
	{
		date: "2026-11-10",
		title: "Fee balance deadline",
		detail: "Odd-semester balance due by 17:00. Sample only.",
		kind: "deadline"
	},
	{
		date: "2026-11-12",
		title: "Mid-semester exams begin",
		detail: "First theory paper. See the hall ticket.",
		kind: "exam"
	},
	{
		date: "2026-11-14",
		title: "Signal symposium",
		detail: "Talks and project fair. Exam seating still stands that morning.",
		kind: "event",
		eventId: "e2"
	},
	{
		date: "2026-11-21",
		title: "Last mid-semester paper",
		detail: "Python for Data Science practical window.",
		kind: "exam"
	}
];
var dayOrder = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function slot(start, end, subject, faculty, room) {
	const [sh, sm] = start.split(":").map(Number);
	const [eh, em] = end.split(":").map(Number);
	return {
		start,
		end,
		startMin: (sh ?? 0) * 60 + (sm ?? 0),
		endMin: (eh ?? 0) * 60 + (em ?? 0),
		subject,
		faculty,
		room
	};
}
var timetables = {
	MCA: {
		Mon: [
			slot("08:30", "09:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
			slot("09:30", "10:20", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
			slot("10:30", "11:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4"),
			slot("14:00", "15:20", "Python for Data Science", "Prof. Niharika Rao", "Lab 1")
		],
		Tue: [
			slot("08:30", "09:20", "Computer Networks", "Dr. Farhan Qureshi", "LH-3"),
			slot("09:30", "10:50", "Database Systems lab", "Prof. Arun Deshmukh", "Lab 2"),
			slot("11:20", "12:10", "Professional Ethics", "Dr. Ishaan Menon", "LH-1"),
			slot("14:00", "15:20", "Algorithms tutorial", "Dr. Rekha Nair", "LH-2")
		],
		Wed: [
			slot("08:30", "09:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4"),
			slot("09:30", "10:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
			slot("11:20", "12:40", "Python for Data Science", "Prof. Niharika Rao", "Lab 1"),
			slot("14:00", "15:00", "Professional Ethics", "Dr. Ishaan Menon", "LH-1")
		],
		Thu: [
			slot("08:30", "09:20", "Design & Analysis of Algorithms", "Dr. Rekha Nair", "LH-2"),
			slot("09:30", "10:20", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
			slot("11:20", "12:40", "Computer Networks lab", "Dr. Farhan Qureshi", "Lab 3"),
			slot("14:00", "15:20", "Software Engineering", "Prof. Smita Kulkarni", "LH-4")
		],
		Fri: [
			slot("08:30", "09:20", "Computer Networks", "Dr. Farhan Qureshi", "LH-3"),
			slot("09:30", "10:50", "Algorithms lab", "Dr. Rekha Nair", "Lab 1"),
			slot("11:20", "12:10", "Database Systems", "Prof. Arun Deshmukh", "LH-2"),
			slot("14:00", "15:00", "Mentor hour", "Dr. Rekha Nair", "MCA office")
		],
		Sat: [slot("09:00", "10:30", "Project studio", "Prof. Smita Kulkarni", "Lab 4"), slot("10:40", "12:00", "Seminar", "Rotating faculty", "LH-2")]
	},
	MBA: {
		Mon: [
			slot("08:30", "09:50", "Marketing Management", "Prof. Leela Raman", "LH-6"),
			slot("10:10", "11:30", "Financial Accounting", "Dr. Kabir Seth", "LH-6"),
			slot("14:00", "15:20", "Organisational Behaviour", "Prof. Maya D'Souza", "LH-5")
		],
		Tue: [
			slot("08:30", "09:50", "Business Statistics", "Dr. Kabir Seth", "LH-5"),
			slot("10:10", "11:30", "Marketing Management", "Prof. Leela Raman", "LH-6"),
			slot("14:00", "15:30", "Case workshop", "Prof. Maya D'Souza", "LH-6")
		],
		Wed: [
			slot("08:30", "09:50", "Financial Accounting", "Dr. Kabir Seth", "Finance lab"),
			slot("10:10", "11:30", "Operations", "Prof. Harish Bedi", "LH-5"),
			slot("14:00", "15:20", "Business Communication", "Prof. Maya D'Souza", "LH-5")
		],
		Thu: [
			slot("08:30", "09:50", "Operations", "Prof. Harish Bedi", "LH-5"),
			slot("10:10", "11:30", "Marketing Management", "Prof. Leela Raman", "LH-6"),
			slot("14:00", "16:00", "Finance lab", "Dr. Kabir Seth", "Finance lab")
		],
		Fri: [
			slot("08:30", "09:50", "Organisational Behaviour", "Prof. Maya D'Souza", "LH-5"),
			slot("10:10", "11:30", "Business Statistics", "Dr. Kabir Seth", "LH-6"),
			slot("14:00", "15:00", "Mentor hour", "Prof. Leela Raman", "MBA office")
		],
		Sat: [slot("09:00", "12:00", "Live case studio", "Prof. Leela Raman", "LH-6")]
	}
};
var attendanceByDept = {
	MCA: [
		{
			subject: "Design & Analysis of Algorithms",
			present: 46,
			total: 50,
			faculty: "Dr. Rekha Nair"
		},
		{
			subject: "Database Systems",
			present: 44,
			total: 50,
			faculty: "Prof. Arun Deshmukh"
		},
		{
			subject: "Computer Networks",
			present: 37,
			total: 50,
			faculty: "Dr. Farhan Qureshi"
		},
		{
			subject: "Software Engineering",
			present: 41,
			total: 45,
			faculty: "Prof. Smita Kulkarni"
		},
		{
			subject: "Python for Data Science",
			present: 34,
			total: 42,
			faculty: "Prof. Niharika Rao"
		},
		{
			subject: "Professional Ethics",
			present: 27,
			total: 28,
			faculty: "Dr. Ishaan Menon"
		}
	],
	MBA: [
		{
			subject: "Marketing Management",
			present: 40,
			total: 44,
			faculty: "Prof. Leela Raman"
		},
		{
			subject: "Financial Accounting",
			present: 30,
			total: 42,
			faculty: "Dr. Kabir Seth"
		},
		{
			subject: "Organisational Behaviour",
			present: 36,
			total: 40,
			faculty: "Prof. Maya D'Souza"
		},
		{
			subject: "Business Statistics",
			present: 28,
			total: 36,
			faculty: "Dr. Kabir Seth"
		},
		{
			subject: "Operations",
			present: 33,
			total: 38,
			faculty: "Prof. Harish Bedi"
		}
	]
};
var recentAttendance = {
	MCA: [
		{
			date: "28 Oct",
			subject: "Computer Networks",
			status: "Absent"
		},
		{
			date: "28 Oct",
			subject: "Database Systems",
			status: "Present"
		},
		{
			date: "27 Oct",
			subject: "Software Engineering",
			status: "Present"
		},
		{
			date: "27 Oct",
			subject: "Algorithms",
			status: "Present"
		},
		{
			date: "24 Oct",
			subject: "Python lab",
			status: "Present"
		},
		{
			date: "23 Oct",
			subject: "Computer Networks",
			status: "Absent"
		}
	],
	MBA: [
		{
			date: "28 Oct",
			subject: "Financial Accounting",
			status: "Absent"
		},
		{
			date: "28 Oct",
			subject: "Marketing Management",
			status: "Present"
		},
		{
			date: "27 Oct",
			subject: "Operations",
			status: "Present"
		},
		{
			date: "24 Oct",
			subject: "Statistics",
			status: "Present"
		}
	]
};
var feeLines = [
	{
		label: "Tuition",
		amount: 7e4
	},
	{
		label: "Laboratory",
		amount: 8e3
	},
	{
		label: "Library",
		amount: 2e3
	},
	{
		label: "Examination",
		amount: 5e3
	}
];
var FEE_TOTAL = 85e3;
var FEE_ALREADY_PAID = 6e4;
var feeHistory = [{
	id: "fh1",
	date: "12 Aug 2026",
	label: "Tuition (part)",
	amount: 4e4
}, {
	id: "fh2",
	date: "2 Sep 2026",
	label: "Tuition (part)",
	amount: 2e4
}];
var books = [
	{
		id: "bk1",
		title: "Introduction to Algorithms",
		author: "Cormen, Leiserson, Rivest, Stein",
		category: "Algorithms",
		copies: 3,
		shelf: "QA 76.9 · Bay 4",
		year: "2022",
		blurb: "The standard algorithms reference used in DAA. Sample catalogue entry."
	},
	{
		id: "bk2",
		title: "Database System Concepts",
		author: "Silberschatz, Korth, Sudarshan",
		category: "Databases",
		copies: 2,
		shelf: "QA 76.9 · Bay 4",
		year: "2019",
		blurb: "Covers storage, transactions, and query processing for the DBMS paper."
	},
	{
		id: "bk3",
		title: "Computer Networking: A Top-Down Approach",
		author: "Kurose and Ross",
		category: "Networks",
		copies: 0,
		shelf: "TK 5105 · Bay 6",
		year: "2021",
		blurb: "Currently out with other borrowers. Reservation can be simulated."
	},
	{
		id: "bk4",
		title: "Clean Code",
		author: "Robert C. Martin",
		category: "Software",
		copies: 4,
		shelf: "QA 76.76 · Bay 2",
		year: "2008",
		blurb: "Short chapters on naming, functions, and tests. Used in Software Engineering."
	},
	{
		id: "bk5",
		title: "Python for Data Analysis",
		author: "Wes McKinney",
		category: "Data",
		copies: 2,
		shelf: "QA 76.73 · Bay 3",
		year: "2022",
		blurb: "Practical pandas workflows for the Python elective."
	},
	{
		id: "bk6",
		title: "Design Patterns",
		author: "Gamma, Helm, Johnson, Vlissides",
		category: "Software",
		copies: 0,
		shelf: "QA 76.64 · Bay 2",
		year: "1994",
		blurb: "Both desk copies are out until 4 November in this sample catalogue."
	},
	{
		id: "bk7",
		title: "Artificial Intelligence: A Modern Approach",
		author: "Russell and Norvig",
		category: "Data",
		copies: 1,
		shelf: "Q 335 · Bay 5",
		year: "2020",
		blurb: "Reference copy. Not a textbook for a current MCA core paper."
	},
	{
		id: "bk8",
		title: "The Pragmatic Programmer",
		author: "David Thomas, Andrew Hunt",
		category: "Software",
		copies: 3,
		shelf: "QA 76.76 · Bay 2",
		year: "2019",
		blurb: "Career reading. Available for a two-week sample loan."
	}
];
var examsByDept = {
	MCA: {
		title: "MCA Semester III · Mid-semester",
		window: "12–21 Nov 2026",
		papers: [
			{
				code: "MCA301",
				name: "Design & Analysis of Algorithms",
				date: "12 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Hall B"
			},
			{
				code: "MCA302",
				name: "Database Systems",
				date: "14 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Hall B"
			},
			{
				code: "MCA303",
				name: "Computer Networks",
				date: "17 Nov 2026",
				session: "Afternoon · 14:00",
				venue: "Hall C"
			},
			{
				code: "MCA304",
				name: "Software Engineering",
				date: "19 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Hall B"
			},
			{
				code: "MCA305",
				name: "Python for Data Science",
				date: "21 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Lab 1"
			}
		]
	},
	MBA: {
		title: "MBA Semester III · Mid-semester",
		window: "12–20 Nov 2026",
		papers: [
			{
				code: "MBA301",
				name: "Marketing Management",
				date: "12 Nov 2026",
				session: "Afternoon · 14:00",
				venue: "Hall A"
			},
			{
				code: "MBA302",
				name: "Financial Accounting",
				date: "15 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Hall A"
			},
			{
				code: "MBA303",
				name: "Organisational Behaviour",
				date: "18 Nov 2026",
				session: "Forenoon · 10:00",
				venue: "Hall A"
			},
			{
				code: "MBA304",
				name: "Operations Management",
				date: "20 Nov 2026",
				session: "Afternoon · 14:00",
				venue: "LH-5"
			}
		]
	}
};
var roles = [
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
		open: true
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
		open: true
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
		open: true
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
		open: false
	}
];
var papers = [
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
			"A sample question only — not an official paper."
		]
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
			"Sample paper stored in the app. Nothing is downloaded."
		]
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
			"What does NAT change in an outbound packet?"
		]
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
			"Describe one risk in a student project team of four."
		]
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
			"Sample MBA paper."
		]
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
			"Sample paper for the department filter."
		]
	}
];
var handbook = [
	{
		id: "h1",
		title: "Academic rules",
		paragraphs: ["Meridian runs two-year MCA and MBA programmes. Each semester publishes a scheme of instruction before classes begin.", "A student registers for the subjects of their department and section. Extra credit needs the head of department's note. This text is sample policy for the prototype."],
		points: [
			"Core papers cannot be dropped after the second week.",
			"Department electives lock at the end of week three.",
			"Project teams are filed with the department office, not through this app."
		]
	},
	{
		id: "h2",
		title: "Examination guidelines",
		paragraphs: ["Mid-semester and end-semester papers follow the seating slip. Identity card and hall ticket are both required in this sample rule set.", "A clash or a medical absence is handled by the controller of examinations. The app can only show the ticket."],
		points: [
			"Report 30 minutes before the session.",
			"No smart watches in the hall.",
			"Malpractice is referred to a committee. This screen does not file a case."
		]
	},
	{
		id: "h3",
		title: "Attendance policy",
		paragraphs: ["The sample rule asks for 75% attendance in each subject to sit the end-semester paper. Internals may use a higher bar set by the faculty.", "Medical or duty absences can be claimed. A claim in this app is stored locally and is not reviewed by an office."],
		points: [
			"Below 75% is highlighted on the attendance screen.",
			"Duty leave needs a faculty or event note.",
			"Condonation, if any, is a college decision — not a button here."
		]
	},
	{
		id: "h4",
		title: "Student code of conduct",
		paragraphs: ["The campus expects ordinary courtesy: no ragging, no harassment, and no damage to labs. Disagreements go to the mentor or the help contacts.", "Posts in the student feed are visible only inside this preview. Be decent anyway. Nothing is moderated by a server."],
		points: [
			"Identity cards are worn in labs and the library.",
			"Lab machines are not for stored personal files.",
			"Anti-ragging contacts in the app are fictional."
		]
	}
];
var lecturers = [
	{
		id: "l1",
		name: "Dr. Rekha Nair",
		department: "MCA",
		designation: "Professor and Head",
		subject: "Design & Analysis of Algorithms",
		email: "rekha.nair@meridian.edu",
		phone: "9800001101",
		room: "MCA office, first floor",
		hours: "Fri 14:00–15:00"
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
		hours: "Tue 15:30–16:30"
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
		hours: "Thu 15:30–16:15"
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
		hours: "Mon 15:30–16:30"
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
		hours: "Wed 15:30–16:15"
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
		hours: "Wed 15:10–15:40"
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
		hours: "Fri 14:00–15:00"
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
		hours: "Thu 16:00–16:40"
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
		hours: "Tue 15:40–16:20"
	}
];
var polls = [
	{
		id: "p1",
		question: "Which slot works for the MCA project review?",
		detail: "Panel 2 needs a backup if Lab 4 is still an exam room. One vote in this session.",
		options: [
			{
				id: "a",
				label: "Monday 14:00",
				votes: 18
			},
			{
				id: "b",
				label: "Wednesday 11:00",
				votes: 27
			},
			{
				id: "c",
				label: "Friday 16:00",
				votes: 11
			}
		]
	},
	{
		id: "p2",
		question: "Where should Signal put the poster fair?",
		detail: "College-wide sample poll. Voting stays on this device.",
		options: [
			{
				id: "a",
				label: "East foyer",
				votes: 42
			},
			{
				id: "b",
				label: "Library lawn",
				votes: 23
			},
			{
				id: "c",
				label: "Canteen mezzanine",
				votes: 15
			}
		]
	},
	{
		id: "p3",
		question: "Mess breakfast window during exams",
		detail: "Hostel council sample. Not a real ballot.",
		options: [{
			id: "a",
			label: "Keep 7:30–9:30",
			votes: 31
		}, {
			id: "b",
			label: "Extend to 10:00",
			votes: 46
		}]
	}
];
var achievements = [
	{
		id: "ach1",
		title: "Smart India Hackathon — national final",
		who: "MCA team Meridian",
		audience: "student",
		category: "Research",
		date: "18 Sep 2026",
		detail: "Four students reached the national final with a hostel outpass tool. Sample achievement."
	},
	{
		id: "ach2",
		title: "Best paper mention, department symposium",
		who: "Ananya Iyer · MCA",
		audience: "student",
		category: "Research",
		date: "4 Oct 2026",
		detail: "Short paper on attendance heatmaps for lab sections. Mention, not a published journal."
	},
	{
		id: "ach3",
		title: "Inter-university basketball bronze",
		who: "College team",
		audience: "college",
		category: "Sports",
		date: "11 Aug 2026",
		detail: "Third place at the west-zone meet. The squad list is on the sports board, not in this app."
	},
	{
		id: "ach4",
		title: "Reading challenge, 1,200 books",
		who: "Library council",
		audience: "college",
		category: "Cultural",
		date: "30 Sep 2026",
		detail: "Students logged sample pages over September. The figure is illustrative."
	},
	{
		id: "ach5",
		title: "Case sprint, regional runners-up",
		who: "MBA team North Stair",
		audience: "student",
		category: "Academic",
		date: "16 Oct 2026",
		detail: "Second place at a Pune colleges case meet. Sample result."
	},
	{
		id: "ach6",
		title: "Lab safety audit cleared",
		who: "Meridian College",
		audience: "college",
		category: "Academic",
		date: "2 Sep 2026",
		detail: "Computing labs cleared a sample internal audit with two minor notes already fixed."
	}
];
var places = [
	{
		id: "lib",
		name: "Central Library",
		mapLabel: "Library",
		zone: "North quad",
		hours: "8:00–20:00",
		note: "Silent floors 2 and 3. Bag counter at the desk.",
		x: 22,
		y: 18
	},
	{
		id: "admin",
		name: "Admin office",
		mapLabel: "Admin",
		zone: "North block",
		hours: "9:30–16:30",
		note: "Fees window and student section. Sample hours.",
		x: 74,
		y: 16
	},
	{
		id: "audit",
		name: "Auditorium",
		mapLabel: "Auditorium",
		zone: "Central",
		hours: "Event days",
		note: "Talks, drives, and examinations when Hall B overflows.",
		x: 50,
		y: 40
	},
	{
		id: "mca",
		name: "MCA block",
		mapLabel: "MCA",
		zone: "West academic",
		hours: "8:00–18:00",
		note: "Labs 1–4 and the department office.",
		x: 20,
		y: 58
	},
	{
		id: "mba",
		name: "MBA block",
		mapLabel: "MBA",
		zone: "East academic",
		hours: "8:00–18:00",
		note: "LH-5, LH-6, and the finance lab.",
		x: 78,
		y: 56
	},
	{
		id: "canteen",
		name: "Canteen",
		mapLabel: "Canteen",
		zone: "South court",
		hours: "8:00–19:00",
		note: "Mess overflow during exam breakfasts.",
		x: 28,
		y: 80
	},
	{
		id: "park",
		name: "Parking",
		mapLabel: "Parking",
		zone: "South gate",
		hours: "Open with the gate",
		note: "Two-wheelers along the east wall. No overnight parking in this sample map.",
		x: 74,
		y: 78
	}
];
var helpContacts = [
	{
		id: "hc1",
		group: "urgent",
		name: "Anti-ragging cell",
		role: "Sample desk",
		phone: "9800009001",
		note: "Ask for the duty faculty. Fictional number."
	},
	{
		id: "hc2",
		group: "urgent",
		name: "Campus security",
		role: "Main gate",
		phone: "9800009002",
		note: "Gate cabin, day and night in this sample."
	},
	{
		id: "hc3",
		group: "urgent",
		name: "Women's safety desk",
		role: "Admin block",
		phone: "9800009003",
		note: "Sample contact. Not a real helpline."
	},
	{
		id: "hc4",
		group: "support",
		name: "Student counselling",
		role: "Wellbeing room, library mezzanine",
		phone: "9800009010",
		note: "Weekday afternoons. Fictional."
	},
	{
		id: "hc5",
		group: "support",
		name: "Peer mentors",
		role: "MCA and MBA second year",
		phone: "9800009011",
		note: "Study and campus navigation. Not an emergency line."
	},
	{
		id: "hc6",
		group: "support",
		name: "Hostel warden",
		role: "Sample residences",
		phone: "9800009012",
		note: "Leave and maintenance questions."
	}
];
var departments = {
	MCA: {
		full: "Master of Computer Applications",
		about: "A two-year programme in software, data, and systems. Semester III is the core lab term: algorithms, databases, networks, and a project studio on Saturdays.",
		hod: "Dr. Rekha Nair",
		office: "MCA office, first floor, west academic block",
		email: "mca@meridian.edu",
		stats: [
			{
				label: "Section",
				value: "A · 62 students"
			},
			{
				label: "Labs",
				value: "4"
			},
			{
				label: "Mentor",
				value: "Dr. Nair"
			}
		],
		academics: [
			{
				label: "Duration",
				value: "4 semesters"
			},
			{
				label: "This term",
				value: "5 theory/lab cores + ethics"
			},
			{
				label: "Internals",
				value: "40 marks"
			},
			{
				label: "End-semester",
				value: "60 marks"
			},
			{
				label: "Attendance bar",
				value: "75% each subject"
			},
			{
				label: "Project",
				value: "Starts this semester"
			}
		],
		electives: "Python for Data Science is the locked elective for Section A. A change needs the HOD before 7 November in this sample calendar."
	},
	MBA: {
		full: "Master of Business Administration",
		about: "A two-year programme built around cases, a finance lab, and a summer internship. Semester III mixes marketing, accounting, operations, and a live case studio.",
		hod: "Prof. Leela Raman",
		office: "MBA office, east academic block",
		email: "mba@meridian.edu",
		stats: [
			{
				label: "Section",
				value: "A · 54 students"
			},
			{
				label: "Labs",
				value: "Finance lab"
			},
			{
				label: "Mentor",
				value: "Prof. Raman"
			}
		],
		academics: [
			{
				label: "Duration",
				value: "4 semesters"
			},
			{
				label: "This term",
				value: "5 cores"
			},
			{
				label: "Internals",
				value: "40 marks"
			},
			{
				label: "End-semester",
				value: "60 marks"
			},
			{
				label: "Attendance bar",
				value: "75% each subject"
			},
			{
				label: "Internship",
				value: "Briefing 5 November"
			}
		],
		electives: "The live case studio on Saturday is compulsory this term. Elective preferences for Semester IV open in December."
	}
};
var seedPosts = [
	{
		id: "post1",
		author: "Rohan Kulkarni",
		department: "MCA · Sem III",
		body: "DBMS lab 2 is open early tomorrow for anyone who missed the normalisation exercise. I'll be there at 8:10 with the worksheet.",
		time: "Today · 8:40",
		likes: 12,
		liked: false,
		comments: [{
			id: "cm1",
			author: "Sara Mathew",
			body: "Saving me. I missed the second normal form example.",
			time: "Today · 9:05"
		}]
	},
	{
		id: "post2",
		author: "Sara Mathew",
		department: "MCA · Sem III",
		body: "If you are sitting Hall B for algorithms, the invigilation note says transparent bottles only. Refill at the foyer tap.",
		time: "Yesterday",
		likes: 9,
		liked: false,
		comments: []
	},
	{
		id: "post3",
		author: "Imran Shaikh",
		department: "MBA · Sem III",
		body: "Case sprint teams: LH-6's projector crops the right edge. Keep titles inside a wide margin.",
		time: "Tue",
		likes: 6,
		liked: false,
		comments: [{
			id: "cm2",
			author: "Leela's TA",
			body: "Confirmed with the lab assistant. Sample reply.",
			time: "Tue"
		}]
	},
	{
		id: "post4",
		author: "Diya Nambiar",
		department: "MCA · Sem I",
		body: "First-years looking for the library bag counter: it is left of the stairs, not inside the reading room.",
		time: "Mon",
		likes: 15,
		liked: false,
		comments: []
	}
];
var seedClaims = [{
	id: "c1",
	date: "2026-10-14",
	subject: "Computer Networks",
	reason: "Medical appointment. A clinic note was shown to the mentor.",
	attachment: "clinic-note.pdf",
	status: "Approved · sample"
}, {
	id: "c2",
	date: "2026-09-03",
	subject: "Database Systems",
	reason: "Represented the department at a hackathon.",
	attachment: "None",
	status: "Pending · sample"
}];
var seedPrints = [{
	id: "pj1",
	name: "DBMS assignment 2",
	pages: 12,
	copies: 1,
	color: false,
	duplex: true,
	price: 9,
	status: "Ready at the counter · sample"
}];
var defaultPrefs = {
	exams: true,
	fees: true,
	events: true,
	posts: true
};
var notices = [
	{
		id: "n1",
		pref: "exams",
		title: "Mid-semester timetable is published",
		detail: "Theory papers begin 12 November.",
		link: {
			kind: "announcement",
			announcementId: "a1"
		}
	},
	{
		id: "n2",
		pref: "fees",
		title: "Fee balance due 10 November",
		detail: "A sample pending amount is open under Pay Fees.",
		link: { kind: "fees" }
	},
	{
		id: "n3",
		pref: "events",
		title: "Alumni talk on 2 November",
		detail: "Auditorium, 16:00. Sample registration only.",
		link: {
			kind: "event",
			eventId: "e3"
		}
	},
	{
		id: "n4",
		pref: "posts",
		title: "Rohan posted about an early DBMS lab",
		detail: "Open the posts feed to read it.",
		tab: "posts"
	},
	{
		id: "n5",
		pref: "events",
		title: "Anti-ragging week",
		detail: "Help contacts in the app are fictional.",
		link: { kind: "help" }
	}
];
var claimSubjects = [
	"Design & Analysis of Algorithms",
	"Database Systems",
	"Computer Networks",
	"Software Engineering",
	"Python for Data Science",
	"Professional Ethics",
	"Marketing Management",
	"Financial Accounting",
	"Organisational Behaviour",
	"Operations"
];
var NavContext = (0, import_react.createContext)(null);
function useNav() {
	const value = (0, import_react.useContext)(NavContext);
	if (!value) throw new Error("Navigation is unavailable");
	return value;
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
function inr(amount, digits = 0) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(amount);
}
function percent(present, total) {
	if (!total) return 0;
	return Math.round(present / total * 100);
}
function summarize(rows) {
	const present = rows.reduce((sum, row) => sum + row.present, 0);
	const total = rows.reduce((sum, row) => sum + row.total, 0);
	return {
		present,
		total,
		absent: total - present,
		percent: percent(present, total)
	};
}
function attendanceTone(value) {
	if (value < 75) return "danger";
	if (value < 85) return "amber";
	return "teal";
}
function greeting(date = /* @__PURE__ */ new Date()) {
	const hour = date.getHours();
	if (hour < 12) return "Good morning";
	if (hour < 17) return "Good afternoon";
	return "Good evening";
}
var DAYS = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function weekdayKey(date = /* @__PURE__ */ new Date()) {
	return DAYS[date.getDay()] ?? "Mon";
}
function weekdayLabel(key) {
	return {
		Sun: "Sunday",
		Mon: "Monday",
		Tue: "Tuesday",
		Wed: "Wednesday",
		Thu: "Thursday",
		Fri: "Friday",
		Sat: "Saturday"
	}[key] ?? key;
}
function currentSlot(slots, date = /* @__PURE__ */ new Date()) {
	const mins = date.getHours() * 60 + date.getMinutes();
	const now = slots.find((slot) => mins >= slot.startMin && mins < slot.endMin);
	if (now) return {
		slot: now,
		phase: "now"
	};
	const next = slots.find((slot) => slot.startMin >= mins);
	if (next) return {
		slot: next,
		phase: "next"
	};
	return {
		slot: slots[slots.length - 1] ?? null,
		phase: "done"
	};
}
function isoDate(year, monthIndex, day) {
	return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
function todayIso(date = /* @__PURE__ */ new Date()) {
	return isoDate(date.getFullYear(), date.getMonth(), date.getDate());
}
function isDayKey(value) {
	return value === "Mon" || value === "Tue" || value === "Wed" || value === "Thu" || value === "Fri" || value === "Sat";
}
function printQuote(pages, copies, color, duplex) {
	if (!Number.isFinite(pages) || !Number.isFinite(copies) || pages < 1 || copies < 1) return null;
	const sheets = duplex ? Math.ceil(pages / 2) : pages;
	const rate = color ? 8 : 1.5;
	return {
		sheets,
		price: sheets * copies * rate
	};
}
function firstName(name) {
	return name.trim().split(" ")[0] || name;
}
var AVATAR_WELLS = [
	"bg-primary-soft text-primary",
	"bg-teal-soft text-teal",
	"bg-amber-soft text-amber"
];
function avatarWell(name) {
	let hash = 0;
	for (const char of name) hash = (hash + char.charCodeAt(0)) % AVATAR_WELLS.length;
	return AVATAR_WELLS[hash] ?? AVATAR_WELLS[0];
}
var useCampus = create()(persist((set, get) => ({
	student: defaultStudent,
	posts: seedPosts,
	votes: {},
	readIds: ["a2", "a5"],
	claims: seedClaims,
	prints: seedPrints,
	feePaid: false,
	registrations: [],
	reservations: [],
	applications: [],
	prefs: defaultPrefs,
	updateStudent: (patch) => set((state) => ({ student: {
		...state.student,
		...patch
	} })),
	toggleLike: (id) => set((state) => ({ posts: state.posts.map((post) => post.id === id ? {
		...post,
		liked: !post.liked,
		likes: post.likes + (post.liked ? -1 : 1)
	} : post) })),
	addPost: (body) => set((state) => ({ posts: [{
		id: uid("post"),
		author: state.student.name,
		department: `${state.student.department} · Sem ${state.student.semester}`,
		body,
		time: "Just now",
		likes: 0,
		liked: false,
		comments: []
	}, ...state.posts] })),
	addComment: (postId, body) => set((state) => ({ posts: state.posts.map((post) => post.id === postId ? {
		...post,
		comments: [...post.comments, {
			id: uid("cm"),
			author: state.student.name,
			body,
			time: "Just now"
		}]
	} : post) })),
	vote: (pollId, optionId) => {
		if (get().votes[pollId]) return false;
		set((state) => ({ votes: {
			...state.votes,
			[pollId]: optionId
		} }));
		return true;
	},
	markRead: (id) => set((state) => ({ readIds: state.readIds.includes(id) ? state.readIds : [...state.readIds, id] })),
	addClaim: (claim) => set((state) => ({ claims: [{
		...claim,
		id: uid("c"),
		status: "Submitted · simulated"
	}, ...state.claims] })),
	addPrint: (job) => set((state) => ({ prints: [{
		...job,
		id: uid("pj"),
		status: "Queued · simulated"
	}, ...state.prints] })),
	payFees: () => set({ feePaid: true }),
	registerEvent: (id) => set((state) => ({ registrations: state.registrations.includes(id) ? state.registrations : [...state.registrations, id] })),
	reserveBook: (id) => set((state) => ({ reservations: state.reservations.includes(id) ? state.reservations : [...state.reservations, id] })),
	applyRole: (id) => set((state) => ({ applications: state.applications.includes(id) ? state.applications : [...state.applications, id] })),
	setPref: (key, value) => set((state) => ({ prefs: {
		...state.prefs,
		[key]: value
	} }))
}), {
	name: "meridian-campus",
	skipHydration: true,
	partialize: (state) => ({
		student: state.student,
		posts: state.posts,
		votes: state.votes,
		readIds: state.readIds,
		claims: state.claims,
		prints: state.prints,
		feePaid: state.feePaid,
		registrations: state.registrations,
		reservations: state.reservations,
		applications: state.applications,
		prefs: state.prefs
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "6",
				width: "7",
				height: "20",
				rx: "1.4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.5",
				y: "13",
				width: "7",
				height: "13",
				rx: "1.4",
				fill: "currentColor",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "6",
				width: "7",
				height: "20",
				rx: "1.4",
				fill: "currentColor"
			})
		]
	});
}
function Avatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center justify-center rounded-full font-semibold", avatarWell(name), className),
		"aria-hidden": "true",
		children: initials(name)
	});
}
function Badge({ tone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-chip px-2 py-0.5 text-xs font-medium", {
			neutral: "bg-surface-2 text-muted",
			teal: "bg-teal-soft text-teal",
			amber: "bg-amber-soft text-amber",
			danger: "bg-danger-soft text-danger",
			primary: "bg-primary-soft text-primary"
		}[tone]),
		children
	});
}
function SectionLabel({ children, aside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2 flex items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg text-ink",
			children
		}), aside]
	});
}
function Chip({ active, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("press inline-flex min-h-11 shrink-0 items-center rounded-chip border px-3 text-xs font-medium", active ? "border-primary bg-primary text-primary-ink" : "border-line bg-surface text-ink"),
		"aria-pressed": active,
		children
	});
}
var fieldClass = "w-full min-h-12 rounded-control border border-line bg-surface px-3 text-base text-ink outline-none placeholder:text-faint";
function Field({ label, hint, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-sm font-medium text-ink",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-danger",
				children: error
			}) : null,
			hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
function PrimaryButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control bg-primary px-4 text-sm font-semibold text-primary-ink disabled:opacity-50", className)
	});
}
function SecondaryButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...props,
		className: cn("press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control border border-line bg-surface px-4 text-sm font-semibold text-ink disabled:opacity-50", className)
	});
}
function ScreenHeader({ title, action }) {
	const { pop } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-1 border-b border-line bg-canvas px-2 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Back",
				onClick: pop,
				className: "press flex size-11 items-center justify-center rounded-control text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "min-w-0 flex-1 truncate font-display text-xl text-ink",
				children: title
			}),
			action
		]
	});
}
function ScreenShell({ title, children, toolbar, action, bleed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-canvas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
				title,
				action
			}),
			toolbar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line px-4 py-3",
				children: toolbar
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("scroll min-h-0 flex-1", bleed ? "" : "px-4 py-4"),
				children
			})
		]
	});
}
function EmptyState({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-dashed border-line-strong bg-surface px-4 py-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: body
		})]
	});
}
function ListRow({ title, meta, icon, badge, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "press flex w-full items-center gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left",
		children: [
			icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-11 shrink-0 items-center justify-center rounded-control bg-primary-soft text-primary",
				children: icon
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium text-ink",
					children: title
				}), meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-sm text-muted",
					children: meta
				}) : null]
			}),
			badge,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0 text-faint" })
		]
	});
}
function Note({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs leading-relaxed text-muted",
		children
	});
}
var categories = [
	"All",
	"Exams",
	"Campus",
	"Fees",
	"Placement",
	"Welfare"
];
function AnnouncementsScreen() {
	const { push } = useNav();
	const readIds = useCampus((state) => state.readIds);
	const markRead = useCampus((state) => state.markRead);
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const items = announcements.filter((item) => {
		if (item.scope !== "college") return false;
		if (category !== "All" && item.category !== category) return false;
		return `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 z-10 border-b border-line bg-canvas px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-ink",
					children: "Announcements"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 flex min-h-12 items-center gap-2 rounded-control border border-line bg-surface px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search announcements",
						className: "w-full bg-transparent text-base text-ink outline-none placeholder:text-faint",
						"aria-label": "Search announcements"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chip-row mt-3",
					children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: category === item,
						onClick: () => setCategory(item),
						children: item
					}, item))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2 px-4 py-4",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No announcements",
				body: "Try another word or category. The list is sample college news."
			}) : items.map((item) => {
				const read = readIds.includes(item.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-stretch gap-2 rounded-card border border-line bg-surface p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							markRead(item.id);
							push({
								kind: "announcement",
								announcementId: item.id
							});
						},
						className: "press min-w-0 flex-1 rounded-control px-2 py-2 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									!read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2 rounded-full bg-primary",
										"aria-hidden": true
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: item.important ? "amber" : "neutral",
										children: item.important ? "Important" : item.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted",
										children: [
											item.dateLabel,
											" · ",
											item.time
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-2 block ${read ? "font-medium text-ink" : "font-semibold text-ink"}`,
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: item.summary
							})
						]
					}), !read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Mark ${item.title} as read`,
						onClick: () => markRead(item.id),
						className: "press flex size-11 shrink-0 items-center justify-center self-center rounded-control text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}) : null]
				}, item.id);
			})
		})]
	});
}
var relatedCopy = {
	hall: {
		label: "Open hall ticket",
		screen: { kind: "hall" }
	},
	fees: {
		label: "Review fees",
		screen: { kind: "fees" }
	},
	help: {
		label: "Help contacts",
		screen: { kind: "help" }
	},
	events: {
		label: "Browse events",
		screen: { kind: "events" }
	},
	placement: {
		label: "Open placement",
		screen: { kind: "placement" }
	}
};
function AnnouncementDetail({ id }) {
	const item = announcements.find((entry) => entry.id === id);
	const { push, toast } = useNav();
	const markRead = useCampus((state) => state.markRead);
	const read = useCampus((state) => state.readIds.includes(id));
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Announcement",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Missing notice",
			body: "That sample announcement is not in this preview."
		})
	});
	const related = item.related ? relatedCopy[item.related] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Announcement",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "press mr-1 min-h-11 rounded-control px-3 text-sm font-medium text-primary",
			onClick: () => {
				markRead(item.id);
				toast(read ? "Already marked read on this device." : "Marked as read on this device.");
			},
			children: read ? "Read" : "Mark read"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: item.important ? "amber" : "primary",
						children: item.category
					}), item.scope !== "college" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "neutral",
						children: [item.scope, " only"]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						item.dateLabel,
						" · ",
						item.time
					]
				}),
				item.body.split("\n\n").map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-ink",
					children: paragraph
				}, paragraph.slice(0, 24))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Sample notice. Opening it does not notify the college." }),
				related ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => push(related.screen),
					children: related.label
				}) : null
			]
		})
	});
}
function PostsScreen() {
	const { push, toast } = useNav();
	const posts = useCampus((state) => state.posts);
	const toggleLike = useCampus((state) => state.toggleLike);
	async function share(author, body) {
		const text = `${author}\n${body}\n— shared from Meridian (sample, not posted publicly)`;
		try {
			await navigator.clipboard.writeText(text);
			toast("Copied a share note. Nothing was posted.");
		} catch {
			toast("Could not copy on this device. Nothing was posted.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 px-4 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl text-ink",
				children: "Posts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Campus feed · this device only"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => push({ kind: "create-post" }),
				className: "press inline-flex min-h-11 items-center gap-1 rounded-control bg-primary px-3 text-sm font-semibold text-primary-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Post"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3 px-4 py-4",
			children: posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No posts yet",
				body: "Write the first note for this preview."
			}) : posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-line bg-surface p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							name: post.author,
							className: "size-11 text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium text-ink",
								children: post.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-xs text-muted",
								children: [
									post.department,
									" · ",
									post.time
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink",
						children: post.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-1 border-t border-line pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": post.liked,
								onClick: () => toggleLike(post.id),
								className: "press inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: post.liked ? "size-4 fill-primary text-primary" : "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: post.likes
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => push({
									kind: "comments",
									postId: post.id
								}),
								className: "press inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: post.comments.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void share(post.author, post.body),
								className: "press ml-auto inline-flex min-h-11 items-center gap-1 rounded-control px-2 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Share"]
							})
						]
					})
				]
			}, post.id))
		})]
	});
}
function CreatePostScreen() {
	const { pop, toast } = useNav();
	const addPost = useCampus((state) => state.addPost);
	const [body, setBody] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const trimmed = body.trim();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "New post",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
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
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What should the section know?",
					error,
					hint: `${trimmed.length}/500`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: body,
						onChange: (event) => {
							setBody(event.target.value);
							setError("");
						},
						className: `${fieldClass} min-h-36 py-3`,
						placeholder: "A class change, a lab note, a question.",
						maxLength: 500
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Publish sample post"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Likes and comments stay in this preview. There is no public feed." })
			]
		})
	});
}
function CommentsScreen({ postId }) {
	const post = useCampus((state) => state.posts.find((item) => item.id === postId));
	const addComment = useCampus((state) => state.addComment);
	const { toast } = useNav();
	const [body, setBody] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Comments",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Post unavailable",
			body: "It may have been from an older preview session."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Comments",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-ink",
				children: post.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted",
				children: [
					post.author,
					" · ",
					post.time
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2",
				children: post.comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No comments yet",
					body: "Add a sample reply. It stays on this device."
				}) : post.comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-ink",
							children: comment.author
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink",
							children: comment.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: comment.time
						})
					]
				}, comment.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 space-y-3",
				onSubmit: (event) => {
					event.preventDefault();
					const trimmed = body.trim();
					if (trimmed.length < 1) {
						setError("Write a comment before sending.");
						return;
					}
					addComment(post.id, trimmed);
					setBody("");
					toast("Comment saved on this device.");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Reply",
					error,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: body,
						onChange: (event) => {
							setBody(event.target.value);
							setError("");
						},
						className: `${fieldClass} min-h-24 py-3`,
						placeholder: "Keep it useful."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Add comment"
				})]
			})
		]
	});
}
var deptPanels = [
	"Overview",
	"Faculty",
	"Notices",
	"Events",
	"Schedule",
	"Academics"
];
function DepartmentScreen() {
	const student = useCampus((state) => state.student);
	const { push } = useNav();
	const [panel, setPanel] = (0, import_react.useState)("Overview");
	const dept = student.department;
	const info = departments[dept];
	const notes = announcements.filter((item) => item.scope === dept);
	const deptEvents = events.filter((item) => item.scope === dept);
	const faculty = lecturers.filter((person) => person.department === dept || dept === "MCA" && person.department === "Humanities");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 z-10 border-b border-line bg-canvas px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-ink",
					children: "Department"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [dept, " · registered department"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chip-row mt-3",
					children: deptPanels.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: panel === item,
						onClick: () => setPanel(item),
						children: item
					}, item))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 px-4 py-4",
			children: [
				panel === "Overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-primary",
								children: info.full
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-xl text-ink",
								children: info.hod
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Head of department"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink",
								children: info.about
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: info.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-card border border-line bg-surface px-2 py-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: stat.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold text-ink",
								children: stat.value
							})]
						}, stat.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Resources" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
								title: "Question papers",
								meta: `${dept} papers and other departments`,
								onClick: () => push({ kind: "papers" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
								title: "Handbook",
								meta: "Rules, exams, attendance, conduct",
								onClick: () => push({ kind: "handbook" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
								title: "Achievements",
								meta: "Student and college highlights",
								onClick: () => push({ kind: "achievements" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
								title: "Weekly timetable",
								meta: "Days, rooms, and faculty",
								onClick: () => push({ kind: "timetable" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Change the registered department from Account → Edit profile. MBA shows a different department." })
				] }) : null,
				panel === "Faculty" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: faculty.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
						title: person.name,
						meta: `${person.designation} · ${person.subject}`,
						onClick: () => push({
							kind: "lecturer",
							lecturerId: person.id
						})
					}, person.id))
				}) : null,
				panel === "Notices" ? notes.length ? notes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: item.title,
					meta: `${item.dateLabel} · ${item.category}`,
					onClick: () => push({
						kind: "announcement",
						announcementId: item.id
					})
				}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No department notices",
					body: "Sample notices appear here for the registered department."
				}) : null,
				panel === "Events" ? deptEvents.length ? deptEvents.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: item.title,
					meta: `${item.dateLabel} · ${item.place}`,
					onClick: () => push({
						kind: "event",
						eventId: item.id
					})
				}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No department events",
					body: "College-wide events stay on the Events screen."
				}) : null,
				panel === "Schedule" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeptSchedule, { dept }) : null,
				panel === "Academics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-card border border-line bg-surface p-4",
							children: info.academics.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3 border-b border-line py-2 last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right text-sm font-medium text-ink",
									children: row.value
								})]
							}, row.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink",
							children: info.electives
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["Office · ", info.office]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: info.email
						})
					]
				}) : null
			]
		})]
	});
}
function DeptSchedule({ dept }) {
	const { push } = useNav();
	const rows = timetables[dept].Thu;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Thursday sample for a mid-week teaching day. The full week is on the timetable." }),
			rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums text-muted",
						children: [
							row.start,
							"–",
							row.end,
							" · ",
							row.room
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: row.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: row.faculty
					})
				]
			}, `${row.start}${row.subject}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
				onClick: () => push({ kind: "timetable" }),
				children: "Full weekly timetable"
			})
		]
	});
}
function AccountScreen() {
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
		["Address", student.address]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 pt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					name: student.name,
					className: "size-16 text-lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate font-display text-2xl text-ink",
						children: student.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							student.registerNo,
							" · ",
							student.department
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 px-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-card border border-line bg-surface px-3",
					children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3 border-b border-line py-3 last:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-[60%] text-right text-sm font-medium text-ink",
							children: value
						})]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						onClick: () => push({ kind: "edit-profile" }),
						children: "Edit profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
						onClick: () => push({ kind: "settings" }),
						children: "Settings"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: "Notification preferences",
					meta: "Choose what the bell counts",
					onClick: () => push({ kind: "settings" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: "Help and support",
					meta: "How this preview behaves",
					onClick: () => push({ kind: "support" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
					title: "About Meridian",
					meta: college.full,
					onClick: () => push({ kind: "about" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
					onClick: () => confirm({
						title: "Leave this preview?",
						body: "There is no account server. Sample posts, votes, and profile edits stay on this device until you clear site data.",
						confirmLabel: "Log out",
						onConfirm: signOut
					}),
					children: "Log out"
				})
			]
		})]
	});
}
var semesters = [
	"I",
	"II",
	"III",
	"IV"
];
var bloodGroups = [
	"A+",
	"A-",
	"B+",
	"B-",
	"O+",
	"O-",
	"AB+",
	"AB-"
];
function EditProfileScreen() {
	const student = useCampus((state) => state.student);
	const updateStudent = useCampus((state) => state.updateStudent);
	const { pop, toast } = useNav();
	const [form, setForm] = (0, import_react.useState)(student);
	const [errors, setErrors] = (0, import_react.useState)({});
	function set(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Edit profile",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			autoComplete: "off",
			onSubmit: (event) => {
				event.preventDefault();
				const next = {};
				if (form.name.trim().length < 2) next.name = "Enter the name used on the identity card.";
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter an email address.";
				if (!/^\d{10}$/.test(form.phone)) next.phone = "Use a 10-digit sample number.";
				if (form.registerNo.trim().length < 4) next.registerNo = "Enter a register number.";
				if (form.address.trim().length < 3) next.address = "Enter an address.";
				if (form.guardian.trim().length < 2) next.guardian = "Enter a guardian name.";
				setErrors(next);
				if (Object.keys(next).length) return;
				updateStudent({
					...form,
					name: form.name.trim()
				});
				toast("Profile saved on this device. The department tab follows this choice.");
				pop();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.name,
						onChange: (event) => set("name", event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Register number",
					error: errors.registerNo,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.registerNo,
						onChange: (event) => set("registerNo", event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Department",
					hint: "The Department tab, timetable, and hall ticket follow this.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: fieldClass,
						value: form.department,
						onChange: (event) => set("department", event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "MCA",
							children: "MCA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "MBA",
							children: "MBA"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Semester",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: form.semester,
						onChange: (event) => set("semester", event.target.value),
						children: semesters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.email,
						onChange: (event) => set("email", event.target.value),
						inputMode: "email"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					error: errors.phone,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.phone,
						onChange: (event) => set("phone", event.target.value),
						inputMode: "numeric"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Blood group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: form.bloodGroup,
						onChange: (event) => set("bloodGroup", event.target.value),
						children: bloodGroups.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Guardian",
					error: errors.guardian,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.guardian,
						onChange: (event) => set("guardian", event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Address",
					error: errors.address,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: form.address,
						onChange: (event) => set("address", event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Use sample details. This is not a private college account." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Save on this device"
				})
			]
		})
	});
}
function SettingsScreen() {
	const prefs = useCampus((state) => state.prefs);
	const setPref = useCampus((state) => state.setPref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Settings",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Notifications" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: [
					{
						key: "exams",
						label: "Exams",
						detail: "Timetable and hall ticket reminders"
					},
					{
						key: "fees",
						label: "Fees",
						detail: "Balance and deadline notes"
					},
					{
						key: "events",
						label: "Events",
						detail: "Talks, drives, and welfare weeks"
					},
					{
						key: "posts",
						label: "Posts",
						detail: "New notes in the campus feed"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-card border border-line bg-surface px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.detail
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "switch",
						"aria-checked": prefs[item.key],
						"aria-label": item.label,
						onClick: () => setPref(item.key, !prefs[item.key]),
						className: `press relative h-7 w-12 rounded-chip ${prefs[item.key] ? "bg-primary" : "bg-line-strong"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-1 size-5 rounded-full bg-surface transition-transform duration-200 ${prefs[item.key] ? "translate-x-6" : "translate-x-1"}` })
					})]
				}, item.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Preferences only change the bell on this device. They do not contact a server."
			})
		]
	});
}
function NotificationsScreen() {
	const { push, setTab, closeStack, toast } = useNav();
	const readIds = useCampus((state) => state.readIds);
	const markRead = useCampus((state) => state.markRead);
	const prefs = useCampus((state) => state.prefs);
	const visible = notices.filter((item) => prefs[item.pref]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Notifications",
		children: [visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Notifications are muted",
			body: "Turn a category back on in Settings. Sample notices are still stored."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: visible.map((item) => {
				const read = readIds.includes(item.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						markRead(item.id);
						if (item.link?.kind === "announcement") markRead(item.link.announcementId);
						if (item.tab) {
							closeStack();
							setTab(item.tab);
							toast("Opened Posts.");
							return;
						}
						if (item.link) push(item.link);
					},
					className: "press flex w-full items-start gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left",
					children: [!read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: item.detail
					})] })]
				}, item.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
				onClick: () => {
					visible.forEach((item) => markRead(item.id));
					toast("Visible notices marked read on this device.");
				},
				children: "Mark visible as read"
			})
		})]
	});
}
var faqs = [
	{
		q: "Did my payment go through?",
		a: "No. Pay Fees only flips a local balance so you can see the paid state. No UPI app or college ledger is contacted."
	},
	{
		q: "Can faculty see my post?",
		a: "No. Posts, votes, claims, and print requests never leave this browser."
	},
	{
		q: "Why do help numbers look real?",
		a: "They are fictional 98000 numbers so the screen can be practised. Do not treat them as official contacts."
	},
	{
		q: "How do I switch from MCA to MBA?",
		a: "Edit profile and change the department. Timetable, attendance, hall ticket, and the Department tab follow it."
	}
];
function SupportScreen() {
	const { push } = useNav();
	const [open, setOpen] = (0, import_react.useState)(faqs[0]?.q ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Help and support",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: faqs.map((item) => {
				const expanded = open === item.q;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "press flex min-h-12 w-full items-center justify-between gap-3 px-3 text-left",
						"aria-expanded": expanded,
						onClick: () => setOpen(expanded ? null : item.q),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: expanded ? "–" : "+"
						})]
					}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pb-3 text-sm leading-relaxed text-muted",
						children: item.a
					}) : null]
				}, item.q);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				onClick: () => push({ kind: "help" }),
				children: "Anti-ragging and help contacts"
			})
		})]
	});
}
function AboutScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "About",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-sm leading-relaxed text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Meridian"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					college.full,
					" · ",
					college.city,
					". A frontend campus companion for a sample MCA student."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Version 1.0 · preview. There is no backend, database, or payment gateway." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The layout borrows the spirit of restrained campus print: a paper surface, one academic blue, and short motion on press. It does not include third-party web component kits." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "College name, people, phones, and fees are fiction for the interface." })
			]
		})
	});
}
var weekLabels = [
	"M",
	"T",
	"W",
	"T",
	"F",
	"S",
	"S"
];
function CalendarScreen() {
	const now = /* @__PURE__ */ new Date();
	const [cursor, setCursor] = (0, import_react.useState)({
		year: now.getFullYear(),
		month: now.getMonth()
	});
	const [selected, setSelected] = (0, import_react.useState)(todayIso());
	const { push } = useNav();
	const first = new Date(cursor.year, cursor.month, 1);
	const startPad = (first.getDay() + 6) % 7;
	const days = new Date(cursor.year, cursor.month + 1, 0).getDate();
	const cells = [...Array(startPad).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)];
	while (cells.length % 7 !== 0) cells.push(null);
	const label = first.toLocaleString("en-IN", {
		month: "long",
		year: "numeric"
	});
	const notes = dateNotes.filter((note) => note.date === selected);
	const marked = new Set(dateNotes.map((note) => note.date));
	const today = todayIso();
	function shift(delta) {
		const next = new Date(cursor.year, cursor.month + delta, 1);
		setCursor({
			year: next.getFullYear(),
			month: next.getMonth()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "College calendar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card border border-line bg-surface p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press min-h-11 rounded-control px-3 text-sm font-medium text-primary",
							onClick: () => shift(-1),
							children: "Previous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-ink",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press min-h-11 rounded-control px-3 text-sm font-medium text-primary",
							onClick: () => shift(1),
							children: "Next"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-7 gap-1 text-center text-xs text-muted",
					children: weekLabels.map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }, `${day}${index}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 grid grid-cols-7 gap-1",
					children: cells.map((day, index) => {
						if (!day) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, `e${index}`);
						const iso = `${cursor.year}-${String(cursor.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
						const active = iso === selected;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelected(iso),
							className: `press relative flex min-h-11 items-center justify-center rounded-control text-sm tabular-nums ${active ? "bg-primary text-primary-ink" : iso === today ? "bg-primary-soft text-primary" : "text-ink"}`,
							children: [day, marked.has(iso) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute bottom-1 size-1 rounded-full ${active ? "bg-primary-ink" : "bg-amber"}` }) : null]
						}, iso);
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "On this date" }), notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Nothing scheduled",
				body: "College dates in this preview are samples. Try November for exams and events."
			}) : notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: note.kind === "holiday" ? "neutral" : note.kind === "deadline" ? "amber" : note.kind === "exam" ? "danger" : "primary",
						children: note.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-medium text-ink",
						children: note.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: note.detail
					}),
					note.eventId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press mt-2 min-h-11 text-sm font-medium text-primary",
						onClick: () => push({
							kind: "event",
							eventId: note.eventId
						}),
						children: "Open event"
					}) : null
				]
			}, note.title))]
		})]
	});
}
function AttendanceScreen() {
	const dept = useCampus((state) => state.student.department);
	const rows = attendanceByDept[dept];
	const summary = summarize(rows);
	const tone = attendanceTone(summary.percent);
	const history = recentAttendance[dept];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Attendance",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-card border border-line p-4 ${tone === "danger" ? "bg-danger-soft" : "bg-surface"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: ["Overall · ", dept]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-4xl tabular-nums text-ink",
						children: [summary.percent, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							summary.present,
							" present · ",
							summary.absent,
							" absent · ",
							summary.total,
							" classes"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 overflow-hidden rounded-chip bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full ${tone === "teal" ? "bg-teal" : tone === "amber" ? "bg-amber" : "bg-danger"}`,
							style: { width: `${summary.percent}%` }
						})
					}),
					summary.percent < 75 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-danger",
						children: "Below the 75% sample bar."
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Subjects" }), rows.map((row) => {
					const value = percent(row.present, row.total);
					const rowTone = attendanceTone(value);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-card border px-3 py-3 ${rowTone === "danger" ? "border-danger bg-danger-soft" : "border-line bg-surface"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-ink",
									children: row.subject
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: row.faculty
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `font-semibold tabular-nums ${rowTone === "danger" ? "text-danger" : rowTone === "amber" ? "text-amber" : "text-teal"}`,
									children: [value, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									row.present,
									" present · ",
									row.total - row.present,
									" absent"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-chip bg-canvas",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full ${rowTone === "teal" ? "bg-teal" : rowTone === "amber" ? "bg-amber" : "bg-danger"}`,
									style: { width: `${value}%` }
								})
							})
						]
					}, row.subject);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Recent records" }), history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-card border border-line bg-surface px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-ink",
						children: item.subject
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: item.date
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: item.status === "Present" ? "teal" : "danger",
						children: item.status
					})]
				}, `${item.date}${item.subject}`))]
			})
		]
	});
}
function FeesScreen() {
	const feePaid = useCampus((state) => state.feePaid);
	const payFees = useCampus((state) => state.payFees);
	const { confirm, toast } = useNav();
	const paid = feePaid ? FEE_TOTAL : FEE_ALREADY_PAID;
	const pending = FEE_TOTAL - paid;
	const history = feePaid ? [...feeHistory, {
		id: "sim",
		date: "Today",
		label: "Simulated balance",
		amount: FEE_TOTAL - FEE_ALREADY_PAID
	}] : feeHistory;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Pay fees",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					["Total", FEE_TOTAL],
					["Paid", paid],
					["Pending", pending]
				].map(([label, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-2 py-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-semibold tabular-nums text-ink",
						children: inr(Number(amount))
					})]
				}, String(label)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: pending === 0 ? "teal" : "amber",
					children: pending === 0 ? "Paid · simulated" : "Balance open · sample"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-card border border-line bg-surface px-3",
				children: feeLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line py-3 last:border-b-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ink",
						children: line.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium tabular-nums text-ink",
						children: inr(line.amount)
					})]
				}, line.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					disabled: pending === 0,
					onClick: () => confirm({
						title: "Simulate this payment?",
						body: `This records ${inr(pending)} as paid only inside the preview. No bank, UPI app, or college account is contacted.`,
						confirmLabel: "Record sample payment",
						onConfirm: () => {
							payFees();
							toast("Marked as paid on this device. No payment was processed.");
						}
					}),
					children: pending === 0 ? "Nothing pending" : `Pay ${inr(pending)} · sample`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Payment history" }), history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-ink",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: item.date
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tabular-nums text-ink",
							children: inr(item.amount)
						})]
					}), item.id === "sim" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-amber",
						children: "Not a real receipt."
					}) : null]
				}, item.id))]
			})
		]
	});
}
function EventsScreen() {
	const { push } = useNav();
	const [filter, setFilter] = (0, import_react.useState)("upcoming");
	const items = events.filter((item) => item.scope === "college" && item.status === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Events",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "chip-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: filter === "upcoming",
				onClick: () => setFilter("upcoming"),
				children: "Upcoming"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: filter === "past",
				onClick: () => setFilter("past"),
				children: "Past"
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: item.title,
				meta: `${item.dateLabel} · ${item.time} · ${item.place}`,
				onClick: () => push({
					kind: "event",
					eventId: item.id
				})
			}, item.id))
		})
	});
}
function EventDetail({ id }) {
	const item = events.find((entry) => entry.id === id);
	const registrations = useCampus((state) => state.registrations);
	const registerEvent = useCampus((state) => state.registerEvent);
	const { confirm, toast } = useNav();
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Event",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Event missing",
			body: "That sample event is not in this preview."
		})
	});
	const registered = registrations.includes(item.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Event",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-16 shrink-0 flex-col items-center justify-center rounded-control bg-primary py-3 text-primary-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums",
						children: item.dayNum
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xs",
						children: item.month
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: item.status === "upcoming" ? "amber" : "neutral",
					children: item.status
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl text-ink",
					children: item.title
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					item.dateLabel,
					" · ",
					item.time
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: item.place
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3",
				children: item.body.split("\n\n").map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-ink",
					children: paragraph
				}, paragraph.slice(0, 20)))
			}),
			item.status === "upcoming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					disabled: registered,
					onClick: () => confirm({
						title: "Register interest?",
						body: "This stores a sample registration on this device. The event organisers are not notified.",
						confirmLabel: "Save registration",
						onConfirm: () => {
							registerEvent(item.id);
							toast("Registered in this preview only.");
						}
					}),
					children: registered ? "Registered · simulated" : "Register interest"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "This event has already happened in the sample calendar."
			})
		]
	});
}
var bookCategories = [
	"All",
	"Algorithms",
	"Databases",
	"Networks",
	"Software",
	"Data"
];
function LibraryScreen() {
	const { push } = useNav();
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const items = books.filter((book) => {
		if (category !== "All" && book.category !== category) return false;
		return `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Library",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search title or author",
				"aria-label": "Search books",
				className: fieldClass
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "chip-row",
				children: bookCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: category === item,
					onClick: () => setCategory(item),
					children: item
				}, item))
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No books",
				body: "Try another title or category. The shelf is a sample catalogue."
			}) : items.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: book.title,
				meta: `${book.author} · ${book.category}`,
				badge: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: book.copies > 0 ? "teal" : "amber",
					children: book.copies > 0 ? "Available" : "Out"
				}),
				onClick: () => push({
					kind: "book",
					bookId: book.id
				})
			}, book.id))
		})
	});
}
function BookDetail({ id }) {
	const book = books.find((item) => item.id === id);
	const reserved = useCampus((state) => state.reservations.includes(id));
	const reserveBook = useCampus((state) => state.reserveBook);
	const { confirm, toast } = useNav();
	if (!book) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Book",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Not in the catalogue",
			body: "That sample record is missing."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Book",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: book.copies > 0 ? "teal" : "amber",
				children: book.copies > 0 ? `${book.copies} available` : "No copies on shelf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl text-ink",
				children: book.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: book.author
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 rounded-card border border-line bg-surface px-3 py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Category · ", book.category] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Shelf · ", book.shelf] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Edition year · ", book.year] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-ink",
				children: book.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					disabled: reserved,
					onClick: () => confirm({
						title: "Reserve this copy?",
						body: "The reservation is stored in the preview only. The library desk will not see it.",
						confirmLabel: "Save reservation",
						onConfirm: () => {
							reserveBook(book.id);
							toast("Reservation saved on this device.");
						}
					}),
					children: reserved ? "Reserved · simulated" : "Reserve (sample)"
				})
			})
		]
	});
}
function HallScreen() {
	const student = useCampus((state) => state.student);
	const ticket = examsByDept[student.department];
	const { toast } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Hall ticket",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-card border border-line bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line bg-primary-soft px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-primary",
								children: "Examination hall ticket · sample"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-ink",
								children: ticket.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: ticket.window
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Student"
							}), student.name] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Register no."
							}), student.registerNo] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: "Department"
								}),
								student.department,
								" · Sem ",
								student.semester
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Section"
							}), student.section] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 px-4 pb-4",
						children: ticket.papers.map((paper) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-control border border-line px-3 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										paper.code,
										" · ",
										paper.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-ink",
									children: paper.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										paper.session,
										" · ",
										paper.venue
									]
								})
							]
						}, paper.code))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => toast("A sample PDF was prepared on this device. Nothing was sent to a printer or inbox."),
					children: "Sample PDF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
					onClick: () => toast("Print dialog was not opened. This only confirms the sample ticket."),
					children: "Sample print"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Show this preview at the door only as a design. It is not an official hall ticket." })
			})
		]
	});
}
function PlacementScreen() {
	const { push } = useNav();
	const applications = useCampus((state) => state.applications);
	const student = useCampus((state) => state.student);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Placement",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Profile used for eligibility checks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-ink",
					children: student.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						student.department,
						" · CGPA ",
						student.cgpa,
						" · sample figure"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-2",
			children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: `${role.company} · ${role.title}`,
				meta: `${role.kind} · deadline ${role.deadline}`,
				badge: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: !role.open ? "neutral" : applications.includes(role.id) ? "teal" : "primary",
					children: !role.open ? "Closed" : applications.includes(role.id) ? "Applied" : "Open"
				}),
				onClick: () => push({
					kind: "role",
					roleId: role.id
				})
			}, role.id))
		})]
	});
}
function RoleDetail({ id }) {
	const role = roles.find((item) => item.id === id);
	const applied = useCampus((state) => state.applications.includes(id));
	const applyRole = useCampus((state) => state.applyRole);
	const { confirm, toast } = useNav();
	if (!role) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Role",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Role unavailable",
			body: "That sample posting is missing."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Role",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: role.open ? "primary" : "neutral",
				children: role.open ? role.kind : "Closed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl text-ink",
				children: role.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: role.company
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Deadline · ", role.deadline] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Location · ", role.location] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Pay note · ", role.stipend] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "leading-relaxed",
						children: ["Eligibility · ", role.eligibility]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed text-ink",
						children: role.about
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					disabled: !role.open || applied,
					onClick: () => confirm({
						title: "Submit a sample application?",
						body: `${role.company} will not receive this. It is stored only in the preview.`,
						confirmLabel: "Save application",
						onConfirm: () => {
							applyRole(role.id);
							toast("Application saved on this device. The company was not contacted.");
						}
					}),
					children: applied ? "Applied · simulated" : role.open ? "Submit sample application" : "Applications closed"
				})
			})
		]
	});
}
function IdScreen() {
	const student = useCampus((state) => state.student);
	const { toast } = useNav();
	const bars = (0, import_react.useMemo)(() => student.registerNo.split("").map((char) => 6 + char.charCodeAt(0) % 10), [student.registerNo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "ID card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-card border border-line bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-grid px-4 py-4 text-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none",
								children: "Meridian"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-surface/80",
								children: "Student identity · sample"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							name: student.name,
							className: "size-20 text-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl leading-tight text-ink",
									children: student.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: student.registerNo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										student.department,
										" · ",
										student.year
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 border-t border-line px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: "Semester"
								}),
								student.semester,
								" · Section ",
								student.section
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Blood group"
							}), student.bloodGroup] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted",
									children: "Valid"
								}),
								"Academic year ",
								student.year
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Campus"
							}), "Pune"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end gap-0.5 px-4 pb-4",
						"aria-hidden": "true",
						children: bars.map((width, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-ink",
							style: {
								width,
								height: 28 + index % 3 * 4
							}
						}, `${width}-${index}`))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Pattern is decorative. It will not scan as a credential."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => {
						const text = `${student.name} · ${student.registerNo} · ${student.department} · Meridian sample ID`;
						navigator.clipboard.writeText(text).then(() => toast("Copied a sample identity line. Nothing was shared."), () => toast("Could not copy. Nothing was shared."));
					},
					children: "Copy share card"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
					onClick: () => toast("A sample image was prepared locally. No file left this device."),
					children: "Sample download"
				})]
			})
		]
	});
}
var quickAccess = [
	{
		label: "College Calendar",
		icon: CalendarDays,
		screen: { kind: "calendar" }
	},
	{
		label: "Attendance",
		icon: ClipboardCheck,
		screen: { kind: "attendance" }
	},
	{
		label: "Pay Fees",
		icon: IndianRupee,
		screen: { kind: "fees" }
	},
	{
		label: "Events",
		icon: CalendarRange,
		screen: { kind: "events" }
	},
	{
		label: "Library",
		icon: Library,
		screen: { kind: "library" }
	},
	{
		label: "Hall Ticket",
		icon: Ticket,
		screen: { kind: "hall" }
	},
	{
		label: "Placement",
		icon: Briefcase,
		screen: { kind: "placement" }
	},
	{
		label: "ID Card",
		icon: IdCard,
		screen: { kind: "id" }
	}
];
function HomeScreen() {
	const { push, openDrawer } = useNav();
	const student = useCampus((state) => state.student);
	const readIds = useCampus((state) => state.readIds);
	const prefs = useCampus((state) => state.prefs);
	const [clockReady, setClockReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setClockReady(true), []);
	const latest = announcements.find((item) => item.scope === "college");
	const upcoming = events.filter((item) => item.scope === "college" && item.status === "upcoming").slice().sort((a, b) => a.date.localeCompare(b.date))[0];
	const day = clockReady ? weekdayKey() : "Thu";
	const slots = isDayKey(day) ? timetables[student.department][day] : [];
	const focus = clockReady ? currentSlot(slots) : {
		slot: slots[0] ?? null,
		phase: "next"
	};
	const unreadNotices = (prefs.exams && !readIds.includes("n1") ? 1 : 0) + (prefs.fees && !readIds.includes("n2") ? 1 : 0) + (prefs.events && !readIds.includes("n3") ? 1 : 0) + (prefs.posts && !readIds.includes("n4") ? 1 : 0) + (prefs.events && !readIds.includes("n5") ? 1 : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scroll h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 px-4 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Open menu",
						onClick: openDrawer,
						className: "press flex size-11 items-center justify-center rounded-control border border-line bg-surface text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none text-ink",
								children: "Meridian"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted",
							children: college.full.replace("Meridian ", "")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-label": unreadNotices ? `${unreadNotices} unread notifications` : "Notifications",
						onClick: () => push({ kind: "notifications" }),
						className: "press relative flex size-11 items-center justify-center rounded-control border border-line bg-surface text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), unreadNotices > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-2 rounded-full bg-amber" }) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: clockReady ? greeting() : "Welcome"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl text-ink",
						children: firstName(student.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							student.department,
							" · Semester ",
							student.semester,
							" · Section ",
							student.section
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 px-4 py-4",
				children: [
					latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => push({
							kind: "announcement",
							announcementId: latest.id
						}),
						className: "press hero-grid w-full rounded-card px-4 py-4 text-left text-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-surface/80",
								children: ["Latest announcement · ", latest.dateLabel]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl leading-tight",
								children: latest.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-surface/80",
								children: latest.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex items-center gap-1 text-sm font-medium",
								children: ["Read announcement ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
							})
						]
					}) : null,
					upcoming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => push({
							kind: "event",
							eventId: upcoming.id
						}),
						className: "press flex w-full gap-3 rounded-card border border-line border-l-4 border-l-primary bg-surface p-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-16 shrink-0 flex-col items-center justify-center rounded-control bg-primary py-2 text-primary-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl leading-none tabular-nums",
								children: upcoming.dayNum
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xs",
								children: upcoming.month
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-medium text-amber",
									children: "Upcoming event"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-display text-lg leading-tight text-ink",
									children: upcoming.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-sm text-muted",
									children: [
										upcoming.time,
										" · ",
										upcoming.place
									]
								})
							]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => push({ kind: "timetable" }),
						className: "press flex w-full items-center gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-control bg-teal-soft text-teal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1",
								children: focus.slot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs text-muted",
										children: [
											focus.phase === "now" ? "Now" : focus.phase === "next" ? "Up next" : "Last class",
											" ·",
											" ",
											weekdayLabel(day)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-medium text-ink",
										children: focus.slot.subject
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-sm text-muted",
										children: [
											focus.slot.start,
											"–",
											focus.slot.end,
											" · ",
											focus.slot.room
										]
									})
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: weekdayLabel(day)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium text-ink",
										children: "No classes today"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-muted",
										children: "Open the weekly timetable"
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0 text-faint" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-display text-lg text-ink",
					children: "Quick access"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2",
					children: quickAccess.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => push(item.screen),
							className: "press flex min-h-24 min-w-0 flex-col items-center justify-start gap-2 rounded-card border border-line bg-surface px-1 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-control bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-full text-center text-2xs font-medium leading-tight text-ink",
								children: item.label
							})]
						}, item.label);
					})
				})]
			})
		]
	});
}
function TimetableScreen() {
	const dept = useCampus((state) => state.student.department);
	const today = weekdayKey();
	const initial = isDayKey(today) ? today : "Mon";
	const [day, setDay] = (0, import_react.useState)(initial);
	const slots = timetables[dept][day];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Timetable",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chip-row",
			children: dayOrder.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, {
				active: day === item,
				onClick: () => setDay(item),
				children: [item, item === initial ? " · today" : ""]
			}, item))
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-3 text-sm text-muted",
			children: [
				dept,
				" · ",
				weekdayLabel(day),
				day === initial ? " · highlighted as today" : ""
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-card border px-3 py-3 ${day === initial ? "border-primary bg-primary-soft" : "border-line bg-surface"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums text-muted",
						children: [
							slot.start,
							"–",
							slot.end
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: slot.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							slot.faculty,
							" · ",
							slot.room
						]
					})
				]
			}, `${slot.start}${slot.subject}`))
		})]
	});
}
function PapersScreen() {
	const dept = useCampus((state) => state.student.department);
	const { push } = useNav();
	const [query, setQuery] = (0, import_react.useState)("");
	const [department, setDepartment] = (0, import_react.useState)(dept);
	const [exam, setExam] = (0, import_react.useState)("All");
	const exams = ["All", ...new Set(papers.map((paper) => paper.exam))];
	const items = papers.filter((paper) => {
		if (department !== "All" && paper.department !== department) return false;
		if (exam !== "All" && paper.exam !== exam) return false;
		return `${paper.subject} ${paper.year} ${paper.semester}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Question papers",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search subject",
				"aria-label": "Search question papers",
				className: fieldClass
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "chip-row",
				children: [[
					"All",
					"MCA",
					"MBA"
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: department === item,
					onClick: () => setDepartment(item),
					children: item === "All" ? "All depts" : item
				}, item)), exams.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: exam === item,
					onClick: () => setExam(item),
					children: item
				}, item))]
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No papers",
				body: "Adjust the filters. These are short sample papers, not an archive."
			}) : items.map((paper) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: paper.subject,
				meta: `${paper.department} · Sem ${paper.semester} · ${paper.year} · ${paper.exam}`,
				onClick: () => push({
					kind: "paper",
					paperId: paper.id
				})
			}, paper.id))
		})
	});
}
function PaperDetail({ id }) {
	const paper = papers.find((item) => item.id === id);
	const { toast } = useNav();
	if (!paper) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Paper missing",
			body: "That sample paper is not stored."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "primary",
				children: paper.exam
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl text-ink",
				children: paper.subject
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					paper.department,
					" · Semester ",
					paper.semester,
					" · ",
					paper.year
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink",
				children: paper.questions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: question }, question))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => toast("View stays in the app. No file was downloaded."),
					children: "Mark as viewed locally"
				})
			})
		]
	});
}
function HandbookScreen() {
	const [open, setOpen] = (0, import_react.useState)(handbook[0]?.id ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Handbook",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: handbook.map((section) => {
				const expanded = open === section.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card border border-line bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "press flex min-h-12 w-full items-center justify-between px-3 text-left",
						"aria-expanded": expanded,
						onClick: () => setOpen(expanded ? "" : section.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: expanded ? "Hide" : "Read"
						})]
					}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 px-3 pb-3 text-sm leading-relaxed text-ink",
						children: [section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 18))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-disc space-y-1 pl-4 text-muted",
							children: section.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
						})]
					}) : null]
				}, section.id);
			})
		})
	});
}
function ClaimScreen() {
	const claims = useCampus((state) => state.claims);
	const addClaim = useCampus((state) => state.addClaim);
	const { toast } = useNav();
	const [date, setDate] = (0, import_react.useState)("");
	const [subject, setSubject] = (0, import_react.useState)("");
	const [reason, setReason] = (0, import_react.useState)("");
	const [attached, setAttached] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Attendance claim",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
				event.preventDefault();
				const next = {};
				if (!date) next.date = "Choose the class date.";
				else if (date > (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)) next.date = "A claim has to be for a past class.";
				if (!subject) next.subject = "Choose a subject.";
				if (reason.trim().length < 12) next.reason = "Give a reason of at least 12 characters.";
				setErrors(next);
				if (Object.keys(next).length) return;
				addClaim({
					date,
					subject,
					reason: reason.trim(),
					attachment: attached ? "medical-note.pdf (sample)" : "None"
				});
				setDate("");
				setSubject("");
				setReason("");
				setAttached(false);
				toast("Claim stored on this device. No office received it.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Date",
					error: errors.date,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: fieldClass,
						value: date,
						onChange: (event) => setDate(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subject",
					error: errors.subject,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: fieldClass,
						value: subject,
						onChange: (event) => setSubject(event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select"
						}), claimSubjects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Reason",
					error: errors.reason,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: `${fieldClass} min-h-28 py-3`,
						value: reason,
						onChange: (event) => setReason(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
					type: "button",
					onClick: () => {
						setAttached((value) => !value);
						toast(attached ? "Sample note removed." : "Attached medical-note.pdf as a sample. No file was uploaded.");
					},
					children: attached ? "Remove sample note" : "Attach sample note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Submit claim"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Validation runs locally. Status labels that say “sample” or “simulated” were never reviewed." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Claim history" }), claims.map((claim) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: claim.subject
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: claim.status.startsWith("Approved") ? "teal" : claim.status.startsWith("Pending") ? "amber" : "primary",
							children: claim.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted",
						children: [
							claim.date,
							" · ",
							claim.attachment
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: claim.reason
					})
				]
			}, claim.id))]
		})]
	});
}
function PrintingScreen() {
	const prints = useCampus((state) => state.prints);
	const addPrint = useCampus((state) => state.addPrint);
	const { toast } = useNav();
	const [name, setName] = (0, import_react.useState)("");
	const [pages, setPages] = (0, import_react.useState)("1");
	const [copies, setCopies] = (0, import_react.useState)("1");
	const [color, setColor] = (0, import_react.useState)(false);
	const [duplex, setDuplex] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const quote = printQuote(Number(pages), Number(copies), color, duplex);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Xerox / Printing",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
				event.preventDefault();
				const pageCount = Number(pages);
				const copyCount = Number(copies);
				const next = {};
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
					price: quote.price
				});
				setName("");
				toast("Request queued on this device. The print counter was not notified.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Document name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pages",
						error: errors.pages,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							value: pages,
							onChange: (event) => setPages(event.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Copies",
						error: errors.copies,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							value: copies,
							onChange: (event) => setCopies(event.target.value)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "chip-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: !color,
							onClick: () => setColor(false),
							children: "Black and white"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: color,
							onClick: () => setColor(true),
							children: "Colour"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: !duplex,
							onClick: () => setDuplex(false),
							children: "Single-sided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: duplex,
							onClick: () => setDuplex(true),
							children: "Double-sided"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Estimated price · sample tariff"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums text-ink",
							children: quote ? inr(quote.price, 2) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: quote ? `${quote.sheets} sheet${quote.sheets === 1 ? "" : "s"} · ${color ? "₹8" : "₹1.50"} each` : "Enter pages and copies."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: "Submit request"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Requests" }), prints.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: job.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: job.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							job.pages,
							" pages · ",
							job.copies,
							" ",
							job.copies === 1 ? "copy" : "copies",
							" · ",
							job.color ? "Colour" : "Black and white",
							" ·",
							" ",
							job.duplex ? "Double-sided" : "Single-sided"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tabular-nums text-ink",
						children: inr(job.price, 2)
					})
				]
			}, job.id))]
		})]
	});
}
function PollsScreen() {
	const votes = useCampus((state) => state.votes);
	const vote = useCampus((state) => state.vote);
	const { toast } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Polls",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: polls.map((poll) => {
				const choice = votes[poll.id];
				const total = poll.options.reduce((sum, option) => sum + option.votes, 0) + (choice ? 1 : 0);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-surface p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-medium text-ink",
							children: poll.question
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: poll.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2",
							children: poll.options.map((option) => {
								const count = option.votes + (choice === option.id ? 1 : 0);
								const share = total ? Math.round(count / total * 100) : 0;
								if (!choice) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press min-h-11 w-full rounded-control border border-line px-3 text-left text-sm text-ink",
									onClick: () => {
										const ok = vote(poll.id, option.id);
										toast(ok ? "Vote saved for this session on this device." : "You already voted in this poll.");
									},
									children: option.label
								}, option.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-control border border-line px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: choice === option.id ? "font-semibold text-primary" : "text-ink",
											children: [option.label, choice === option.id ? " · your vote" : ""]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: [share, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 overflow-hidden rounded-chip bg-surface-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-primary",
											style: { width: `${share}%` }
										})
									})]
								}, option.id);
							})
						})
					]
				}, poll.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "A second vote in the same poll is blocked until this preview’s saved data is cleared." })
		})]
	});
}
function LecturersScreen() {
	const { push } = useNav();
	const [query, setQuery] = (0, import_react.useState)("");
	const [department, setDepartment] = (0, import_react.useState)("All");
	const departments = ["All", ...new Set(lecturers.map((person) => person.department))];
	const items = lecturers.filter((person) => {
		if (department !== "All" && person.department !== department) return false;
		return `${person.name} ${person.subject} ${person.designation}`.toLowerCase().includes(query.trim().toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Lecturers",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search name or subject",
				"aria-label": "Search lecturers",
				className: fieldClass
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "chip-row",
				children: departments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: department === item,
					onClick: () => setDepartment(item),
					children: item
				}, item))
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No matches",
				body: "Try another name, subject, or department."
			}) : items.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				title: person.name,
				meta: `${person.designation} · ${person.subject}`,
				onClick: () => push({
					kind: "lecturer",
					lecturerId: person.id
				})
			}, person.id))
		})
	});
}
function LecturerDetail({ id }) {
	const person = lecturers.find((item) => item.id === id);
	const { toast } = useNav();
	if (!person) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Lecturer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Not listed",
			body: "That sample contact is missing."
		})
	});
	async function copy(value, label) {
		try {
			await navigator.clipboard.writeText(value);
			toast(`Copied a sample ${label}. This is not a live directory.`);
		} catch {
			toast("Could not copy on this device.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Lecturer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: person.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: person.designation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Department · ", person.department] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Subject · ", person.subject] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Room · ", person.room] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Office hour · ", person.hours] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SecondaryButton, {
					type: "button",
					onClick: () => void copy(person.email, "email"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), person.email]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SecondaryButton, {
					type: "button",
					onClick: () => void copy(person.phone, "phone"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), person.phone]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "Emails and phones are fictional. Copying them does not place a call." })
			})
		]
	});
}
function HelpScreen() {
	const { toast } = useNav();
	const urgent = helpContacts.filter((item) => item.group === "urgent");
	const support = helpContacts.filter((item) => item.group === "support");
	async function copy(phone) {
		try {
			await navigator.clipboard.writeText(phone);
			toast("Copied a fictional sample number. It is not an official helpline.");
		} catch {
			toast("Could not copy. The number is still only a sample.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "Help contacts",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-card border border-danger bg-danger-soft px-3 py-3 text-sm leading-relaxed text-danger",
				children: "These numbers are fictional sample data so the screen can be reviewed. They are not real college, police, or emergency contacts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Urgent support" }), urgent.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink",
							children: item.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "press mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary",
							onClick: () => void copy(item.phone),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), item.phone]
						})
					]
				}, item.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Student help groups" }), support.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-surface px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "press mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary",
							onClick: () => void copy(item.phone),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), item.phone]
						})
					]
				}, item.id))]
			})
		]
	});
}
function MapScreen() {
	const [selected, setSelected] = (0, import_react.useState)(places[0]?.id ?? "");
	const place = places.find((item) => item.id === selected) ?? places[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScreenShell, {
		title: "College map",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-80 overflow-hidden rounded-card border border-line bg-surface-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-8 top-1/2 h-px bg-line-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-8 left-1/2 w-px bg-line-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute left-3 top-2 text-xs text-faint",
						children: "North"
					}),
					places.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelected(item.id),
						style: {
							left: `${item.x}%`,
							top: `${item.y}%`
						},
						className: `press absolute max-w-28 -translate-x-1/2 -translate-y-1/2 rounded-control border px-2 py-2 text-xs font-medium ${selected === item.id ? "border-primary bg-primary text-primary-ink" : "border-line bg-surface text-ink"}`,
						children: item.mapLabel
					}, item.id))
				]
			}),
			place ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-ink",
						children: place.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							place.zone,
							" · ",
							place.hours
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink",
						children: place.note
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: places.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(item.id),
					className: `press flex min-h-11 w-full items-center justify-between rounded-control border px-3 text-left text-sm ${selected === item.id ? "border-primary bg-primary-soft text-ink" : "border-line bg-surface text-ink"}`,
					children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: item.zone
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { children: "A schematic of the sample campus. It does not use a maps service." })
			})
		]
	});
}
var achievementFilters = [
	"All",
	"Student",
	"College",
	"Sports",
	"Research"
];
function AchievementsScreen() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => achievements.filter((item) => {
		if (filter === "All") return true;
		if (filter === "Student") return item.audience === "student";
		if (filter === "College") return item.audience === "college";
		return item.category === filter;
	}), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenShell, {
		title: "Achievements",
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chip-row",
			children: achievementFilters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: filter === item,
				onClick: () => setFilter(item),
				children: item
			}, item))
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "Nothing in this filter",
				body: "Try All to see the sample highlights."
			}) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-line bg-surface px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "neutral",
							children: item.audience === "student" ? "Student" : "College"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-medium text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							item.who,
							" · ",
							item.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink",
						children: item.detail
					})
				]
			}, item.id))
		})
	});
}
var tabs = [
	{
		id: "home",
		label: "Home",
		icon: House
	},
	{
		id: "announcements",
		label: "Announcement",
		icon: Megaphone
	},
	{
		id: "posts",
		label: "Posts",
		icon: MessageSquare
	},
	{
		id: "department",
		label: "Department",
		icon: Building2
	},
	{
		id: "account",
		label: "Account",
		icon: UserRound
	}
];
var drawerItems = [
	{
		label: "Timetable",
		icon: Clock,
		screen: { kind: "timetable" }
	},
	{
		label: "Question Papers",
		icon: FileText,
		screen: { kind: "papers" }
	},
	{
		label: "Handbook",
		icon: BookOpen,
		screen: { kind: "handbook" }
	},
	{
		label: "Attendance Claim",
		icon: FilePenLine,
		screen: { kind: "claim" }
	},
	{
		label: "Xerox / Printing",
		icon: Printer,
		screen: { kind: "printing" }
	},
	{
		label: "Polls",
		icon: Vote,
		screen: { kind: "polls" }
	},
	{
		label: "Lecturer Contact Information",
		icon: Briefcase,
		screen: { kind: "lecturers" }
	},
	{
		label: "Anti-Ragging / Help Group Contacts",
		icon: LifeBuoy,
		screen: { kind: "help" }
	},
	{
		label: "College Map",
		icon: Map,
		screen: { kind: "map" }
	},
	{
		label: "Achievements",
		icon: Trophy,
		screen: { kind: "achievements" }
	}
];
function renderScreen(screen) {
	switch (screen.kind) {
		case "announcement": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementDetail, { id: screen.announcementId });
		case "event": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventDetail, { id: screen.eventId });
		case "calendar": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarScreen, {});
		case "attendance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceScreen, {});
		case "fees": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeesScreen, {});
		case "events": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsScreen, {});
		case "library": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryScreen, {});
		case "book": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookDetail, { id: screen.bookId });
		case "hall": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HallScreen, {});
		case "placement": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlacementScreen, {});
		case "role": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleDetail, { id: screen.roleId });
		case "id": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdScreen, {});
		case "timetable": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimetableScreen, {});
		case "papers": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PapersScreen, {});
		case "paper": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperDetail, { id: screen.paperId });
		case "handbook": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandbookScreen, {});
		case "claim": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimScreen, {});
		case "printing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintingScreen, {});
		case "polls": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PollsScreen, {});
		case "lecturers": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LecturersScreen, {});
		case "lecturer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LecturerDetail, { id: screen.lecturerId });
		case "help": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpScreen, {});
		case "map": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, {});
		case "achievements": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementsScreen, {});
		case "create-post": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePostScreen, {});
		case "comments": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsScreen, { postId: screen.postId });
		case "edit-profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditProfileScreen, {});
		case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {});
		case "notifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsScreen, {});
		case "support": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportScreen, {});
		case "about": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutScreen, {});
		default: return screen;
	}
}
function CampusApp() {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [stack, setStack] = (0, import_react.useState)([]);
	const [drawer, setDrawer] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [confirmState, setConfirmState] = (0, import_react.useState)(null);
	const [signedOut, setSignedOut] = (0, import_react.useState)(false);
	const closeRef = (0, import_react.useRef)(null);
	const readIds = useCampus((state) => state.readIds);
	const student = useCampus((state) => state.student);
	(0, import_react.useEffect)(() => {
		useCampus.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const timer = window.setTimeout(() => setToast(null), 3200);
		return () => window.clearTimeout(timer);
	}, [toast]);
	(0, import_react.useEffect)(() => {
		if (drawer) closeRef.current?.focus();
	}, [drawer]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key === "Escape") {
				if (confirmState) setConfirmState(null);
				else setDrawer(false);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [confirmState]);
	const unreadAnnouncements = announcements.filter((item) => item.scope === "college" && !readIds.includes(item.id)).length;
	const api = {
		tab,
		setTab: (next) => {
			setStack([]);
			setDrawer(false);
			setTab(next);
		},
		push: (screen) => {
			setDrawer(false);
			setStack((current) => [...current, {
				...screen,
				key: uid("screen")
			}]);
		},
		pop: () => setStack((current) => current.slice(0, -1)),
		closeStack: () => setStack([]),
		openDrawer: () => setDrawer(true),
		closeDrawer: () => setDrawer(false),
		toast: (message) => setToast({
			id: uid("toast"),
			message
		}),
		confirm: (request) => setConfirmState(request),
		signOut: () => {
			setStack([]);
			setDrawer(false);
			setSignedOut(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "desk flex h-dvh items-center justify-center overflow-hidden md:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "phone-frame relative flex min-h-0 flex-col overflow-hidden bg-canvas text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavContext.Provider, {
				value: api,
				children: [
					signedOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col justify-between px-6 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-3xl text-ink",
								children: "You left the preview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "No account was signed out of a server. Sample posts, votes, and profile edits are still on this device."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							onClick: () => setSignedOut(false),
							children: "Return to Meridian"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex min-h-0 flex-1 flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("flex min-h-0 flex-1 flex-col", stack.length > 0 && "hidden"),
								hidden: stack.length > 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-h-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "absolute inset-0",
											hidden: tab !== "home",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "absolute inset-0",
											hidden: tab !== "announcements",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementsScreen, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "absolute inset-0",
											hidden: tab !== "posts",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostsScreen, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "absolute inset-0",
											hidden: tab !== "department",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentScreen, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
											className: "absolute inset-0",
											hidden: tab !== "account",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountScreen, {})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "safe-bottom grid grid-cols-5 border-t border-line bg-surface",
									"aria-label": "Primary",
									children: tabs.map((item) => {
										const Icon = item.icon;
										const active = tab === item.id;
										const badge = item.id === "announcements" ? unreadAnnouncements : 0;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-current": active ? "page" : void 0,
											onClick: () => api.setTab(item.id),
											className: cn("relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-0.5 px-0.5", active ? "text-primary" : "text-muted"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0 h-0.5 w-6 rounded-chip", active ? "bg-primary" : "bg-transparent") }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), badge > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute -right-2 -top-1 min-w-4 rounded-chip bg-amber px-1 text-center text-2xs font-semibold text-surface",
														children: badge > 9 ? "9+" : badge
													}) : null]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-full text-center text-2xs leading-tight",
													children: item.label
												})
											]
										}, item.id);
									})
								})]
							}),
							stack.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("absolute inset-0 bg-canvas", index === stack.length - 1 && "rise"),
								hidden: index !== stack.length - 1,
								children: renderScreen(item)
							}, item.key)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("absolute inset-0 z-40", drawer ? "pointer-events-auto" : "pointer-events-none"),
								inert: drawer ? void 0 : true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Close menu",
									className: cn("absolute inset-0 bg-night/40 transition-opacity duration-200", drawer ? "opacity-100" : "opacity-0"),
									onClick: () => setDrawer(false)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
									role: "dialog",
									"aria-label": "Campus menu",
									className: cn("drawer-panel relative flex h-full w-72 max-w-full flex-col bg-surface transition-transform duration-200 ease-out", drawer ? "translate-x-0" : "-translate-x-full"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3 border-b border-line px-4 py-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
												name: student.name,
												className: "size-12 text-sm"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate font-display text-lg text-ink",
														children: student.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-sm text-muted",
														children: [
															student.department,
															" · Semester ",
															student.semester
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: "press mt-1 text-sm font-medium text-primary",
														onClick: () => api.setTab("account"),
														children: "View account"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												ref: closeRef,
												type: "button",
												"aria-label": "Close menu",
												onClick: () => setDrawer(false),
												className: "press flex size-11 items-center justify-center rounded-control text-ink",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "scroll min-h-0 flex-1 px-3 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1",
											children: drawerItems.map((item) => {
												const Icon = item.icon;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => api.push(item.screen),
													className: "press flex min-h-12 w-full items-center gap-3 rounded-control px-2 text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex size-10 shrink-0 items-center justify-center rounded-control bg-primary-soft text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-medium leading-snug text-ink",
														children: item.label
													})]
												}, item.label);
											})
										})
									})]
								})]
							})
						]
					}),
					confirmState ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-50 flex items-end bg-night/40 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "dialog",
							"aria-modal": "true",
							"aria-labelledby": "confirm-title",
							className: "w-full rounded-card border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "confirm-title",
									className: "font-display text-xl text-ink",
									children: confirmState.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: confirmState.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryButton, {
										type: "button",
										onClick: () => setConfirmState(null),
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
										type: "button",
										onClick: () => {
											const run = confirmState.onConfirm;
											setConfirmState(null);
											run();
										},
										children: confirmState.confirmLabel
									})]
								})
							]
						})
					}) : null,
					toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "status",
						className: cn("absolute inset-x-4 z-50 rounded-control bg-ink px-3 py-3 text-sm text-surface", stack.length > 0 ? "bottom-4" : "bottom-20"),
						children: toast.message
					}) : null
				]
			})
		})
	});
}
var SplitComponent = CampusApp;
//#endregion
export { SplitComponent as component };
