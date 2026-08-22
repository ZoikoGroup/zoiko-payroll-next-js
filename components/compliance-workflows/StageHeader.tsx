import type { ReactNode } from "react";

type StageHeaderProps = {
  /** Number only, e.g. "09" — rendered as "Stage 09 — ". */
  stage: string;
  /** Blue half of the stage marker, e.g. "Audit & security". */
  label: string;
  heading: ReactNode;
  children?: ReactNode;
  center?: boolean;
  tone?: "dark" | "light";
};

/** Stage marker + heading + intro, opening every stage on the compliance workflows page. */
export default function StageHeader({
  stage,
  label,
  heading,
  children,
  center = false,
  tone = "dark",
}: StageHeaderProps) {
  const isLight = tone === "light";

  return (
    <div className={center ? "text-center" : ""}>
      <p className={`flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
        <span
          className={`size-2 shrink-0 rounded-sm ring-4 ring-[#2F5FE0]/15 ${
            isLight ? "bg-blue-400" : "bg-blue-600"
          }`}
          aria-hidden="true"
        />
        <span className="font-mono text-xs uppercase tracking-wide">
          <span className={isLight ? "text-stone-300" : "text-gray-400"}>Stage {stage}</span>
          <span className="text-gray-400"> — </span>
          <span className={isLight ? "text-blue-400" : "text-blue-600"}>{label}</span>
        </span>
      </p>

      <h2
        className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl sm:leading-10 ${
          center ? "mx-auto max-w-4xl" : "max-w-3xl"
        } ${isLight ? "text-white" : "text-gray-900"}`}
      >
        {heading}
      </h2>

      {children ? (
        <div
          className={`mt-3.5 text-base leading-6 ${center ? "mx-auto max-w-3xl" : "max-w-3xl"} ${
            isLight ? "text-neutral-400" : "text-gray-500"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
