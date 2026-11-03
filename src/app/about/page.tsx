import type { Metadata } from "next";
import { BadgeCheck, Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { CtaBand, PageHero } from "@/components/blocks";
import { Initials, SectionHeading } from "@/components/ui";
import { site, team } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "About Sky Bridge Consultancy | Study Abroad & Visa Consultants Lahore" },
  description: "Meet Sky Bridge Consultancy, a Lahore study abroad and visa consultancy founded by Ibrar Ahmad. 6+ years of experience, 300+ students guided, FBR registered.",
  alternates: { canonical: "/about/" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibrar Ahmad",
  jobTitle: "Founder & CEO",
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  image: `${site.url}/images/ceo-ibrar-ahmad.webp`,
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <PageHero eyebrow="About us" title={<>A Bridge Built on <span className="italic text-gold-light">Trust</span></>}
        lead="Sky Bridge Consultancy is a Lahore-based study abroad, visa and air ticketing consultancy. For more than six years, our team has helped over 300 students and many families take their next step abroad with honest, personal guidance."
        crumbs={[{ name: "About", href: "/about/" }]} />

      <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-4">
        <div className="reveal grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-maroon/10 md:grid-cols-4">
          {[[site.stats.years, "Years of experience"], [site.stats.students, "Students guided"], [site.stats.destinations, "Study destinations"], ["FBR", "Registered business"]].map(([k, v], i) => (
            <div key={v} className={`p-6 text-center ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-line`}>
              <p className="font-serif text-4xl font-bold text-maroon">{k}</p>
              <p className="mt-1 text-sm text-muted">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Our story" title="Why Sky Bridge exists" />
          <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
            <p>Too many talented students in Pakistan miss their chance to study abroad. Some follow the wrong advice, some miss deadlines, and many never learn that fully funded scholarships are within their reach.</p>
            <p>Sky Bridge Consultancy was founded by Ibrar Ahmad to change that. From our office on Ferozepur Road in Lahore, we guide students through admissions, scholarships and student visas for Germany, Italy, Australia, New Zealand, the UK, Turkey and North Cyprus.</p>
            <p>Families also come to us for tourist visas and for local and international air tickets, so one trusted team can handle the whole journey.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { i: <Target className="h-6 w-6" />, t: "Our mission", d: "To give every student and traveller honest, expert guidance that turns plans abroad into reality." },
            { i: <Eye className="h-6 w-6" />, t: "Our vision", d: "To be Lahore's most trusted bridge to global education and travel." },
            { i: <HeartHandshake className="h-6 w-6" />, t: "Honesty first", d: "We tell you what is realistic for your profile, even when it is not what you hoped to hear." },
            { i: <ShieldCheck className="h-6 w-6" />, t: "Registered and accountable", d: "An FBR-registered business with a real office you can visit." },
          ].map((v) => (
            <div key={v.t} className="reveal rounded-3xl border border-line bg-white p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-maroon text-gold-light">{v.i}</span>
              <h3 className="mt-4 text-2xl font-semibold text-maroon-dark">{v.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ceo-message" className="scroll-mt-24 bg-champagne/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal relative mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:self-start">
            <div className="absolute -inset-3 rounded-[2rem] border-2 border-gold/70" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-[1.5rem] bg-maroon" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ceo-ibrar-ahmad.webp" alt="Ibrar Ahmad, Founder and CEO of Sky Bridge Consultancy" width={900} height={1054} className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-2xl" />
          </div>
          <article className="reveal">
            <p className="eyebrow">A message from our Founder &amp; CEO</p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/85">
              <p className="font-serif text-3xl leading-snug text-maroon-dark">Every year, I meet students in our Lahore office who carry the same quiet question: &ldquo;Can someone like me really study abroad?&rdquo; My answer is always yes, as long as you have the right guidance from the very first step.</p>
              <p>I founded Sky Bridge Consultancy because I saw too many talented young people lose their chance. Some trusted the wrong advice, some missed deadlines, and some never knew that fully funded scholarships were within their reach. Over the past six years, my team and I have worked to change that for more than 300 students. Whether you are aiming for a BS, MS or PhD in Germany, Italy, Australia or New Zealand, or looking for a self-funded or partially funded option in Turkey or the UK, or a self-funded path to North Cyprus, we sit with you, understand your profile and build a plan that fits you.</p>
              <p>Our work doesn&apos;t stop at admissions. Families also come to us for tourist visas and for local and international air tickets, and we handle every file with the same care.</p>
              <p>We will never promise you shortcuts, but we will always tell you the truth, guide you honestly and stay with you until you board your flight. That is what &ldquo;Authentic Guidance. Trusted Results.&rdquo; means to us.</p>
              <p className="font-serif text-2xl text-maroon">Your future deserves a strong bridge. Let us help you build it.</p>
            </div>
            <footer className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span><span className="block font-serif text-2xl font-semibold text-maroon">Ibrar Ahmad</span><span className="text-sm text-muted">Founder &amp; Chief Executive Officer, Sky Bridge Consultancy</span></span>
            </footer>
          </article>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Our team" title="The people behind your journey" intro="A dedicated team of advisors, visa consultants and ticketing agents in Lahore." />
        <h3 className="mt-14 text-center font-serif text-3xl font-semibold text-maroon-dark">Leadership</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.leadership.map((m) => (
            <div key={m.name} className="reveal flex flex-col items-center rounded-3xl border border-line bg-white p-6 text-center">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} width={96} height={96} loading="lazy" className="h-24 w-24 rounded-full object-cover ring-2 ring-gold/70 ring-offset-2" />
              ) : <Initials name={m.name} className="h-24 w-24 text-3xl" />}
              <p className="mt-4 font-serif text-2xl font-semibold text-maroon-dark">{m.name}</p>
              <p className="mt-1 text-sm font-medium text-gold-dark">{m.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {team.groups.map((g) => (
            <div key={g.title} className="reveal">
              <h3 className="font-serif text-2xl font-semibold text-maroon-dark">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.members.map((m) => (
                  <li key={m.name} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
                    <Initials name={m.name} className="h-12 w-12 text-base" />
                    <span><span className="block font-semibold text-ink">{m.name}</span><span className="text-sm text-muted">{m.role}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white px-5 py-2 font-semibold text-maroon"><BadgeCheck className="h-5 w-5 text-gold-dark" /> FBR Registered Business (NTN Active)</p>
      </section>

      <CtaBand title="Visit us in Lahore" text={`${site.address.full}. ${site.hours.days}, ${site.hours.time}.`} message="Hello Sky Bridge, I would like to visit your office." />
    </>
  );
}
