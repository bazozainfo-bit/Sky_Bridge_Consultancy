import Link from "next/link";
import { waLink } from "@/data/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-icon.svg" alt="" width={140} height={140} className="h-36 w-36" />
      <p className="eyebrow mt-8">Page not found</p>
      <h1 className="mt-4 text-5xl font-semibold text-maroon-dark">This page took a different flight</h1>
      <p className="mt-4 text-lg text-muted">The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get you back on route.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-maroon px-6 py-3 font-semibold text-white hover:bg-maroon-dark">Back to home</Link>
        <Link href="/study-abroad/" className="rounded-full border border-line bg-white px-6 py-3 font-semibold text-maroon hover:border-gold">Study abroad</Link>
        <a href={waLink()} target="_blank" rel="noopener" className="rounded-full border border-line bg-white px-6 py-3 font-semibold text-maroon hover:border-gold">WhatsApp us</a>
      </div>
    </section>
  );
}
