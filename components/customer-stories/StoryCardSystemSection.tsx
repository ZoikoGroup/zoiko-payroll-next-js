import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function StoryCardSystemSection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-6 md:px-24">
        {/* Header */}
        <div className="flex max-w-[900px] flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-1.5">
            <span className="text-xs font-bold text-sky-600">/</span>
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
              Story card system
            </span>
          </div>
          <h2 className="w-full text-center text-3xl font-extrabold leading-10 text-sky-950 whitespace-nowrap">
            Comparability first — never a decorative logo wall
          </h2>
        </div>

        {/* Story card variants */}
        <div className="grid w-full max-w-[1116px] grid-cols-1 gap-4 pt-3 md:grid-cols-3">
          {/* Named customer with illustrative metric */}
          <article className="flex w-full flex-col justify-between items-start rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="w-full pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="text-sm font-extrabold leading-6 text-sky-950">
                    Example Organization
                  </h3>
                  <span className="text-xs font-normal leading-5 text-gray-400">
                    Multi-entity · EU &amp; UK
                  </span>
                </div>
                <span className="shrink-0 rounded-[20px] bg-gray-200 px-2.5 py-1 text-xs font-extrabold leading-4 tracking-tight text-gray-600">
                  Named
                </span>
              </div>
            </div>

            <div className="w-full pb-3">
              <div className="flex flex-wrap items-start gap-1.5">
                <span className="rounded-[20px] bg-indigo-50 px-2 pb-1 pt-0.5 text-xs font-semibold leading-4 text-sky-950">
                  Multi-entity
                </span>
                <span className="rounded-[20px] bg-indigo-50 px-2 pb-1 pt-0.5 text-xs font-semibold leading-4 text-sky-950">
                  Implementation
                </span>
              </div>
            </div>

            <div className="w-full pb-3">
              <div className="flex flex-col items-start gap-px rounded-[10px] bg-indigo-50 px-3.5 pb-3 pt-2.5">
                <span className="text-lg font-extrabold leading-8 text-sky-950">
                  Illustrative metric
                </span>
                <span className="text-xs font-normal leading-4 text-gray-400">
                  Shown only with full methodology
                </span>
              </div>
            </div>

            <Link
              href="/resources/customer-stories"
              className="text-xs font-bold leading-5 text-sky-600 transition-colors duration-200 hover:text-sky-800"
            >
              Read customer story →
            </Link>
          </article>

          {/* Anonymized customer with quote */}
          <article className="flex w-full flex-col justify-between items-start rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="w-full pb-3">
              <div className="flex items-start justify-between gap-3">
                {/* Figma: min-w-56, heading has <br/> */}
                <div className="flex min-w-56 flex-col items-start gap-0.5">
                  <h3 className="text-sm font-extrabold leading-6 text-sky-950">
                    Approved anonymized<br />customer
                  </h3>
                  <span className="text-xs font-normal leading-5 text-gray-400">
                    Global payroll · Manufacturing
                  </span>
                </div>
                <span className="shrink-0 rounded-[20px] bg-sky-100 px-2.5 py-1 text-xs font-extrabold leading-4 tracking-tight text-sky-800">
                  Anonymized
                </span>
              </div>
            </div>

            <div className="w-full pb-3">
              <div className="flex flex-wrap items-start gap-1.5">
                <span className="rounded-[20px] bg-indigo-50 px-2 pb-1 pt-0.5 text-xs font-semibold leading-4 text-sky-950">
                  Global payroll
                </span>
                <span className="rounded-[20px] bg-indigo-50 px-2 pb-1 pt-0.5 text-xs font-semibold leading-4 text-sky-950">
                  Reporting
                </span>
              </div>
            </div>

            {/* Figma: quote has <br/> */}
            <div className="w-full pb-3.5">
              <blockquote className="border-l-[3px] border-sky-600 pl-3 text-xs font-normal leading-5 text-sky-950">
                &quot;Illustrative quote fragment — exact approved<br />wording only.&quot;
              </blockquote>
            </div>

            <div className="flex h-7 min-h-5 w-full flex-col justify-end pt-2">
              <Link
                href="/resources/customer-stories"
                className="text-xs font-bold leading-5 text-sky-600 transition-colors duration-200 hover:text-sky-800"
              >
                Read customer story →
              </Link>
            </div>
          </article>

          {/* Review-due customer with suppressed metric */}
          <article className="flex w-full flex-col justify-between items-start rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-slate-200">
            <div className="w-full pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="text-sm font-extrabold leading-6 text-sky-950">
                    Example Organization B
                  </h3>
                  <span className="text-xs font-normal leading-5 text-gray-400">
                    Single jurisdiction
                  </span>
                </div>
                <span className="shrink-0 rounded-[20px] bg-orange-100 px-2.5 py-1 text-xs font-extrabold leading-4 tracking-tight text-yellow-700">
                  Review due
                </span>
              </div>
            </div>

            <div className="w-full pb-3">
              <div className="flex flex-wrap items-start gap-1.5">
                <span className="rounded-[20px] bg-indigo-50 px-2 pb-1 pt-0.5 text-xs font-semibold leading-4 text-sky-950">
                  Payroll operations
                </span>
              </div>
            </div>

            <div className="w-full pb-3">
              <div className="flex flex-col items-start gap-px rounded-[10px] bg-indigo-50 px-3.5 pb-3 pt-2.5">
                <span className="text-lg font-extrabold leading-8 text-sky-950">
                  Metric under review
                </span>
                <span className="text-xs font-normal leading-4 text-gray-400">
                  Temporarily not displayed
                </span>
              </div>
            </div>

            <Link
              href="/resources/customer-stories"
              className="text-xs font-bold leading-5 text-sky-600 transition-colors duration-200 hover:text-sky-800"
            >
              Read customer story →
            </Link>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
