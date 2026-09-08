import React from "react";
import Image from "next/image";
import { Eyebrow, ActionButton } from "./Primitives";

const notes = [
  {
    title: "Practical, utility-first",
    description:
      "Call, Email, Directions and Copy address complete the task with no sales gate.",
  },
  {
    title: "Commercial, kept subordinate",
    description:
      "Book a Demo remains the approved global CTA — never routed as office-specific sales.",
  },
] as const;

export default function ContactActionsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl shadow-[0px_20px_50px_0px_rgba(10,40,65,0.15)]">
            <Image
              src="/images/offices/contact-actions.webp"
              alt="A verified contact channel in use"
              width={461}
              height={380}
              className="h-auto w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0px_8px_20px_0px_rgba(10,30,50,0.18)]">
              <span className="h-2 w-2 rounded-full bg-[#2E9E5B]" />
              <span className="text-xs font-bold text-[#0F172A]">
                Verified channel only
              </span>
            </span>
          </div>

          <div className="flex flex-col items-start gap-3.5">
            <Eyebrow>Contact &amp; utility action system</Eyebrow>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B192C] sm:text-3xl md:text-4xl">
              Practical actions, kept separate from commercial ones
            </h2>
            <p className="text-sm leading-7 text-[#64748B] sm:text-base">
              Every action here resolves only from verified, approved data —
              unsupported actions are omitted, never shown as a disabled
              placeholder.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <ActionButton variant="primary">Call</ActionButton>
              <ActionButton variant="primary">Email</ActionButton>
              <ActionButton variant="primary">Copy address</ActionButton>
              <ActionButton variant="primary">Directions</ActionButton>
              <ActionButton variant="disabled">Website unavailable</ActionButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {notes.map((note) => (
            <div
              key={note.title}
              className="rounded-xl border border-[#E2E8F0] bg-white p-5"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0A78C3]" />
                {note.title}
              </h3>
              <p className="pl-3.5 pt-1 text-sm leading-6 text-[#64748B]">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
