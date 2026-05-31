import { Metadata } from 'next'
import { airlines } from '../airlines'

export const metadata: Metadata = {
  title: 'Talk to a Human at Any Airline | AirlineHuman',
  description: 'Find the direct phone number, IVR bypass steps, and best times to call for 20+ airlines. Skip the bot and reach a real person fast.',
}

export default function AirlinesDirectory() {
  const airlineList = Object.entries(airlines)

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <a href="/" className="text-xl font-bold text-blue-600">AirlineHuman</a>
        <a href="/#book" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700">Talk to a Human</a>
      </nav>
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">Complete airline directory</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Talk to a Human at Any Airline</h1>
        <p className="text-xl text-gray-500 mb-10">Direct phone numbers, exact IVR bypass sequences, and best call times for {airlineList.length} airlines. No hold music. No bots.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {airlineList.map(([slug, airline]) => (
            <a key={slug} href={"/airlines/" + slug} className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl px-6 py-4 transition-all group">
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">{airline.name}</div>
                <div className="text-sm text-gray-500 mt-1">{airline.phone} · {airline.bestTime}</div>
              </div>
              <div className="text-blue-400 group-hover:text-blue-600 text-lg">→</div>
            </a>
          ))}
        </div>
        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Can't find your airline or still stuck?</h2>
          <p className="text-blue-100 mb-6">We cover 100+ airlines. Book a callback and we'll connect you to a live agent — money back if we can't reach a human.</p>
          <a href="/#book" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 inline-block">Book a Callback — $25</a>
        </div>
      </section>
      <footer className="text-center py-8 text-gray-400 text-sm border-t border-gray-100">
        © 2025 AirlineHuman · Helping passengers reach real people
      </footer>
    </main>
  )
}