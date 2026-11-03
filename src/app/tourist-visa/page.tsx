import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand, FaqList, Note, PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import ProcessFlow, { visaSteps } from "@/components/ProcessFlow";
import { Flag, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { visaPages } from "@/data/visa";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Tourist Visa Consultants in Lahore | Visit Visa Services | Sky Bridge" },
  description: "Tourist and visit visa services in Lahore for USA, UAE (Dubai), Turkey, Azerbaijan, Thailand, Singapore, Indonesia and many more countries. Honest advice and complete file preparation.",
  alternates: { canonical: "/tourist-visa/" },
};

const faqs = [
  { q: "Which countries do you process visit visas for?", a: "Popular destinations include the USA, UAE, Turkey, Azerbaijan, Thailand, Singapore and Indonesia, and we handle many more countries worldwide. Ask us about your destination." },
  { q: "How early should I apply for a tourist visa?", a: "It depends on the country. E-visas can take a few days, while embassy visas, especially the USA, can take months. Contact us as soon as you start planning." },
  { q: "Can you guarantee my visa?", a: "No. Visa decisions are made only by the embassy or immigration authority. We make sure your file is complete, accurate and genuine, which gives you the best possible chance." },
  { q: "Can you also book my flights?", a: "Yes. Our ticketing team books local and international flights on all major airlines." },
  { q: "What if my visa is refused?", a: "We review the refusal reason with you and advise honestly whether and when reapplying makes sense." },
];

export default function TouristVisa() {
  return (
    <>
      <PageHero eyebrow="Tourist & visit visas" title={<>Worldwide <span className="italic text-gold-light">Tourist Visa</span> Services</>}
        lead="Holidays, family visits and short business trips. We prepare complete, genuine visa files and guide you at every step, from documents to departure."
        crumbs={[{ name: "Tourist Visa", href: "/tourist-visa/" }]}>
        <a href={waLink("Hello Sky Bridge, I need a tourist visa for ")} target="_blank" rel="noopener"
           className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
          <WhatsAppIcon /> Ask about your destination
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Popular destinations" title="Where are you travelling?" intro="Choose a country to see the visa type, documents and our tips." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visaPages.map((v) => (
            <Link key={v.slug} href={`/visit-visa/${v.slug}/`} className="reveal group flex flex-col rounded-3xl border border-line bg-white p-6 transition hover:border-gold hover:shadow-lg hover:shadow-maroon/10">
              <Flag code={v.flag} name={v.name} className="h-12 w-12" />
              <h2 className="mt-4 text-2xl font-semibold text-maroon-dark">{v.name} Visa</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.facts[0].value}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-maroon">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
          <a href={waLink("Hello Sky Bridge, I need a tourist visa for ")} target="_blank" rel="noopener" className="reveal flex flex-col justify-center rounded-3xl bg-maroon p-6 text-white">
            <p className="font-serif text-2xl font-semibold">Many more countries</p>
            <p className="mt-2 text-sm text-champagne/80">Tell us where you want to go and we will guide you.</p>
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading center={false} eyebrow="Documents" title="Common documents for most visit visas" />
            <ul className="mt-8 space-y-3">
              {["Passport valid for at least 6 months", "Recent photographs to the embassy's specification", "CNIC and family registration documents where needed", "Bank statements showing sufficient funds", "Employment letter, salary slips or business registration", "Return ticket and hotel bookings", "Invitation letter if visiting family"].map((d) => (
                <li key={d} className="flex gap-3 text-[15px]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />{d}</li>
              ))}
            </ul>
          </div>
          <div className="reveal space-y-5">
            <SectionHeading center={false} eyebrow="Our promise" title="Genuine files only" />
            <p className="leading-relaxed text-muted">We never use fake bank statements, fake bookings or false documents. They put your future travel at risk. Instead, we help you present your real situation clearly and completely.</p>
            <Note>Visa rules and fees change often. We confirm the latest official requirements before submitting every file.</Note>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Your visa in four simple steps" />
          <div className="mt-24"><ProcessFlow steps={visaSteps} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Tourist visa questions" />
        <div className="mt-10"><FaqList faqs={faqs} /></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Get started" title="Tell us about your trip" />
          <div className="mt-10"><InquiryForm defaultService="Tourist / Visit Visa" /></div>
        </div>
      </section>
      <div className="h-20" />
      <CtaBand title="Planning a trip abroad?" text="Talk to our visa team today. We also book your flights." message="Hello Sky Bridge, I need a tourist visa." />
    </>
  );
}
