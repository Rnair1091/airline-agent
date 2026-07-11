'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [role, setRole] = useState('Customer');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'Agent' && password === 'admin123') {
      // Set a simple cookie/localStorage to simulate a logged-in agent
      localStorage.setItem('agent_authenticated', 'true');
      router.push('/admin');
    } else {
      alert('Invalid credentials or role not active.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form onSubmit={handleLogin} className="p-8 bg-slate-900 border border-slate-800 w-96">
        <h2 className="text-xl mb-6 tracking-widest uppercase">BotSkipper Access</h2>
        <select 
          className="w-full bg-slate-950 p-3 border border-slate-800 mb-4"
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Customer</option>
          <option>Agent</option>
        </select>
        
        {role === 'Agent' && (
          <input 
            type="password" placeholder="Agent Passcode" 
            className="w-full bg-slate-950 p-3 border border-slate-800 mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <button type="submit" className="w-full bg-white text-black py-3 uppercase text-xs font-bold">Sign In</button>
      </form>
    </div>
  );
}