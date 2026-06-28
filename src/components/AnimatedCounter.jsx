import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.4, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const display = useRef(null)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: 'easeOut' })
      return () => controls.stop()
    }
  }, [isInView, value, duration, count])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (display.current) display.current.textContent = latest + suffix
    })
    return unsubscribe
  }, [rounded, suffix])

  return (
    <span ref={ref} className={className}>
      <span ref={display}>0{suffix}</span>
    </span>
  )
}
