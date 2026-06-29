import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Digital Solutions | डिजिटल मार्केटिंग एजेंसी - Forbesganj, Bihar",
  description: "JK Digital Solutions - अपने बिजनेस को ऑनलाइन ब्रांड बनाएं। Website Development, SEO, Google My Business, और Paid Ads सर्विसेज। Forbesganj, Araria, Bihar।",
  keywords: "digital marketing, SEO, website development, Google Ads, Meta Ads, Forbesganj, Araria, Bihar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
