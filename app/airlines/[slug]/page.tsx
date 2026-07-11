import { Metadata } from 'next'
import { airlines } from '../../airlines'
import IntakeForm from '../../components/IntakeForm'
import ContactChannels from '../../components/ContactChannels'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const airline = airlines[slug]
  if (!airline) return { title: 'Carrier Profile Not Established' }
  return {
    title: `${airline.name} Resolution Desk & Travel Coordination | BotSkipper`,
    description: `Bypass the automated queues for ${airline.name}. Delegate cancellations, immediate re-routing, and linked hotel or car rental overbookings to an operational specialist.`,
  }
}

function getDynamicWaitTime(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  const absoluteMin = 42
  const minSpread = 33 
  const calculatedMin = absoluteMin + (Math.abs(hash) % minSpread)
  
  const maxBuffer = 15 + (Math.abs(hash >> 2) % 20)
  const calculatedMax = calculatedMin + maxBuffer

  return {
    min: calculatedMin,
    max: calculatedMax
  }
}

export default async function AirlinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const airline = airlines[slug]

  if (!airline) {
    return (
      <main className="min-h-screen bg-[#fafafa] flex items-center justify-center font-sans antialiased">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-light text-slate-900 tracking-wide uppercase">Carrier profile not found</h1>
          <a href="/" className="inline-block text-xs font-bold tracking-widest uppercase border-b border-slate-900 pb-1 text-slate-500 hover:text-slate-900 transition-colors">
            Return to Directory
          </a>
        </div>
      </main>
    )
  }

  const waitTime = getDynamicWaitTime(airline.name)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Why does navigating the ${airline.name} phone network often lead to disconnects?`,
        acceptedAnswer: { 
          '@type': 'Answer', 
          text: `During high-volume disruptions, public trunk lines utilize aggressive algorithmic filtering to manage line load. Continuously demanding an agent or bypassing voice prompts frequently registers as an error, triggering automated session terminations.` 
        }
      },
      {
        '@type': 'Question',
        name: `Can front-line phone customer service resolve multi-sector itinerary failures?`,
        acceptedAnswer: { 
          '@type': 'Answer', 
          text: `No. Carrier agents are strictly limited to their proprietary flight database. They do not have the logistical authority to re-validate disrupted hotel bookings, restore invalidated rental vehicle confirmations, or sync disconnected cross-carrier segments.` 
        }
      },
      {
        '@type': 'Question',
        name: `What is the risk of handling urgent ${airline.name} ticket modifications manually?`,
        acceptedAnswer: { 
          '@type': 'Answer', 
          text: `While waiting in un-prioritized holding queues, remaining premium seat inventory is rapidly absorbed by automated global distribution networks. By the time a manual caller reaches a representative, original routing alternatives are frequently exhausted.` 
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Top Verification Alert */}
      <div className="bg-white text-slate-400 text-[10px] tracking-[0.2em] px-8 py-3.5 text-center uppercase border-b border-slate-100">
        Notice: BotSkipper operates as an independent travel coordination assistant layer. We are not an air carrier, hotel property, or booking broker.
      </div>

      {/* Editorial Navigation */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-6xl mx-auto">
        <div className="text-xl font-light tracking-[0.15em] text-slate-900">
          <a href="/">BOT<span className="font-semibold text-slate-400 text-xs ml-1 tracking-[0.3em]">SKIPPER</span></a>
        </div>
        <a href="#intake" className="group relative text-[11px] font-medium tracking-widest uppercase text-slate-900 pb-1 overflow-hidden">
          Assign a Specialist
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-8 pt-16 pb-20">
        <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-6">
          Carrier Support & Resolution / {airline.name}
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-[1.15] font-light mb-6">
          Delegate your <span className="italic text-slate-500 font-extralight">{airline.name}</span> anomalies.
        </h1>
        <p className="text-base font-light text-slate-500 max-w-2xl leading-relaxed">
          Avoid hold loops, dropped calls, and disconnected systems. Our dedicated desk specialists handle direct provider communications on your behalf, resolving flight issues while simultaneously managing any linked disruptions across your hotel vouchers, car rentals, cruise transfers, or holiday packages.
        </p>
      </section>

      {/* Direct Contact Reference Grid */}
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-sm">
          <div className="bg-white p-8 space-y-1">
            <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-500 font-mono">Public Interactive Trunk Line</div>
            <div className="text-2xl font-mono text-slate-400 line-through decoration-slate-300">{airline.phone}</div>
            <div className="text-xs text-slate-500 font-light pt-2 leading-relaxed">
              Subject to automated disconnects, infinite loops, and strict front-line filtration bots.
            </div>
          </div>
          <div className="bg-white p-8 space-y-1">
            <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-900">Baseline Hold Window</div>
            <div className="text-2xl font-serif italic text-red-600 font-light">{waitTime.min} – {waitTime.max} Mins</div>
            <div className="text-xs text-slate-400 font-light pt-2">
              Critical Note: Wait times scale exponentially during active weather corridors or system-wide constraints.
            </div>
          </div>
        </div>
      </section>

      {/* Core Database Informational Sections */}
      <section className="max-w-4xl mx-auto px-8 space-y-16 pb-24">
        
        {/* Manual System Maze */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Manual System Maze</h2>
            <p className="text-xs text-slate-500 font-light mt-2 max-w-[200px] leading-relaxed">
              If you choose to navigate the unassisted public sequence, you will be forced through the standard front-line algorithmic validation filters.
            </p>
          </div>
          <div className="md:col-span-8 bg-slate-50 border border-slate-200/60 p-8 opacity-85">
            <ul className="space-y-4 text-xs font-light leading-relaxed text-slate-600">
              <li className="flex gap-4 items-start">
                <span className="font-mono text-slate-400 select-none">•</span>
                <span><strong>Biometric Voice Recognition:</strong> The automated system requires active spoken commands to parse intent before assigning queue priority. Continuous interruptions or saying "agent" can trigger automatic safety disconnects during high-volume periods.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-slate-400 select-none">•</span>
                <span><strong>PNR/Ticket Record Validation:</strong> You must accurately input or speak your 6-character alphanumeric booking reference code to pass the secondary structural gate.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-mono text-slate-400 select-none">•</span>
                <span><strong>Frequent Flyer / Elite Status Sorting:</strong> Automated routing layers instantly parse your profile details, pushing non-elite or standard economy tickets into un-prioritized holding pools.</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-red-600 font-light font-mono uppercase tracking-wider">
              Critical Warning: Inputting an un-indexed booking code, experiencing background line noise during voice prompts, or failing a verification check will instantly terminate your session or cycle your line back to the primary main queue menu.
            </div>
          </div>
        </div>

        {/* Pitching What We Do */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">The Structural Flaw</h2>
            <p className="text-xs text-slate-400 font-light mt-2">Why a single phone call rarely solves a modern disruption.</p>
          </div>
          <div className="md:col-span-8 space-y-4 text-xs font-light text-slate-600 leading-relaxed">
            <p>
              An airline phone agent is legally restricted to their own internal booking ecosystem. If your flight delay causes you to miss a check-in window at a hotel property, or voids a premium car rental confirmation, the front-line airline agent <span className="text-slate-900 font-medium">cannot alter those external reservations</span>.
            </p>
            <p className="bg-white border-l-2 border-slate-900 p-4 font-normal text-slate-900">
              Our desk specialists operate entirely outside these corporate boundaries. We sync directly with the transport grid to secure your seats while concurrently forcing manual overrides for your linked accommodation and ground transfers.
            </p>
          </div>
        </div>

        {/* Repositioned Strategic FAQ Area */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Itinerary Inquiries</h2>
            <p className="text-xs text-slate-400 font-light mt-2">Operational contingencies and carrier protocols.</p>
          </div>
          <div className="md:col-span-8 space-y-8">
            
            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wide text-slate-900">
                Why does navigating the {airline.name} phone network often lead to disconnects?
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                During high-volume disruptions, public trunk lines utilize aggressive algorithmic filtering to manage extreme network traffic. Attempting to force manual overrides, continuously demanding a human representative, or failing background voice prompts frequently flags the session as a system bottleneck, leading to immediate automated termination.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wide text-slate-900">
                Can front-line phone customer service resolve multi-sector itinerary failures?
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                No. Carrier customer service tiers are contractually restricted to their corporate network. They do not possess the system authority or logistical reach to protect your cross-sector losses—leaving you to manually battle downstream hotel overbookings, canceled transport vouchers, or voided car rental slots on your own.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wide text-slate-900">
                What is the hidden logistical risk of handling urgent ticket modifications manually?
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                While standard passengers wait inside un-prioritized public call holding queues, remaining premium alternative seat inventory is actively picked clean by computerized global networks. By the time a manual caller successfully clears the verification maze and speaks to a live body, the viable re-routing windows are routinely closed.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Dual Channel High-Intent Intake Portal */}
      <section id="intake" className="py-28 px-8 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Text and Direct Action Hotlines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Service Intake</span>
              <h2 className="text-3xl font-serif font-light tracking-tight text-white">Initialize Coordination</h2>
              <p className="text-slate-400 font-light text-xs leading-relaxed">
                Skip the ticket network entirely. Connect immediately with an independent desk manager to audit your itinerary alternatives.
              </p>
            </div>

            {/* Calling our cleaned-up component path */}
            <ContactChannels />
          </div>
          
          {/* Right Side: Structured Text Profile Intake */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 p-8 rounded-none">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-900">
              Option B: Secure Dossier Submission
            </div>
            <IntakeForm airlineName={airline.name} />
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="text-left py-16 text-slate-400 text-[11px] border-t border-slate-200 max-w-6xl mx-auto px-8 font-light tracking-wide grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-2">
          <div className="text-sm font-light tracking-[0.15em] text-slate-900">BOT<span className="font-semibold text-slate-400 text-xs tracking-[0.3em]">SKIPPER</span></div>
          <p>© 2026 BotSkipper. All rights reserved.</p>
        </div>
        <div className="md:col-span-8 text-slate-400 max-w-2xl leading-relaxed space-y-2">
          <p>
            Disclaimer: BotSkipper provides post-purchase administrative support and itinerary coordination services. We are not a licensed commercial air carrier, hotel property manager, cruise vessel operator, or rental fleet owner. We do not act as a retail travel broker or booking agent. All administrative assistance is deployed under precise passenger instruction.
          </p>
        </div>
      </footer>

    </main>
  )
}