import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
};

/**
 * Stacked section heading: an oversized light-weight title with the qualifying
 * sentence directly beneath it, both left-aligned.
 *
 * From `xl` up every title holds a single line — the type is pinned to 2rem there
 * so even the longest heading on the page clears the container. Below that the
 * lines are too long for the viewport, so the title wraps normally.
 */
export default function SectionHeading({
  title,
  description,
  tone = "dark",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div>
      <h2
        className={`text-3xl font-normal leading-tight sm:text-4xl xl:whitespace-nowrap xl:text-[2rem] ${
          isLight ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-4xl text-base leading-6 ${
            isLight ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
