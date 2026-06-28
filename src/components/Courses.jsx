import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, courses } from '../data/courses.js'

const categoryColor = {
  Robotics: 'bg-copper/10 text-copper border-copper/30',
  AI: 'bg-circuit/10 text-circuit border-circuit/30',
  Programming: 'bg-amber/15 text-amber border-amber/40',
  Mathematics: 'bg-steel/10 text-steel border-steel/30'
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? courses : courses.filter((c) => c.category === activeCategory)

  return (
    <section id="courses" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-copper">Course Catalogue</span>
            <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
              Our Course . Every one hands-on.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-steel border-ink/15 hover:border-ink/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.code}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-2xl border border-ink/8 p-6 shadow-card hover:shadow-cardHover transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-steel">{course.code}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider border rounded-full px-2 py-0.5 ${categoryColor[course.category]}`}
                  >
                    {course.category}
                  </span>
                </div>

                <h3 className="mt-3 font-display font-semibold text-lg text-ink leading-snug">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{course.description}</p>

                <div className="mt-4 flex items-center justify-between text-xs font-mono text-steel">
                  <span>Sem {course.semester}</span>
                  <span>{course.credits} credits</span>
                </div>

                {/* topics reveal panel */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-ink text-paper p-5 rounded-b-2xl">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-circuitLight">
                    Topics covered
                  </span>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {course.topics.map((t) => (
                      <li key={t} className="text-[11px] bg-white/10 rounded-full px-2.5 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
