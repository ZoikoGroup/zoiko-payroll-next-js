import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

const fields = [
  { id: "organization-name", label: "Organization name", hint: "Required", type: "text" },
  { id: "organization-website", label: "Organization website", hint: "Required", type: "url" },
  { id: "contact-name", label: "Business contact name", hint: "Required", type: "text" },
  { id: "business-email", label: "Business email", hint: "Required", type: "email" },
  {
    id: "partnership-pathway",
    label: "Partnership pathway",
    hint: "Required",
    type: "select",
    options: ["Technology", "Service delivery", "Ecosystem", "Not sure yet"],
  },
  { id: "proposal", label: "What are you proposing?", hint: "Required", type: "text" },
  { id: "role-title", label: "Role / title", hint: "Optional", type: "text" },
  { id: "capabilities", label: "Relevant capabilities", hint: "Optional", type: "text" },
];

export default function PartnershipInquirySection() {
  return (
    <section id="partnership-inquiry" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <img
              src="/images/company-partners/partnership-inquiry.png"
              alt="A team presenting a partnership proposal in a meeting room"
              loading="lazy"
              className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[380px]"
            />
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Partner with Zoiko Payroll</Eyebrow>
            <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
              Choose the pathway closest to your proposal
            </h2>
            <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
              Technology, service delivery, ecosystem, or not sure — start with a short business
              inquiry. Qualification, due diligence, agreement and enablement are separate steps;
              acceptance and timing are not guaranteed.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.id}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-bold leading-5 text-brand-dark"
                >
                  {field.label}
                </label>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">{field.hint}</p>

                {field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    defaultValue=""
                    className="mt-2 w-full bg-transparent text-sm text-brand-dark focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a pathway
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="mt-2 w-full bg-transparent text-sm text-brand-dark placeholder:text-slate-300 focus:outline-none"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">Never submit:</span> payroll files, employee data,
              bank/tax data, credentials, secrets, customer contracts or confidential architecture
              through this form.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="w-full rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-md shadow-brand/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 sm:w-auto"
            >
              Submit partnership inquiry
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
