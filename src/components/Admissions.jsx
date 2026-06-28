import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'

const eligibility = [
  'Currently enrolled in an undergraduate engineering, CS, or physical sciences program',
  'Completed (or concurrently taking) an introductory programming course',
  'Comfortable committing 10–14 lab hours per week',
  'No prior robotics experience required — foundations are taught in Semester 1'
]

const steps = [
  { title: 'Submit application', text: 'Transcript, a short statement of interest, and one faculty reference.' },
  { title: 'Technical interview', text: '30-minute conversation about how you think through a problem — not a trivia test.' },
  { title: 'Offer & onboarding', text: 'Decisions within two weeks. Hardware kit issued before Week 1.' }
]

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="admissions" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-copper">Admissions</span>
            <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
              Applications for Fall intake close September 15.
            </h2>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-ink mb-4">Eligibility</h3>
              <ul className="space-y-3">
                {eligibility.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-inkSoft leading-relaxed"
                  >
                    <CheckCircle2 size={18} className="text-circuit flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-ink mb-4">How it works</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white border border-ink/8 rounded-2xl p-5 shadow-card"
                  >
                    <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="font-display font-semibold text-ink mt-2">{step.title}</h4>
                    <p className="text-sm text-steel mt-1.5 leading-relaxed">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative bg-ink text-paper rounded-2xl p-8 overflow-hidden self-start"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-copper/20 blur-2xl" />
            <h3 className="font-display font-semibold text-2xl">Get the full program guide</h3>
            <p className="mt-2 text-sm text-paper/70 leading-relaxed">
              Curriculum PDF, sample exam papers, and lab equipment list — sent straight to your inbox.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-copper text-white font-medium hover:bg-copperLight transition-colors duration-300"
                >
                  Send me the guide
                  <Send size={15} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex items-center gap-2 bg-circuit/15 border border-circuit/30 rounded-xl px-4 py-3 text-sm"
              >
                <CheckCircle2 size={18} className="text-circuitLight" />
                On its way to {email}. Check your inbox shortly.
              </motion.div>
            )}

            <p className="mt-4 text-xs text-paper/50">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
