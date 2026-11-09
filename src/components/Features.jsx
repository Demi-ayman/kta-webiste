import { Users, Award, Zap, Heart, Shield, Star } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: <Award size={32} />,
    title: 'Certified Instructors',
    desc: 'All our trainers hold international certifications in STEM education and are passionate about teaching kids.',
    color: '#f47c3c',
    bg: '#fff3ec',
  },
  {
    icon: <Zap size={32} />,
    title: 'Hands-On Learning',
    desc: 'Our project-based curriculum ensures kids build real products — apps, robots, games, and more.',
    color: '#2a9d8f',
    bg: '#e6f7f5',
  },
  {
    icon: <Shield size={32} />,
    title: 'Safe Environment',
    desc: 'A fully monitored, child-safe environment with 24/7 security and parent progress updates.',
    color: '#7c5cbf',
    bg: '#f0ebff',
  },
  {
    icon: <Heart size={32} />,
    title: 'Fun & Engaging',
    desc: 'Learning is disguised as play. Our gamified curriculum keeps kids excited and coming back for more.',
    color: '#e95b8e',
    bg: '#fdeef4',
  },
  {
    icon: <Users size={32} />,
    title: 'Small Class Sizes',
    desc: 'Maximum 12 students per class so every child gets personalized attention and guidance.',
    color: '#f4c430',
    bg: '#fef9e7',
  },
  {
    icon: <Star size={32} />,
    title: 'Competitions & Events',
    desc: 'Students participate in national and international STEM competitions, hackathons, and showcases.',
    color: '#4caf50',
    bg: '#e8f5e9',
  },
]

const Features = () => {
  return (
    <section className="features" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose KTIA?</h2>
          <p>We combine world-class curriculum with an inspiring environment to shape the next generation of tech innovators.</p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ '--feature-color': f.color, '--feature-bg': f.bg, animationDelay: `${i * 0.1}s` }}
            >
              <div className="feature-card__icon" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
              <div className="feature-card__line" style={{ background: f.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

