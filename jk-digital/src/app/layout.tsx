import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jkdigitalsolutions.in";
const title = "JK Digital Solutions — Bihar's #1 Digital Marketing Agency";
const description =
  "Website development, Google SEO, GMB optimization, and Google Ads for local businesses in Bihar. 200+ businesses growing. Based in Forbesganj, Araria.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | JK Digital Solutions",
  },
  description,
  keywords: "digital marketing forbesganj, website design bihar, seo agency araria, google ads forbesganj, jk digital solutions",
  authors: [{ name: "JK Digital Solutions" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: siteUrl,
    siteName: "JK Digital Solutions",
    title,
    description,
    images: [{ url: "/jk-icon.png", width: 512, height: 512, alt: "JK Digital Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/jk-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/jk-icon.png",
    apple: "/jk-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JK Digital Solutions",
  image: `${siteUrl}/jk-icon.png`,
  url: siteUrl,
  telephone: "+91-86510-70831",
  email: "jkdigitalsolutionfbg@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Forbesganj",
    addressLocality: "Araria",
    addressRegion: "Bihar",
    postalCode: "854318",
    addressCountry: "IN",
  },
  areaServed: "Bihar, India",
  sameAs: [
    "https://instagram.com/jkdigitalsolutions",
    "https://facebook.com/jkdigitalsolutions",
    "https://youtube.com/@jkdigitalsolutions",
    "https://linkedin.com/company/jkdigitalsolutions",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  makesOffer: [
    "Website Development",
    "Google SEO",
    "Google Business Profile Optimization",
    "Google Ads Management",
    "Social Media Marketing",
    "Logo & Branding",
    "Business Automation",
  ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
