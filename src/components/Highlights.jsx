import { motion } from 'framer-motion'
import { Cpu, BarChart3, Lightbulb, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    tag: '01 · LEARN BY DOING',
    title: 'Hands-On Building',
    text: "Every session ends with something built, not just notes taken. Circuits wired, code compiled, machines that move — by the student, not for them."
  },
  {
    icon: BarChart3,
    tag: '02 · GRADES 6–10',
    title: 'Age-Mapped Progression',
    text: 'From a first blinking LED in grade 6 to autonomous, sensor-driven machines by grade 10 — a structured path that never repeats itself.'
  },
  {
    icon: Lightbulb,
    tag: '03 · APPLIED THINKING',
    title: "Real-World Problem Solving",
    text: "Students don't just learn the tools — they use them to solve problems that matter to them, in their own school and community.",
    highlight: false
  },
  {
    icon: Sparkles,
    tag: '04 · WHAT STAYS WITH THEM',
    title: 'Confidence & Creativity',
    text: 'Building something with your own hands changes how a student sees themselves — a shift in identity that outlasts the workshop itself.'
  }
]

export default function Highlights() {
  return (
  <section id="why" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-copper"></span>
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
            Mission & Vision 
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Nepal's current curriculum introduces computer science and basic science concepts — but almost nowhere does a student get to physically build a robot, write code that controls real hardware, or work through an actual engineering problem from idea to working prototype. Students graduate school having heard about technology, not having built with it. By the time they reach university or the job market, students from countries with hands-on STEM exposure are years ahead — not because they're smarter, but because they started building earlier.
          </p>
        </div>

        <p className="mt-16 text-center text-lg text-steel max-w-3xl mx-auto leading-relaxed">
          Schools teach the theory. Industry demands the practice. This is the bridge
          we build inside your classroom, from grade 6 through grade 10.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* dashed connector line across the top of the cards */}
          <div className="hidden lg:block absolute top-[9px] left-[12.5%] right-[12.5%] border-t border-dashed border-ink/15 -z-10" />

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
                className="relative pt-5"
              >
                {/* dot marker above the card, centered */}
                <span
                  className={`absolute -top-[1px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${
                    item.highlight ? 'bg-white ring-4 ring-white/30' : 'bg-copper'
                  }`}
                />

                <div
                  className={`group relative rounded-2xl border p-6 h-full transition-shadow duration-300 ${
                    item.highlight
                      ? 'bg-copper border-copper text-white shadow-cardHover'
                      : 'bg-white border-ink/8 text-ink shadow-card hover:shadow-cardHover'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl grid place-items-center transition-colors duration-300 ${
                      item.highlight
                        ? 'bg-white/15 text-white'
                        : 'bg-ink/5 text-copper group-hover:bg-copper group-hover:text-white'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className={`mt-5 font-display font-semibold text-lg ${item.highlight ? 'text-white' : 'text-ink'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${item.highlight ? 'text-white/85' : 'text-steel'}`}>
                    {item.text}
                  </p>
                  <span
                    className={`mt-5 block font-mono text-[11px] uppercase tracking-widest ${
                      item.highlight ? 'text-white/70' : 'text-copper/80'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}