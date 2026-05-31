export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-xl font-bold text-blue-600">AirlineHuman</div>
        <a href="#book" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
          Talk to a Human
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center px-6 py-20">
        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-6">
          Real humans. No bots. No hold music.
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Stuck on hold with your airline?
          <span className="text-blue-600"> We get you to a real person.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          Skip the IVR maze. We connect passengers to live airline agents for refunds, rebooking, lost baggage, and cancellations — fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#book" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700">
            Connect Me Now — $25
          </a>
          <a href="#how" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50">
            How it works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Tell us your problem</h3>
              <p className="text-gray-500 text-sm">Refund, rebooking, baggage, cancellation — tell us what you need and which airline.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">We connect you</h3>
              <p className="text-gray-500 text-sm">Our team navigates the IVR system and gets a live agent on the line for you.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Problem solved</h3>
              <p className="text-gray-500 text-sm">You speak directly to a real airline agent who can actually fix your issue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines we cover */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Airlines we cover</h2>
          <p className="text-gray-500 mb-10">We know the exact numbers and shortcuts to reach a human at 100+ airlines.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Air India","IndiGo","Emirates","British Airways","Qantas","United Airlines","Delta","American Airlines","Singapore Airlines","Lufthansa"].map((airline) => (
              <span key={airline} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {airline}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="bg-blue-600 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to talk to a real person?</h2>
          <p className="text-blue-100 mb-8">One flat fee. Connected in minutes. Money back if we can't reach a human.</p>
          <a href="mailto:hello@airlinehuman.com" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 inline-block">
            Book a Callback — $25
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm border-t border-gray-100">
        © 2025 AirlineHuman · Helping passengers reach real people
      </footer>

    </main>
  );
}