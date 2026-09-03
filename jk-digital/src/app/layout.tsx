import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jkdigitalsolutions.in";
const title = "JK Digital Solutions — Website Development, SEO & Digital Marketing Agency in Bihar";
const description =
  "A premium digital agency helping small businesses, schools, hospitals, hotels, restaurants and local brands across Bihar grow online — serving Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Purnia, Katihar, Begusarai, Araria, Forbesganj and beyond with website development, SEO, Google Business Profile, Google Ads and digital marketing. Free consultation.";

const biharCities = [
  "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia",
  "Katihar", "Begusarai", "Munger", "Chhapra", "Arrah", "Bettiah",
  "Saharsa", "Sasaram", "Hajipur", "Siwan", "Motihari", "Araria", "Forbesganj",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | JK Digital Solutions",
  },
  description,
  keywords: [
    "digital marketing agency in Bihar",
    "website development company Bihar",
    "SEO services Bihar",
    "Google Business Profile optimization Bihar",
    "Google Ads management Bihar",
    "digital marketing agency Patna",
    "website design Patna",
    "SEO company Araria Forbesganj",
    "JK Digital Solutions",
  ].join(", "),
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
  areaServed: [
    { "@type": "State", name: "Bihar" },
    ...biharCities.map(name => ({ "@type": "City", name })),
  ],
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

// Kept in sync with the visible FAQ section (src/components/FAQ.tsx) —
// structured data must match on-page content per Google's guidelines,
// and clear Q&A pairs like these are what Google's AI Overviews tend to
// lift directly into their summaries.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide digital marketing services across Bihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JK Digital Solutions works with businesses throughout Bihar — including Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Purnia, Katihar, Begusarai, Araria and Forbesganj. Everything is managed remotely over WhatsApp and calls, so location is never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost in Bihar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website packages with JK Digital Solutions start at ₹8,999. The exact price depends on the number of pages and features you need — message us on WhatsApp for a free, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you set up Google Business Profile (Google My Business)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Google Business Profile setup and optimisation is one of our most popular services, helping local businesses across Bihar show up in Google Maps and local search results.",
      },
    },
    {
      "@type": "Question",
      name: "How soon do SEO and Google Ads results show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO typically shows visible ranking movement in 60–90 days. Google Ads and Google Business Profile optimisation deliver results much faster, usually within 1–2 weeks of launch.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">Skip to content</a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
