import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  /**
   * Set on headings that sit inside a half-width column, where one line cannot
   * fit at a readable size. Full-width headings hold a single line from `xl` up.
   */
  wrap?: boolean;
  /** Full container width, wrapping freely — for a long title that reads as two lines. */
  wide?: boolean;
  /** Extra classes for the description — used where a long line must not wrap. */
  descriptionClassName?: string;
};

/** Eyebrow, heading and optional qualifying sentence — stacked and left-aligned. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  wrap = false,
  wide = false,
  descriptionClassName = "max-w-2xl",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const lineClasses = wide ? "" : wrap ? "max-w-2xl" : "xl:whitespace-nowrap xl:text-[2rem]";

  return (
    <div>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-2.5 text-2xl font-extrabold leading-9 sm:text-3xl ${
          isLight ? "text-white" : "text-slate-900"
        } ${lineClasses}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-2.5 text-base leading-6 ${
            isLight ? "text-slate-300" : "text-gray-700"
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
