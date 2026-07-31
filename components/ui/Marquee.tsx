import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Seamless, continuously scrolling row. Renders two copies of the content
 * side by side and animates a -50% translate so the loop has no visible seam.
 * Pauses on hover/focus via CSS (see .marquee-track in globals.css).
 */
export default function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee-track overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max">
        <div className="flex shrink-0 items-center gap-10 pr-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
