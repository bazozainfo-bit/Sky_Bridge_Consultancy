import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Prose } from "@/components/blocks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the study abroad, visa and air ticketing services of Sky Bridge Consultancy, Lahore.",
  alternates: { canonical: "/terms-and-conditions/" },
};

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" lead="Please read these terms carefully before using our services." crumbs={[{ name: "Terms & Conditions", href: "/terms-and-conditions/" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-muted">Last updated: November 2026</p>
        <Prose>
          <h2>1. Introduction</h2>
          <p>These Terms &amp; Conditions apply to all services provided by {site.name} (&ldquo;Sky Bridge&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a business registered in Pakistan with its office at {site.address.full}. By using our website or services, you agree to these terms.</p>

          <h2>2. Our services</h2>
          <p>We provide guidance and application support for study abroad admissions and scholarships, student and visit visas, and local and international air ticketing. We are a private consultancy and are not affiliated with any embassy, government, university or airline.</p>

          <h2>3. Free consultation</h2>
          <p>Your first consultation is free and does not oblige you to use any paid service.</p>

          <h2>4. Service charges and payment</h2>
          <p>Our service charges depend on the service and destination. They are explained and agreed in writing before any payment is made. Work on a paid service begins after the agreed payment is received.</p>

          <h2>5. Refunds</h2>
          <p>Refund terms for our service charges are shared in writing before payment. Unless agreed otherwise in writing, service charges for work that has already been carried out are not refundable.</p>

          <h2>6. Third-party fees</h2>
          <p>Fees paid to third parties, including embassies, visa application centres (such as VFS), universities, testing bodies, banks, insurers and airlines, are not part of our service charges. They are subject to the third party&apos;s own rules and are generally non-refundable, including when an application is refused.</p>

          <h2>7. No guarantee of outcome</h2>
          <p>Visa, admission and scholarship decisions are made solely by the relevant embassy, immigration authority, university or awarding body. Sky Bridge does not and cannot guarantee any visa, admission, scholarship or other outcome. Our role is to advise you honestly and help you prepare a complete and accurate application.</p>

          <h2>8. Your responsibilities</h2>
          <ul>
            <li>Provide complete, accurate and genuine information and documents.</li>
            <li>Respond to our requests on time and attend appointments and interviews as scheduled.</li>
            <li>Read and check all forms before they are submitted.</li>
            <li>Follow the conditions of any visa you receive.</li>
          </ul>

          <h2>9. False or misleading documents</h2>
          <p>We do not prepare, accept or submit fake or altered documents. If we find that any information or document you provided is false or misleading, we may stop working on your case immediately, and no refund will be due.</p>

          <h2>10. Air tickets</h2>
          <p>Fares, availability, baggage, changes, cancellations and refunds are governed by the airline&apos;s fare rules, which we explain before booking. Fares are confirmed only at the time of issue.</p>

          <h2>11. Deadlines and delays</h2>
          <p>We are not responsible for delays or decisions caused by embassies, universities, airlines or other third parties, or by late or incomplete information from you.</p>

          <h2>12. Privacy</h2>
          <p>We use your personal information only to provide our services. Please see our <Link href="/privacy-policy/">Privacy Policy</Link>.</p>

          <h2>13. Limitation of liability</h2>
          <p>To the extent permitted by law, our liability for any claim relating to our services is limited to the service charges you paid to us for that service.</p>

          <h2>14. Changes to these terms</h2>
          <p>We may update these terms from time to time. The version published on this page applies from its &ldquo;last updated&rdquo; date.</p>

          <h2>15. Governing law</h2>
          <p>These terms are governed by the laws of Pakistan, and the courts of Lahore have jurisdiction over any dispute.</p>

          <h2>16. Contact</h2>
          <p>Questions about these terms? Call or WhatsApp {site.phoneDisplay}, email {site.email}, or visit our office.</p>
        </Prose>
      </section>
    </>
  );
}
