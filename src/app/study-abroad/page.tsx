import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Microscope } from "lucide-react";
import { CtaBand, FaqList, PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import ProcessFlow from "@/components/ProcessFlow";
import { Flag, FundingBadge, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { studyCountries, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Study Abroad Consultants in Lahore | Sky Bridge Consultancy" },
  description: "Study abroad from Pakistan with Sky Bridge Consultancy, Lahore. Fully funded scholarship guidance for Germany, Italy, Australia and New Zealand, plus UK, Turkey and North Cyprus admissions.",
  alternates: { canonical: "/study-abroad/" },
};

const faqs = [
  { q: "Which country is best for Pakistani students?", a: "It depends on your grades, budget, field and goals. Germany and Italy suit students looking for low-cost or funded study in Europe, Australia and New Zealand suit postgraduate scholarship seekers, and the UK, Turkey and North Cyprus suit self-funded students who want flexibility. We compare them for your profile in a free consultation." },
  { q: "How early should I start my application?", a: "Start 8 to 12 months before your intended intake. Scholarships often close earlier than university admissions, and visa processing takes time." },
  { q: "Can I study abroad after a 14-year Bachelor's?", a: "Some countries and universities accept 14-year degrees for certain programs, while others require 16 years. We check which options are open to you." },
  { q: "What documents do I need to get started?", a: "For your first consultation, your transcripts, degree, passport (if you have one) and any English test result are enough. We tell you what else is needed for each country." },
  { q: "Do you charge for the first consultation?", a: "No. Your first consultation is free, at our Lahore office or on WhatsApp." },
];

export default function StudyAbroad() {
  return (
    <>
      <PageHero eyebrow="Study abroad" title={<>Study Abroad with <span className="italic text-gold-light">Honest Guidance</span></>}
        lead="Sky Bridge Consultancy helps Pakistani students apply for BS, MS and PhD programs in seven countries, with a strong focus on fully funded scholarships and realistic self-funded options."
        crumbs={[{ name: "Study Abroad", href: "/study-abroad/" }]}>
        <a href={waLink("Hello Sky Bridge, I want to study abroad. Please guide me.")} target="_blank" rel="noopener"
           className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
          <WhatsAppIcon /> Book a free consultation
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Destinations" title="Choose your study destination" intro="Each country page explains scholarships, requirements and costs for Pakistani students." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studyCountries.map((c) => (
            <Link key={c.slug} href={`/study-in-${c.slug}/`} className="reveal group flex flex-col rounded-3xl border border-line bg-white p-6 transition hover:border-gold hover:shadow-lg hover:shadow-maroon/10">
              <div className="flex items-center gap-3"><Flag code={c.flag} name={c.name} className="h-11 w-11" /><h2 className="text-2xl font-semibold text-maroon-dark">Study in {c.name}</h2></div>
              <div className="mt-4 flex flex-wrap gap-2">{c.funding.map((f) => <FundingBadge key={f} type={f} />)}</div>
              <p className="mt-4 leading-relaxed text-muted">{c.blurb}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-maroon">Explore {c.name} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Programs" title="Every level, one team" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { i: <BookOpen className="h-6 w-6" />, t: "BS / Bachelor's", d: "After FSc, ICS, A-Levels or equivalent. We match you with universities that accept your qualification, including foundation routes where needed." },
              { i: <GraduationCap className="h-6 w-6" />, t: "MS / Master's", d: "The main route to scholarships abroad. We help you shortlist programs, prepare a strong statement of purpose and apply on time." },
              { i: <Microscope className="h-6 w-6" />, t: "PhD / Research", d: "Funded positions and research scholarships. We help with your proposal, CV and emails to potential supervisors." },
            ].map((x) => (
              <div key={x.t} className="reveal rounded-3xl border border-line bg-cream/60 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-gold-light">{x.i}</span>
                <h3 className="mt-5 text-2xl font-semibold text-maroon-dark">{x.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Funding" title="Fully funded, partially funded or self-funded?" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { b: "Fully Funded", d: "Government and university scholarships that can cover tuition and living costs. Competitive and deadline-driven, so early preparation is essential.", w: "Germany · Italy · Australia · New Zealand" },
            { b: "Partially Funded", d: "University scholarships and tuition discounts that reduce your costs significantly while keeping more universities open to you.", w: "UK · Turkey" },
            { b: "Self-Funded", d: "You cover your own fees, with the widest choice of programs and intakes and often a quicker process.", w: "UK · Turkey · North Cyprus" },
          ].map((f) => (
            <div key={f.b} className="reveal rounded-3xl border border-line bg-white p-7">
              <FundingBadge type={f.b} />
              <p className="mt-4 leading-relaxed text-muted">{f.d}</p>
              <p className="mt-4 font-semibold text-maroon">{f.w}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">Scholarships are awarded by universities and governments, not by consultants. Our job is to help you find the right ones and apply properly.</p>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Your journey in six steps" />
          <div className="mt-24"><ProcessFlow /></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Study abroad questions" />
        <div className="mt-10"><FaqList faqs={faqs} /></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Free consultation" title="Tell us about your plans" />
          <div className="mt-10"><InquiryForm defaultService="Study Abroad" /></div>
        </div>
      </section>
      <div className="h-20" />
      <CtaBand title="Not sure where to start?" text="Bring your transcripts to our Lahore office or send them on WhatsApp. The first consultation is free." message="Hello Sky Bridge, I want to study abroad." />
    </>
  );
}
