import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2 initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} className="text-3xl font-bold">About The Aivora</motion.h2>
      <p className="mt-4 text-gray-300/90">We are a band of engineers, designers and product folks obsessed with autonomous systems. Aivora builds production-grade agents that replace repetitive human tasks and unlock growth.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white/4">
          <h4 className="font-semibold">Mission</h4>
          <p className="text-sm mt-2">Deploy agent-first solutions that drive conversion, retention and operational efficiency.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/4">
          <h4 className="font-semibold">Values</h4>
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>Human-centered automation</li>
            <li>Responsible & auditable AI</li>
            <li>Rapid iteration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
