import { useState } from 'react'
import { X, Lock, Mail, User, Phone, CheckCircle, Sparkles, LogIn } from 'lucide-react'
import './AuthModal.css'

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false)
  const [role, setRole] = useState('student') // 'student' or 'instructor'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '8',
    password: '',
  })
  const [msg, setMsg] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated authentication
    const user = {
      name: isRegister ? formData.name : (formData.email.split('@')[0] || 'Parent'),
      email: formData.email,
      role: role,
    }
    localStorage.setItem('ktia_user', JSON.stringify(user))
    setMsg(isRegister ? 'Account created successfully! Welcome to KTIA 🎉' : 'Signed in successfully! Welcome back 👋')
    setTimeout(() => {
      onLoginSuccess(user)
      onClose()
      setMsg('')
    }, 1200)
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="auth-modal__header">
          <img src="/kta_logo.jpeg" alt="KTIA Logo" className="auth-modal__logo" />
          <h3>{isRegister ? 'Create KTIA Account' : 'Welcome to KTIA Portal'}</h3>
          <p className="auth-modal__sub">
            Kids Technology &amp; Innovation Academy · <span className="nti-highlight">Sponsored by NTI</span>
          </p>

          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab ${!isRegister ? 'auth-tab--active' : ''}`}
              onClick={() => { setIsRegister(false); setMsg('') }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab ${isRegister ? 'auth-tab--active' : ''}`}
              onClick={() => { setIsRegister(true); setMsg('') }}
            >
              Register Student
            </button>
          </div>
        </div>

        {msg ? (
          <div className="auth-success-msg">
            <CheckCircle size={36} color="#2a9d8f" />
            <p>{msg}</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-role-select">
              <label className={`role-pill ${role === 'student' ? 'role-pill--active' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                />
                Parent / Student
              </label>
              <label className={`role-pill ${role === 'instructor' ? 'role-pill--active' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="instructor"
                  checked={role === 'instructor'}
                  onChange={() => setRole('instructor')}
                />
                Trainer / Mentor
              </label>
            </div>

            {isRegister && (
              <div className="auth-field">
                <label>Parent / Full Name *</label>
                <div className="auth-input-wrap">
                  <User size={16} className="auth-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Kamal"
                    required
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Email Address *</label>
              <div className="auth-input-wrap">
                <Mail size={16} className="auth-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {isRegister && (
              <div className="auth-row">
                <div className="auth-field">
                  <label>Child's Name</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Student Name"
                  />
                </div>
                <div className="auth-field">
                  <label>Age (5–16)</label>
                  <select name="childAge" value={formData.childAge} onChange={handleChange}>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 5} value={i + 5}>
                        {i + 5} Years Old
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Password *</label>
              <div className="auth-input-wrap">
                <Lock size={16} className="auth-icon" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn">
              {isRegister ? <Sparkles size={16} /> : <LogIn size={16} />}
              {isRegister ? 'Register Child for KTIA' : 'Sign In to Portal'}
            </button>

            <div className="auth-demo-hint">
              <span>💡 Tip: You can test with any email/password to sign in.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthModal

