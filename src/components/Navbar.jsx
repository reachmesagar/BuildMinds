import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'

const links = [
  { id: 'why', label: 'Mission & Vision' },
  { id: 'forge-team-section', label: 'About US' },
  { id: 'curriculum', label: 'Curriculum' },
  // { id: 'courses', label: 'Updates' },
  // { id: 'exams', label: 'Vaccancies' },
  { id: 'admissions', label: 'Admissions' }
]

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState(active || links[0].id)
  const suppressObserver = useRef(false)
  const suppressTimeout = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (active && !suppressObserver.current) setActiveId(active)
  }, [active])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
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

  // Lock scrolling behind the mobile menu. Locking both <html> and <body>,
  // and using `position: fixed` on body (not just overflow: hidden), is what
  // actually stops background scroll on iOS Safari — overflow:hidden alone
  // is known to be unreliable there and can also block touch events from
  // reaching the menu's own scroll container.
  const scrollYRef = useRef(0)
  useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY
      document.documentElement.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      return () => {
        document.documentElement.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    setActiveId(id)
    suppressObserver.current = true
    clearTimeout(suppressTimeout.current)
    suppressTimeout.current = setTimeout(() => {
      suppressObserver.current = false
    }, 800)
    // Defer until after the body-scroll-lock cleanup above restores scroll
    // position, otherwise scrollIntoView can fire before the lock is undone.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
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
            Contact
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
            {/*
              This inner div is the actual scroll container. It needs:
              - a hard max-height (vh, not dvh — dvh is unsupported or
                inconsistently computed in some mobile/embedded browsers,
                which silently breaks the whole rule if it's the only value)
              - overflow-y-auto to enable scrolling once content exceeds that
              - overscroll-contain so scrolling the menu doesn't chain into
                scrolling whatever is behind it
              - -webkit-overflow-scrolling: touch for momentum scroll on iOS
              - touchAction: 'pan-y' so touch drags are treated as scroll
                gestures instead of being swallowed by parent handlers
            */}
            <div
              className="flex flex-col px-6 py-4 gap-1 overflow-y-auto overscroll-contain"
              style={{
                maxHeight: '75vh',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y'
              }}
            >
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