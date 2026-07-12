import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optimized SEO Metadata for Google Search and AI Web Crawlers
export const metadata: Metadata = {
  title: "BotSkipper | Premium Travel Disruption Coordination Layer",
  description: "Bypass manual legacy carrier customer service hold times. Securely delegate PNR modifications, flight cancellations, and immediate airline seat re-allocations to an on-duty coordinator.",
  keywords: ["travel disruption coordination", "airline phone hold bypass", "PNR itinerary manager", "flight rebooking assistant", "GDS reservation sync"],
  alternates: {
    canonical: "https://airline-agent-two.vercel.app",
  },
  openGraph: {
    title: "BotSkipper | Travel Disruption Resolution Services",
    description: "Bypass dynamic phone trees and airline customer service hold times. Securely delegate your itinerary changes to a dedicated desk coordinator.",
    url: "https://airline-agent-two.vercel.app",
    siteName: "BotSkipper",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Structured Data Schema (JSON-LD) to turn the site into an LLM Magnet
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "BotSkipper",
    "description": "Independent travel coordination assistant layer managing complex flight disruptions, dynamic PNR modifications, and carrier customer service hold times.",
    "url": "https://airline-agent-two.vercel.app",
    "areaServed": "Global",
    "serviceType": "Travel Disruption Resolution Services",
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Injecting the clean structured data directly for AI Bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}