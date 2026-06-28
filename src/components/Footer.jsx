import { Cpu, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const sitemap = [
  { id: 'why', label: 'Why Forge' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'courses', label: 'Courses' },
  { id: 'exams', label: 'Exams' },
  { id: 'admissions', label: 'Admissions' }
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-ink text-paper/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg text-paper">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-copper text-white">
              <Cpu size={16} />
            </span>
            FORGE
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            An undergraduate Robotics &amp; AI specialization built around hardware, hands-on
            exams, and a four-semester capstone track.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-paper/40 mb-4">Program</h4>
          <ul className="space-y-2.5 text-sm">
            {sitemap.map((s) => (
              <li key={s.id}>
                <button onClick={() => scrollTo(s.id)} className="hover:text-copperLight transition-colors">
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-paper/40 mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={14} /> admissions@forge.edu
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Engineering Building, Room 214
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-paper/40 mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Linkedin, Github, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-copper hover:text-white transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 lg:px-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper/40">
        <span>© {new Date().getFullYear()} FORGE Robotics &amp; AI Program. All rights reserved.</span>
        <span>Built for undergraduates who'd rather solder than sit still.</span>
      </div>
    </footer>
  )
}
