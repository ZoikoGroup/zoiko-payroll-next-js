import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CareersCTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-[1096px] overflow-hidden rounded-3xl bg-linear-to-br from-sky-950 via-sky-900 to-sky-600 px-6 py-16 text-center sm:px-10">
            <h2 className="text-3xl font-extrabold text-white whitespace-nowrap sm:text-4xl">
              A payroll career with real stakes starts here
            </h2>
            <div className="mt-5 text-center justify-center text-[#B7CBDA] text-base font-normal font-['Inter'] leading-7 whitespace-nowrap">
              Current, verified roles only — no placeholders, no pipeline listings.
            </div>
            <div className="mt-8">
              <Link
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-sky-950 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore open roles
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}