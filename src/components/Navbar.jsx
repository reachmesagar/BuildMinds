import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'

const links = [
  { id: 'why', label: 'Mission & Vision' },
  { id: 'forge-team-section', label: 'About US' },
  { id: 'curriculum', label: 'Curriculum' },
  // { id: 'courses', label: 'Updates' },
  // { id: 'exams', label: 'Vaccancies' },
  // { id: 'admissions', label: 'Admissions' }
]

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Own the active id locally so a click updates the highlight immediately,
  // instead of waiting on whatever scroll-tracking the parent does.
  const [activeId, setActiveId] = useState(active || links[0].id)
  // While true, ignore the scroll observer so a click doesn't get overridden
  // mid-smooth-scroll by whichever section briefly passes the viewport.
  const suppressObserver = useRef(false)
  const suppressTimeout = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep in sync if the parent ever passes a new `active` value (e.g. on mount).
  useEffect(() => {
    if (active && !suppressObserver.current) setActiveId(active)
  }, [active])

  // Scrollspy: watch every linked section and highlight whichever is
  // currently most visible near the top of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressObserver.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    setActiveId(id) // instant highlight on click

    // Ignore the observer briefly so it doesn't fight the smooth scroll
    // and flip the highlight to a section passed along the way.
    suppressObserver.current = true
    clearTimeout(suppressTimeout.current)
    suppressTimeout.current = setTimeout(() => {
      suppressObserver.current = false
    }, 800)

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-ink/10' : 'bg-gray'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 font-display font-semibold text-xl text-ink"
        >
          <span className="grid place-items-center w-8 h-8 rounded-md bg-ink text-paper">
            <Cpu size={16} strokeWidth={2} />
          </span>
          Build Minds
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeId === link.id ? 'text-copper' : 'text-inkSoft hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo('admissions')}
            className="px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-copper transition-colors duration-300"
          >
            {/* Apply Now */} Contact
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
                  className={`text-left px-2 py-3 text-base font-medium ${
                    activeId === link.id ? 'text-copper' : 'text-inkSoft hover:text-copper'
                  }`}
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