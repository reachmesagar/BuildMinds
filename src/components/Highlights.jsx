import { motion } from 'framer-motion'
import { Wrench, BrainCircuit, Users, Trophy } from 'lucide-react'

const items = [
  {
    icon: Wrench,
    title: 'Hardware-first labs',
    text: 'Every course pairs theory with a bench: soldering irons, motor drivers, and a robot you keep building on for four semesters.'
  },
  {
    icon: BrainCircuit,
    title: 'Robotics + AI, not either/or',
    text: 'Most programs teach AI in the abstract. Here, every model you train runs on hardware you assembled yourself.'
  },
  {
    icon: Users,
    title: 'Industry-mentored capstone',
    text: 'Final semester pairs you with an engineer from a partner company who reviews your project weekly, not just at the end.'
  },
  {
    icon: Trophy,
    title: 'Public demo days',
    text: 'Projects are defended in front of faculty and industry panels — the same format used for technical job interviews.'
  }
]

export default function Highlights() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-5xl">
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
            Why Build Minds ?
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Nepal's current curriculum introduces computer science and basic science concepts — but almost nowhere does a student get to physically build a robot, write code that controls real hardware, or work through an actual engineering problem from idea to working prototype. Students graduate school having heard about technology, not having built with it. By the time they reach university or the job market, students from countries with hands-on STEM exposure are years ahead — not because they're smarter, but because they started building earlier.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl border border-ink/8 p-6 shadow-card hover:shadow-cardHover transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-ink/5 text-copper grid place-items-center group-hover:bg-copper group-hover:text-white transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
