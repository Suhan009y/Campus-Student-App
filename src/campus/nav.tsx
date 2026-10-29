import { createContext, useContext } from "react";

export type TabId = "home" | "announcements" | "posts" | "department" | "account";

export type Screen =
  | { kind: "announcement"; announcementId: string }
  | { kind: "event"; eventId: string }
  | { kind: "calendar" }
  | { kind: "attendance" }
  | { kind: "fees" }
  | { kind: "events" }
  | { kind: "library" }
  | { kind: "book"; bookId: string }
  | { kind: "hall" }
  | { kind: "placement" }
  | { kind: "role"; roleId: string }
  | { kind: "id" }
  | { kind: "timetable" }
  | { kind: "papers" }
  | { kind: "paper"; paperId: string }
  | { kind: "handbook" }
  | { kind: "claim" }
  | { kind: "printing" }
  | { kind: "polls" }
  | { kind: "lecturers" }
  | { kind: "lecturer"; lecturerId: string }
  | { kind: "help" }
  | { kind: "map" }
  | { kind: "achievements" }
  | { kind: "create-post" }
  | { kind: "comments"; postId: string }
  | { kind: "edit-profile" }
  | { kind: "settings" }
  | { kind: "notifications" }
  | { kind: "support" }
  | { kind: "about" };

export type StackItem = Screen & { key: string };

export type ConfirmRequest = {
  title: string;
  body: string;
  confirmLabel: string;
  onConfirm: () => void;
};

export type NavApi = {
  tab: TabId;
  setTab: (tab: TabId) => void;
  push: (screen: Screen) => void;
  pop: () => void;
  closeStack: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toast: (message: string) => void;
  confirm: (request: ConfirmRequest) => void;
  signOut: () => void;
};

export const NavContext = createContext<NavApi | null>(null);

export function useNav() {
  const value = useContext(NavContext);
  if (!value) throw new Error("Navigation is unavailable");
  return value;
}
