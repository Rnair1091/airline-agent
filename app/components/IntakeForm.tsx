'use client';
import { useState } from 'react';

interface IntakeFormProps {
  defaultSector?: string;
  airlineName?: string; // Passed from the dynamic airline page
}

export default function IntakeForm({ defaultSector = 'Flights', airlineName = '' }: IntakeFormProps) {
  const [travelerName, setTravelerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pnr, setPnr] = useState('');
  const [sector, setSector] = useState(defaultSector);
  const [authorized, setAuthorized] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);

    if (!travelerName || !pnr || !sector || !phone || !email) {
      setIsError(true);
      setStatusMessage('All contact and flight details are mandatory.');
      return;
    }

    if (!authorized) {
      setIsError(true);
      setStatusMessage('Authorization required to proceed.');
      return;
    }

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Mapped 'airlineName' prop to the 'airline' key expected by your backend API
        body: JSON.stringify({ 
          travelerName, 
          phone, 
          email, 
          pnr, 
          sector, 
          authorized, 
          airline: airlineName 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setStatusMessage(data.error || 'Failed to submit request.');
      } else {
        setStatusMessage('Request submitted successfully!');
        setTravelerName('');
        setPhone('');
        setEmail('');
        setPnr('');
        setAuthorized(false);
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage('Internal system error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 border border-white/10 rounded-lg">
      <div>
        <label className="block text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">
          1. Principal Traveler Identity
        </label>
        <input
          type="text"
          value={travelerName}
          onChange={(e) => setTravelerName(e.target.value)}
          placeholder="Full Name as on passport"
          className="w-full bg-slate-950 border border-white/10 p-3 text-white focus:outline-none focus:border-white/30"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">
            Contact Phone Number
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-slate-950 border border-white/10 p-3 text-white focus:outline-none focus:border-white/30"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="passenger@example.com"
            className="w-full bg-slate-950 border border-white/10 p-3 text-white focus:outline-none focus:border-white/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">
            2. Record Locator / PNR
          </label>
          <input
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            placeholder="ABC123"
            className="w-full bg-slate-950 border border-white/10 p-3 text-white focus:outline-none focus:border-white/30"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">
            3. Disruption Domain
          </label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 p-3 text-white focus:outline-none focus:border-white/30"
          >
            <option value="Flights">Flights</option>
            <option value="Baggage">Baggage</option>
            <option value="Ticketing">Ticketing</option>
          </select>
        </div>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="authorize"
          checked={authorized}
          onChange={(e) => setAuthorized(e.target.checked)}
          className="mt-1 accent-white"
        />
        <label htmlFor="authorize" className="text-xs text-slate-400 leading-relaxed select-none">
          I authorize <span className="text-white font-medium">BotSkipper</span> to serve as an administrative third-party assistant to process and communicate with the travel provider regarding this record.
        </label>
      </div>

      {statusMessage && (
        <div className={`p-4 border text-sm ${isError ? 'bg-red-950/20 border-red-900 text-red-400' : 'bg-emerald-950/20 border-emerald-900 text-emerald-400'}`}>
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-white text-black py-4 uppercase text-xs font-bold tracking-widest hover:bg-slate-200 transition"
      >
        Submit Request — $25 (Waived on Non-Success)
      </button>
    </form>
  );
}