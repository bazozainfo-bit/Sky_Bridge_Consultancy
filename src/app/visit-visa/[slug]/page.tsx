import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Lightbulb } from "lucide-react";
import { CtaBand, FaqList, HeroFlag, Note, PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import ProcessFlow, { visaSteps } from "@/components/ProcessFlow";
import { Flag, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { visaBySlug, visaPages } from "@/data/visa";
import { waLink } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return visaPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = visaBySlug((await params).slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.metaTitle} | Sky Bridge` },
    description: p.metaDesc,
    alternates: { canonical: `/visit-visa/${p.slug}/` },
    openGraph: { title: p.metaTitle, description: p.metaDesc, url: `/visit-visa/${p.slug}/` },
  };
}

export default async function VisaCountry({ params }: { params: Promise<{ slug: string }> }) {
  const p = visaBySlug((await params).slug);
  if (!p) notFound();
  const others = visaPages.filter((o) => o.slug !== p.slug);
  return (
    <>
      <PageHero eyebrow={`Visit visa · ${p.name}`} title={p.h1} lead={p.lead}
        crumbs={[{ name: "Tourist Visa", href: "/tourist-visa/" }, { name: p.name, href: `/visit-visa/${p.slug}/` }]}
        aside={<HeroFlag code={p.flag} name={p.name} label={`${p.name} visa`} />}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Flag code={p.flag} name={p.name} className="h-12 w-12" />
          <a href={waLink(`Hello Sky Bridge, I need a ${p.name} visit visa.`)} target="_blank" rel="noopener"
             className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
            <WhatsAppIcon /> Ask about {p.name} visa
          </a>
        </div>
      </PageHero>

      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
        <dl className="reveal grid overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-maroon/10 sm:grid-cols-2 lg:grid-cols-4">
          {p.facts.map((f) => (
            <div key={f.label} className="border-b border-line p-6 sm:border-r lg:border-b-0 last:border-r-0">
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">{f.label}</dt>
              <dd className="mt-2 font-medium leading-snug text-maroon-dark">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr]">
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Documents" title={`${p.name} visa document checklist`} />
          <ul className="mt-8 space-y-3">
            {p.documents.map((d) => <li key={d} className="flex gap-3 text-[15px] leading-relaxed"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />{d}</li>)}
          </ul>
          <div className="mt-6"><Note>This is a general checklist. Requirements depend on your profile and can change, so we confirm the exact list for you before submitting your file.</Note></div>
        </div>
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Our advice" title="Tips for a strong application" />
          <div className="mt-8 space-y-4">
            {p.tips.map((t) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <Lightbulb className="h-6 w-6 shrink-0 text-gold-dark" />
                <p className="leading-relaxed text-ink/80">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Your visa in four simple steps" />
          <div className="mt-24"><ProcessFlow steps={visaSteps} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title={`${p.name} visa: common questions`} />
        <div className="mt-10"><FaqList faqs={p.faqs} /></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Get started" title={`Apply for your ${p.name} visa`} intro="Send your details on WhatsApp and our visa team will tell you exactly what you need." />
          <div className="mt-10"><InquiryForm defaultService="Tourist / Visit Visa" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-3xl font-semibold text-maroon-dark">Other visit visas</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/visit-visa/${o.slug}/`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-medium text-maroon hover:border-gold">
              <Flag code={o.flag} name={o.name} className="h-6 w-6" /> {o.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Planning a trip to ${p.name}?`} text="Talk to our visa team. We also book your flights." message={`Hello Sky Bridge, I need a ${p.name} visit visa.`} />
    </>
  );
}
