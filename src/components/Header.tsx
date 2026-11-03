import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { nav, site, waLink } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="hidden bg-maroon-dark text-[13px] text-champagne/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>{site.hours.days}, {site.hours.time}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneE164}`} className="hover:text-gold-light">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-header.svg" alt={`${site.name} logo`} width={230} height={56} className="h-12 w-auto md:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-ink/80">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="transition-colors hover:text-maroon">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={waLink("Hello Sky Bridge, I would like to book a free consultation.")} target="_blank" rel="noopener"
             className="hidden rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-maroon-dark sm:inline-block">
            Free Consultation
          </a>
          <a href={`tel:${site.phoneE164}`} aria-label="Call us" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-maroon sm:hidden">
            <Phone className="h-4 w-4" />
          </a>
          <details className="group relative lg:hidden">
            <summary aria-label="Open menu" className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line text-maroon [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5 group-open:hidden" />
              <X className="hidden h-5 w-5 group-open:block" />
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-12 w-64 rounded-2xl border border-line bg-white p-3 shadow-xl">
              <ul className="flex flex-col">
                {nav.map((n) => (
                  <li key={n.href}><Link href={n.href} className="block rounded-lg px-3 py-2.5 font-medium text-ink/85 hover:bg-cream hover:text-maroon">{n.label}</Link></li>
                ))}
              </ul>
              <a href={waLink("Hello Sky Bridge, I would like to book a free consultation.")} target="_blank" rel="noopener"
                 className="mt-2 block rounded-full bg-maroon px-4 py-2.5 text-center text-sm font-semibold text-white">Free Consultation</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
