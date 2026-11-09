import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CalloutBanner from '../components/CalloutBanner'
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Monitor,
  Cpu,
  Gamepad2,
  Globe,
  Mic,
  Award,
  BookOpen
} from 'lucide-react'
import './HomePage.css'

const HomePage = () => {
  const officialCourses = [
    {
      title: 'Programming for Children',
      age: 'Ages 5–16',
      icon: <Monitor size={22} />,
      color: '#f47c3c',
      bg: '#fff3ec',
      desc: 'Visual Scratch & Python coding to build problem-solving algorithms.',
    },
    {
      title: 'Arduino & Robotics',
      age: 'Ages 8–16',
      icon: <Cpu size={22} />,
      color: '#2a9d8f',
      bg: '#e6f7f5',
      desc: 'Hands-on electronic kits, sensors, and autonomous robot building.',
    },
    {
      title: 'Game Development',
      age: 'Ages 8–16',
      icon: <Gamepad2 size={22} />,
      color: '#7c5cbf',
      bg: '#f0ebff',
      desc: '2D & 3D game design principles, physics mechanics, and animation.',
    },
    {
      title: 'Web Development',
      age: 'Ages 10–16',
      icon: <Globe size={22} />,
      color: '#e95b8e',
      bg: '#fdeef4',
      desc: 'HTML5, CSS3, modern page layouts, and interactive JavaScript.',
    },
    {
      title: 'Presentation & Leadership',
      age: 'Ages 5–16',
      icon: <Mic size={22} />,
      color: '#f4c430',
      bg: '#fef9e7',
      desc: 'Public speaking, team pitching, and confidence in presentation room.',
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Simple, Clear Description About What the Website & Academy Is */}
      <section className="home-concept">
        <div className="container">
          <div className="home-concept__grid">
            <div className="home-concept__content">
              <span className="home-tag">About The Academy</span>
              <h2>Welcome to <span className="highlight-text">Kids Technology &amp; Innovation Academy</span></h2>
              
              <p className="lead-text">
                <strong>KTIA</strong> is an educational technology academy established for children aged <strong>5 to 16</strong>. Sponsored by the <strong>National Telecommunication Institute (NTI)</strong> and supporting <strong>Egypt Vision 2030</strong>, our mission is to empower children to become future digital leaders.
              </p>
              
              <p>
                We deliver hands-on, practical education in programming, Arduino robotics, game creation, web design, and public presentation skills through project-based learning, interactive workshops, summer camps, and competitions.
              </p>

              <div className="home-concept__features">
                <div className="h-feat">
                  <CheckCircle2 size={18} color="#2a9d8f" />
                  <span>Hands-on learning through practical projects (no boring lectures)</span>
                </div>
                <div className="h-feat">
                  <CheckCircle2 size={18} color="#2a9d8f" />
                  <span>Designed specifically for young minds aged 5 to 16</span>
                </div>
                <div className="h-feat">
                  <CheckCircle2 size={18} color="#2a9d8f" />
                  <span>Officially sponsored by National Telecommunication Institute (NTI)</span>
                </div>
              </div>

              <div className="home-concept__actions">
                <Link to="/about" className="btn btn-primary">
                  Read More About KTIA <ArrowRight size={16} />
                </Link>
                <Link to="/programs" className="btn btn-outline">
                  <BookOpen size={16} /> Explore All Courses
                </Link>
              </div>
            </div>

            <div className="home-concept__visual">
              <div className="concept-image-card">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=80"
                  alt="Friendly kids learning technology together at KTIA"
                  className="concept-image"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80'
                  }}
                />
                <div className="concept-floating-badge">
                  <Award size={26} color="#f4c430" />
                  <div>
                    <strong>Sponsored by NTI</strong>
                    <span>Ministry of Communications &amp; Digital Egypt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Official Courses: Put in ONE Single Line, Small and Compact */}
      <section className="home-courses">
        <div className="container">
          <div className="section-title">
            <h2>What Kids Learn at KTIA</h2>
            <p>Practical, age-tailored courses designed to build skills, creativity, and confidence.</p>
          </div>

          <div className="home-courses__row">
            {officialCourses.map((c, i) => (
              <div key={i} className="h-compact-card" style={{ '--c-color': c.color, '--c-bg': c.bg }}>
                <div className="h-compact-card__icon" style={{ background: c.bg, color: c.color }}>
                  {c.icon}
                </div>
                <span className="h-compact-card__age" style={{ background: c.color }}>
                  {c.age}
                </span>
                <h3 className="h-compact-card__title">{c.title}</h3>
                <p className="h-compact-card__desc">{c.desc}</p>
                <Link to="/programs" className="h-compact-card__link" style={{ color: c.color }}>
                  Details <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="home-courses__cta">
            <Link to="/programs" className="btn btn-primary">
              <Sparkles size={16} /> View Complete Curriculum &amp; Enroll
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Call to Action Banner */}
      <CalloutBanner
        title="Ready to Start Your Child's Journey?"
        desc="Book a free trial class or get in touch with our educational team to learn more about our upcoming cohorts."
        primaryBtnText="Book Free Trial Session"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn About Us"
        secondaryBtnLink="/about"
      />
    </div>
  )
}

export default HomePage
