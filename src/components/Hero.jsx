import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter.jsx'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1, delay: i * 0.18, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: i * 0.18 } }
  })
}

const node = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.9 + i * 0.12, type: 'spring', stiffness: 300, damping: 18 }
  })
}

function RoboticDiagram() {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const rotateX = useTransform(sy, [-40, 40], [6, -6])
  const rotateY = useTransform(sx, [-40, 40], [-6, 6])

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 80)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 80)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-square max-w-[480px] mx-auto"
      style={{ perspective: 800 }}
    >
      {/* ambient radar sweep */}
      <div className="absolute inset-6 rounded-full border border-circuit/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-circuit/10 via-transparent to-transparent animate-scan" />
      </div>

      <motion.svg
        style={{ rotateX, rotateY }}
        viewBox="0 0 480 480"
        className="relative w-full h-full"
        fill="none"
      >
        {/* dotted concentric rings */}
        <circle cx="240" cy="240" r="200" stroke="#5B6B73" strokeOpacity="0.18" strokeDasharray="2 6" />
        <circle cx="240" cy="240" r="150" stroke="#5B6B73" strokeOpacity="0.18" strokeDasharray="2 6" />

        {/* base plate */}
        <motion.rect
          x="170" y="380" width="140" height="22" rx="4"
          stroke="#0F1B24" strokeWidth="2.5"
          variants={draw} custom={0} initial="hidden" animate="visible"
        />
        {/* base column */}
        <motion.line
          x1="240" y1="380" x2="240" y2="300"
          stroke="#0F1B24" strokeWidth="6" strokeLinecap="round"
          variants={draw} custom={0.4} initial="hidden" animate="visible"
        />
        {/* lower arm */}
        <motion.line
          x1="240" y1="300" x2="160" y2="220"
          stroke="#C2613A" strokeWidth="7" strokeLinecap="round"
          variants={draw} custom={0.8} initial="hidden" animate="visible"
        />
        {/* upper arm */}
        <motion.line
          x1="160" y1="220" x2="205" y2="135"
          stroke="#C2613A" strokeWidth="7" strokeLinecap="round"
          variants={draw} custom={1.1} initial="hidden" animate="visible"
        />
        {/* gripper */}
        <motion.path
          d="M205 135 L185 105 M205 135 L228 110"
          stroke="#0F1B24" strokeWidth="5" strokeLinecap="round"
          variants={draw} custom={1.4} initial="hidden" animate="visible"
        />

        {/* circuit traces fanning to a chip */}
        <motion.path
          d="M310 280 H380 V120 H300"
          stroke="#2E8B7A" strokeWidth="2"
          variants={draw} custom={1.6} initial="hidden" animate="visible"
        />
        <motion.path
          d="M310 320 H410 V340"
          stroke="#2E8B7A" strokeWidth="2"
          variants={draw} custom={1.8} initial="hidden" animate="visible"
        />

        {/* chip */}
        <motion.rect
          x="255" y="95" width="50" height="50" rx="6"
          stroke="#0F1B24" strokeWidth="2.5"
          variants={draw} custom={1.5} initial="hidden" animate="visible"
        />
        <motion.text
          x="280" y="124" textAnchor="middle"
          fontFamily="IBM Plex Mono" fontSize="11" fill="#0F1B24"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
        >
          AI
        </motion.text>

        {/* joints */}
        {[
          [240, 300],
          [160, 220],
          [205, 135]
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r="8"
            fill="#F3F5F3" stroke="#0F1B24" strokeWidth="2.5"
            variants={node} custom={i} initial="hidden" animate="visible"
          />
        ))}

        {/* pulsing power node at chip */}
        <motion.circle
          cx="410" cy="340" r="6" fill="#C2613A"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        >
          <animate attributeName="r" values="6;9;6" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" />
        </motion.circle>
      </motion.svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bp-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper to-paperDim/60 -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-bold inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-circuit bg-circuit/10 border border-circuit/25 rounded-full px-3 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-circuit animate-pulse " />
            Shaping future ready minds from and Early Age.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink"
          >
            Shaping future ready minds from and Early Age.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 text-lg text-steel max-w-xl leading-relaxed"
          >
The world is shifting from the Information Age to the Intelligence Age — and the next generation can't afford to just use AI and Robotics. They need to create it.

BuildMind is on a mission to make every classroom, from Class 6 to Class 10, a launchpad for Nepall's future innovators, engineers, and AI pioneers. We don't teach theory from textbooks — we hand students real robots, real code, and real problems to solve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-medium hover:bg-copper transition-colors duration-300"
            >
              Apply for Fall Intake
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/15 text-ink font-medium hover:border-ink/40 transition-colors duration-300"
            >
              <PlayCircle size={16} />
              View Curriculum
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-ink/10 pt-6"
          >
            <div>
              <div className="font-display font-semibold text-2xl text-ink">
                <AnimatedCounter value={4} suffix=" sem" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-steel mt-1">Full track</p>
            </div>
            <div>
              <div className="font-display font-semibold text-2xl text-ink">
                <AnimatedCounter value={12} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-steel mt-1">Core courses</p>
            </div>
            <div>
              <div className="font-display font-semibold text-2xl text-ink">
                <AnimatedCounter value={92} suffix="%" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-steel mt-1">Placement rate</p>
            </div>
          </motion.div>
        </div>

        <RoboticDiagram />
      </div>
    </section>
  )
}
