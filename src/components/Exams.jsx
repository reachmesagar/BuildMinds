import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { CalendarClock, ShieldCheck } from 'lucide-react'
import { weightage, examCycle, gradingScale, policies } from '../data/exams.js'

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const d = payload[0].payload
    return (
      <div className="bg-ink text-paper text-xs rounded-lg px-3 py-2 font-mono">
        {d.name}: {d.value}%
      </div>
    )
  }
  return null
}

export default function Exams() {
  return (
    <section id="exams" className="py-24 lg:py-32 bg-paperDim/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-copper">Exams &amp; Assessment</span>
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
            What will be in our Seminnar
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Written exams cover theory. Lab practicals and project defenses cover whether you can
            actually build the thing. Both count.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Weightage donut */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-ink/8 p-6 shadow-card"
          >
            <h3 className="font-display font-semibold text-ink mb-1">Grade Weightage</h3>
            <p className="text-xs text-steel mb-4">Per course, every semester</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={weightage}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={62}
                    outerRadius={92}
                    paddingAngle={3}
                    animationDuration={900}
                  >
                    {weightage.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 space-y-2">
              {weightage.map((w) => (
                <li key={w.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-inkSoft">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: w.color }} />
                    {w.name}
                  </span>
                  <span className="font-mono text-steel">{w.value}%</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Exam cycle timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-ink/8 p-6 shadow-card"
          >
            <h3 className="font-display font-semibold text-ink mb-1 flex items-center gap-2">
              <CalendarClock size={18} className="text-copper" />
              Assessment Cycle — A Typical Semester
            </h3>
            <p className="text-xs text-steel mb-6">16-week term</p>

            <div className="relative pl-6">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-ink/10" />
              <ul className="space-y-5">
                {examCycle.map((e, i) => (
                  <motion.li
                    key={e.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-paper border-2 border-copper" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-copper">{e.week}</span>
                    <p className="font-medium text-ink mt-0.5">{e.label}</p>
                    <p className="text-sm text-steel mt-1 leading-relaxed">{e.detail}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Grading scale + policies */}
        <div className="mt-8 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-ink/8 p-6 shadow-card"
          >
            <h3 className="font-display font-semibold text-ink mb-4">Grading Scale</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left font-mono text-[11px] uppercase tracking-wider text-steel border-b border-ink/8">
                  <th className="py-2">Grade</th>
                  <th className="py-2">Score</th>
                  <th className="py-2">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {gradingScale.map((g) => (
                  <tr key={g.grade} className="border-b border-ink/5 last:border-0">
                    <td className="py-2.5 font-display font-semibold text-ink">{g.grade}</td>
                    <td className="py-2.5 font-mono text-steel">{g.range}</td>
                    <td className="py-2.5 text-inkSoft">{g.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-ink/8 p-6 shadow-card"
          >
            <h3 className="font-display font-semibold text-ink mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-circuit" />
              Exam Policies
            </h3>
            <ul className="space-y-3">
              {policies.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-inkSoft leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-circuit flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
