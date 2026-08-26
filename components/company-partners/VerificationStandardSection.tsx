import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const questions = [
  {
    question: "Who are the parties?",
    standard: "Exact approved Zoiko entity/scope and verified external organization.",
  },
  {
    question: "What relationship?",
    standard: "Controlled relationship type — no vague \u201cstrategic partner.\u201d",
  },
  {
    question: "What scope?",
    standard: "Capability, service, product, geography or program scope and exclusions.",
  },
  { question: "What status?", standard: "Public Active / Ending / Ended / Restricted only." },
  { question: "When?", standard: "Effective and last-verified dates." },
  {
    question: "What evidence?",
    standard: "Current source/confirmation held; public link only when approved.",
  },
  {
    question: "What rights?",
    standard: "Name, logo, representation and resale rights separately approved.",
  },
  {
    question: "What limitations?",
    standard: "Explicit non-inference and relationship-specific exclusions.",
  },
  {
    question: "Who owns it?",
    standard: "Internal accountable owner; public contact route, not personal details.",
  },
  {
    question: "What other authority applies?",
    standard: "Integration, Coverage, Trust or Contract links where needed.",
  },
];

export default function VerificationStandardSection() {
  return (
    <section className="bg-[#EEF2FF] py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <div className="flex justify-center">
            <Eyebrow>Relationship verification standard</Eyebrow>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Ten questions every public relationship must answer
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#EEF2FF]">
              <tr>
                <th className="w-[300px] px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Verification question
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase leading-4 text-brand-dark">
                  Minimum standard
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map((item) => (
                <tr key={item.question} className="border-t border-slate-200">
                  <td className="px-4 py-3 align-top text-xs leading-5 text-brand-dark">
                    {item.question}
                  </td>
                  <td className="px-4 py-3 align-top text-xs font-bold leading-5 text-brand">
                    {item.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {questions.map((item, index) => (
            <Reveal
              key={item.question}
              delay={index * 30}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                {item.question}
              </p>
              <p className="mt-1.5 text-sm font-bold leading-5 text-brand">{item.standard}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
