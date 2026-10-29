import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { avatarWell, initials } from "@/campus/logic";
import { useNav } from "@/campus/nav";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="3" y="6" width="7" height="20" rx="1.4" fill="currentColor" />
      <rect x="12.5" y="13" width="7" height="13" rx="1.4" fill="currentColor" opacity="0.55" />
      <rect x="22" y="6" width="7" height="20" rx="1.4" fill="currentColor" />
    </svg>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        avatarWell(name),
        className,
      )}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}

export function Badge({
  tone,
  children,
}: {
  tone: "neutral" | "teal" | "amber" | "danger" | "primary";
  children: ReactNode;
}) {
  const tones = {
    neutral: "bg-surface-2 text-muted",
    teal: "bg-teal-soft text-teal",
    amber: "bg-amber-soft text-amber",
    danger: "bg-danger-soft text-danger",
    primary: "bg-primary-soft text-primary",
  };
  return (
    <span className={cn("inline-flex items-center rounded-chip px-2 py-0.5 text-xs font-medium", tones[tone])}>
      {children}
    </span>
  );
}

export function SectionLabel({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="mb-2 flex items-end justify-between gap-3">
      <h2 className="font-display text-lg text-ink">{children}</h2>
      {aside}
    </div>
  );
}

export function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press inline-flex min-h-11 shrink-0 items-center rounded-chip border px-3 text-xs font-medium",
        active ? "border-primary bg-primary text-primary-ink" : "border-line bg-surface text-ink",
      )}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

export const fieldClass =
  "w-full min-h-12 rounded-control border border-line bg-surface px-3 text-base text-ink outline-none placeholder:text-faint";

export function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-danger">{error}</span> : null}
      {hint && !error ? <span className="mt-1 block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}

export function PrimaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control bg-primary px-4 text-sm font-semibold text-primary-ink disabled:opacity-50",
        className,
      )}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "press inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control border border-line bg-surface px-4 text-sm font-semibold text-ink disabled:opacity-50",
        className,
      )}
    />
  );
}

export function ScreenHeader({ title, action }: { title: string; action?: ReactNode }) {
  const { pop } = useNav();
  return (
    <header className="flex items-center gap-1 border-b border-line bg-canvas px-2 py-2">
      <button
        type="button"
        aria-label="Back"
        onClick={pop}
        className="press flex size-11 items-center justify-center rounded-control text-ink"
      >
        <ChevronLeft className="size-5" />
      </button>
      <h1 className="min-w-0 flex-1 truncate font-display text-xl text-ink">{title}</h1>
      {action}
    </header>
  );
}

export function ScreenShell({
  title,
  children,
  toolbar,
  action,
  bleed,
}: {
  title: string;
  children: ReactNode;
  toolbar?: ReactNode;
  action?: ReactNode;
  bleed?: boolean;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-canvas">
      <ScreenHeader title={title} action={action} />
      {toolbar ? <div className="border-b border-line px-4 py-3">{toolbar}</div> : null}
      <div className={cn("scroll min-h-0 flex-1", bleed ? "" : "px-4 py-4")}>{children}</div>
    </div>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-dashed border-line-strong bg-surface px-4 py-8 text-center">
      <p className="font-display text-lg text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}

export function ListRow({
  title,
  meta,
  icon,
  badge,
  onClick,
}: {
  title: string;
  meta?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="press flex w-full items-center gap-3 rounded-card border border-line bg-surface px-3 py-3 text-left"
    >
      {icon ? (
        <span className="flex size-11 shrink-0 items-center justify-center rounded-control bg-primary-soft text-primary">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-ink">{title}</span>
        {meta ? <span className="mt-0.5 block text-sm text-muted">{meta}</span> : null}
      </span>
      {badge}
      <ChevronRight className="size-4 shrink-0 text-faint" />
    </button>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-xs leading-relaxed text-muted">{children}</p>;
}
