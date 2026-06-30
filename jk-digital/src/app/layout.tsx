import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JK Digital Solutions — Bihar's #1 Digital Marketing Agency",
  description: "Website development, Google SEO, GMB optimization, and Google Ads for local businesses in Bihar. 200+ businesses growing. Based in Forbesganj, Araria.",
  keywords: "digital marketing forbesganj, website design bihar, seo agency araria, google ads forbesganj, jk digital solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
