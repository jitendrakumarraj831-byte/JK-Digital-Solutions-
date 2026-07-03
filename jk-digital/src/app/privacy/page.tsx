import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How JK Digital Solutions collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit our contact form, request a free consultation, or subscribe to our newsletter, we collect your name, phone number, email address, and any details you share about your business and requirements.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to respond to enquiries, provide the free consultation you requested, deliver the services you've signed up for, and — if you've opted in — send occasional marketing updates. We never sell your information to third parties.",
  },
  {
    title: "WhatsApp & Communication",
    body: "If you contact us via WhatsApp or provide a phone number, we may reach out to discuss your enquiry, share proposals, or provide project updates. You can ask us to stop contacting you at any time.",
  },
  {
    title: "Cookies & Analytics",
    body: "Our website may use cookies and analytics tools to understand how visitors use the site, so we can improve performance and content. This data is aggregated and does not personally identify you.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organisational measures to protect the information you share with us from unauthorised access, loss, or misuse.",
  },
  {
    title: "Your Rights",
    body: "You can request a copy of the information we hold about you, ask us to correct it, or request that it be deleted, by contacting us using the details below.",
  },
  {
    title: "Contact Us",
    body: "For any privacy-related questions, email us at jkdigitalsolutionfbg@gmail.com or call +91 86510 70831.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "#FCFCFD", minHeight: "100vh", padding: "80px 0 100px" }}>
      <div className="wrap-sm">
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 600, color: "#1D4ED8", textDecoration: "none", marginBottom: "32px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to home
        </Link>
        <p className="t-label" style={{ marginBottom: "14px" }}>Legal</p>
        <h1 className="t-h1" style={{ fontSize: "clamp(32px,4.5vw,44px)", marginBottom: "12px" }}>Privacy Policy</h1>
        <p className="t-body" style={{ marginBottom: "48px" }}>Last updated: July 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {sections.map(s => (
            <div key={s.title}>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "10px", letterSpacing: "-0.01em" }}>{s.title}</h2>
              <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
