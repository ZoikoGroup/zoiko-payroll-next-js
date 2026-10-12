import React from "react";
import Image from "next/image";
import { Band, Callout, Eyebrow } from "./Primitives";

interface SplitSectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  callout?: React.ReactNode;
  image: { src: string; alt: string };
  tinted?: boolean;
}

/**
 * Text column beside a photo — the shape shared by the roles, measures and
 * assistance sections. The photo drops below the text on small screens.
 */
export default function SplitSection({
  id,
  eyebrow,
  heading,
  body,
  callout,
  image,
  tinted = false,
}: SplitSectionProps) {
  return (
    <Band id={id} tinted={tinted} labelledBy={`${id}-heading`}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>

          <h2
            id={`${id}-heading`}
            className="mt-5 text-2xl font-extrabold leading-tight text-sky-950 sm:text-3xl"
          >
            {heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">{body}</p>

          {callout ? <div className="mt-8">{callout}</div> : null}
        </div>

        <div className="overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
          <Image
            src={image.src}
            alt={image.alt}
            width={508}
            height={380}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Band>
  );
}

export { Callout };
