import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/blocks";
import InquiryForm from "@/components/InquiryForm";
import { FacebookIcon, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { site, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Sky Bridge Consultancy | Lahore Office, Phone & WhatsApp" },
  description: "Contact Sky Bridge Consultancy in Lahore. Office # 8, Green Complex, Main Ferozepur Road. Call or WhatsApp +92 312 3081675. Monday to Saturday, 10 AM to 5 PM.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <>
      <PageHero eyebrow="Contact us" title={<>Let&apos;s Talk About <span className="italic text-gold-light">Your Plans</span></>}
        lead="Visit our Lahore office, call us or send a message on WhatsApp. Your first consultation is free."
        crumbs={[{ name: "Contact", href: "/contact/" }]} />

      <section className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { i: <Phone className="h-5 w-5" />, t: "Call us", v: site.phoneDisplay, href: `tel:${site.phoneE164}` },
          { i: <WhatsAppIcon className="h-5 w-5" />, t: "WhatsApp", v: site.phoneDisplay, href: waLink() },
          { i: <Mail className="h-5 w-5" />, t: "Email", v: site.email, href: `mailto:${site.email}` },
          { i: <Clock className="h-5 w-5" />, t: "Office hours", v: `${site.hours.days}, ${site.hours.time}` },
        ].map((c) => {
          const inner = (
            <>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-gold-light">{c.i}</span>
              <p className="mt-4 text-sm text-muted">{c.t}</p>
              <p className="mt-1 font-semibold text-maroon-dark [overflow-wrap:anywhere]">{c.v}</p>
            </>
          );
          return c.href ? (
            <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="reveal rounded-3xl border border-line bg-white p-6 shadow-lg shadow-maroon/5 transition hover:border-gold">{inner}</a>
          ) : (
            <div key={c.t} className="reveal rounded-3xl border border-line bg-white p-6 shadow-lg shadow-maroon/5">{inner}</div>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_.8fr]">
        <div className="reveal">
          <SectionHeading center={false} eyebrow="Send a message" title="Free consultation request" intro="Fill in your details and send them to us on WhatsApp. We reply during office hours." />
          <div className="mt-10"><InquiryForm /></div>
        </div>
        <aside className="reveal space-y-4">
          <div className="rounded-3xl bg-maroon p-8 text-white">
            <h2 className="font-serif text-3xl font-semibold">Our office</h2>
            <p className="mt-4 flex gap-3 text-champagne/90"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-light" />{site.address.full}</p>
            <p className="mt-4 flex gap-3 text-champagne/90"><Clock className="mt-1 h-5 w-5 shrink-0 text-gold-light" /><span>{site.hours.days}, {site.hours.time}<br />{site.hours.closed}</span></p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noopener" className="mt-6 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-maroon-deep hover:bg-gold-light">Get directions</a>
          </div>
          <a href={site.facebook} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-3xl border border-line bg-white p-6 hover:border-gold">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white"><FacebookIcon /></span>
            <span><span className="block font-semibold text-maroon-dark">Follow us on Facebook</span><span className="text-sm text-muted">News, updates and success stories</span></span>
          </a>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="reveal overflow-hidden rounded-[2rem] border border-line bg-white">
          <iframe title="Sky Bridge Consultancy office location on Google Maps" src={mapSrc} width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full" />
        </div>
      </section>
    </>
  );
}
