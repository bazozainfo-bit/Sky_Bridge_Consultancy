import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, BookOpen, CheckCircle2, GraduationCap, Microscope, Wallet } from "lucide-react";
import { CtaBand, FaqList, HeroFlag, Note, PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import ProcessFlow from "@/components/ProcessFlow";
import { Flag, FundingBadge, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { studyBySlug, studyPages } from "@/data/study";
import { waLink } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return studyPages.map((p) => ({ studySlug: `study-in-${p.slug}` }));
}

const pageFor = (s: string) => (s.startsWith("study-in-") ? studyBySlug(s.slice(9)) : undefined);

export async function generateMetadata({ params }: { params: Promise<{ studySlug: string }> }): Promise<Metadata> {
  const p = pageFor((await params).studySlug);
  if (!p) return {};
  return {
    title: { absolute: `${p.metaTitle} | Sky Bridge` },
    description: p.metaDesc,
    alternates: { canonical: `/study-in-${p.slug}/` },
    openGraph: { title: p.metaTitle, description: p.metaDesc, url: `/study-in-${p.slug}/` },
  };
}

export default async function StudyCountry({ params }: { params: Promise<{ studySlug: string }> }) {
  const p = pageFor((await params).studySlug);
  if (!p) notFound();
  const others = studyPages.filter((o) => o.slug !== p.slug);
  return (
    <>
      <PageHero eyebrow={`Study destination · ${p.name}`} title={p.h1} lead={p.lead}
        crumbs={[{ name: "Study Abroad", href: "/study-abroad/" }, { name: p.name, href: `/study-in-${p.slug}/` }]}
        aside={<HeroFlag code={p.flag} name={p.name} label={`Study in ${p.name}`} />}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Flag code={p.flag} name={p.name} className="h-12 w-12" />
          {p.funding.map((f) => <FundingBadge key={f} type={f} />)}
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-champagne">BS · MS · PhD</span>
        </div>
        <a href={waLink(`Hello Sky Bridge, I want to study in ${p.name}. Please guide me.`)} target="_blank" rel="noopener"
           className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
          <WhatsAppIcon /> Free consultation for {p.name}
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow={`Why ${p.name}`} title={`Why Pakistani students choose ${p.name}`} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.why.map((w) => (
            <div key={w.t} className="reveal rounded-3xl border border-line bg-white p-6">
              <BadgeCheck className="h-7 w-7 text-gold-dark" />
              <h3 className="mt-4 text-2xl font-semibold text-maroon-dark">{w.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Scholarships & funding" title={`Funding your degree in ${p.name}`} intro={p.funding_intro} />
            <div className="mt-8 space-y-4">
              {p.scholarships.map((s) => (
                <div key={s.name} className="reveal rounded-2xl border border-line bg-cream/60 p-6">
                  <h3 className="text-2xl font-semibold text-maroon-dark">{s.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Programs" title="BS, MS and PhD options" />
            <div className="mt-8 space-y-4">
              {([["BS / Bachelor's", p.levels.BS, <BookOpen key="b" className="h-6 w-6" />], ["MS / Master's", p.levels.MS, <GraduationCap key="m" className="h-6 w-6" />], ["PhD / Research", p.levels.PhD, <Microscope key="p" className="h-6 w-6" />]] as const).map(([t, d, icon]) => (
                <div key={t} className="reveal flex gap-4 rounded-2xl border border-line p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne text-maroon">{icon}</span>
                  <div><h3 className="text-xl font-semibold text-maroon-dark">{t}</h3><p className="mt-1 leading-relaxed text-muted">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Requirements" title="What you usually need" />
          <ul className="mt-8 space-y-3">
            {p.requirements.map((r) => <li key={r} className="flex gap-3 text-[15px] leading-relaxed"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />{r}</li>)}
          </ul>
        </div>
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Costs" title="Budget and proof of funds" />
          <div className="mt-8 rounded-3xl bg-maroon p-7 text-champagne/90">
            <Wallet className="h-7 w-7 text-gold-light" />
            <p className="mt-4 leading-relaxed">{p.costs}</p>
          </div>
          <div className="mt-5"><Note>Requirements, fees and scholarship rules change every year. We confirm the latest official requirements for your chosen university before you apply.</Note></div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title={`Your path to ${p.name} in six steps`} />
          <div className="mt-24"><ProcessFlow /></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title={`Studying in ${p.name}: common questions`} />
        <div className="mt-10"><FaqList faqs={p.faqs} /></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Free consultation" title={`Start your ${p.name} application`} intro="Share your details and our student advisors will reply on WhatsApp during office hours." />
          <div className="mt-10"><InquiryForm defaultService="Study Abroad" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-3xl font-semibold text-maroon-dark">Other study destinations</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/study-in-${o.slug}/`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-medium text-maroon hover:border-gold">
              <Flag code={o.flag} name={o.name} className="h-6 w-6" /> Study in {o.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Ready to study in ${p.name}?`} text="Your first consultation is free. Talk to an advisor today." message={`Hello Sky Bridge, I want to study in ${p.name}.`} />
    </>
  );
}
