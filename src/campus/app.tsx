import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  FilePenLine,
  FileText,
  Home,
  LifeBuoy,
  Map,
  Megaphone,
  MessageSquare,
  Printer,
  Trophy,
  UserRound,
  Vote,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  AnnouncementDetail,
  AnnouncementsScreen,
  CommentsScreen,
  CreatePostScreen,
  DepartmentScreen,
  EditProfileScreen,
  NotificationsScreen,
  PostsScreen,
  AboutScreen,
  AccountScreen,
  SettingsScreen,
  SupportScreen,
} from "@/campus/community";
import {
  AttendanceScreen,
  BookDetail,
  CalendarScreen,
  EventDetail,
  EventsScreen,
  FeesScreen,
  HallScreen,
  IdScreen,
  LibraryScreen,
  PlacementScreen,
  RoleDetail,
} from "@/campus/academics";
import { HomeScreen } from "@/campus/home";
import { announcements } from "@/campus/data";
import { uid } from "@/campus/logic";
import { NavContext, type ConfirmRequest, type Screen, type StackItem, type TabId } from "@/campus/nav";
import {
  AchievementsScreen,
  ClaimScreen,
  HandbookScreen,
  HelpScreen,
  LecturerDetail,
  LecturersScreen,
  MapScreen,
  PaperDetail,
  PapersScreen,
  PollsScreen,
  PrintingScreen,
  TimetableScreen,
} from "@/campus/services";
import { useCampus } from "@/campus/store";
import { Avatar, Mark, PrimaryButton, SecondaryButton } from "@/campus/ui";
import { cn } from "@/lib/cn";

const tabs: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "announcements", label: "Announcement", icon: Megaphone },
  { id: "posts", label: "Posts", icon: MessageSquare },
  { id: "department", label: "Department", icon: Building2 },
  { id: "account", label: "Account", icon: UserRound },
];

const drawerItems: { label: string; icon: LucideIcon; screen: Screen }[] = [
  { label: "Timetable", icon: Clock, screen: { kind: "timetable" } },
  { label: "Question Papers", icon: FileText, screen: { kind: "papers" } },
  { label: "Handbook", icon: BookOpen, screen: { kind: "handbook" } },
  { label: "Attendance Claim", icon: FilePenLine, screen: { kind: "claim" } },
  { label: "Xerox / Printing", icon: Printer, screen: { kind: "printing" } },
  { label: "Polls", icon: Vote, screen: { kind: "polls" } },
  { label: "Lecturer Contact Information", icon: Briefcase, screen: { kind: "lecturers" } },
  { label: "Anti-Ragging / Help Group Contacts", icon: LifeBuoy, screen: { kind: "help" } },
  { label: "College Map", icon: Map, screen: { kind: "map" } },
  { label: "Achievements", icon: Trophy, screen: { kind: "achievements" } },
];

function renderScreen(screen: StackItem) {
  switch (screen.kind) {
    case "announcement":
      return <AnnouncementDetail id={screen.announcementId} />;
    case "event":
      return <EventDetail id={screen.eventId} />;
    case "calendar":
      return <CalendarScreen />;
    case "attendance":
      return <AttendanceScreen />;
    case "fees":
      return <FeesScreen />;
    case "events":
      return <EventsScreen />;
    case "library":
      return <LibraryScreen />;
    case "book":
      return <BookDetail id={screen.bookId} />;
    case "hall":
      return <HallScreen />;
    case "placement":
      return <PlacementScreen />;
    case "role":
      return <RoleDetail id={screen.roleId} />;
    case "id":
      return <IdScreen />;
    case "timetable":
      return <TimetableScreen />;
    case "papers":
      return <PapersScreen />;
    case "paper":
      return <PaperDetail id={screen.paperId} />;
    case "handbook":
      return <HandbookScreen />;
    case "claim":
      return <ClaimScreen />;
    case "printing":
      return <PrintingScreen />;
    case "polls":
      return <PollsScreen />;
    case "lecturers":
      return <LecturersScreen />;
    case "lecturer":
      return <LecturerDetail id={screen.lecturerId} />;
    case "help":
      return <HelpScreen />;
    case "map":
      return <MapScreen />;
    case "achievements":
      return <AchievementsScreen />;
    case "create-post":
      return <CreatePostScreen />;
    case "comments":
      return <CommentsScreen postId={screen.postId} />;
    case "edit-profile":
      return <EditProfileScreen />;
    case "settings":
      return <SettingsScreen />;
    case "notifications":
      return <NotificationsScreen />;
    case "support":
      return <SupportScreen />;
    case "about":
      return <AboutScreen />;
    default: {
      const unreachable: never = screen;
      return unreachable;
    }
  }
}

export function CampusApp() {
  const [tab, setTab] = useState<TabId>("home");
  const [stack, setStack] = useState<StackItem[]>([]);
  const [drawer, setDrawer] = useState(false);
  const [toast, setToast] = useState<{ id: string; message: string } | null>(null);
  const [confirmState, setConfirmState] = useState<ConfirmRequest | null>(null);
  const [signedOut, setSignedOut] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const readIds = useCampus((state) => state.readIds);
  const student = useCampus((state) => state.student);

  useEffect(() => {
    void useCampus.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (drawer) closeRef.current?.focus();
  }, [drawer]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
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
    setTab: (next: TabId) => {
      setStack([]);
      setDrawer(false);
      setTab(next);
    },
    push: (screen: Screen) => {
      setDrawer(false);
      setStack((current) => [...current, { ...screen, key: uid("screen") }]);
    },
    pop: () => setStack((current) => current.slice(0, -1)),
    closeStack: () => setStack([]),
    openDrawer: () => setDrawer(true),
    closeDrawer: () => setDrawer(false),
    toast: (message: string) => setToast({ id: uid("toast"), message }),
    confirm: (request: ConfirmRequest) => setConfirmState(request),
    signOut: () => {
      setStack([]);
      setDrawer(false);
      setSignedOut(true);
    },
  };

  return (
    <div className="desk flex h-dvh items-center justify-center overflow-hidden md:p-6">
      <div className="phone-frame relative flex min-h-0 flex-col overflow-hidden bg-canvas text-ink">
        <NavContext.Provider value={api}>
          {signedOut ? (
            <div className="flex h-full flex-col justify-between px-6 py-10">
              <div>
                <Mark className="size-8 text-primary" />
                <h1 className="mt-4 font-display text-3xl text-ink">You left the preview</h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  No account was signed out of a server. Sample posts, votes, and profile edits are still on this device.
                </p>
              </div>
              <PrimaryButton onClick={() => setSignedOut(false)}>Return to Meridian</PrimaryButton>
            </div>
          ) : (
            <div className="relative flex min-h-0 flex-1 flex-col">
              <div className={cn("flex min-h-0 flex-1 flex-col", stack.length > 0 && "hidden")} hidden={stack.length > 0}>
                <div className="relative min-h-0 flex-1">
                  <section className="absolute inset-0" hidden={tab !== "home"}>
                    <HomeScreen />
                  </section>
                  <section className="absolute inset-0" hidden={tab !== "announcements"}>
                    <AnnouncementsScreen />
                  </section>
                  <section className="absolute inset-0" hidden={tab !== "posts"}>
                    <PostsScreen />
                  </section>
                  <section className="absolute inset-0" hidden={tab !== "department"}>
                    <DepartmentScreen />
                  </section>
                  <section className="absolute inset-0" hidden={tab !== "account"}>
                    <AccountScreen />
                  </section>
                </div>
                <nav className="safe-bottom grid grid-cols-5 border-t border-line bg-surface" aria-label="Primary">
                  {tabs.map((item) => {
                    const Icon = item.icon;
                    const active = tab === item.id;
                    const badge = item.id === "announcements" ? unreadAnnouncements : 0;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-current={active ? "page" : undefined}
                        onClick={() => api.setTab(item.id)}
                        className={cn(
                          "relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-0.5 px-0.5",
                          active ? "text-primary" : "text-muted",
                        )}
                      >
                        <span className={cn("absolute top-0 h-0.5 w-6 rounded-chip", active ? "bg-primary" : "bg-transparent")} />
                        <span className="relative">
                          <Icon className="size-5" />
                          {badge > 0 ? (
                            <span className="absolute -right-2 -top-1 min-w-4 rounded-chip bg-amber px-1 text-center text-2xs font-semibold text-surface">
                              {badge > 9 ? "9+" : badge}
                            </span>
                          ) : null}
                        </span>
                        <span className="w-full text-center text-2xs leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {stack.map((item, index) => (
                <div
                  key={item.key}
                  className={cn("absolute inset-0 bg-canvas", index === stack.length - 1 && "rise")}
                  hidden={index !== stack.length - 1}
                >
                  {renderScreen(item)}
                </div>
              ))}

              <div
                className={cn(
                  "absolute inset-0 z-40",
                  drawer ? "pointer-events-auto" : "pointer-events-none",
                )}
                inert={drawer ? undefined : true}
              >
                <button
                  type="button"
                  aria-label="Close menu"
                  className={cn("absolute inset-0 bg-night/40 transition-opacity duration-200", drawer ? "opacity-100" : "opacity-0")}
                  onClick={() => setDrawer(false)}
                />
                <aside
                  role="dialog"
                  aria-label="Campus menu"
                  className={cn(
                    "drawer-panel relative flex h-full w-72 max-w-full flex-col bg-surface transition-transform duration-200 ease-out",
                    drawer ? "translate-x-0" : "-translate-x-full",
                  )}
                >
                  <div className="flex items-start gap-3 border-b border-line px-4 py-4">
                    <Avatar name={student.name} className="size-12 text-sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-lg text-ink">{student.name}</p>
                      <p className="text-sm text-muted">
                        {student.department} · Semester {student.semester}
                      </p>
                      <button
                        type="button"
                        className="press mt-1 text-sm font-medium text-primary"
                        onClick={() => api.setTab("account")}
                      >
                        View account
                      </button>
                    </div>
                    <button
                      ref={closeRef}
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setDrawer(false)}
                      className="press flex size-11 items-center justify-center rounded-control text-ink"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                  <div className="scroll min-h-0 flex-1 px-3 py-3">
                    <div className="space-y-1">
                      {drawerItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => api.push(item.screen)}
                            className="press flex min-h-12 w-full items-center gap-3 rounded-control px-2 text-left"
                          >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-primary-soft text-primary">
                              <Icon className="size-5" />
                            </span>
                            <span className="text-sm font-medium leading-snug text-ink">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          )}

          {confirmState ? (
            <div className="absolute inset-0 z-50 flex items-end bg-night/40 p-4">
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-title"
                className="w-full rounded-card border border-line bg-surface p-4"
              >
                <h2 id="confirm-title" className="font-display text-xl text-ink">
                  {confirmState.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{confirmState.body}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <SecondaryButton type="button" onClick={() => setConfirmState(null)}>
                    Cancel
                  </SecondaryButton>
                  <PrimaryButton
                    type="button"
                    onClick={() => {
                      const run = confirmState.onConfirm;
                      setConfirmState(null);
                      run();
                    }}
                  >
                    {confirmState.confirmLabel}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ) : null}

          {toast ? (
            <div
              role="status"
              className={cn(
                "absolute inset-x-4 z-50 rounded-control bg-ink px-3 py-3 text-sm text-surface",
                stack.length > 0 ? "bottom-4" : "bottom-20",
              )}
            >
              {toast.message}
            </div>
          ) : null}
        </NavContext.Provider>
      </div>
    </div>
  );
}
