import Reveal from "../ui/Reveal";
import Eyebrow from "./Eyebrow";

const tiles = [
  { label: "Payrolls due / completed", value: "24 / 16" },
  { label: "Pending approvals", value: "2" },
  { label: "Exception aging (avg)", value: "1.6 days" },
  { label: "Integration attention", value: "1" },
];

/** Relative bar heights for the last six cycles; the three most recent are highlighted. */
const trend = [
  { month: "Nov", height: 46, recent: false },
  { month: "Dec", height: 40, recent: false },
  { month: "Jan", height: 42, recent: false },
  { month: "Feb", height: 26, recent: true },
  { month: "Mar", height: 20, recent: true },
  { month: "Apr", height: 15, recent: true },
];

const totals = [
  { label: "US-Salaried (local)", value: "$1,842,904 USD" },
  { label: "DE-Standard (local)", value: "€612,110 EUR" },
  { label: "Reporting basis", value: "USD · ECB rate · Apr 09, 09:00 UTC" },
];

export default function RecordsSection() {
  return (
    <section className="border-t border-[#DCE6EC] bg-[#EAF1F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Records, reporting &amp; reconciliation</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-8 break-words text-[#082F49] sm:text-3xl sm:leading-9">
            Every aggregate drills down to a permitted scope
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, index) => (
            <Reveal key={tile.label} delay={(index % 4) * 70}>
              <div className="h-full rounded-xl border border-[#DCE6EC] bg-white px-5 py-5">
                <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
                  {tile.label}
                </p>
                <p className="mt-2 text-xl font-extrabold leading-7 text-[#082F49]">{tile.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-4">
          <div className="rounded-xl border border-[#DCE6EC] bg-white px-5 py-5">
            <p className="font-mono text-[10px] uppercase leading-4 text-[#4E6172]">
              Exception aging trend — last 6 cycles
            </p>
            <div className="mt-6 flex h-32 items-end gap-3">
              {trend.map((bar) => (
                <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    style={{ height: `${bar.height * 2}px` }}
                    className={`w-full rounded-t-md ${
                      bar.recent
                        ? "bg-linear-to-b from-[#5AB0F0] to-[#2563C9]"
                        : "bg-[#DCE6EC]"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-4 text-[#4E6172]">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4">
          <div className="rounded-xl border border-[#DCE6EC] bg-white px-5 py-2">
            {totals.map((total, index) => (
              <div
                key={total.label}
                className={`flex flex-wrap items-center justify-between gap-3 py-3.5 ${
                  index < totals.length - 1 ? "border-b border-[#DCE6EC]" : ""
                }`}
              >
                <span className="text-sm leading-5 text-[#082F49]">{total.label}</span>
                <span className="font-mono text-sm leading-5 text-[#082F49]">{total.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-4">
          <p className="max-w-2xl rounded-r-lg border-l-[3px] border-[#9C7A1F] bg-[#F1EAD8] px-5 py-4 text-sm leading-6 text-[#6E5720]">
            A combined portfolio total is not shown for SG-All Staff — conversion evidence for this
            cycle isn&apos;t available yet. Executive summaries show thresholded operational status
            only, never worker rankings or hidden risk scores.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
