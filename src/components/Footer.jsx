import { Link } from 'react-router-dom'
import { ArrowUp, Mail, Award } from 'lucide-react'
import { IconFacebook, IconInstagram, IconYoutube, IconTwitter } from './SocialIcons'
import './Footer.css'

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const programLinks = [
    { label: 'Programming for Children', path: '/programs' },
    { label: 'Arduino & Robotics', path: '/programs' },
    { label: 'Game Development', path: '/programs' },
    { label: 'Web Development', path: '/programs' },
    { label: 'Presentation & Leadership', path: '/programs' },
  ]

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Courses', path: '/programs' },
    { label: 'Project Team', path: '/teachers' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News & Updates', path: '/news' },
    { label: 'Enrollment & Contact', path: '/contact' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo-wrap">
              <img src="/kta_logo.jpeg" alt="KTIA Logo" className="footer__logo" />
              <div>
                <span className="footer__brand-name">KTIA</span>
                <span className="footer__brand-sub">Kids Technology &amp; Innovation Academy</span>
              </div>
            </Link>
            <p className="footer__brand-desc">
              Supporting Egypt Vision 2030 by empowering children aged 5–16 in programming, Arduino robotics, web design, and digital leadership through practical projects.
            </p>
            <div className="footer__sponsor-badge">
              <span>🏛️ Sponsored by <strong>National Telecommunication Institute (NTI)</strong> &amp; Digital Egypt · Partnering with ITI</span>
            </div>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social footer__social--fb" aria-label="Facebook"><IconFacebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social footer__social--ig" aria-label="Instagram"><IconInstagram size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social footer__social--yt" aria-label="YouTube"><IconYoutube size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social footer__social--tw" aria-label="Twitter"><IconTwitter size={18} /></a>
            </div>
          </div>

          <div className="footer__links-col">
            <h4>Official Courses</h4>
            <ul>
              {programLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4>Stay Connected</h4>
            <p>Subscribe to our newsletter for competition alerts, workshop announcements, and student project updates.</p>
            <form className="footer__sub-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to KTIA newsletter! 🎉') }}>
              <div className="footer__sub-input-wrap">
                <Mail size={16} className="footer__sub-icon" />
                <input type="email" placeholder="Parent email address" required />
              </div>
              <button type="submit" className="btn btn-primary footer__sub-btn">Subscribe</button>
            </form>
            <div className="footer__tags">
              {['#KTIA', '#EgyptVision2030', '#NTI', '#KidsCode', '#ArduinoRobotics', '#STEM_Egypt'].map(tag => (
                <span key={tag} className="footer__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 KTIA – Kids Technology &amp; Innovation Academy. All rights reserved. Sponsored by NTI.</p>
          <div className="footer__bottom-links">
            <Link to="/about">About KTIA</Link>
            <Link to="/teachers">Project Team</Link>
            <Link to="/contact">Admissions</Link>
          </div>
        </div>
      </div>

      <button className="footer__scroll-top" onClick={scrollTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
