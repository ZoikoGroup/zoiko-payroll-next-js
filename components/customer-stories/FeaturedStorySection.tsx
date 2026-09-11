import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "../ui/Reveal";

const proofCategories = [
  {
    title: "Payroll operations proof",
    description: (
      <>Evidence on running and controlling multi-entity<br />payroll cycles.</>
    ),
    image: "/image 86.png",
    imageAlt: "Payroll operations evidence",
    href: "/payroll-processing",
  },
  {
    title: "Security & controls proof",
    description: (
      <>Evidence on access, auditability and control<br />implementation.</>
    ),
    image: "/image 87.png",
    imageAlt: "Security and controls evidence",
    href: "/security",
  },
  {
    title: "Implementation proof",
    description: "Evidence on rollout planning and go-live readiness.",
    image: "/image 88.png",
    imageAlt: "Implementation evidence",
    href: "/implementation",
  },
];

export default function FeaturedStorySection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-11 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[680px] flex-col items-center gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Featured story
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950">
            No story currently meets the featuring bar
          </h2>
          <p className="w-full max-w-[680px] text-center text-base font-normal leading-7 text-gray-600">
            A story is only featured once it is published, current, fully consented, evidence-
            <br />
            complete and editorially relevant — never because it&apos;s paid or sales-driven. Explore
            <br />
            proof by category while the next eligible story is reviewed.
          </p>
        </div>

        {/* Proof category cards */}
        <div className="grid w-full max-w-[1116px] grid-cols-1 gap-4 md:grid-cols-3">
          {proofCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-gray-50 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 transition-shadow duration-200 hover:shadow-[0px_8px_24px_0px_rgba(10,46,75,0.10)]"
            >
              <div className="relative h-44 w-full bg-gradient-to-br from-slate-200 to-slate-300">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start p-5">
                <h3 className="pb-2 text-base font-bold leading-6 text-sky-950">
                  {category.title}
                </h3>
                <p className="pb-3.5 text-xs font-normal leading-5 text-gray-600">
                  {category.description}
                </p>
                <span className="h-5" />
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
