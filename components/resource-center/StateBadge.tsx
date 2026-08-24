type StateBadgeProps = {
  state: "Current" | "Review due" | "Superseded";
  /** "dark" is used on navy surfaces such as the hero Resource Finder. */
  tone?: "light" | "dark";
};

const lightStyles: Record<StateBadgeProps["state"], string> = {
  Current: "bg-emerald-50 text-emerald-700",
  "Review due": "bg-amber-50 text-amber-700",
  Superseded: "bg-rose-50 text-rose-700",
};

const darkStyles: Record<StateBadgeProps["state"], string> = {
  Current: "bg-emerald-300/20 text-green-300",
  "Review due": "bg-orange-300/20 text-orange-200",
  Superseded: "bg-rose-300/20 text-rose-200",
};

/** Freshness state shown on every resource card — never a score, always an explainable label. */
export default function StateBadge({ state, tone = "light" }: StateBadgeProps) {
  const styles = tone === "dark" ? darkStyles : lightStyles;

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold leading-4 ${styles[state]}`}
    >
      {state}
    </span>
  );
}
