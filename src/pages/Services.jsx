import React from 'react'
import { motion } from 'framer-motion'
const services = [
  { id:'chatbot', title:'AI Chatbot', desc:'Context-aware support & sales assistant.' },
  { id:'receptionist', title:'AI Receptionist', desc:'Phone + calendar assistant with personality.' },
  { id:'sales', title:'AI Sales Agent', desc:'Lead qualification, outreach & demos.' },
  { id:'marketing', title:'AI Marketing Team', desc:'Automated campaigns, content & analytics.' },
  { id:'custom', title:'Custom Agents', desc:'We design agents for your unique workflows.' },
]

export default function Services(){
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <motion.h2 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl font-bold">Services</motion.h2>
      <p className="mt-2 text-gray-300/85">Pick from built modules or get a custom deployment.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <motion.div key={s.id} whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl bg-gradient-to-br from-white/4 to-white/3 border border-white/6">
            <h4 className="font-semibold text-lg">{s.title}</h4>
            <p className="text-sm mt-2 text-gray-200/85">{s.desc}</p>
            <div className="mt-4 flex gap-3">
              <a href="/contact" className="text-sm px-3 py-2 rounded-md border border-white/10">Talk to us</a>
              <a href="/pricing" className="text-sm px-3 py-2 rounded-md bg-white/6">See plan</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
