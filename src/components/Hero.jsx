import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Monitor, Cpu, Gamepad2, Globe, BookOpen, Rocket, ArrowRight, Award, ShieldCheck } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      color: ['#f4c430', '#f47c3c', '#2a9d8f', '#fff'][Math.floor(Math.random() * 4)],
    }))

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = 0.7
        ctx.fill()
        s.y -= s.speed
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width }
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  const quickLinks = [
    { icon: <Monitor size={28} />, label: 'Programming for Kids', path: '/programs', color: '#f47c3c', bg: '#fff3ec' },
    { icon: <Cpu size={28} />, label: 'Arduino & Robotics', path: '/programs', color: '#2a9d8f', bg: '#e6f7f5' },
    { icon: <Gamepad2 size={28} />, label: 'Game Development', path: '/programs', color: '#7c5cbf', bg: '#f0ebff' },
    { icon: <Globe size={28} />, label: 'Web & Leadership', path: '/programs', color: '#e95b8e', bg: '#fdeef4' },
  ]

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
        <div className="shape shape--3" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge">
            <Rocket size={16} />
            <span>Support Egypt Vision 2030 · Digital Leaders</span>
          </div>
          
          <h1 className="hero__title">
            Kids Technology &amp; <br />
            <span className="hero__highlight">Innovation</span> Academy <br />
            <span className="hero__highlight hero__highlight--teal">(KTIA)</span>
          </h1>

          {/* Resticted description directly from all_yoU.docx Section 1.1 Purpose */}
          <p className="hero__desc">
            In support of <strong>Egypt Vision 2030</strong>, we empower children aged <strong>5–16</strong> to become future digital leaders by teaching them programming, web design, and Arduino robotics through practical projects. Through interactive workshops, summer camps, and competitions, we build technical abilities while fostering creativity, problem-solving, and presentation skills.
          </p>

          <div className="hero__sponsor-pill">
            <span className="sponsor-tag">Official Sponsor:</span>
            <strong>National Telecommunication Institute (NTI)</strong> &amp; Digital Egypt · Partnering with <strong>ITI</strong>
          </div>

          <div className="hero__actions">
            <Link to="/programs" className="btn btn-primary hero__btn">
              <BookOpen size={18} /> Explore 5 Official Courses
            </Link>
            <Link to="/about" className="btn btn-outline hero__btn hero__btn--outline">
              About the Academy <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">5–16</span>
              <span className="hero__stat-label">Years Age Group</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">8</span>
              <span className="hero__stat-label">Labs &amp; Classrooms</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">104</span>
              <span className="hero__stat-label">Concurrent Capacity</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__circle-bg" />
          <div className="hero__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
              alt="Happy children learning technology at KTIA"
              className="hero__img"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80'
              }}
            />
            <div className="hero__floating hero__floating--1">
              <span>🤖</span> Arduino &amp; Robotics Lab
            </div>
            <div className="hero__floating hero__floating--2">
              <span>💻</span> Practical Programming
            </div>
            <div className="hero__floating hero__floating--3">
              <span>🏛️</span> NTI &amp; ITI Partner
            </div>
          </div>
        </div>
      </div>

      <div className="hero__quick">
        <div className="container">
          <div className="hero__quick-grid">
            {quickLinks.map((item) => (
              <Link to={item.path} key={item.label} className="hero__quick-card" style={{ '--card-color': item.color, '--card-bg': item.bg }}>
                <div className="hero__quick-icon" style={{ background: item.bg, color: item.color }}>
                  {item.icon}
                </div>
                <span className="hero__quick-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
