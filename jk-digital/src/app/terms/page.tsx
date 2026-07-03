import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of JK Digital Solutions' website and services.",
};

const sections = [
  {
    title: "Our Services",
    body: "JK Digital Solutions provides website development, SEO, Google Business Profile optimisation, Google Ads management, social media marketing, brand identity, logo design, and business automation services. The exact scope of any engagement is defined in a proposal or agreement shared with you before work begins.",
  },
  {
    title: "Free Consultation",
    body: "The free consultation is a good-faith review of your current online presence and does not guarantee any specific outcome. Recommendations are based on the information you provide and publicly available data.",
  },
  {
    title: "Payments & Billing",
    body: "Unless otherwise agreed, services are billed monthly with no long-term lock-in. Prices shown on this website exclude applicable taxes. We'll confirm final pricing in writing before starting any paid engagement.",
  },
  {
    title: "Cancellations",
    body: "You may cancel an ongoing monthly service at any time by notifying us in writing (email or WhatsApp). Work already completed or in progress for the current billing cycle is non-refundable.",
  },
  {
    title: "Results & Performance",
    body: "While we work diligently to improve rankings, traffic, and leads, digital marketing outcomes depend on factors outside our control — including search engine algorithm changes, market conditions, and competitor activity. We do not guarantee specific rankings or revenue figures.",
  },
  {
    title: "Intellectual Property",
    body: "Upon full payment, you own the final deliverables created specifically for you (website, logo, brand assets). We retain the right to showcase completed work in our portfolio unless you request otherwise in writing.",
  },
  {
    title: "Limitation of Liability",
    body: "JK Digital Solutions is not liable for indirect or consequential losses arising from the use of our services, to the maximum extent permitted by law.",
  },
  {
    title: "Contact Us",
    body: "Questions about these terms can be sent to jkdigitalsolutionfbg@gmail.com or +91 86510 70831.",
  },
];

export default function TermsOfService() {
  return (
    <main style={{ background: "#FCFCFD", minHeight: "100vh", padding: "80px 0 100px" }}>
      <div className="wrap-sm">
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 600, color: "#1D4ED8", textDecoration: "none", marginBottom: "32px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to home
        </Link>
        <p className="t-label" style={{ marginBottom: "14px" }}>Legal</p>
        <h1 className="t-h1" style={{ fontSize: "clamp(32px,4.5vw,44px)", marginBottom: "12px" }}>Terms of Service</h1>
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
