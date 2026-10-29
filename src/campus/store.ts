import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  defaultPrefs,
  defaultStudent,
  seedClaims,
  seedPosts,
  seedPrints,
  type Claim,
  type Post,
  type Prefs,
  type PrintJob,
  type Student,
} from "@/campus/data";
import { uid } from "@/campus/logic";

type CampusState = {
  student: Student;
  posts: Post[];
  votes: Record<string, string>;
  readIds: string[];
  claims: Claim[];
  prints: PrintJob[];
  feePaid: boolean;
  registrations: string[];
  reservations: string[];
  applications: string[];
  prefs: Prefs;
  updateStudent: (patch: Partial<Student>) => void;
  toggleLike: (id: string) => void;
  addPost: (body: string) => void;
  addComment: (postId: string, body: string) => void;
  vote: (pollId: string, optionId: string) => boolean;
  markRead: (id: string) => void;
  addClaim: (claim: Omit<Claim, "id" | "status">) => void;
  addPrint: (job: Omit<PrintJob, "id" | "status">) => void;
  payFees: () => void;
  registerEvent: (id: string) => void;
  reserveBook: (id: string) => void;
  applyRole: (id: string) => void;
  setPref: (key: keyof Prefs, value: boolean) => void;
};

export const useCampus = create<CampusState>()(
  persist(
    (set, get) => ({
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
      updateStudent: (patch) => set((state) => ({ student: { ...state.student, ...patch } })),
      toggleLike: (id) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id
              ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) }
              : post,
          ),
        })),
      addPost: (body) =>
        set((state) => ({
          posts: [
            {
              id: uid("post"),
              author: state.student.name,
              department: `${state.student.department} · Sem ${state.student.semester}`,
              body,
              time: "Just now",
              likes: 0,
              liked: false,
              comments: [],
            },
            ...state.posts,
          ],
        })),
      addComment: (postId, body) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  comments: [
                    ...post.comments,
                    { id: uid("cm"), author: state.student.name, body, time: "Just now" },
                  ],
                }
              : post,
          ),
        })),
      vote: (pollId, optionId) => {
        if (get().votes[pollId]) return false;
        set((state) => ({ votes: { ...state.votes, [pollId]: optionId } }));
        return true;
      },
      markRead: (id) =>
        set((state) => ({
          readIds: state.readIds.includes(id) ? state.readIds : [...state.readIds, id],
        })),
      addClaim: (claim) =>
        set((state) => ({
          claims: [{ ...claim, id: uid("c"), status: "Submitted · simulated" }, ...state.claims],
        })),
      addPrint: (job) =>
        set((state) => ({
          prints: [{ ...job, id: uid("pj"), status: "Queued · simulated" }, ...state.prints],
        })),
      payFees: () => set({ feePaid: true }),
      registerEvent: (id) =>
        set((state) => ({
          registrations: state.registrations.includes(id) ? state.registrations : [...state.registrations, id],
        })),
      reserveBook: (id) =>
        set((state) => ({
          reservations: state.reservations.includes(id) ? state.reservations : [...state.reservations, id],
        })),
      applyRole: (id) =>
        set((state) => ({
          applications: state.applications.includes(id) ? state.applications : [...state.applications, id],
        })),
      setPref: (key, value) => set((state) => ({ prefs: { ...state.prefs, [key]: value } })),
    }),
    {
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
        prefs: state.prefs,
      }),
    },
  ),
);
