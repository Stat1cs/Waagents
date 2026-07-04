"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Variant = "hero" | "cta" | "pricing" | "demo";

const variantOpacity: Record<Variant, { gold: string; forest: string }> = {
  hero: {
    gold: "opacity-[0.05] dark:opacity-[0.07]",
    forest: "opacity-[0.03] dark:opacity-[0.05]",
  },
  cta: {
    gold: "opacity-[0.025] dark:opacity-[0.035]",
    forest: "opacity-[0.02] dark:opacity-[0.03]",
  },
  pricing: {
    gold: "opacity-[0.02] dark:opacity-[0.03]",
    forest: "opacity-[0.015] dark:opacity-[0.025]",
  },
  demo: {
    gold: "opacity-[0.035] dark:opacity-[0.045]",
    forest: "opacity-[0.025] dark:opacity-[0.035]",
  },
};

/** 8-fold rosette center + surrounding octagon ring — geometric, not dot/grid. */
function RosetteOctagonPattern({
  className,
  stroke = "#C5A059",
  strokeWidth = "0.55",
}: {
  className?: string;
  stroke?: string;
  strokeWidth?: string | number;
}) {
  const cx = 40;
  const cy = 40;
  const r = 14;
  const petals = 8;
  const petalPaths: string[] = [];

  for (let i = 0; i < petals; i++) {
    const angle = (i * Math.PI * 2) / petals - Math.PI / 2;
    const x1 = cx + Math.cos(angle) * r * 0.35;
    const y1 = cy + Math.sin(angle) * r * 0.35;
    const x2 = cx + Math.cos(angle) * r;
    const y2 = cy + Math.sin(angle) * r;
    const x3 = cx + Math.cos(angle + Math.PI / petals) * r;
    const y3 = cy + Math.sin(angle + Math.PI / petals) * r;
    petalPaths.push(`M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3} Q ${cx} ${cy} ${x1} ${y1}`);
  }

  const octagonR = 28;
  const octPoints = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI * 2) / 8 - Math.PI / 8;
    return `${cx + Math.cos(a) * octagonR},${cy + Math.sin(a) * octagonR}`;
  }).join(" ");

  return (
    <g className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth}>
      {petalPaths.map((d, i) => (
        <path key={`petal-${i}`} d={d} />
      ))}
      <circle cx={cx} cy={cy} r="2.5" fill={stroke} fillOpacity="0.35" stroke="none" />
      <polygon points={octPoints} strokeOpacity="0.7" />
      <circle cx={cx} cy={cy} r={octagonR * 0.55} strokeOpacity="0.4" />
    </g>
  );
}

function CornerRosette({
  className,
  stroke,
  mirror,
}: {
  className?: string;
  stroke: string;
  mirror?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 80"
      className={cn("h-32 w-32 sm:h-44 sm:w-44", mirror && "scale-x-[-1]", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <RosetteOctagonPattern stroke={stroke} strokeWidth="0.75" />
    </svg>
  );
}

export function IslamicPatternBackground({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { dir } = useLanguage();
  const op = variantOpacity[variant];
  const mirror = dir === "rtl";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Brand gradient washes */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "hero" &&
            "bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(210,157,61,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(210,157,61,0.1),transparent_55%)]",
          variant === "demo" &&
            "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(210,157,61,0.12),transparent_60%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(27,77,62,0.1),transparent_55%)]",
          variant === "cta" &&
            "bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(210,157,61,0.1),transparent_65%),radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(27,77,62,0.12),transparent_60%)]",
          variant === "pricing" &&
            "bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(27,77,62,0.1),transparent_55%),radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(210,157,61,0.08),transparent_50%)]",
        )}
      />

      {/* Corner accent rosettes — visible geometric anchors */}
      <CornerRosette
        stroke="#C5A059"
        className={cn(
          "absolute -end-6 -top-6",
          variant === "hero" ? "opacity-35 dark:opacity-45" : "opacity-20 dark:opacity-28",
          variant === "demo" && "opacity-28 dark:opacity-36",
        )}
        mirror={mirror}
      />
      <CornerRosette
        stroke="#1B4D3E"
        className={cn(
          "absolute -bottom-8 -start-8",
          variant === "hero" ? "opacity-28 dark:opacity-38" : "opacity-15 dark:opacity-22",
          variant === "demo" && "opacity-22 dark:opacity-30",
        )}
        mirror={!mirror}
      />
      {variant === "hero" && (
        <CornerRosette
          stroke="#1B4D3E"
          className="absolute end-1/4 top-1/3 hidden opacity-20 lg:block"
          mirror={mirror}
        />
      )}

      {/* Full-field tessellation */}
      <svg
        className={cn("h-full w-full", mirror && "scale-x-[-1]")}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={`wa-agents-rosette-gold-${variant}`}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <RosetteOctagonPattern stroke="#C5A059" className={op.gold} />
          </pattern>
          <pattern
            id={`wa-agents-rosette-green-${variant}`}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(40, 40)"
          >
            <RosetteOctagonPattern stroke="#1B4D3E" className={op.forest} />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#wa-agents-rosette-gold-${variant})`} />
        <rect width="100%" height="100%" fill={`url(#wa-agents-rosette-green-${variant})`} />
      </svg>
    </div>
  );
}
