import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Digital Solutions — Bihar's #1 Digital Marketing Agency",
  description: "Website development, Google SEO, GMB optimization, and Google Ads for local businesses in Bihar. 200+ businesses growing. Based in Forbesganj, Araria.",
  keywords: "digital marketing forbesganj, website design bihar, seo agency araria, google ads forbesganj, jk digital solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
