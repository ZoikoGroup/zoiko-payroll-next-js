import Image from "next/image";
import Reveal from "../ui/Reveal";

const formFields = [
  { label: "Full name", hint: "Required", required: true },
  { label: "Work email", hint: "Required", required: true },
  { label: "Company", hint: "Required", required: true },
  { label: "Role", hint: "Optional", required: false },
  {
    label: "Accessibility needs",
    hint: "Optional — shown only when needed",
    required: false,
  },
  {
    label: "Marketing updates",
    hint: "Optional — separate from registration",
    required: false,
  },
];

export default function RegistrationSection() {
  return (
    <section className="w-full py-20">
      <Reveal className="mx-auto flex max-w-[1320px] flex-col gap-8 px-6 md:px-14">
        {/* Top row: image + copy */}
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <div className="flex-1 overflow-hidden rounded-[20px] shadow-[0px_12px_34px_0px_rgba(10,46,75,0.12)]">
            <Image
              src="/Background (39).png"
              alt="Registration overview"
              width={569}
              height={384}
              className="h-96 w-full object-cover"
            />
          </div>

          <div className="flex-1 flex-col items-start gap-4">
            <div className="flex h-5 w-full items-center gap-3">
              <span className="h-3.5 w-1.5 rounded-xs bg-sky-600" />
              <span className="text-xs font-bold uppercase leading-5 tracking-wider text-sky-600">
                Registration
              </span>
            </div>
            <h2 className="pt-1 text-3xl font-extrabold leading-10 text-sky-950">
              Minimum data — clear purpose —
              <br className="hidden md:block" /> separate consent
            </h2>
            <p className="max-w-[600px] pt-1 text-base font-normal leading-7 text-gray-600">
              Operational session communication is always separate from
              marketing consent. No payroll or confidential data is ever
              requested here.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="mx-auto flex w-full max-w-[700px] flex-col items-stretch gap-4"
        >
          {formFields.map((field) => (
            <label
              key={field.label}
              className="flex flex-col items-start gap-px rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] outline-slate-200"
            >
              <span className="text-xs font-bold leading-5 text-sky-950">
                {field.label}
              </span>
              <span className="text-xs font-normal leading-4 text-gray-400">
                {field.hint}
              </span>
              <input
                type={field.label === "Work email" ? "email" : "text"}
                required={field.required}
                className="mt-1 w-full bg-transparent text-sm font-normal text-neutral-700 focus:outline-none"
                aria-label={field.label}
              />
            </label>
          ))}

          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="flex w-44 items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,46,75,0.06)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-sm font-bold leading-6 text-white">
                Register
              </span>
            </button>
          </div>

          <p className="text-center text-xs font-normal leading-5 text-gray-400">
            States: Validation error · Submitting · Registered · Waitlisted ·
            Closed · Capacity changed — each shown clearly, never silently.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
