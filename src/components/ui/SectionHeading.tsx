import { cn } from "@/lib/cn";

interface SectionLabelProps {
  index: string;
  label: string;
  align?: "left" | "right";
  dark?: boolean;
  className?: string;
}

/**
 * Blueprint-style section label:
 *   [ 002 ] ——————— SERVICIOS / SCOPE
 */
export function SectionLabel({
  index,
  label,
  align = "left",
  dark = false,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-[family-name:var(--font-mono)] text-[11px] sm:text-xs uppercase tracking-[0.24em]",
        align === "right" ? "justify-end" : "justify-start",
        className
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap",
          dark ? "text-white/60" : "text-neutral-muted"
        )}
      >
        [ {index} ]
      </span>
      <span
        className={cn(
          "h-px flex-1 min-w-8 max-w-24",
          dark ? "bg-white/20" : "bg-neutral-border"
        )}
      />
      <span
        className={cn(
          "whitespace-nowrap",
          dark ? "text-white/60" : "text-neutral-muted"
        )}
      >
        {label}
      </span>
    </div>
  );
}

// Legacy export kept for compatibility
export const SectionHeading = SectionLabel;
