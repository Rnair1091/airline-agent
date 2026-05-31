import { Metadata } from 'next'

// Airline data - we'll move this to Airtable later
const airlines: Record<string, any> = {
  'air-india': {
    name: 'Air India',
    phone: '1-800-180-1407',
    ivr: 'Press 2, then press 4, then say "agent" when prompted',
    bestTime: '6am–8am IST weekdays',
    waitTime: '8–12 minutes average',
    alternative: 'Twitter @AirIndia or airindia.in live chat',
    issues: ['refund', 'rebooking', 'lost baggage', 'cancellation', 'upgrade'],
    faq: [
      {
        q: 'How do I talk to a real person at Air India?',
        a: 'Call 1-800-180-1407, press 2, then 4, then say "agent" when the automated system prompts you. This bypasses the IVR and connects you to a live representative.'
      },
      {
        q: 'What is the fastest way to reach Air India customer service?',
        a: 'Calling between 6am and 8am IST on weekdays gives the shortest wait times — typically under 5 minutes. Avoid calling on Mondays and after international flight delays.'
      },
      {
        q: 'Can I get a refund from Air India by calling?',
        a: 'Yes. A live Air India agent can process refunds for cancelled or significantly delayed flights. Have your PNR number ready before calling.'
      }
    ]
  },
  'indigo': {
    name: 'IndiGo',
    phone: '0124-6173838',
    ivr: 'Press 2 for English, then press 1 for existing bookings, then say "agent"',
    bestTime: '7am–9am IST weekdays',
    waitTime: '10–15 minutes average',
    alternative: 'Twitter @IndiGo6E or goindigo.in chat',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'web check-in'],
    faq: [
      {
        q: 'How do I speak to a human at IndiGo?',
        a: 'Call 0124-6173838, press 2 for English, then 1 for existing bookings, then say "agent". You will be connected to a live IndiGo representative.'
      },
      {
        q: 'What is IndiGo customer service wait time?',
        a: 'Average wait is 10–15 minutes. Calling early morning between 7am and 9am IST significantly reduces wait times.'
      },
      {
        q: 'How do I get a refund from IndiGo?',
        a: 'IndiGo refunds can be processed by a live agent. Call with your PNR and the reason for cancellation. Refunds typically take 7–10 business days.'
      }
    ]
  },
  'emirates': {
    name: 'Emirates',
    phone: '1-800-777-3999',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am–10am GMT weekdays',
    waitTime: '5–10 minutes average',
    alternative: 'emirates.com live chat or Twitter @EmiratesSupport',
    issues: ['refund', 'rebooking', 'miles', 'upgrade', 'baggage allowance'],
    faq: [
      {
        q: 'How do I reach a live agent at Emirates?',
        a: 'Call 1-800-777-3999, press 1 for English, press 2 for existing bookings, then press 0 to bypass the IVR and reach a live Emirates agent directly.'
      },
      {
        q: 'What is the best time to call Emirates customer service?',
        a: 'Between 8am and 10am GMT on weekdays. Emirates operates 24/7 but these hours have the shortest queues.'
      },
      {
        q: 'Can Emirates agents change my flight over the phone?',
        a: 'Yes. Emirates phone agents can rebook flights, process upgrades, add baggage, and handle refunds. Have your booking reference ready.'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const airline = airlines[slug]
  if (!airline) return { title: 'Airline Not Found' }
  return {
    title: `How to Talk to a Human at ${airline.name} | AirlineHuman`,
    description: `Skip the IVR. Reach a real ${airline.name} agent fast. Direct phone number, exact key sequence, and best times to call.`,
  }
}

export default async function AirlinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const airline = airlines[slug]

  if (!airline) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Airline not found</h1>
          <a href="/" className="text-blue-600 hover:underline">Back to home</a>
        </div>
      </main>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: airline.faq.map((item: any) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Schema markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <a href="/" className="text-xl font-bold text-blue-600">AirlineHuman</a>
        <a href="/#book" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
          Talk to a Human
        </a>
      </nav>

      {/* Hero — direct answer first (LLM optimized) */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
          {airline.name} · Human Agent Guide
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Talk to a Human at {airline.name}
        </h1>

        {/* Direct answer box — this is what LLMs cite */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 mb-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            To reach a human at {airline.name}, call <strong>{airline.phone}</strong> and {airline.ivr.toLowerCase()}. Average wait time is <strong>{airline.waitTime}</strong>. For fastest service, call during <strong>{airline.bestTime}</strong>.
          </p>
        </div>

        {/* Phone + IVR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Direct phone number</div>
            <div className="text-2xl font-bold text-gray-900">{airline.phone}</div>
            <div className="text-sm text-gray-500 mt-2">Available 24/7</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Best time to call</div>
            <div className="text-xl font-bold text-gray-900">{airline.bestTime}</div>
            <div className="text-sm text-gray-500 mt-2">Shortest wait times</div>
          </div>
        </div>

        {/* IVR Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exact IVR bypass steps</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ol className="space-y-3">
              {airline.ivr.split(',').map((step: string, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-gray-700">{step.trim()}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Alternative contact */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternative contact methods</h2>
          <p className="text-gray-600">{airline.alternative}</p>
        </div>

        {/* Common issues */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common issues we help with</h2>
          <div className="flex flex-wrap gap-3">
            {airline.issues.map((issue: string) => (
              <span key={issue} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm capitalize">
                {issue}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {airline.faq.map((item: any, i: number) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Still can't get through?</h2>
          <p className="text-blue-100 mb-6">We'll navigate the IVR and connect you to a live {airline.name} agent. Money back if we can't reach a human.</p>
          <a href="/#book" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 inline-block">
            Book a Callback — $25
          </a>
        </div>
      </section>

    </main>
  )
}