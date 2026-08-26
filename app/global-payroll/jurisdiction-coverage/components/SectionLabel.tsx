export default function SectionLabel({
  color,
  slash,
  children,
}: {
  color?: string;
  slash?: boolean;
  children: React.ReactNode;
}) {
  const barColor = color === "light" ? "bg-blue-400" : "bg-blue-500";
  const textColor = color === "light" ? "text-[#9FD1F0]" : "text-sky-700";

  return (
    <div className={`relative h-5 whitespace-nowrap ${slash ? "w-56" : "w-auto"}`}>
      {!slash && (
        <div
          className={`absolute left-[-1.48px] top-[2.37px] h-3.5 w-1.5 rounded-xs ${barColor}`}
        />
      )}
      <div
        className={`absolute left-[2px] top-[-1px] h-5 w-52 text-center text-xs font-bold uppercase leading-5 tracking-wide ${textColor}`}
      >
        {slash && <span className="mr-1 font-black">/</span>}
        {children}
      </div>
    </div>
  );
}
