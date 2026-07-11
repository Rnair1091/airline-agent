import { Metadata } from 'next'
import { airlines } from '../airlines'

export const metadata: Metadata = {
  title: 'Global Carrier & Operator Directory | BotSkipper',
  description: 'Direct bypass paths and resolution support networks for major commercial carriers, hotel properties, and premium travel networks.',
}

export default function AirlinesDirectory() {
  const airlineList = Object.entries(airlines)

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Verification Alert */}
      <div className="bg-white text-slate-400 text-[10px] tracking-[0.2em] px-8 py-3.5 text-center uppercase border-b border-slate-100">
        Notice: BotSkipper operates as an independent travel coordination assistant layer. We are not an air carrier, hotel property, or booking broker.
      </div>

      {/* Editorial Navigation */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-6xl mx-auto">
        <div className="text-xl font-light tracking-[0.15em] text-slate-900">
          <a href="/">BOT<span className="font-semibold text-slate-400 text-xs ml-1 tracking-[0.3em]">SKIPPER</span></a>
        </div>
        <a href="/#intake" className="group relative text-[11px] font-medium tracking-widest uppercase text-slate-900 pb-1 overflow-hidden">
          Assign a Specialist
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-900 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
        </a>
      </nav>

      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-8 pt-16 pb-12">
        <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-6">
          Global Operator Nodes / Index
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-[1.15] font-light mb-6">
          Carrier Support & <span className="italic text-slate-500 font-extralight">Resolution Directory</span>.
        </h1>
        <p className="text-base font-light text-slate-500 max-w-2xl leading-relaxed">
          Access structural data metrics and direct bypass sequencing for {airlineList.length} major transport nodes. If your connection features cross-sector links, you can delegate the entire itinerary directly to our desk specialists.
        </p>
      </section>

      {/* Modern Grid List */}
      <section className="max-w-4xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200/80 shadow-sm">
          {airlineList.map(([slug, airline]) => (
            <a 
              key={slug} 
              href={"/airlines/" + slug} 
              className="group flex items-center justify-between bg-white p-6 hover:bg-[#fcfcfc] transition-colors"
            >
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-900 group-hover:text-slate-600 transition-colors tracking-wide">
                  {airline.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {airline.phone} <span className="text-slate-200 mx-1.5">|</span> Window: {airline.bestTime}
                </div>
              </div>
              <div className="text-slate-300 group-hover:text-slate-900 font-mono text-sm transform translate-x-0 group-hover:translate-x-1 transition-all">
                →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Minimalist Bottom Slate Banner */}
      <section className="max-w-4xl mx-auto px-8 mb-24">
        <div className="bg-slate-900 text-white p-12 text-center space-y-6 border border-slate-800">
          <div className="space-y-2">
            <h2 className="text-xl font-serif font-light tracking-tight">Anomalies outside this index?</h2>
            <p className="text-slate-400 font-light text-xs max-w-md mx-auto leading-relaxed">
              We monitor over 100+ global provider systems including luxury resorts, rental configurations, and maritime routes. Assign an asset manager to clear your timeline.
            </p>
          </div>
          <a 
            href="/#intake" 
            className="inline-block bg-white hover:bg-slate-100 text-slate-950 font-bold py-3.5 px-8 rounded-none transition duration-300 text-[10px] tracking-[0.25em] uppercase"
          >
            Initiate Global Task — $25
          </a>
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
            Disclaimer: BotSkipper provides post-purchase administrative support and itinerary logistics coordination services. We are not a licensed commercial air carrier, hotel property manager, cruise vessel operator, or rental fleet owner. We do not act as a retail travel broker or booking agent. All administrative assistance is deployed under precise passenger instruction.
          </p>
        </div>
      </footer>
    </main>
  )
}