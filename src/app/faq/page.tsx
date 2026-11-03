import type { Metadata } from "next";
import { CtaBand, FaqList, PageHero } from "@/components/blocks";
import type { QA } from "@/data/study";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Study Abroad, Scholarships & Visas | Sky Bridge Consultancy" },
  description: "Answers to common questions about studying abroad, scholarships, tourist visas, air tickets and fees at Sky Bridge Consultancy, Lahore.",
  alternates: { canonical: "/faq/" },
};

const groups: { id: string; title: string; faqs: QA[] }[] = [
  { id: "general", title: "General", faqs: [
    { q: "Who is Sky Bridge Consultancy?", a: "Sky Bridge Consultancy is a Lahore-based study abroad, visa and air ticketing consultancy founded by Ibrar Ahmad. Our team has over six years of experience and has guided more than 300 students." },
    { q: "Is the first consultation free?", a: "Yes. Your first consultation is completely free, whether you visit our office or contact us on WhatsApp." },
    { q: "Where is your office and when are you open?", a: "Office # 8, 1st Floor, Green Complex, Near Kainchi Bazar, Main Ferozepur Road, Lahore. We are open Monday to Saturday, 10:00 AM to 5:00 PM, and closed on Sunday." },
    { q: "Are you a registered business?", a: "Yes. Sky Bridge Consultancy is registered with the Federal Board of Revenue (FBR) and our NTN is active." },
    { q: "Can I get help without visiting the office?", a: "Yes. Many students and travellers work with us entirely on WhatsApp and phone, and visit only when needed." },
  ] },
  { id: "study", title: "Study Abroad", faqs: [
    { q: "Which countries do you help with?", a: "Germany, Italy, Australia, New Zealand, the United Kingdom, Turkey and North Cyprus, for BS, MS and PhD programs." },
    { q: "Can I apply with a 14-year Bachelor's degree?", a: "Some universities accept 14-year degrees for certain programs, while many European and Australian Master's programs ask for 16 years. We check your options individually." },
    { q: "Do I need IELTS?", a: "Most universities ask for IELTS, PTE or TOEFL, but some accept an English-medium instruction letter or their own test. We confirm what each program on your list accepts." },
    { q: "I have a study gap. Can I still apply?", a: "Often yes, especially if you can show work experience or other productive activity during the gap. Explain your situation in your consultation and we will advise honestly." },
    { q: "When should I start?", a: "8 to 12 months before your intake is ideal, because scholarship deadlines often come earlier than admission deadlines." },
  ] },
  { id: "scholarships", title: "Scholarships", faqs: [
    { q: "What is the difference between fully funded, partially funded and self-funded?", a: "Fully funded scholarships can cover tuition and living costs. Partially funded means a scholarship or discount covers part of the cost. Self-funded means you pay your own fees and living costs." },
    { q: "Who gives the scholarships?", a: "Scholarships are awarded by governments, universities and foundations. Consultants do not award scholarships; we help you find the right ones and apply properly." },
    { q: "Can you guarantee a scholarship?", a: "No honest consultant can. Fully funded scholarships are competitive. We help you build the strongest possible application and tell you your realistic chances." },
    { q: "Which countries are best for fully funded study?", a: "We focus fully funded guidance on Germany, Italy, Australia and New Zealand. Availability depends on your level of study, field and profile." },
  ] },
  { id: "visa", title: "Tourist & Visit Visa", faqs: [
    { q: "Which visit visas do you handle?", a: "Popular destinations include the USA, UAE, Turkey, Azerbaijan, Thailand, Singapore and Indonesia, plus many more countries worldwide." },
    { q: "How long does a visit visa take?", a: "It varies from a few days for e-visas to several months for countries with long interview waits, such as the USA. Ask us about your destination." },
    { q: "What happens if my visa is refused?", a: "We review the refusal reason with you and advise whether and when to reapply. Embassy fees are generally non-refundable." },
    { q: "Do you provide fake bank statements or bookings?", a: "Never. False documents can get you banned. We help you present your genuine situation clearly and completely." },
  ] },
  { id: "tickets", title: "Air Ticketing", faqs: [
    { q: "Which airlines do you book?", a: "All major domestic and international airlines, including PIA, Airblue, SereneAir, AirSial, Fly Jinnah, Emirates, Qatar Airways, Etihad, Turkish Airlines and Saudia." },
    { q: "Can I change or cancel my ticket?", a: "Changes and refunds follow the airline's fare rules, which we explain before you book." },
    { q: "How will I receive my ticket?", a: "You receive an e-ticket on WhatsApp or email once your booking and payment are confirmed." },
  ] },
  { id: "fees", title: "Fees & Payments", faqs: [
    { q: "Do you charge for consultation?", a: "No. The first consultation is free." },
    { q: "How are your service charges decided?", a: "Service charges depend on the service and country. They are explained and agreed in writing before any payment." },
    { q: "Are embassy, university and airline fees included?", a: "No. Third-party fees such as embassy, VFS, university application and airline charges are paid separately and follow their own refund rules." },
    { q: "What is your refund policy?", a: "Refund terms for our service charges are shared in writing before you pay. Please read our Terms & Conditions for details." },
  ] },
];

const allLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.faqs).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Faq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allLd) }} />
      <PageHero eyebrow="FAQ" title={<>Frequently Asked <span className="italic text-gold-light">Questions</span></>}
        lead="Clear answers about studying abroad, scholarships, visas, air tickets and our fees."
        crumbs={[{ name: "FAQ", href: "/faq/" }]}>
        <nav aria-label="FAQ categories" className="mt-8 flex flex-wrap gap-2">
          {groups.map((g) => <a key={g.id} href={`#${g.id}`} className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-champagne hover:border-gold-light hover:text-gold-light">{g.title}</a>)}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-28">
            <h2 className="text-3xl font-semibold text-maroon-dark md:text-4xl">{g.title}</h2>
            <div className="mt-6"><FaqList faqs={g.faqs} schema={false} /></div>
          </section>
        ))}
      </div>

      <CtaBand title="Didn't find your answer?" text="Ask us directly on WhatsApp. We reply during office hours." message="Hello Sky Bridge, I have a question: " />
    </>
  );
}
