import { useEffect, useRef, useState } from 'react'
import './Stats.css'

// Real data directly from all_yoU.docx Project Specifications
const statsData = [
  { number: 2000, suffix: ' m²', label: 'Academy Land Area', emoji: '🏛️', color: '#f47c3c' },
  { number: 8, suffix: ' Spaces', label: 'Equipped Labs & Rooms', emoji: '🔬', color: '#2a9d8f' },
  { number: 104, suffix: ' Seats', label: 'Concurrent Capacity', emoji: '👨‍🎓', color: '#7c5cbf' },
  { number: 24, suffix: ' Mos', label: 'Project Timeline', emoji: '⏱️', color: '#f4c430' },
]

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

const StatItem = ({ stat, animate }) => {
  const count = useCountUp(stat.number, 2000, animate)
  return (
    <div className="stat-item">
      <div className="stat-item__emoji">{stat.emoji}</div>
      <div className="stat-item__number" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <div className="stat-item__label">{stat.label}</div>
    </div>
  )
}

const Stats = () => {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats__overlay" />
      <div className="container">
        <div className="stats__content">
          <div className="stats__text">
            <h2>Official KTIA Project Metrics</h2>
            <p>Verified project charter specifications: a 2,000 m² academy, 1,700 m² built-up space across 3 floors, 8 equipped spaces, and 104 concurrent learning capacity.</p>
          </div>
          <div className="stats__grid">
            {statsData.map((s, i) => (
              <StatItem key={i} stat={s} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
