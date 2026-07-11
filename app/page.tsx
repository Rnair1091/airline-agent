'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AirlineSearch from './components/AirlineSearch';
import ContactChannels from './components/ContactChannels';

export default function Home() {
  const router = useRouter();

  // Navigation UI & Dropdown States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'customer' | 'agent' | null>(null);

  // Authentication Credential States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Form State Control Layers
  const [travelerName, setTravelerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pnr, setPnr] = useState('');
  const [sector, setSector] = useState('Flights');
  const [authorized, setAuthorized] = useState(true);
  
  // Interface Status Indicators
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Handle Agent Authentication login submission
  const handleAgentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    if (username === 'admin' && password === 'password123') { 
      localStorage.setItem('agent_authenticated', 'true');
      setActiveModal(null);
      router.push('/admin');
    } else {
      setAuthError('Invalid credentials. Access denied to operational workspace.');
    }
  };

  // Close dropdown gracefully if clicked outside
  useEffect(() => {
    const closeAllMenus = () => setIsDropdownOpen(false);
    if (isDropdownOpen) {
      window.addEventListener('click', closeAllMenus);
      return () => window.removeEventListener('click', closeAllMenus);
    }
  }, [isDropdownOpen]);

  const handleIntakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // 1. Basic Email Validation (Regex check for format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatusMessage({
        type: 'error',
        text: 'Invalid email format. Please enter a valid email address (e.g., name@domain.com).',
      });
      setLoading(false);
      return;
    }

    // 2. Phone Validation (Strip styling characters to check digits)
    const cleanPhone = phone.replace(/[\s()+\-\.]/g, '');
    
    // Check if phone contains actual digits
    if (!/^\d+$/.test(cleanPhone)) {
      setStatusMessage({
        type: 'error',
        text: 'Invalid phone number. Please use numbers only.',
      });
      setLoading(false);
      return;
    }

    // Enforce realistic international lengths (7 to 15 digits)
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      setStatusMessage({
        type: 'error',
        text: 'Invalid phone length. Number must be between 7 and 15 digits.',
      });
      setLoading(false);
      return;
    }

    // Prevent obvious placeholder sequence spam (e.g., 0000000000, 11111111)
    const isRepeated = /^(\d)\1+$/.test(cleanPhone);
    if (isRepeated) {
      setStatusMessage({
        type: 'error',
        text: 'Invalid phone number pattern. Please provide an active contact number.',
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ travelerName, phone, email, pnr, sector, authorized }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatusMessage({
        type: 'success',
        text: 'Assignment Confirmed. An on-duty coordinator is actively pulling up your reservation profiles behind the scenes.',
      });
      
      // Clear tracking states on clear success
      setTravelerName('');
      setPhone('');
      setEmail('');
      setPnr('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Network delay encountered. Please verify inputs or contact dispatch.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white relative">

      {/* Top Verification Alert */}
      <div className="bg-white text-slate-400 text-[10px] tracking-[0.2em] px-8 py-3.5 text-center uppercase border-b border-slate-100 relative z-10">
        Notice: BotSkipper operates as an independent travel coordination assistant layer. We are not an air carrier, hotel property, or booking broker.
      </div>

      {/* Hero & Navigation Wrapper Section with Luxury Airport Background */}
      <div className="relative bg-slate-950 text-white overflow-hidden">
        
        {/* Background Image Optimization Layer */}
        <div className="absolute inset-0 z-0 opacity-85">
          <Image 
            src="/airport-luxury.webp" 
            alt="Luxury Terminal Lounge Architecture" 
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* Soft, Transparent Gradient to subtly guarantee reading contrast at the bottom edge */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90"></div>

        <div className="relative z-10">
          {/* Editorial Navigation */}
          <nav className="flex items-center justify-between px-8 py-8 max-w-6xl mx-auto border-b border-white/10">
            <div className="text-xl font-light tracking-[0.15em] text-white">
              BOT<span className="font-semibold text-slate-400 text-xs ml-1 tracking-[0.3em]">SKIPPER</span>
            </div>
            <div className="flex gap-6 items-center">
              
              {/* Dropdown Container Element */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[11px] font-medium tracking-widest uppercase text-slate-400 hover:text-white transition flex items-center gap-1.5 focus:outline-none"
                >
                  Login
                  <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {/* Dropdown Options Frame */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-slate-200 shadow-xl py-1 z-50 rounded-none text-slate-900">
                    <button 
                      onClick={() => { setActiveModal('customer'); setIsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-50 transition font-medium text-slate-700"
                    >
                      Customer Dashboard
                    </button>
                    <div className="border-t border-slate-100"></div>
                    <button 
                      onClick={() => { setActiveModal('agent'); setIsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-50 transition font-medium text-slate-700"
                    >
                      Agent Desk
                    </button>
                  </div>
                )}
              </div>

              <a href="#intake" className="group relative text-[11px] font-medium tracking-widest uppercase text-white pb-1 overflow-hidden">
                Assign a Specialist
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
              </a>
            </div>
          </nav>

          {/* Main Hero Grid Content */}
          <section className="max-w-5xl mx-auto text-left px-8 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-white">
                Premium Global Travel Services
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-[1.1] font-light">
                Travel disruptions, <br />
                <span className="italic font-extralight text-white">seamlessly delegated.</span>
              </h1>
              <p className="text-base sm:text-lg font-light text-white max-w-xl leading-relaxed">
                Bypass the manual hold times, dynamic phone trees, and reservation hurdles. Delegate your flight cancellations, hotel overbookings, car rental disputes, cruise itinerary shifts, and complex vacation package disruptions to our specialized assistants who interface directly with providers on your behalf.
              </p>
            </div>
            
            {/* Fine-lined Search & Action Block */}
<div className="lg:col-span-5 lg:pt-16 space-y-6">
  {/* Modernized Luxury Search Wrapper */}
  <div className="bg-slate-900/90 backdrop-blur-md p-4 border border-white/10 shadow-2xl text-white">
    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5">
      Select Asset Provider
    </div>
    <div className="search-dark-override">
      <AirlineSearch />
    </div>
  </div>
              
              {/* Integrated Priority Channels Dashboard */}
              <div className="bg-slate-900/90 backdrop-blur-md p-6 border border-white/10 shadow-2xl text-white">
                <div className="space-y-1 mb-4">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">Immediate Desk Escalation</h2>
                  <p className="text-slate-400 text-[11px] font-light">Skip form fields to speak or chat directly with an on-duty coordinator.</p>
                </div>
                <ContactChannels />
              </div>

              <div className="flex flex-col gap-3">
                <a href="#intake" className="w-full bg-white text-slate-900 px-8 py-4 text-center text-[11px] font-semibold tracking-widest uppercase hover:bg-slate-100 transition duration-300">
                  Coordinate Itinerary Resolution — $25
                </a>
                <a href="#philosophy" className="w-full bg-transparent border border-white/20 text-slate-300 px-8 py-4 text-center text-[11px] font-semibold tracking-widest uppercase hover:bg-white/5 transition duration-300">
                  Operational Strategy
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* The Integrity Manifesto */}
      <section className="border-t border-slate-200/60 bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              The Security Standard
            </h3>
            <p className="font-serif text-2xl text-slate-900 font-light leading-snug">
              Quiet operations built entirely on traveler discretion.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-300">01 /</span>
              <h4 className="text-sm font-semibold tracking-wide text-slate-900">Administrative Clarity</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">We operate strictly as an independent coordination layer for your convenience, completely unaligned with airline commercial metrics or hotel network quotas.</p>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-300">02 /</span>
              <h4 className="text-sm font-semibold tracking-wide text-slate-900">Protected Sessions</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">No platform passwords or sensitive profiles required. Your dynamic itinerary routing, property vouchers, and PNR markers are systematically purged 30 days post-resolution.</p>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-300">03 /</span>
              <h4 className="text-sm font-semibold tracking-wide text-slate-900">Resolution Guarantee</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Our coordination services carry zero structural risk. If our specialists cannot establish an active interface with a live brand authority to handle your profile, your fee is waived.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Strategy (Clean Staggered List) */}
      <section id="philosophy" className="py-24 px-8 bg-[#fafafa] border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Workflow</span>
            <h2 className="text-3xl font-serif text-slate-900 font-light">How we manage your itineraries </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-l border-slate-200 pl-4 md:pl-0 md:border-l-0 md:grid-rows-1">
            <div className="space-y-3 md:border-t md:border-slate-200 md:pt-6">
              <div className="text-xs font-mono text-slate-400">Phase A</div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">Itinerary Submission</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Provide your specific travel provider, core reservation identifiers, and your requested destination goal (such as re-routing, immediate rebooking, or credit recovery).</p>
            </div>
            <div className="space-y-3 md:border-t md:border-slate-200 md:pt-6">
              <div className="text-xs font-mono text-slate-400">Phase B</div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">Assistant Assignment</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Confirm our standard administrative verification layout, allowing a dedicated desk specialist to handle telephone and priority portal interfaces on your behalf.</p>
            </div>
            <div className="space-y-3 md:border-t md:border-slate-200 md:pt-6">
              <div className="text-xs font-mono text-slate-400">Phase C</div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">Direct Interface</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">Our assistants handle the manual dialing loops, absorb queue hold times, and firmly coordinate your requested parameters with the operational brand manager.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Global Grid */}
      <section className="bg-white py-24 px-8 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto text-left space-y-12">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Global Coverage</span>
            <h2 className="text-3xl font-serif text-slate-900 font-light">Integrated Carrier Access</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {["Air India","IndiGo","Emirates","British Airways","Qantas","United Airlines","Delta","American Airlines","Singapore Airlines","Lufthansa"].map((airline) => (
              <div key={airline} className="bg-white p-6 text-center text-xs font-medium tracking-wide text-slate-600">
                {airline}
              </div>
            ))}
          </div>
          <div className="pt-4">
            <a href="/airlines" className="text-xs font-bold tracking-widest uppercase border-b border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-400 transition duration-300">
              View Entire Coverage Directory →
            </a>
          </div>
        </div>
      </section>

      {/* Minimalist Intake Portal */}
      <section id="intake" className="py-28 px-8 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Service Intake</span>
            <h2 className="text-3xl font-serif font-light tracking-tight text-white">Initialize Coordination</h2>
            <p className="text-slate-400 font-light text-xs leading-relaxed">
              Assign an administrative specialist to manage your reservation profiles behind the scenes across all luxury vectors.
            </p>
          </div>
          
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800/80 p-8 rounded-none">
            <form className="space-y-6" onSubmit={handleIntakeSubmit}>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">1. Principal Traveler Identity</label>
                <input 
                  type="text" 
                  value={travelerName}
                  onChange={(e) => setTravelerName(e.target.value)}
                  placeholder="e.g., Charles Sterling" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-none px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 tracking-wide font-light" 
                  required 
                  disabled={loading}
                />
              </div>

              {/* Added Contact Metrics Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Contact Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., +1 (555) 000-0000" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-none px-4 h-12 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 tracking-wide font-light" 
                    required 
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., sterling@domain.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-none px-4 h-12 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 tracking-wide font-light" 
                    required 
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 min-h-[14px]">
                    2. Record Locator / PNR / Booking ID
                  </label>
                  <input 
                    type="text" 
                    value={pnr}
                    onChange={(e) => setPnr(e.target.value)}
                    placeholder="e.g., XL98TK or #874921" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-none px-4 h-12 text-xs text-white placeholder-slate-600 uppercase focus:outline-none focus:border-slate-600 tracking-widest font-light" 
                    required 
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 min-h-[14px]">
                    3. Disruption Sector
                  </label>
                  <div className="relative w-full">
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-none px-4 h-12 text-xs text-white focus:outline-none focus:border-slate-600 tracking-wide font-light appearance-none pr-10"
                      disabled={loading}
                    >
                      <option>Flights</option>
                      <option>Hotel & Resort</option>
                      <option>Rental Car Fleet</option>
                      <option>Cruise Lines</option>
                      <option>Vacation Packages</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <label className="relative flex items-start gap-4 bg-slate-900/40 p-4 border border-slate-800 rounded-none cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    checked={authorized}
                    onChange={(e) => setAuthorized(e.target.checked)}
                    className="mt-1 h-3.5 w-3.5 rounded-none border-slate-700 bg-slate-900 text-slate-500 focus:ring-0 checked:bg-slate-600" 
                    required 
                    disabled={loading}
                  />
                  <span className="text-[10px] text-slate-400 font-light leading-relaxed tracking-wide">
                    I authorize <span className="text-white font-medium">BotSkipper</span> to serve as an administrative third-party assistant to process and communicate with the travel provider regarding this record.
                  </span>
                </label>
              </div>

              {/* Status Update Messages Display Banner */}
              {statusMessage && (
                <div className={`p-4 border text-xs font-light ${
                  statusMessage.type === 'success' 
                    ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300' 
                    : 'bg-rose-950/40 border-rose-800 text-rose-300'
                }`}>
                  {statusMessage.text}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white hover:bg-slate-100 disabled:bg-slate-700 disabled:text-slate-400 text-slate-950 font-bold py-4.5 px-6 rounded-none transition duration-300 text-[10px] tracking-[0.25em] uppercase"
              >
                {loading ? 'Processing Assignment...' : 'Submit Request — $25 (Waived on Non-Success)'}
              </button>
            </form>
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
            Disclaimer: BotSkipper provides post-purchase administrative support and itinerary coordination services. We are not a licensed commercial air carrier, hotel property manager, cruise vessel operator, or rental fleet owner. We do not act as an retail travel broker or booking agent. All administrative assistance is deployed under precise passenger instruction.
          </p>
        </div>
      </footer>

      {/* ─── LUXURY POP-UP WINDOW MODAL SYSTEM ─── */}
      {activeModal && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            className="bg-white w-full max-w-sm border border-slate-200 p-8 rounded-none relative shadow-2xl animate-in zoom-in-95 duration-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger Button */}
            <button 
              onClick={() => { setActiveModal(null); setAuthError(''); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Context Heading */}
            <div className="mb-6">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 block mb-1">
                {activeModal === 'agent' ? 'Internal Security Workspace' : 'Traveler Session Access'}
              </span>
              <h2 className="text-xl font-serif text-slate-900 font-light">
                {activeModal === 'agent' ? 'Agent System Sign In' : 'Customer Portal'}
              </h2>
            </div>

            {/* Validation Panel */}
            {authError && (
              <div className="bg-rose-50 border border-rose-100 text-rose-700 text-[11px] p-3 rounded-none mb-4 font-light">
                {authError}
              </div>
            )}

            {/* Modal Logic Splits */}
            {activeModal === 'customer' ? (
              <div className="space-y-4 py-2">
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Traveler confirmation profiles are parsed immediately using secure PNR and active authorization frames. No permanent login parameters are required.
                </p>
                <div className="bg-slate-50 p-4 border border-slate-100 rounded-none text-center">
                  <span className="text-[10px] font-medium text-slate-500 tracking-wide font-mono">
                    Session verified via booking context.
                  </span>
                </div>
              </div>
            ) : (
              // Agent Credentials Login Form Execution
              <form onSubmit={handleAgentLogin} className="space-y-4">
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5">
                    Agent Identifier
                  </label>
                  <input 
                    type="text" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter unique terminal id..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-xs text-slate-900 focus:outline-none focus:border-slate-400 tracking-wide font-light"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5">
                    Security Passkey
                  </label>
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-none p-3 text-xs text-slate-900 focus:outline-none focus:border-slate-400 font-light"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-semibold tracking-widest uppercase p-3.5 transition rounded-none mt-2"
                >
                  Verify Parameters & Open Desk
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}