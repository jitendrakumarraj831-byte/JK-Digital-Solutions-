import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Digital Solutions | Website, SEO, GMB & Google Ads — Forbesganj, Bihar",
  description: "JK Digital Solutions — Professional Digital Marketing Agency in Forbesganj, Araria, Bihar. Website Development, Google SEO, Google Business Profile (GMB), Google Ads. अपने Business को Google पर Grow करें।",
  keywords: "digital marketing agency Forbesganj, website development Bihar, Google SEO Araria, GMB optimization, Google Ads Bihar, JK Digital Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
