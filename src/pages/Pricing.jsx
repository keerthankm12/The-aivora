import React from 'react'
import { motion } from 'framer-motion'
const plans = [
  { name:'Starter', price:'₹19,999', features:['1 Agent','Email Support','Basic Metrics'] },
  { name:'Growth', price:'₹49,999', features:['3 Agents','Phone Support','Advanced Metrics'] },
  { name:'Enterprise', price:'Custom', features:['Unlimited Agents','SLA','Dedicated CSM'] },
]
export default function Pricing(){
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <motion.h2 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl font-bold">Pricing</motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p,i)=>(
          <motion.div key={i} whileHover={{ y:-6 }} className="p-6 rounded-2xl bg-white/4">
            <h4 className="text-xl font-bold">{p.name}</h4>
            <p className="mt-2 text-2xl font-extrabold">{p.price}</p>
            <ul className="mt-4 text-sm list-disc list-inside text-gray-200/80">
              {p.features.map((f,j)=><li key={j}>{f}</li>)}
            </ul>
            <div className="mt-6">
              <a href="/contact" className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-violet-600 to-cyan-400 text-black">Get started</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
