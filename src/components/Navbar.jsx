import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, User, LogIn, LogOut } from 'lucide-react'
import AuthModal from './AuthModal'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  // Load user from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ktia_user')
      if (stored) setUser(JSON.parse(stored))
    } catch (e) {
      // ignore
    }
  }, [])

  // Close mobile menu on page change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('ktia_user')
    setUser(null)
  }

  // Navigation links: Team removed, Courses dropdown removed
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/programs' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <nav className="navbar">
          <div className="container navbar__inner">
            <Link to="/" className="navbar__logo">
              <img src="/kta_logo.jpeg" alt="KTIA Logo" />
              <div className="navbar__brand">
                <span className="navbar__brand-title">KTIA</span>
                <span className="navbar__brand-sub">Kids Technology &amp; Innovation Academy</span>
              </div>
            </Link>

            <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.label} className="navbar__item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              {/* Mobile Auth button */}
              <li className="navbar__item navbar__item--mobile-auth">
                {user ? (
                  <button onClick={handleLogout} className="navbar__mobile-btn">
                    Logout ({user.name})
                  </button>
                ) : (
                  <button
                    onClick={() => { setIsAuthOpen(true); setMenuOpen(false) }}
                    className="navbar__mobile-btn"
                  >
                    Sign In / Register
                  </button>
                )}
              </li>
            </ul>

            <div className="navbar__actions">
              {user ? (
                <div className="navbar__user-pill">
                  <User size={15} />
                  <span>{user.name}</span>
                  <button onClick={handleLogout} className="navbar__user-logout" title="Sign Out">
                    <LogOut size={13} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline navbar__login-action"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <LogIn size={14} /> Sign In
                </button>
              )}
              <Link to="/contact" className="btn btn-primary navbar__cta">
                Enroll Now
              </Link>
            </div>

            <button
              className="navbar__toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Auth Modal for Sign In and Registration */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(u) => setUser(u)}
      />
    </>
  )
}

export default Navbar
