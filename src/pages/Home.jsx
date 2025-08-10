import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">Aivora</span>
          </motion.h1>
          <motion.p initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.1 }} className="mt-6 text-lg text-gray-300">
            We deploy agents. You deploy growth. Autonomous AI teammates for support, sales, marketing and reception — built to scale.
          </motion.p>

          <motion.div className="mt-8 flex gap-4" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-cyan-400 text-black px-5 py-3 rounded-full font-semibold shadow-lg">Get your agent</Link>
            <Link to="/pricing" className="px-4 py-3 rounded-md border border-white/10 text-sm">See pricing</Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5">
              <h4 className="font-semibold">AI Chatbot</h4>
              <p className="text-xs text-gray-300/80">24/7 support, context-aware, multilingual.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <h4 className="font-semibold">AI Sales Agent</h4>
              <p className="text-xs text-gray-300/80">Lead qualification, demo booking, reminders.</p>
            </div>
          </div>
        </div>

        <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ delay:0.2 }} className="p-6 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/5 shadow-2xl">
          <div className="rounded-xl overflow-hidden p-6 bg-gradient-to-b from-white/5 to-transparent">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-700/40 to-cyan-600/30">
                <h5 className="text-xs">Active Agents</h5>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="p-4 rounded-xl bg-white/3">
                <h5 className="text-xs">Avg Lead Time</h5>
                <p className="text-2xl font-bold">2.4 days</p>
              </div>
            </div>

            <div className="mt-6">
              <h6 className="text-sm font-medium">Featured: AI Receptionist</h6>
              <p className="text-xs text-gray-200/80 mt-2">Handles scheduling, vetting callers, and triaging issues — like a human but tireless.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-bold">Why Aivora?</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/4">
            <h4 className="font-semibold">Autonomous</h4>
            <p className="text-sm text-gray-200/80 mt-2">Agents that run with minimal oversight.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/4">
            <h4 className="font-semibold">Composable</h4>
            <p className="text-sm text-gray-200/80 mt-2">Mix & match modules for custom workflows.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/4">
            <h4 className="font-semibold">Trustworthy</h4>
            <p className="text-sm text-gray-200/80 mt-2">Auditable decisions with human oversight.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
