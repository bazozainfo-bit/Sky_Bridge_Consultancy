import Link from "next/link";
import { site, studyCountries, visaCountries } from "@/data/site";
import { WhatsAppIcon } from "./ui";

const field = "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export default function InquiryForm({ defaultService = "" }: { defaultService?: string }) {
  const countries = Array.from(new Set([...studyCountries.map((c) => c.name), ...visaCountries.map((c) => c.name)]));
  return (
    <form data-whatsapp={site.whatsapp} noValidate className="grid gap-4 sm:grid-cols-2">
      <label className="sm:col-span-1">
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Full name *</span>
        <input name="name" type="text" autoComplete="name" required placeholder="Ahmed Khan" className={field} />
      </label>
      <label className="sm:col-span-1">
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Phone / WhatsApp *</span>
        <input name="phone" type="tel" autoComplete="tel" required placeholder="0300 1234567" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Service</span>
        <select name="service" defaultValue={defaultService} className={field}>
          <option value="">Select a service</option>
          <option>Study Abroad</option>
          <option>Tourist / Visit Visa</option>
          <option>Air Ticketing</option>
        </select>
      </label>
      <label>
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Country</span>
        <select name="country" defaultValue="" className={field}>
          <option value="">Select a country</option>
          {countries.map((c) => <option key={c}>{c}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Program (for study abroad)</span>
        <select name="program" defaultValue="" className={field}>
          <option value="">Select a program</option>
          <option>BS (Bachelor&apos;s)</option>
          <option>MS (Master&apos;s)</option>
          <option>PhD</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="mb-1.5 block text-sm font-medium text-ink/80">Message (optional)</span>
        <textarea name="message" rows={3} placeholder="Tell us about your last degree, grades or travel plans" className={field} />
      </label>
      <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
        <input name="agree" type="checkbox" className="mt-0.5 h-4 w-4 accent-maroon" />
        <span>I agree to the <Link href="/terms-and-conditions/" className="font-medium text-maroon underline underline-offset-2">Terms &amp; Conditions</Link> and <Link href="/privacy-policy/" className="font-medium text-maroon underline underline-offset-2">Privacy Policy</Link>.</span>
      </label>
      <p data-error hidden role="alert" className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 sm:col-span-2" />
      <div className="sm:col-span-2">
        <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3.5 font-semibold text-white shadow-md shadow-maroon/20 transition hover:bg-maroon-dark sm:w-auto">
          <WhatsAppIcon /> Send on WhatsApp
        </button>
        <p className="mt-3 text-xs text-muted">Your details open in WhatsApp as a message to our team. Nothing is sent until you press send there.</p>
        <p data-success hidden className="mt-3 rounded-lg bg-champagne/60 px-4 py-2 text-sm text-maroon-dark">
          WhatsApp should open now. If it didn&apos;t, <a href="#" target="_blank" rel="noopener" className="font-semibold underline">tap here to send your message</a>.
        </p>
      </div>
    </form>
  );
}
