import type { Metadata } from "next";
import { Briefcase, Globe2, GraduationCap, MapPinned, Users } from "lucide-react";
import { CtaBand, FaqList, Note, PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import ProcessFlow, { ticketSteps } from "@/components/ProcessFlow";
import { SectionHeading, WhatsAppIcon } from "@/components/ui";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Air Ticketing in Lahore | Local & International Flights | Sky Bridge" },
  description: "Book local and international air tickets in Lahore with Sky Bridge Consultancy. All major airlines, student and family bookings, clear fares and quick confirmation.",
  alternates: { canonical: "/air-ticketing/" },
};

const domestic = ["PIA", "Airblue", "SereneAir", "AirSial", "Fly Jinnah"];
const international = ["Emirates", "Qatar Airways", "Etihad Airways", "Turkish Airlines", "Saudia", "flydubai", "Gulf Air", "Oman Air", "Thai Airways", "Malaysia Airlines", "and more"];

const faqs = [
  { q: "Which airlines can you book?", a: "We book all major domestic and international airlines, including PIA, Airblue, SereneAir, AirSial, Fly Jinnah, Emirates, Qatar Airways, Etihad, Turkish Airlines, Saudia and many more." },
  { q: "Can you book tickets for students going abroad?", a: "Yes. We help students choose suitable routes and baggage allowances, and we coordinate travel dates with university start dates and visas." },
  { q: "How do I pay for my ticket?", a: "We confirm the fare and payment options with you before booking. You receive your e-ticket as soon as payment is confirmed." },
  { q: "Can I change or cancel my ticket?", a: "Changes and refunds depend on the airline's fare rules. We explain these before you book and help you with any changes later." },
  { q: "Do you book group or family tickets?", a: "Yes. We book for families, groups and corporate travellers." },
];

export default function AirTicketing() {
  return (
    <>
      <PageHero eyebrow="Air ticketing" title={<>Local &amp; International <span className="italic text-gold-light">Air Tickets</span></>}
        lead="Domestic flights across Pakistan and international flights worldwide, booked by a team that explains fares and rules clearly before you pay."
        crumbs={[{ name: "Air Ticketing", href: "/air-ticketing/" }]}>
        <a href={waLink("Hello Sky Bridge, I need an air ticket. From: , To: , Date: ")} target="_blank" rel="noopener"
           className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep hover:bg-gold-light">
          <WhatsAppIcon /> Get a fare quote
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Who we book for" title="Tickets for every kind of trip" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { i: <MapPinned className="h-6 w-6" />, t: "Domestic", d: "Flights between Lahore, Karachi, Islamabad and other cities." },
            { i: <Globe2 className="h-6 w-6" />, t: "International", d: "One-way, return and multi-city trips worldwide." },
            { i: <GraduationCap className="h-6 w-6" />, t: "Students", d: "Routes and baggage suited to students flying abroad." },
            { i: <Users className="h-6 w-6" />, t: "Families & groups", d: "Seats together and one point of contact." },
            { i: <Briefcase className="h-6 w-6" />, t: "Business", d: "Flexible fares for business travellers." },
          ].map((x) => (
            <div key={x.t} className="reveal rounded-3xl border border-line bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-gold-light">{x.i}</span>
              <h3 className="mt-4 text-2xl font-semibold text-maroon-dark">{x.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading center={false} eyebrow="Domestic" title="Airlines within Pakistan" />
            <div className="mt-8 flex flex-wrap gap-2">{domestic.map((a) => <span key={a} className="rounded-full border border-line bg-cream px-4 py-2 font-medium text-maroon-dark">{a}</span>)}</div>
          </div>
          <div className="reveal">
            <SectionHeading center={false} eyebrow="International" title="Airlines worldwide" />
            <div className="mt-8 flex flex-wrap gap-2">{international.map((a) => <span key={a} className="rounded-full border border-line bg-cream px-4 py-2 font-medium text-maroon-dark">{a}</span>)}</div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-6"><Note>Airline names are shown for information only. Sky Bridge Consultancy is an independent booking agent and is not affiliated with any airline. Fares and availability change constantly; your fare is confirmed at the time of booking.</Note></div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Booking in four simple steps" />
          <div className="mt-24"><ProcessFlow steps={ticketSteps} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Air ticketing questions" />
        <div className="mt-10"><FaqList faqs={faqs} /></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Fare quote" title="Tell us where you are flying" intro="Include your route and dates in the message box and we will send you options on WhatsApp." />
          <div className="mt-10"><InquiryForm defaultService="Air Ticketing" /></div>
        </div>
      </section>
      <div className="h-20" />
      <CtaBand title="Need a ticket today?" text="Send your route and dates on WhatsApp for a quick fare quote." message="Hello Sky Bridge, I need an air ticket." />
    </>
  );
}
