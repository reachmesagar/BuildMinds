import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'

const links = [
  { id: 'why', label: 'Why Forge' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'courses', label: 'Courses' },
  { id: 'exams', label: 'Exams' },
  { id: 'admissions', label: 'Admissions' }
]

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 font-display font-semibold text-lg text-ink"
        >
          <span className="grid place-items-center w-8 h-8 rounded-md bg-ink text-paper">
            <Cpu size={16} strokeWidth={2} />
          </span>
          FORGE
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === link.id ? 'text-copper' : 'text-inkSoft hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => navigation.navigate("/about")}
            className="px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-copper transition-colors duration-300"
          >
            {/* Apply Now */} About US
          </button>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-paper border-b border-ink/10"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-2 py-3 text-base font-medium text-inkSoft hover:text-copper"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('admissions')}
                className="mt-2 px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium text-center"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
