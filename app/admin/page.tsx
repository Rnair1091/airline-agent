'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const router = useRouter();

  // 1. Fetch data function that pulls the latest records from the backend database
  const fetchData = async () => {
    try {
      const res = await fetch('/api/get-data');
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error("Error auto-refreshing CRM data:", error);
    }
  };

  // 2. Set up the core security gate and the automatic background refresh loop
  useEffect(() => {
    if (!localStorage.getItem('agent_authenticated')) {
      router.push('/login');
    } else {
      // Run the initial data load immediately when the page finishes rendering
      fetchData();

      // Start an auto-sync timer that updates the table every 5000 milliseconds (5 seconds)
      const autoRefreshInterval = setInterval(() => {
        fetchData();
      }, 5000);

      // Clean up the timer whenever the admin leaves this page so your browser stays fast
      return () => clearInterval(autoRefreshInterval);
    }
  }, []);

  // Update a submission status (e.g., Pending Assignment -> Active Case)
  const updateStatus = async (id: string, newStatus: string) => {
    // FIX: Optimistically update the state locally so the dropdown reflects the change instantly
    setSubmissions((prev: any) =>
      prev.map((sub: any) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );

    try {
      await fetch('/api/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      fetchData(); // Instantly refresh the UI from database to confirm sync
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  // Purge a record from your local storage system
  const deleteEntry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    await fetch('/api/delete-entry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    fetchData(); // Instantly update the UI after deletion
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Agent Intake Desk</h1>
        <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Auto-Sync Active (5s)
        </div>
      </div>
      
      <table className="w-full bg-white shadow-sm border border-slate-200 text-slate-900">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-4 border-b">Time</th>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Phone</th>
            <th className="p-4 border-b">Email</th>
            <th className="p-4 border-b">PNR</th>
            <th className="p-4 border-b">Domain</th>
            <th className="p-4 border-b">Status</th>
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub: any, i: number) => (
            <tr key={sub.id || `fallback-key-${i}`} className="border-b hover:bg-slate-50/50 transition-colors">
              <td className="p-4 text-xs font-mono text-slate-500">
                {sub.createdAt ? new Date(sub.createdAt).toLocaleString() : 'N/A'}
              </td>
              <td className="p-4 font-medium">{sub.travelerName}</td>
              <td className="p-4 font-mono text-xs select-all">{sub.phone || '—'}</td>
              <td className="p-4 text-xs select-all text-slate-600">{sub.email || '—'}</td>
              <td className="p-4 uppercase font-bold tracking-wider">{sub.pnr}</td>
              <td className="p-4 text-slate-600">{sub.sector}</td>
              <td className="p-4">
                <select 
                  value={sub.status}
                  onChange={(e) => updateStatus(sub.id, e.target.value)}
                  className="bg-slate-100 p-2 text-xs border border-slate-300 rounded cursor-pointer font-medium focus:outline-none focus:ring-1 focus:ring-slate-400"
                >
                  <option value="Pending Assignment">Pending Assignment</option>
                  <option value="Active Case">Active Case</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td className="p-4">
                <button 
                  onClick={() => deleteEntry(sub.id)}
                  className="text-red-600 text-xs font-bold uppercase hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}