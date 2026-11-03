import { ClipboardCheck, FileText, MonitorCheck, Plane, Rocket, Search, Send, Ticket } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./ui";

export type Step = { title: string; sub: string; icon: ReactNode };

export const studySteps: Step[] = [
  { title: "Speak to", sub: "Sky Bridge", icon: <WhatsAppIcon className="h-9 w-9" /> },
  { title: "Send", sub: "Documents", icon: <FileText className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Review", sub: "Options", icon: <MonitorCheck className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Apply with", sub: "Confidence", icon: <Rocket className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Meet", sub: "Conditions", icon: <ClipboardCheck className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Fly to", sub: "University", icon: <Plane className="h-9 w-9" strokeWidth={1.5} /> },
];

export const visaSteps: Step[] = [
  { title: "Speak to", sub: "Sky Bridge", icon: <WhatsAppIcon className="h-9 w-9" /> },
  { title: "Share", sub: "Documents", icon: <FileText className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "We Prepare", sub: "& Submit", icon: <Send className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Get Visa", sub: "& Fly", icon: <Plane className="h-9 w-9" strokeWidth={1.5} /> },
];

export const ticketSteps: Step[] = [
  { title: "Share Your", sub: "Route & Dates", icon: <WhatsAppIcon className="h-9 w-9" /> },
  { title: "Compare", sub: "Fares", icon: <Search className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Confirm", sub: "& Pay", icon: <Ticket className="h-9 w-9" strokeWidth={1.5} /> },
  { title: "Receive", sub: "E-Ticket", icon: <Plane className="h-9 w-9" strokeWidth={1.5} /> },
];

function Circle({ n, total }: { n: number; total: number }) {
  const pct = Math.round((n / total) * 100);
  return (
    <div className="rounded-full p-[5px] shadow-lg shadow-maroon/15" style={{ background: `conic-gradient(var(--color-gold) 0 ${pct}%, var(--color-maroon) ${pct}% 100%)` }}>
      <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white font-serif text-4xl font-bold text-maroon">{n}</div>
    </div>
  );
}

function StepBlock({ s, n, total }: { s: Step; n: number; total: number }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute bottom-full mb-3 text-ink/70">{s.icon}</div>
      <Circle n={n} total={total} />
      <p className="absolute top-full mt-3 w-36 text-center leading-tight">
        <span className="block text-lg font-semibold text-ink/85">{s.title}</span>
        <span className="block text-base text-muted">{s.sub}</span>
      </p>
    </div>
  );
}

export default function ProcessFlow({ steps = studySteps }: { steps?: Step[] }) {
  const total = steps.length;
  // Desktop: wave across one row
  const dx = 1200 / total;
  const pts = steps.map((_, i) => ({ x: dx / 2 + i * dx, y: i % 2 === 0 ? 150 : 230 }));
  const wave = pts.reduce((d, p, i) => (i === 0 ? `M${p.x} ${p.y}` : `${d} C${pts[i - 1].x + dx / 2} ${pts[i - 1].y} ${p.x - dx / 2} ${p.y} ${p.x} ${p.y}`), "");

  // Mobile: two-column snake (1 2 / 4 3 / 5 6)
  const ROW = 210, TOP = 100;
  const cols = [25, 75];
  const mpts = steps.map((_, i) => {
    const row = Math.floor(i / 2);
    const leftToRight = row % 2 === 0;
    const col = leftToRight ? i % 2 : 1 - (i % 2);
    return { x: cols[col], y: TOP + row * ROW };
  });
  const snake = mpts.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const a = mpts[i - 1];
    if (a.y === p.y) return `${d} C${a.x} ${a.y - 55} ${p.x} ${p.y - 55} ${p.x} ${p.y}`;
    const out = a.x > 50 ? 98 : 2;
    return `${d} C${out} ${a.y} ${out} ${p.y} ${p.x} ${p.y}`;
  }, "");
  const mH = TOP + (Math.ceil(total / 2) - 1) * ROW + 110;

  return (
    <>
      <div className="flow relative mx-auto hidden h-[400px] max-w-6xl lg:block" aria-hidden="false">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
          <path d={wave} className="flow-path" fill="none" stroke="var(--color-maroon)" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="contents">
          {steps.map((s, i) => (
            <li key={i} className="flow-step absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(pts[i].x / 1200) * 100}%`, top: pts[i].y }}>
              <StepBlock s={s} n={i + 1} total={total} />
            </li>
          ))}
        </ol>
      </div>

      <div className="flow relative mx-auto max-w-md lg:hidden" style={{ height: mH }}>
        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 100 ${mH}`} preserveAspectRatio="none" aria-hidden="true">
          <path d={snake} className="flow-path" fill="none" stroke="var(--color-maroon)" strokeWidth="3.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="contents">
          {steps.map((s, i) => (
            <li key={i} className="flow-step absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${mpts[i].x}%`, top: mpts[i].y }}>
              <StepBlock s={s} n={i + 1} total={total} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
