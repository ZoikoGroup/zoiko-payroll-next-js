type RadialItem = {
  label: string;
  sublabel?: string;
  dotClassName?: string;
};

type RadialDiagramProps = {
  centerLabel: React.ReactNode;
  items: RadialItem[];
  radius?: number;
  size?: number;
  className?: string;
  /** "dot" (default): small filled dot per item. "circle": larger outlined circle, label above/below. */
  itemVariant?: "dot" | "circle";
  /** Renders the center circle's border as a 2-stop gradient instead of a solid brand border. */
  centerGradient?: boolean;
};

/** Center label connected by lines to evenly spaced items around a circle. */
export default function RadialDiagram({
  centerLabel,
  items,
  radius = 110,
  size = 300,
  className = "",
  itemVariant = "dot",
  centerGradient = false,
}: RadialDiagramProps) {
  const center = size / 2;

  const positions = items.map((item, index) => {
    const angle = (index / items.length) * 2 * Math.PI - Math.PI / 2;
    return {
      ...item,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      isTopHalf: Math.sin(angle) < -0.05,
    };
  });

  return (
    <div className={`relative mx-auto ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute inset-0" width={size} height={size} aria-hidden="true">
        {positions.map((pos, index) => (
          <line key={index} x1={center} y1={center} x2={pos.x} y2={pos.y} stroke="#DCE6EC" strokeWidth={1} />
        ))}
      </svg>

      {centerLabel ? (
        centerGradient ? (
          <div
            className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full p-[3.36px] shadow-sm"
            style={{ left: center, top: center, backgroundImage: "linear-gradient(135deg, #4FA9DE, #082F49)" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-3 text-center text-xs font-semibold leading-snug text-brand-dark">
              {centerLabel}
            </div>
          </div>
        ) : (
          <div
            className="absolute flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-white p-3 text-center text-xs font-semibold leading-snug text-brand-dark shadow-sm"
            style={{ left: center, top: center }}
          >
            {centerLabel}
          </div>
        )
      ) : (
        <span
          className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-dark"
          style={{ left: center, top: center }}
        />
      )}

      {positions.map((pos) => (
        <div
          key={pos.label}
          className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 ${
            itemVariant === "circle" ? (pos.isTopHalf ? "flex-col-reverse" : "flex-col") : "flex-col"
          }`}
          style={{ left: pos.x, top: pos.y }}
        >
          {itemVariant === "circle" ? (
            <span className="block h-14 w-14 shrink-0 rounded-full border border-slate-200 bg-white" />
          ) : (
            <span className={`block h-3 w-3 rounded-full ${pos.dotClassName ?? "bg-brand"}`} />
          )}
          <span className="whitespace-nowrap text-xs font-medium text-slate-600">{pos.label}</span>
          {pos.sublabel && <span className="whitespace-nowrap text-[11px] text-slate-400">{pos.sublabel}</span>}
        </div>
      ))}
    </div>
  );
}
