import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const location = useLocation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    format: 'in-person',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Detect query param e.g. ?program=Coding%20for%20Kids or ?plan=...
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const progParam = params.get('program') || params.get('plan')
    if (progParam) {
      setForm((prev) => ({ ...prev, program: progParam }))
    }
  }, [location.search])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
    setForm({
      name: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      program: '',
      format: 'in-person',
      message: ''
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__bg" />
      <div className="container">
        <div className="section-title">
          <h2>Enroll Your Child or Get In Touch</h2>
          <p>Ready to unlock your child's genius? Fill out the enrollment form or reach out to our educational advisors.</p>
        </div>

        <div className="contact__inner">
          <div className="contact__info">
            <div className="contact__info-header">
              <img src="/kta_logo.jpeg" alt="KTIA Logo" className="contact__logo" />
              <div>
                <h3>Kids Technology &amp; Innovation Academy (KTIA)</h3>
                <p>Sponsored by National Telecommunication Institute (NTI)</p>
              </div>
            </div>

            <p className="contact__tagline">
              🌟 Supporting Egypt Vision 2030 by empowering young minds aged 5–16 in coding, robotics, web design, and digital leadership. Enroll your child today!
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Primary Academy &amp; Partner Locations</strong>
                  <p>Main Campus: Smart Village, Giza, Egypt<br />Partner Branches: ITI &amp; NTI governorate centers</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon"><Phone size={20} /></div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>+20 100 123 4567<br />+20 112 987 6543</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon"><Mail size={20} /></div>
                <div>
                  <strong>Direct Email</strong>
                  <p>admissions@ktia-egypt.com<br />info@ktia-egypt.com</p>
                </div>
              </div>
            </div>

            <div className="contact__hours">
              <h4><Clock size={16} /> Campus &amp; Advisory Hours</h4>
              <div className="contact__hours-row"><span>Saturday – Thursday</span><span>9:00 AM – 9:00 PM</span></div>
              <div className="contact__hours-row"><span>Friday</span><span>2:00 PM – 9:00 PM</span></div>
            </div>
          </div>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={64} color="#4caf50" />
                <h3>Application Received! 🎉</h3>
                <p>Thank you for reaching out to KTIA. Our educational coordinator will call you within 24 hours to schedule your child's free trial and assessment session!</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Student Application &amp; Inquiry</h3>
                <p className="contact__form-sub">Please fill in your details below and an admissions counselor will reach out to you.</p>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Parent / Guardian Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Mohamed Ahmed"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Parent Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+20 100 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Child's Age *</label>
                    <select name="childAge" value={form.childAge} onChange={handleChange} required>
                      <option value="">Select age group...</option>
                      <option value="6-8">6 – 8 Years (Explorers)</option>
                      <option value="9-11">9 – 11 Years (Builders)</option>
                      <option value="12-14">12 – 14 Years (Creators)</option>
                      <option value="15-18">15 – 18 Years (Innovators)</option>
                    </select>
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label>Interested Course / Track *</label>
                    <select name="program" value={form.program} onChange={handleChange} required>
                      <option value="">Choose an official course...</option>
                      <option value="Programming for Children">💻 Programming for Children (Ages 5–16)</option>
                      <option value="Arduino & Robotics">🤖 Arduino &amp; Robotics (Ages 8–16)</option>
                      <option value="Game Development">🎮 Game Development (Ages 8–16)</option>
                      <option value="Web Development">🌐 Web Development (Ages 10–16)</option>
                      <option value="Presentation & Leadership">🎤 Presentation &amp; Leadership (Ages 5–16)</option>
                      <option value="Free Skills Assessment">🎯 Free Skills Assessment / Trial</option>
                    </select>
                  </div>
                  <div className="contact__field">
                    <label>Learning Location</label>
                    <select name="format" value={form.format} onChange={handleChange}>
                      <option value="main-campus">Main Academy Campus (Smart Village)</option>
                      <option value="nti-branch">NTI Partner Branch</option>
                      <option value="iti-branch">ITI Partner Branch</option>
                      <option value="online">Interactive Online (Live with Trainer)</option>
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label>Questions or Notes (Optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your child's interests, previous experience, or questions..."
                    rows={3}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit">
                  <Send size={18} /> Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
