'use client'

import { useState, useEffect, useRef } from 'react'
import { airlines } from '../airlines'

export default function AirlineSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{slug: string; name: string}[]>([])
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const airlineList = Object.entries(airlines).map(([slug, a]) => ({slug, name: a.name}))

  function normalize(str: string) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '')
  }

  function getScore(name: string, q: string): number {
    const n = normalize(name)
    const nq = normalize(q)
    if (n.startsWith(nq)) return 3
    if (n.includes(nq)) return 2
    let i = 0
    for (const c of n) {
      if (c === nq[i]) i++
      if (i === nq.length) return 1
    }
    return 0
  }

  useEffect(() => {
    if (!query.trim()) { setResults([]); setOpen(false); return }
    const scored = airlineList
      .map(a => ({...a, score: getScore(a.name, query)}))
      .filter(a => a.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
    setResults(scored)
    setOpen(scored.length > 0)
  }, [query])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative w-full max-w-xl mx-auto mb-8">
      <div className="flex items-center bg-white border-2 border-gray-200 focus-within:border-blue-500 rounded-2xl px-4 py-3 shadow-sm transition-all">
        <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search your airline... (e.g. Delta, IndiGo, Emirates)"
          className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-base bg-transparent"
        />
        {query && (
          <button onClick={() => { setQuery(''); setOpen(false) }} className="text-gray-400 hover:text-gray-600 ml-2">
            X
          </button>
        )}
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-lg z-50 overflow-hidden">
          {results.map(r => (
            <a key={r.slug} href={"/airlines/" + r.slug} className="flex items-center justify-between px-5 py-3 hover:bg-blue-50 transition-colors group">
              <span className="text-gray-800 group-hover:text-blue-600 font-medium">{r.name}</span>
              <span className="text-blue-400 group-hover:text-blue-600 text-sm">View guide</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}