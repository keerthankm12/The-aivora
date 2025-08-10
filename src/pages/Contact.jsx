import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <motion.h2 initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-3xl font-bold">Contact</motion.h2>
      <p className="mt-2 text-gray-300/85">Want an agent tailored to your workflow? Tell us about your use case.</p>

      {!sent ? (
        <form className="mt-6 grid gap-4" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
          <input required placeholder="Company / Name" className="p-3 rounded-md bg-white/4 border border-white/6" />
          <input required placeholder="Email" type="email" className="p-3 rounded-md bg-white/4 border border-white/6" />
          <textarea required placeholder="Brief project description" rows={5} className="p-3 rounded-md bg-white/4 border border-white/6" />
          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-violet-600 to-cyan-400 text-black">Send</button>
            <button type="button" className="px-4 py-2 rounded-md border border-white/8">Request demo</button>
          </div>
        </form>
      ) : (
        <div className="mt-6 p-6 rounded-md bg-white/5">
          <h4 className="font-semibold">Thanks — we received your message!</h4>
          <p className="text-sm text-gray-300 mt-2">We will get back to you shortly.</p>
        </div>
      )}
    </div>
  )
}
