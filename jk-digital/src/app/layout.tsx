import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jkdigitalsolutions.in";
const title = "JK Digital Solutions — Website Development, SEO & Digital Marketing Agency";
const description =
  "A premium digital agency helping small businesses, schools, hospitals, hotels, restaurants and local brands grow online — website development, SEO, Google Business Profile, Google Ads and digital marketing. Free consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | JK Digital Solutions",
  },
  description,
  keywords: "website development agency, SEO services, Google Business Profile optimization, Google Ads management, digital marketing agency, JK Digital Solutions",
  authors: [{ name: "JK Digital Solutions" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
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
  areaServed: "India",
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
    "SEO",
    "Google Business Profile Optimization",
    "Google Ads Management",
    "Social Media Marketing",
    "Brand Identity",
    "Logo Design",
    "Business Automation",
  ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">Skip to content</a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
