import { motion } from 'framer-motion'

const nodes = [
  { id: 'hero', label: 'Boot' },
  { id: 'why', label: 'Why Forge' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'courses', label: 'Courses' },
  { id: 'exams', label: 'Exams' },
  { id: 'admissions', label: 'Apply' }
]

export default function ScrollSpine({ active }) {
  const activeIndex = Math.max(0, nodes.findIndex((n) => n.id === active))

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
      aria-label="Page section progress"
    >
      <div className="relative flex flex-col items-center gap-0">
        {/* base trace line */}
        <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-steelLight/40" />
        {/* powered trace line, grows with progress */}
        <motion.div
          className="absolute left-1/2 top-2 w-px -translate-x-1/2 bg-copper origin-top"
          initial={{ height: 0 }}
          animate={{ height: `${(activeIndex / (nodes.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ bottom: 8 }}
        />

        {nodes.map((node, i) => {
          const isActive = i <= activeIndex
          const isCurrent = node.id === active
          return (
            <button
              key={node.id}
              onClick={() => scrollTo(node.id)}
              className="group relative flex items-center py-3.5 cursor-pointer"
              aria-label={`Go to ${node.label} section`}
              aria-current={isCurrent}
            >
              <span
                className={`relative z-10 block rounded-full border transition-all duration-300 ${
                  isCurrent
                    ? 'w-3.5 h-3.5 bg-copper border-copper shadow-node'
                    : isActive
                    ? 'w-2.5 h-2.5 bg-circuit border-circuit'
                    : 'w-2.5 h-2.5 bg-paper border-steelLight'
                }`}
              />
              <span
                className={`absolute left-6 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded bg-ink text-paper opacity-0 -translate-x-1 transition-all duration-200 pointer-events-none ${
                  'group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {node.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
