import type { ReactNode } from "react";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43M20.08 3.9A11.3 11.3 0 0 0 12.05.58C5.79.58.7 5.67.7 11.93c0 2 .52 3.95 1.52 5.67L.6 23.5l6.03-1.58a11.3 11.3 0 0 0 5.41 1.38h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.03" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.9-6 5.9-6 .8 0 2.1.2 2.7.3v3.3l-1.4-.1c-2 0-2.7.7-2.7 2.7V12h4l-.7 3.7h-3.3v8.2A12 12 0 1 0 9.1 23.7" />
    </svg>
  );
}

export function Flag({ code, name, className = "h-10 w-10" }: { code: string; name: string; className?: string }) {
  if (!code) {
    const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
    return (
      <span className={`${className} inline-flex shrink-0 items-center justify-center rounded-full bg-champagne font-serif text-base font-bold text-maroon ring-2 ring-white shadow`} aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/flags/${code}.svg`} alt={`${name} flag`} width={40} height={40} loading="lazy" className={`${className} shrink-0 rounded-full object-cover ring-2 ring-white shadow`} />
  );
}

export function FundingBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    "Fully Funded": "bg-maroon text-white",
    "Partially Funded": "bg-gold/20 text-gold-dark ring-1 ring-gold/50",
    "Self-Funded": "bg-champagne text-maroon-dark",
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${styles[type] ?? ""}`}>{type}</span>;
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = true }: { eyebrow: string; title: ReactNode; intro?: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-maroon-dark"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-champagne/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

export function Initials({ name, className = "h-20 w-20 text-2xl" }: { name: string; className?: string }) {
  const parts = name.split(" ");
  const ini = (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  return (
    <span className={`${className} inline-flex items-center justify-center rounded-full bg-linear-to-br from-maroon-light to-maroon-dark font-serif font-semibold text-gold-light ring-2 ring-gold/60 ring-offset-2 ring-offset-white`} aria-hidden="true">
      {ini}
    </span>
  );
}
