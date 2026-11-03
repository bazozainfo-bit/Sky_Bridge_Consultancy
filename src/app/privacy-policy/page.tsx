import type { Metadata } from "next";
import { PageHero, Prose } from "@/components/blocks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sky Bridge Consultancy collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lead="Your trust matters. This policy explains how we handle your personal information." crumbs={[{ name: "Privacy Policy", href: "/privacy-policy/" }]} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-muted">Last updated: November 2026</p>
        <Prose>
          <h2>Information we collect</h2>
          <p>When you contact us or use our services, we may collect your name, phone and WhatsApp number, email, passport and CNIC details, academic records, financial documents, travel plans and any other information needed for your application or booking.</p>

          <h2>How we use it</h2>
          <ul>
            <li>To advise you and provide the services you request.</li>
            <li>To prepare and submit applications to universities, embassies, visa centres and airlines on your behalf.</li>
            <li>To contact you about your case by phone, WhatsApp or email.</li>
            <li>To meet our legal and accounting obligations.</li>
          </ul>

          <h2>Sharing your information</h2>
          <p>We share your information only with the organisations involved in your application or booking, such as universities, embassies, visa application centres and airlines, or when the law requires it. We do not sell your personal information.</p>

          <h2>Website inquiry form</h2>
          <p>Our website form does not store your details on our website. When you press send, your details open as a WhatsApp message that you choose to send to us.</p>

          <h2>Keeping your information safe</h2>
          <p>We take reasonable steps to protect your documents and information, and we keep them only for as long as needed for your case and our legal obligations.</p>

          <h2>Your choices</h2>
          <p>You can ask us what information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it.</p>

          <h2>Contact</h2>
          <p>For privacy questions, contact us at {site.email} or {site.phoneDisplay}, or visit us at {site.address.full}.</p>
        </Prose>
      </section>
    </>
  );
}
