import Link from "next/link";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { site, studyCountries, waLink } from "@/data/site";
import { FacebookIcon, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="grid-pattern relative bg-maroon-deep text-champagne/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-header-light.svg" alt={`${site.name} logo`} width={230} height={56} className="h-14 w-auto" />
          <p className="mt-5 text-sm leading-relaxed">
            {site.name} is a Lahore-based study abroad and visa consultancy helping students and families plan their next step with honest, personal guidance.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-xs font-semibold text-gold-light">
            <ShieldCheck className="h-4 w-4" /> FBR Registered Business (NTN Active)
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-white">Study Destinations</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {studyCountries.map((c) => (
              <li key={c.slug}><Link href={`/study-in-${c.slug}/`} className="hover:text-gold-light">Study in {c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/study-abroad/" className="hover:text-gold-light">Study Abroad</Link></li>
            <li><Link href="/tourist-visa/" className="hover:text-gold-light">Tourist Visa</Link></li>
            <li><Link href="/air-ticketing/" className="hover:text-gold-light">Air Ticketing</Link></li>
            <li><Link href="/about/" className="hover:text-gold-light">About Us</Link></li>
            <li><Link href="/faq/" className="hover:text-gold-light">FAQ</Link></li>
            <li><Link href="/contact/" className="hover:text-gold-light">Contact</Link></li>
            <li><Link href="/terms-and-conditions/" className="hover:text-gold-light">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy-policy/" className="hover:text-gold-light">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl font-semibold text-white">Visit Our Office</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{site.address.full}</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`tel:${site.phoneE164}`} className="hover:text-gold-light">{site.phoneDisplay}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${site.email}`} className="break-all hover:text-gold-light">{site.email}</a></li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{site.hours.days}, {site.hours.time}<br />{site.hours.closed}</span></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={site.facebook} target="_blank" rel="noopener" aria-label="Sky Bridge Consultancy on Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-maroon-deep"><FacebookIcon /></a>
            <a href={waLink()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-maroon-deep"><WhatsAppIcon /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs leading-relaxed text-champagne/60">
          <p>{site.name} is a private consultancy and is not affiliated with any embassy or government. Visa, admission and scholarship decisions are made solely by the relevant embassy, university or authority.</p>
          <p className="mt-2">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
