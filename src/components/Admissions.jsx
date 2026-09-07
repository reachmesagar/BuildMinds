import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, MessageCircle, Users, Building2, Calendar, Clock } from 'lucide-react'

const eligibility = [
  'Currently enrolled in an higher secondary or lower secondary student',
  'Comfortable for an introductory programming course',
  'Comfortable committing 10–14 lab hours per week',
  'No prior robotics experience required — foundations are taught in Semester 1'
]

const steps = [
  { title: 'Submit application', text: 'Reviewing Application and Forwarding ' },
  { title: 'Reviewing Schedule', text: 'Strategic timing of the application submission to align with optimal admissions windows' },
  { title: 'Offer & onboarding', text: 'Decisions within two weeks. Hardware kit issued before Week 1.' }
]

const tabs = [
  {
    id: 'general',
    label: 'General Enquiry',
    icon: MessageCircle,
    description: 'Questions about the program, curriculum, or anything else — we typically reply within a business day.'
  },
  {
    id: 'guardian',
    label: 'As a Guardian',
    icon: Users,
    description: "Book a short call to walk through the program before your child applies."
  },
  {
    id: 'organization',
    label: 'As an Organization',
    icon: Building2,
    description: 'Schools, companies, and partners — book a call to discuss collaborations or bulk enrolment.'
  }
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  childGrade: '',
  preferredDate: '',
  preferredTime: '',
  message: ''
}

export default function Admissions() {
  const [activeTab, setActiveTab] = useState('general')
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const switchTab = (id) => {
    setActiveTab(id)
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.email) setSubmitted(true)
  }

  const isBooking = activeTab === 'guardian' || activeTab === 'organization'
  const activeTabMeta = tabs.find((t) => t.id === activeTab)

  return (
    <section id="admissions" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-copper">Admissions</span>
            <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-ink">
              Applications for Fall intake close September 15.
            </h2>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-ink mb-4">Eligibility</h3>
              <ul className="space-y-3">
                {eligibility.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-inkSoft leading-relaxed"
                  >
                    <CheckCircle2 size={18} className="text-circuit flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-ink mb-4">How it works</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white border border-ink/8 rounded-2xl p-5 shadow-card"
                  >
                    <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="font-display font-semibold text-ink mt-2">{step.title}</h4>
                    <p className="text-sm text-steel mt-1.5 leading-relaxed">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry / booking card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative bg-ink text-paper rounded-2xl p-8 overflow-hidden self-start"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-copper/20 blur-2xl" />

            <h3 className="font-display font-semibold text-2xl">Get in touch</h3>

            {/* Tab switcher */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = tab.id === activeTab
                return (
                  <button
                    key={tab.id}
                    onClick={() => switchTab(tab.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-copper text-white'
                        : 'bg-white/10 text-paper/70 hover:bg-white/15 hover:text-paper'
                    }`}
                  >
                    <Icon size={13} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <p className="mt-4 text-sm text-paper/70 leading-relaxed">
              {activeTabMeta.description}
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-3"
                >
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField('name')}
                    placeholder={activeTab === 'organization' ? 'Contact person name' : 'Your name'}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                  />

                  {activeTab === 'organization' && (
                    <input
                      type="text"
                      required
                      value={form.organization}
                      onChange={updateField('organization')}
                      placeholder="Organization / school name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                    />
                  )}

                  {activeTab === 'guardian' && (
                    <input
                      type="text"
                      value={form.childGrade}
                      onChange={updateField('childGrade')}
                      placeholder="Child's current grade (e.g. Grade 8)"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                    />
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={updateField('email')}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                    />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={updateField('phone')}
                      placeholder="Phone (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors"
                    />
                  </div>

                  {isBooking && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/40 pointer-events-none" />
                        <input
                          type="date"
                          required
                          value={form.preferredDate}
                          onChange={updateField('preferredDate')}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/15 text-paper text-sm focus:outline-none focus:border-copper transition-colors [color-scheme:dark]"
                        />
                      </div>
                      <div className="relative">
                        <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/40 pointer-events-none" />
                        <input
                          type="time"
                          required
                          value={form.preferredTime}
                          onChange={updateField('preferredTime')}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/15 text-paper text-sm focus:outline-none focus:border-copper transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  )}

                  <textarea
                    value={form.message}
                    onChange={updateField('message')}
                    placeholder={
                      activeTab === 'general'
                        ? 'What would you like to know?'
                        : 'Anything you want us to know before the call (optional)'
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-paper placeholder:text-paper/40 text-sm focus:outline-none focus:border-copper transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-copper text-white font-medium hover:bg-copperLight transition-colors duration-300"
                  >
                    {isBooking ? 'Book the call' : 'Send enquiry'}
                    <Send size={15} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 flex items-start gap-2 bg-circuit/15 border border-circuit/30 rounded-xl px-4 py-3 text-sm"
                >
                  <CheckCircle2 size={18} className="text-circuitLight flex-shrink-0 mt-0.5" />
                  <span>
                    {isBooking
                      ? `Call requested for ${form.preferredDate || 'your preferred date'}${
                          form.preferredTime ? ` at ${form.preferredTime}` : ''
                        }. We'll confirm by email at ${form.email}.`
                      : `Thanks — we've got your enquiry and will reply at ${form.email} shortly.`}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-xs text-paper/50">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}