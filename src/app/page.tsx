import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BookOpen, Clock, GraduationCap, HandCoins, HeartHandshake, Landmark,
  MapPin, Microscope, Plane, ShieldCheck, Stamp, Ticket, Users,
} from "lucide-react";
import ProcessFlow from "@/components/ProcessFlow";
import InquiryForm from "@/components/InquiryForm";
import { Flag, FundingBadge, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { site, studyCountries, visaCountries, waLink } from "@/data/site";

const faqs = [
  { q: "Is the first consultation really free?", a: "Yes. Your first consultation with Sky Bridge Consultancy is completely free, whether you visit our Lahore office or speak to us on WhatsApp. We look at your profile and explain your realistic options before you decide anything." },
  { q: "Which countries can you help me study in?", a: "We guide students for Germany, Italy, Australia and New Zealand (with a focus on fully funded scholarships), the UK and Turkey (self-funded and partially funded options) and North Cyprus (self-funded). We support BS, MS and PhD applications." },
  { q: "Can you guarantee my visa or scholarship?", a: "No honest consultant can. Visa, admission and scholarship decisions are made only by the embassy, university or awarding body. What we promise is a carefully prepared, truthful application and clear advice at every step, which gives you the strongest possible chance." },
  { q: "Do I need IELTS to study abroad?", a: "It depends on the country, the university and your previous education. Many universities ask for IELTS or PTE, while some accept alternatives such as Duolingo or an English-medium instruction letter. We will tell you exactly what your chosen programs require." },
  { q: "Do you also handle tourist visas and air tickets?", a: "Yes. Alongside study abroad, we prepare tourist and visit visa files for countries including the USA, UAE, Turkey, Azerbaijan, Thailand, Singapore and Indonesia, and we book local and international air tickets on all major airlines." },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-linear-to-br from-maroon-deep via-maroon-dark to-maroon text-white">
        <div className="grid-pattern pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-36 pt-16 md:pt-24 lg:grid-cols-[1.1fr_.9fr] lg:pb-44">
          <div>
            <p className="eyebrow eyebrow-light">Study Abroad &amp; Visa Consultants in Lahore</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Your Bridge to <span className="italic text-gold-light">Global Education</span> &amp; Travel
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-champagne/85">
              From fully funded scholarship guidance for Germany, Italy, Australia and New Zealand to tourist visas and air tickets,
              Sky Bridge Consultancy stays with you from your first question to your boarding pass.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={waLink("Hello Sky Bridge, I would like to book a free consultation.")} target="_blank" rel="noopener"
                 className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-maroon-deep shadow-lg shadow-black/20 transition hover:bg-gold-light">
                <WhatsAppIcon /> Book Free Consultation
              </a>
              <a href="#destinations" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-gold-light hover:text-gold-light">
                Explore Destinations <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-champagne/70">
              <ShieldCheck className="h-4 w-4 text-gold-light" /> FBR registered · Office in Lahore · Free first consultation
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-gold/10 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-icon-light.svg" alt="" width={440} height={440} fetchPriority="high" className="relative w-full drop-shadow-2xl" />
            <div className="absolute -left-2 top-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md md:-left-10">
              <p className="text-xs uppercase tracking-widest text-gold-light">Fully funded guidance</p>
              <p className="mt-1 text-sm font-medium">Germany · Italy · Australia · NZ</p>
            </div>
            <div className="absolute -right-2 top-1/2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md md:-right-8">
              <p className="text-xs uppercase tracking-widest text-gold-light">Programs</p>
              <p className="mt-1 text-sm font-medium">BS · MS · PhD</p>
            </div>
            <div className="absolute bottom-4 left-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-gold-light">Also</p>
              <p className="mt-1 text-sm font-medium">Tourist Visas · Air Tickets</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section aria-label="Sky Bridge at a glance" className="relative z-10 mx-auto -mt-24 max-w-6xl px-4">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-maroon/10 md:grid-cols-4">
          {[
            { k: site.stats.years, v: "Years of Experience", icon: <Clock className="h-5 w-5" /> },
            { k: site.stats.students, v: "Students Guided", icon: <GraduationCap className="h-5 w-5" /> },
            { k: site.stats.destinations, v: "Study Destinations", icon: <MapPin className="h-5 w-5" /> },
            { k: "FBR", v: "Registered Business", icon: <BadgeCheck className="h-5 w-5" /> },
          ].map((s, i) => (
            <div key={s.v} className={`flex flex-col items-center px-4 py-7 text-center ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r border-line last:border-r-0`}>
              <span className="text-gold-dark">{s.icon}</span>
              <p className="mt-2 font-serif text-4xl font-bold text-maroon md:text-5xl">{s.k}</p>
              <p className="mt-1 text-sm text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24" id="services">
        <SectionHeading eyebrow="What we do" title="Three services, one trusted team"
          intro="Whether you are planning a degree abroad, a family holiday or simply need a ticket home, our Lahore team handles it with the same care." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: <GraduationCap className="h-7 w-7" />, title: "Study Abroad", href: "/study-abroad/", text: "Admissions and scholarship guidance for BS, MS and PhD in seven countries, from choosing a university to your student visa.", points: ["Fully funded scholarship guidance", "Partially funded and self-funded options", "Student visa file preparation"] },
            { icon: <Stamp className="h-7 w-7" />, title: "Tourist Visa", href: "/tourist-visa/", text: "Well-prepared tourist and visit visa files for popular destinations around the world, with honest advice on what each embassy expects.", points: ["USA, UAE, Turkey, Azerbaijan", "Thailand, Singapore, Indonesia", "And many more countries"] },
            { icon: <Ticket className="h-7 w-7" />, title: "Air Ticketing", href: "/air-ticketing/", text: "Local and international air tickets on all major airlines, booked quickly with clear fares and no surprises.", points: ["Domestic flights across Pakistan", "International flights worldwide", "Students, families and groups"] },
          ].map((s) => (
            <article key={s.title} className="reveal group flex flex-col rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-maroon/10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon text-gold-light">{s.icon}</span>
              <h3 className="mt-6 text-3xl font-semibold text-maroon-dark">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              <ul className="mt-5 space-y-2 text-[15px]">
                {s.points.map((p) => <li key={p} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 shrink-0 text-gold-dark" />{p}</li>)}
              </ul>
              <Link href={s.href} className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-maroon">
                Explore {s.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section id="destinations" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Study destinations" title="Where would you like to study?"
            intro="Each country suits a different budget and goal. Here is where we can help you apply, and the kind of funding we focus on in each." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {studyCountries.map((c) => (
              <Link key={c.slug} href={`/study-in-${c.slug}/`} className="reveal group flex flex-col rounded-3xl border border-line bg-cream/60 p-6 transition hover:border-gold hover:bg-white hover:shadow-lg hover:shadow-maroon/10">
                <div className="flex items-center gap-3">
                  <Flag code={c.flag} name={c.name} className="h-11 w-11" />
                  <h3 className="text-2xl font-semibold text-maroon-dark">{c.name}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">{c.funding.map((f) => <FundingBadge key={f} type={f} />)}</div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.blurb}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-maroon">
                  Study in {c.name} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
            <div className="reveal flex flex-col justify-between rounded-3xl bg-maroon p-6 text-white">
              <div>
                <p className="eyebrow eyebrow-light">Not sure yet?</p>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug">Tell us your grades and budget. We&apos;ll suggest the best fit.</p>
              </div>
              <a href={waLink("Hello Sky Bridge, I need help choosing a country to study in.")} target="_blank" rel="noopener"
                 className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-maroon-deep hover:bg-gold-light">
                <WhatsAppIcon className="h-4 w-4" /> Ask an advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS & FUNDING ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Programs" title="BS, MS or PhD: we guide every level" />
            <div className="mt-10 space-y-4">
              {[
                { icon: <BookOpen className="h-6 w-6" />, t: "BS / Bachelor's", d: "For students after FSc, ICS, A-Levels or equivalent. We match you with universities that accept your qualification and budget." },
                { icon: <GraduationCap className="h-6 w-6" />, t: "MS / Master's", d: "The most common route to scholarships abroad. We help you shortlist programs, write a strong statement and apply on time." },
                { icon: <Microscope className="h-6 w-6" />, t: "PhD / Research", d: "Funded research positions and scholarships. We guide your research proposal, supervisor outreach and applications." },
              ].map((p) => (
                <div key={p.t} className="reveal flex gap-5 rounded-2xl border border-line bg-white p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-champagne text-maroon">{p.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-maroon-dark">{p.t}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Funding" title="Three ways to fund your degree" />
            <div className="mt-10 space-y-4">
              {[
                { b: "Fully Funded", d: "Scholarships that can cover tuition and living costs, offered by governments and universities. Highly competitive, so early preparation matters.", where: "Germany · Italy · Australia · New Zealand" },
                { b: "Partially Funded", d: "Tuition discounts or partial scholarships that reduce the cost of your degree significantly.", where: "UK · Turkey" },
                { b: "Self-Funded", d: "You cover your own fees, with more choice of universities, intakes and programs, and often a faster process.", where: "UK · Turkey · North Cyprus" },
              ].map((f) => (
                <div key={f.b} className="reveal rounded-2xl border border-line bg-white p-6">
                  <FundingBadge type={f.b} />
                  <p className="mt-3 leading-relaxed text-muted">{f.d}</p>
                  <p className="mt-3 text-sm font-semibold text-maroon">{f.where}</p>
                </div>
              ))}
              <p className="text-sm text-muted">Scholarships are awarded by universities and governments, not by consultants. We help you find them and apply properly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Your journey in six simple steps"
            intro="A clear path from your first message to your first day on campus. You always know what comes next." />
          <div className="mt-24">
            <ProcessFlow />
          </div>
          <div className="mt-20 text-center lg:mt-16">
            <a href={waLink("Hello Sky Bridge, I would like to start step 1 and speak to an advisor.")} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3.5 font-semibold text-white shadow-md hover:bg-maroon-dark">
              <WhatsAppIcon /> Start with Step 1
            </a>
          </div>
        </div>
      </section>

      {/* ===== VISIT VISAS ===== */}
      <section className="grid-pattern bg-maroon-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading light eyebrow="Tourist & visit visas" title="Planning a trip? We prepare your visa file"
            intro="Holiday, family visit or business trip, we help you put together a complete, genuine file for popular destinations worldwide." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visaCountries.map((v) => (
              <Link key={v.slug} href={`/visit-visa/${v.slug}/`} className="reveal group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold/60 hover:bg-white/10">
                <Flag code={v.flag} name={v.name} className="h-12 w-12" />
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{v.name}</h3>
                  <p className="text-sm text-champagne/70">{v.note}</p>
                </div>
              </Link>
            ))}
            <a href={waLink("Hello Sky Bridge, I need a tourist visa for ")} target="_blank" rel="noopener" className="reveal flex flex-col justify-center rounded-2xl border border-dashed border-gold/50 p-5 text-gold-light transition hover:bg-white/5">
              <p className="font-serif text-2xl font-semibold">Many more countries</p>
              <p className="mt-1 text-sm text-champagne/70">Ask us about your destination →</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Why Sky Bridge" title="Authentic guidance. Trusted results." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <HandCoins className="h-6 w-6" />, t: "Free first consultation", d: "Understand your options before you spend a single rupee." },
            { icon: <HeartHandshake className="h-6 w-6" />, t: "Honest advice", d: "No fake promises or shortcuts. We tell you what is realistic for your profile." },
            { icon: <Plane className="h-6 w-6" />, t: "End-to-end support", d: "Admission, scholarship, visa and ticket, handled by one team that knows your file." },
            { icon: <Landmark className="h-6 w-6" />, t: "Registered Lahore office", d: "An FBR-registered business with a real office you can visit on Ferozepur Road." },
          ].map((w) => (
            <div key={w.t} className="reveal rounded-3xl border border-line bg-white p-7 text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-gold-light">{w.icon}</span>
              <h3 className="mt-5 text-2xl font-semibold text-maroon-dark">{w.t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CEO MESSAGE ===== */}
      <section className="bg-champagne/50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border-2 border-gold/70" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-[1.5rem] bg-maroon" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ceo-ibrar-ahmad.webp" alt="Ibrar Ahmad, Founder and CEO of Sky Bridge Consultancy" width={800} height={900} loading="lazy"
                 className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-2xl" />
          </div>
          <div className="reveal">
            <p className="eyebrow">A message from our Founder &amp; CEO</p>
            <blockquote className="mt-6">
              <p className="font-serif text-3xl leading-snug text-maroon-dark md:text-4xl">
                &ldquo;Every year, I meet students in our Lahore office who carry the same quiet question: can someone like me really study abroad? My answer is always yes, as long as you have the right guidance from the very first step.&rdquo;
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                I founded Sky Bridge Consultancy because I saw too many talented young people lose their chance. Over the past six years, my team and I have worked to change that for more than 300 students. We will never promise you shortcuts, but we will always tell you the truth and stay with you until you board your flight.
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span>
                  <span className="block font-serif text-2xl font-semibold text-maroon">Ibrar Ahmad</span>
                  <span className="text-sm text-muted">Founder &amp; CEO, Sky Bridge Consultancy</span>
                </span>
              </footer>
            </blockquote>
            <Link href="/about/#ceo-message" className="mt-8 inline-flex items-center gap-2 font-semibold text-maroon">Read the full message <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading eyebrow="FAQ" title="Questions students ask us most" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq reveal group rounded-2xl border border-line bg-white px-6 open:shadow-md" open={i === 0}>
              <summary className="flex items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-maroon-dark">
                {f.q}
                <span className="chev flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-champagne text-xl leading-none text-maroon">+</span>
              </summary>
              <p className="pb-6 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center"><Link href="/faq/" className="inline-flex items-center gap-2 font-semibold text-maroon">View all FAQs <ArrowRight className="h-4 w-4" /></Link></p>
      </section>

      {/* ===== CONTACT / INQUIRY ===== */}
      <section id="contact" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_.7fr]">
          <div className="reveal">
            <SectionHeading center={false} eyebrow="Free consultation" title="Tell us about your plans"
              intro="Fill in a few details and send them to our team on WhatsApp. An advisor will reply during office hours." />
            <div className="mt-10"><InquiryForm /></div>
          </div>
          <aside className="reveal flex flex-col gap-4">
            <div className="rounded-3xl bg-maroon p-8 text-white">
              <h3 className="font-serif text-3xl font-semibold">Visit our office</h3>
              <ul className="mt-6 space-y-4 text-champagne/90">
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-light" />{site.address.full}</li>
                <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-gold-light" /><span>{site.hours.days}<br />{site.hours.time}</span></li>
                <li className="flex gap-3"><Users className="mt-1 h-5 w-5 shrink-0 text-gold-light" />Walk in or book ahead on WhatsApp</li>
              </ul>
            </div>
            <a href={`tel:${site.phoneE164}`} className="rounded-3xl border border-line p-6 transition hover:border-gold">
              <p className="text-sm text-muted">Call us</p>
              <p className="mt-1 font-serif text-3xl font-semibold text-maroon">{site.phoneDisplay}</p>
            </a>
            <a href={`mailto:${site.email}`} className="rounded-3xl border border-line p-6 transition hover:border-gold">
              <p className="text-sm text-muted">Email</p>
              <p className="mt-1 break-all font-semibold text-maroon">{site.email}</p>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
