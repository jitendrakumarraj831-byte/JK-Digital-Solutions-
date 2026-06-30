import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Digital Solutions — Forbesganj, Bihar | Website, SEO, Google Ads",
  description: "Forbesganj, Araria, Bihar की top digital marketing agency। Website Development, Google SEO, GMB Optimization और Google Ads। Free consultation available।",
  keywords: "digital marketing forbesganj, website design araria, google seo bihar, google ads forbesganj, GMB optimization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
