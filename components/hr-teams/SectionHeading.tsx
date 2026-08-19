import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
  /** Set on headings inside a half-width column, where one line cannot fit. */
  wrap?: boolean;
};

/** Eyebrow, heading and optional qualifying sentence — stacked and left-aligned. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  center = false,
  wrap = false,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const lineClasses = wrap ? "max-w-2xl" : "xl:whitespace-nowrap xl:text-[2rem]";

  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow ? (
        <Eyebrow tone={tone} center={center}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-bold leading-9 sm:text-3xl sm:leading-10 ${
          isLight ? "text-white" : "text-sky-950"
        } ${center ? "mx-auto max-w-3xl" : lineClasses}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-2xl text-base leading-6 ${
            isLight ? "text-white/70" : "text-gray-600"
          } ${center ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
