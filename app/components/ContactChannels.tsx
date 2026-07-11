'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

export default function ContactChannels() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showIdlePopup, setShowIdlePopup] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Decaying Logic Step State (Step 1 = 30s, Step 2 = 60s, Step 3 = 90s, Step 4 = Dead stop)
  const [popupStep, setPopupStep] = useState(1)

  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Welcome to BotSkipper Core Support. Please provide your booking reference (PNR) or tell me which carrier itinerary you are tracking.' }
  ])
  const [inputValue, setInputValue] = useState('')

  // Handle client-side mounting for Portal safety
  useEffect(() => {
    setMounted(true)
  }, [])

  // Decaying Timer Sequence Engine
  useEffect(() => {
    if (popupStep > 3 || isChatOpen || showIdlePopup) return

    const delays = { 1: 30000, 2: 60000, 3: 90000 }
    const currentDelay = delays[popupStep as keyof typeof delays]

    const timer = setTimeout(() => {
      setShowIdlePopup(true)
    }, currentDelay)

    return () => clearTimeout(timer)
  }, [popupStep, isChatOpen, showIdlePopup])

  const handleClosePopup = () => {
    setShowIdlePopup(false)
    setPopupStep((prev) => prev + 1) // Advances toward step 4 to permanently kill it after 3 tries
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userText = inputValue
    setMessages((prev) => [...prev, { sender: 'user', text: userText }])
    setInputValue('')

    setTimeout(() => {
      let botResponse = "Acknowledged. Routing this thread to a desk coordinator. If you are experiencing an immediate sector cancellation, please input your primary contact phone number."
      if (userText.toLowerCase().includes('singapore') || userText.toLowerCase().includes('indigo') || userText.toLowerCase().includes('emirates')) {
        botResponse = "Direct operational interfaces are active for this carrier. Our bypass desk is averaging under 90 seconds to lock alternative routes. Please provide your booking reference (PNR)."
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }])
    }, 1000)
  }

  // Purely hardcoded popup UI extracted to the global document body level
  const renderPopupPortal = () => {
    if (!mounted || !showIdlePopup) return null

    return createPortal(
      <div className="fixed bottom-6 right-6 z-[99999] max-w-sm w-full bg-white border border-slate-200 shadow-2xl p-6 rounded-none animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0 w-12 h-12">
            <Image 
              src="/agent.webp" 
              alt="Desk Support Specialist" 
              fill
              sizes="48px"
              className="object-cover rounded-none border border-slate-200"
              priority
            />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Desk Specialist Online</h4>
              <button 
                onClick={handleClosePopup} 
                className="text-slate-400 hover:text-slate-900 text-sm font-mono leading-none p-1 transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-slate-500 text-[11px] font-light leading-relaxed">
              It looks like you are reviewing flight delay corridors. Connect instantly to hold your premium rerouting options before global distribution engines absorb remaining availability.
            </p>
            <div className="pt-3 flex gap-2">
              <a 
                href="tel:+18005550199"
                className="flex-1 bg-slate-900 text-white text-center text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 hover:bg-slate-800 transition-colors"
              >
                Call Now
              </a>
              <button 
                onClick={() => {
                  setIsChatOpen(true)
                  setShowIdlePopup(false)
                }}
                className="flex-1 bg-transparent border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-wider py-2.5 px-3 hover:border-slate-900 transition-colors"
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  }

  return (
    <div className="space-y-3 pt-4 border-t border-slate-800">
      {/* Primary Escalation Hotlines */}
      <a 
        href="tel:+18005550199" 
        className="flex items-center justify-center w-full bg-white text-slate-950 font-sans text-xs font-bold tracking-widest uppercase py-4 px-6 hover:bg-slate-100 transition-colors duration-200"
      >
        Call Resolution Desk Now
      </a>

      <button 
        onClick={() => {
          setIsChatOpen(true)
          setShowIdlePopup(false)
        }}
        className="flex items-center justify-center w-full bg-transparent text-white border border-slate-700 font-sans text-xs font-bold tracking-widest uppercase py-4 px-6 hover:border-white transition-colors duration-200"
      >
        Chat Instantly with an Agent
      </button>
      
      <div className="text-[10px] text-slate-500 font-mono text-center pt-1">
        Average live operator connection window: &lt; 90 seconds
      </div>

      {/* Renders safely out into the root body context */}
      {renderPopupPortal()}

      {/* Clean Drawer Chat Window Layer */}
      {isChatOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-slate-100 flex flex-col animate-in slide-in-from-right duration-300">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/agent.webp" alt="Agent Avatar" fill sizes="32px" className="object-cover" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">BotSkipper</div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Itinerary Routing Agent</h3>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-slate-900 font-mono text-sm p-1">
              ✕ CLOSE
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#fafafa]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 text-xs font-light leading-relaxed shadow-sm ${
                  msg.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-slate-800 border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 bg-white flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type message or paste your PNR..." 
              className="flex-1 border border-slate-200 px-4 py-3 text-xs font-light text-slate-900 focus:outline-none focus:border-slate-900"
            />
            <button type="submit" className="bg-slate-900 text-white font-sans text-[10px] font-bold tracking-widest uppercase px-6 hover:bg-slate-800 transition-colors">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}