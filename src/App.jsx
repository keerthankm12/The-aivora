import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function Nav() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 12c1.5-3 6-3 7.5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div>
          <div className="font-bold">The Aivora</div>
          <div className="text-xs text-gray-300">we deploy agents, You deploy growth.</div>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="text-sm hover:underline">Home</Link>
        <Link to="/about" className="text-sm hover:underline">About</Link>
        <Link to="/services" className="text-sm hover:underline">Services</Link>
        <Link to="/pricing" className="text-sm hover:underline">Pricing</Link>
        <Link to="/contact" className="text-sm hover:underline">Contact</Link>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-black font-semibold">Start</Link>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-160px] top-[-120px] w-96 h-96 rounded-3xl bg-gradient-to-br from-violet-700/30 to-cyan-400/20 blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute right-[-140px] bottom-[-140px] w-80 h-80 rounded-2xl bg-gradient-to-br from-green-400/20 to-blue-600/20 blur-3xl animate-[spin_25s_linear_infinite]" />
      </div>

      <header className="relative">
        <Nav />
      </header>

      <main className="pt-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer className="mt-20 border-t border-white/6 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 12c1.5-3 6-3 7.5 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="font-semibold">The Aivora</div>
              <div className="text-xs text-gray-300/80">we deploy agents, You deploy growth.</div>
            </div>
          </div>
          <div className="text-sm text-gray-300/80">© {new Date().getFullYear()} The Aivora. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
