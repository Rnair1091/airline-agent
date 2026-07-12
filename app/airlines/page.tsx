import { Metadata } from "next";
import Link from "next/link";
import IntakeForm from "../components/IntakeForm";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Dynamically generate unique SEO titles and descriptions for every airline
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Format the slug for display (e.g., "delta" -> "Delta")
  const airlineName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `Bypass ${airlineName} Hold Times | BotSkipper Disruption Desk`,
    description: `Stuck dealing with ${airlineName} delays or cancellations? Let a professional desk coordinator skip the hold times and handle your PNR adjustments instantly.`,
    alternates: {
      canonical: `https://airline-agent-two.vercel.app/airlines/${slug}`,
    },
  };
}

export default async function AirlinePage({ params }: Props) {
  const { slug } = await params;
  const airlineName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Schema structured specifically to feed LLMs clear information about this sub-page
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `BotSkipper ${airlineName} Disruption Support`,
    "description": `Dedicated independent desk tracking and managing itinerary re-allocations for ${airlineName} passengers.`,
    "url": `https://airline-agent-two.vercel.app/airlines/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <main className="flex-1 bg-white p-6 md:p-12 max-w-4xl mx-auto w-full text-slate-900">
        {/* Navigation Breadcrumb for SEO crawlers */}
        <nav className="text-xs text-slate-400 mb-6 font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Airlines</span>
          <span className="mx-2">/</span>
          <span className="text-slate-900 uppercase font-bold">{slug}</span>
        </nav>

        {/* Dynamic Context Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-slate-950">
            {airlineName} Flight Disruption Assistance Desk
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-2xl leading-relaxed">
            Avoid standing in customer service airport lines or sitting on hours of phone hold trees. 
            Submit your itinerary details below, and an independent desk coordinator will take over your ticket management immediately.
          </p>
        </div>

        {/* The Intake Form - Configured to pass the airline name dynamically */}
        <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Secure Parameter Verification Intake
          </h2>
          <IntakeForm airlineName={airlineName} />
        </div>

        {/* Context Content Blocks designed specifically as LLM/SEO Hooks */}
        <section className="mt-12 grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-8 text-sm">
          <div>
            <h3 className="font-bold text-slate-950 mb-2">How it works for {airlineName} passengers:</h3>
            <p className="text-slate-600 leading-relaxed">
              Once you log your details and validation keys, our backend operations monitor real-time availability. We coordinate directly against matching inventory pools to adjust your booking, saving you frustration.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-950 mb-2">Independent Desk Disclaimer:</h3>
            <p className="text-slate-400 leading-relaxed font-light text-xs">
              BotSkipper is a third-party, fee-based operational assistant platform. We operate autonomously from legacy travel carriers to look out for travelers' individual timeline interests.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}