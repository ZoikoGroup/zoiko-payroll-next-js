import Image from "next/image";

const tags = ["Canonical name", "Type + parent/region", "Approved aliases only", "Verified codes only"];

export default function IdentityAmbiguity() {
  return (
    <div className="w-full px-40 py-16 bg-white">
      <div className="w-full flex items-center justify-center gap-14">
        {/* Left content */}
        <div className="w-[541px] flex flex-col items-start gap-3.5">
          <div className="w-full h-5 relative">
            <div className="w-4 h-0.5 absolute bg-[#2F6FED] mt-[7.90px]" />
            <div className="absolute left-[24px] top-[-1.40px] text-[#2F6FED] text-xs font-bold uppercase leading-5 tracking-wide">
              Jurisdiction identity + ambiguity
            </div>
          </div>
          <div className="text-slate-900 text-2xl font-extrabold leading-10">
            A governed identity resolver — not a
            <br />
            country picker.
          </div>
          <div className="w-[517px] text-gray-700 text-sm leading-5">
            Every guide resolves to one canonical JurisdictionIdentity. Aliases can
            <br />
            match a search, but never create another identity, and ambiguity is never
            <br />
            auto-resolved.
          </div>

          {/* Tags */}
          <div className="w-full flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <div key={tag} className="h-6 px-2 py-[3px] bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center">
                <span className="text-slate-500 text-xs font-mono leading-4">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image + floating card */}
        <div className="w-[500px] h-80 relative">
          <div className="w-[500px] h-80 rounded-[20px] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            <Image src="/aa.png" alt="Identity resolver" width={500} height={320} className="w-full h-80 object-cover rounded-[20px]" />
          </div>
          {/* Floating disambiguation card */}
          <div className="absolute left-[-62px] top-[196px] w-56 bg-white rounded-2xl p-4 flex flex-col shadow-[0px_20px_50px_-18px_rgba(8,19,43,0.30)]">
            <div className="pb-2.5 text-slate-900 text-xs font-bold leading-5">
              Which jurisdiction did you
              <br />
              mean?
            </div>
            <div className="py-1.5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-slate-900 text-xs leading-4">Georgia </span>
                <span className="px-2 py-[1.5px] bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-500 text-xs font-mono leading-4">
                  Country
                </span>
              </div>
              <span className="text-slate-900 text-[10px] leading-4">→</span>
            </div>
            <div className="py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-slate-900 text-xs leading-4">Georgia, US </span>
                <span className="px-2 py-[1.5px] bg-slate-50 rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-500 text-xs font-mono leading-4">
                  State
                </span>
              </div>
              <span className="text-slate-900 text-[10px] leading-4">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
