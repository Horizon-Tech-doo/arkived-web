import { cn } from "@/lib/utils";

// The Arkived mark: a database cylinder, matching the desktop app icon.
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ark-grad" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9642" />
          <stop offset="1" stopColor="#E85C16" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#ark-grad)" />
      <g fill="#fff">
        <ellipse cx="24" cy="17" rx="11" ry="3.8" fillOpacity="0.96" />
        <path d="M13 17v14c0 2.1 4.9 3.8 11 3.8s11-1.7 11-3.8V17c0 2.1-4.9 3.8-11 3.8S13 19.1 13 17Z" />
        <path
          d="M13 24c0 2.1 4.9 3.8 11 3.8S35 26.1 35 24"
          stroke="#E85C16"
          strokeOpacity="0.5"
          strokeWidth="1.1"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-2.5 font-semibold", className)}>
      <LogoMark size={26} />
      <span className="text-[1.05rem] tracking-tight">Arkived</span>
    </a>
  );
}
