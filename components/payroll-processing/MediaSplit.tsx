import type { ReactNode } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";
import MediaCard from "./MediaCard";

type MediaSplitProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  media: { src: string; alt: string; label: string; value: string };
  /** Puts the copy on the left and the photo on the right. */
  reversed?: boolean;
};

/** Two-column intro — photo on one side, eyebrow/heading/copy on the other. */
export default function MediaSplit({
  eyebrow,
  title,
  description,
  media,
  reversed = false,
}: MediaSplitProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-11">
      <Reveal className={reversed ? "lg:order-2" : ""}>
        <MediaCard {...media} />
      </Reveal>

      <Reveal delay={100} className={reversed ? "lg:order-1" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3.5 text-2xl font-extrabold leading-8 text-slate-900">{title}</h2>
        {description ? (
          <p className="mt-3.5 text-sm leading-5 text-gray-700">{description}</p>
        ) : null}
      </Reveal>
    </div>
  );
}
