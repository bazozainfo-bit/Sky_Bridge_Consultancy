import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource-variable/inter";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sky Bridge Consultancy | Study Abroad & Visa Consultants in Lahore",
    template: "%s | Sky Bridge Consultancy",
  },
  description:
    "Sky Bridge Consultancy in Lahore guides students to study abroad in Germany, Italy, Australia, New Zealand, the UK, Turkey and North Cyprus, with fully funded scholarship guidance, tourist visas and air ticketing. Free consultation.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: site.name,
    title: "Sky Bridge Consultancy | Study Abroad & Visa Consultants in Lahore",
    description: "Honest study abroad, scholarship and visa guidance from Lahore. 6+ years, 300+ students. Free consultation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sky Bridge Consultancy" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#4a0f18", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TravelAgency", "EducationalOrganization"],
      "@id": `${site.url}/#business`,
      name: site.name,
      alternateName: "SkyBridge Visa Consultants",
      slogan: site.tagline,
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      image: `${site.url}/og-image.png`,
      telephone: site.phoneE164,
      email: site.email,
      priceRange: "Free consultation",
      founder: { "@type": "Person", name: site.founder, jobTitle: "Founder & CEO" },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.line1}, ${site.address.line2}`,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00", closes: "17:00",
      }],
      areaServed: { "@type": "Country", name: "Pakistan" },
      sameAs: [site.facebook],
      knowsAbout: ["Study abroad", "Fully funded scholarships", "Student visa", "Tourist visa", "Air ticketing"],
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#business` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('sb-loaded'))d.classList.add('no-loader')}catch(e){}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <div className="loader" id="loader" aria-hidden="true">
          <div className="loader-stage">
            <div className="loader-ring" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-icon.svg" alt="" width={110} height={110} className="loader-logo" />
            <div className="loader-orbit">
              <svg className="loader-plane" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
            </div>
          </div>
          <p className="loader-name">SKYBRIDGE</p>
          <div className="loader-bar" />
        </div>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingButtons />
        <script src="/site.js" defer />
      </body>
    </html>
  );
}
