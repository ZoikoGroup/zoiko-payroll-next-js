import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  /**
   * Set on headings that sit inside a half-width column, where a single line
   * cannot fit at a readable size. Full-width headings hold one line from `xl` up.
   */
  wrap?: boolean;
};

/** Eyebrow, heading and optional qualifying sentence — stacked and left-aligned. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  wrap = false,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const lineClasses = wrap ? "max-w-3xl" : "xl:whitespace-nowrap xl:text-[2rem]";

  return (
    <div>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-2.5 text-2xl font-extrabold leading-9 sm:text-3xl ${
          isLight ? "text-white" : "text-sky-950"
        } ${lineClasses}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-2.5 max-w-2xl text-base leading-6 ${
            isLight ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
