import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800">
      <Reveal className="mx-auto flex max-w-[1002px] flex-col items-center px-6 py-20 md:px-14">
        <div className="flex w-full max-w-[1320px] flex-col items-center gap-3.5">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="h-3.5 w-1.5 rounded-xs bg-blue-300" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-300">
              Ready to go further?
            </span>
          </div>
          <h2 className="max-w-[640px] text-center text-3xl font-extrabold leading-10 text-white">
            Keep learning, live or on your own time.
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-3.5 pt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Join the Waitlist
              </span>
            </Link>
            <Link
              href="/help-center"
              className="flex items-center justify-center rounded-lg px-6 py-3 outline outline-1 outline-offset-[-1px] outline-white/30 transition-colors duration-200 hover:bg-white/10"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Contact Support
              </span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
