import Reveal from "../ui/Reveal";
import Eyebrow from "../home/Eyebrow";

export default function LeadershipSection() {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal>
          <Eyebrow>Leadership &amp; organizational updates</Eyebrow>
          <h2 className="mt-3.5 text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
            Role-at-publication stays fixed. Current identity lives in Leadership.
          </h2>
          <p className="mt-4 max-w-[600px] text-base leading-7 text-slate-600">
            Appointments publish only after an approved effective date. Quotes are exact approved
            records — never AI-generated or paraphrased and presented as direct speech.
          </p>

          <div className="mt-6 rounded-xl border border-l-4 border-slate-200 border-l-brand bg-white px-6 py-5">
            <p className="text-sm leading-6 text-brand-dark">
              <span className="font-bold">Example:</span> &ldquo;We&apos;re building payroll
              infrastructure that treats local accuracy and global control as the same
              problem,&rdquo; said M. Weber, Chief Product Officer, at the time of publication.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="/images/company-newsroom/leadership.png"
            alt="A leadership team meeting in a boardroom"
            loading="lazy"
            className="h-64 w-full rounded-[20px] object-cover shadow-lg sm:h-80 lg:h-[388px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
