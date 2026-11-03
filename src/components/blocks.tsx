import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { site, waLink } from "@/data/site";
import type { QA } from "@/data/study";
import { WhatsAppIcon } from "./ui";

export type Crumb = { name: string; href: string };

export function PageHero({ eyebrow, title, lead, crumbs, children, aside }: { eyebrow: string; title: ReactNode; lead?: ReactNode; crumbs: Crumb[]; children?: ReactNode; aside?: ReactNode }) {
  const all = [{ name: "Home", href: "/" }, ...crumbs];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.href}` })),
  };
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-maroon-deep via-maroon-dark to-maroon text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="grid-pattern pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-20 md:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-champagne/70">
            {all.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {i < all.length - 1 ? <Link href={c.href} className="hover:text-gold-light">{c.name}</Link> : <span aria-current="page" className="text-champagne">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow eyebrow-light mt-8">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
            {lead && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-champagne/85">{lead}</p>}
            {children}
          </div>
          <div className="hidden lg:block">{aside ?? <HeroGlobe />}</div>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs, schema = true }: { faqs: QA[]; schema?: boolean }) {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <div className="space-y-3">
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      {faqs.map((f, i) => (
        <details key={f.q} className="faq group rounded-2xl border border-line bg-white px-6 open:shadow-md" open={i === 0}>
          <summary className="flex items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-maroon-dark">
            {f.q}
            <span className="chev flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-champagne text-xl leading-none text-maroon">+</span>
          </summary>
          <p className="pb-6 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, text, message }: { title: string; text: string; message: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-maroon px-8 py-12 text-white md:px-14 md:py-14">
        <div className="grid-pattern pointer-events-none absolute inset-0" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 text-champagne/85">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={waLink(message)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
              <WhatsAppIcon /> WhatsApp us
            </a>
            <a href={`tel:${site.phoneE164}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold hover:border-gold-light hover:text-gold-light">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="rounded-2xl border border-gold/40 bg-champagne/40 px-5 py-4 text-sm leading-relaxed text-maroon-dark">{children}</p>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 leading-relaxed text-ink/80 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-maroon-dark [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-maroon-dark [&_li]:ml-5 [&_li]:list-disc [&_a]:font-medium [&_a]:text-maroon [&_a]:underline">{children}</div>;
}

export function HeroGlobe() {
  return (
    <div className="relative h-64 w-64 xl:h-72 xl:w-72" aria-hidden="true">
      <div className="absolute inset-4 rounded-full bg-gold/15 blur-2xl" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-icon-light.svg" alt="" width={288} height={288} className="relative h-full w-full drop-shadow-2xl" />
    </div>
  );
}

export function HeroFlag({ code, name, label }: { code: string; name: string; label: string }) {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center xl:h-72 xl:w-72" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-gold/30" />
      <div className="absolute inset-5 rounded-full border-2 border-dashed border-gold/40" />
      <div className="absolute inset-6 rounded-full bg-gold/10 blur-2xl" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/flags/${code}.svg`} alt="" width={176} height={176} className="relative h-44 w-44 rounded-full object-cover shadow-2xl ring-4 ring-gold/80 xl:h-48 xl:w-48" />
      <span className="absolute -bottom-2 rounded-full border border-white/20 bg-maroon-deep/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-icon-light.svg" alt="" width={72} height={72} className="absolute -right-2 top-2 h-16 w-16 drop-shadow-xl" />
      <span className="sr-only">{name}</span>
    </div>
  );
}
