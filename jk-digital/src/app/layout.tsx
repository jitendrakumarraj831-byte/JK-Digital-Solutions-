import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Digital Solutions — Forbesganj, Bihar | Website, SEO, Google Ads",
  description: "Forbesganj, Araria, Bihar की top digital marketing agency। Website Development, Google SEO, GMB Optimization और Google Ads। Free consultation available।",
  keywords: "digital marketing forbesganj, website design araria, google seo bihar, google ads forbesganj, GMB optimization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
