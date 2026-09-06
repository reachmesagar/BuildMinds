import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Beaker, BookOpen, Target } from 'lucide-react'
import { curriculum } from '../data/curriculum.js'

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-paperDim/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-copper">Curriculum</span>
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
            Three Course, one continuous build.
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Each course ends with a working milestone, not just a transcript line which  are scheduled to support that milestone directly.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {curriculum.map((sem, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={sem.term}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl bg-white border border-ink/8 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-5 text-left px-6 py-5"
                >
                  <span className="font-mono text-xs text-paper bg-ink rounded-full w-9 h-9 grid place-items-center flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-copper">{sem.term}</span>
                    <span className="block font-display font-semibold text-lg lg:text-xl text-ink mt-0.5">{sem.title}</span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1 font-mono text-xs text-steel">
                    <Beaker size={14} />
                    {sem.hours.lab}h lab / {sem.hours.lecture}h lecture
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={20} className="text-steel" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 grid lg:grid-cols-3 gap-6 border-t border-ink/8 mt-1">
                        <div className="lg:col-span-2">
                          <p className="text-sm text-steel leading-relaxed pt-4">{sem.focus}</p>
                          <div className="mt-4 flex items-start gap-2 bg-circuit/8 border border-circuit/20 rounded-xl px-4 py-3">
                            <Target size={16} className="text-circuit mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-inkSoft">
                              <span className="font-medium">Milestone — </span>
                              {sem.milestone}
                            </p>
                          </div>
                        </div>
                        <div className="pt-4 lg:pt-0">
                          <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-steel mb-3">
                            <BookOpen size={13} />
                            Courses this term
                          </span>
                          <ul className="space-y-2">
                            {sem.courses.map((c) => (
                              <li key={c} className="text-sm text-ink bg-paperDim/70 rounded-lg px-3 py-2">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
