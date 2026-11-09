import PageHeader from '../components/PageHeader'
import Programs from '../components/Programs'
import CalloutBanner from '../components/CalloutBanner'
import { Link } from 'react-router-dom'
import { Laptop, Cpu, Trophy, Check, ArrowRight, ShieldCheck, Award } from 'lucide-react'
import './ProgramsPage.css'

const ProgramsPage = () => {
  const plans = [
    {
      name: 'Foundation Track',
      badge: 'Beginner (Ages 5–10)',
      price: '1,200',
      period: 'per month',
      color: '#f47c3c',
      popular: false,
      features: [
        '4 Sessions per Month (1 per week)',
        '2 Hours per Session',
        'Scratch Visual Coding & Presentation Skills',
        'Max 12 Students in Computer Lab',
        'Lenovo Desktop Access for each student',
        'Monthly Parent Progress Report',
        'KTIA Official Certificate of Completion'
      ]
    },
    {
      name: 'Robotics & Maker Track',
      badge: 'Most Popular ⭐',
      price: '2,200',
      period: 'per month',
      color: '#2a9d8f',
      popular: true,
      features: [
        '8 Sessions per Month (2 per week)',
        '2.5 Hours per Session',
        'Official Arduino Robotics Kit & Components',
        'Hardware Electronics & Motor Programming',
        'Max 12 Students per Dedicated Lab',
        'Preparation for National Robotics Challenges',
        'Co-certified by NTI Educational Partnership'
      ]
    },
    {
      name: 'Digital Leader Track',
      badge: 'Advanced (Ages 10–16)',
      price: '3,100',
      period: 'per month',
      color: '#7c5cbf',
      popular: false,
      features: [
        '12 Sessions per Month (3 per week)',
        'Web Development & 2D/3D Game Dev',
        'Project Pitching in Presentation Room',
        'Hands-on Capstone Software Project',
        'Participation in Annual Hackathons',
        'Fast-track to ITI/NTI Advanced Competitions'
      ]
    }
  ]

  return (
    <div className="programs-page">
      <PageHeader
        title="Official KTIA Educational Programs"
        subtitle="Practical, hands-on courses in Programming, Arduino Robotics, Game Development, Web Design, and Presentation Skills for children aged 5 to 16."
        breadcrumb="Courses"
      />

      {/* Main Filterable Programs Section (Strictly the 5 courses from all_yoU.docx) */}
      <Programs
        showFilter={true}
        title="The 5 Core Technical &amp; Leadership Programs"
        subtitle="Designed to transform screen time into engineering and computational skills."
      />

      {/* How Classes Work */}
      <section className="class-workflow">
        <div className="container">
          <div className="section-title">
            <h2>The KTIA Practical Learning Methodology</h2>
            <p>From the Project Charter: We teach through hands-on projects, workshops, summer camps, and competitions.</p>
          </div>

          <div className="workflow__grid">
            <div className="workflow-step">
              <div className="workflow-step__num">01</div>
              <h4>Interactive Workshop</h4>
              <p>Trainers demonstrate concepts through interactive analogies in fully equipped classrooms with smart screens.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step__num">02</div>
              <h4>Hands-On Labs</h4>
              <p>Students work directly on Lenovo workstations or assemble Arduino circuits with one kit per child.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step__num">03</div>
              <h4>Team Project</h4>
              <p>Kids build games, robot models, or web pages in collaborative teams, developing essential problem-solving skills.</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-step__num">04</div>
              <h4>Presentation Pitch</h4>
              <p>In our dedicated presentation room, children practice public speaking and pitch their capstone projects to peers and parents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Plans */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Enrollment &amp; Tuition Plans</h2>
            <p>All programs include full access to hardware kits, Lenovo lab workstations, and certified instructors.</p>
          </div>

          <div className="pricing__grid">
            {plans.map((p, i) => (
              <div key={i} className={`pricing-card ${p.popular ? 'pricing-card--popular' : ''}`}>
                {p.popular && <div className="pricing-card__pop-badge">Most Popular</div>}
                <div className="pricing-card__header">
                  <span className="pricing-card__badge" style={{ color: p.color, background: `${p.color}18` }}>{p.badge}</span>
                  <h3 className="pricing-card__name">{p.name}</h3>
                  <div className="pricing-card__price">
                    <span className="currency">EGP</span>
                    <span className="amount">{p.price}</span>
                    <span className="period">/{p.period}</span>
                  </div>
                </div>

                <ul className="pricing-card__features">
                  {p.features.map(f => (
                    <li key={f}>
                      <Check size={16} color={p.color} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/contact?plan=${encodeURIComponent(p.name)}`}
                  className={`btn ${p.popular ? 'btn-primary' : 'btn-outline'} pricing-card__btn`}
                >
                  Choose {p.name} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalloutBanner
        title="Unsure Which Course Fits Your Child?"
        desc="Book a free 45-minute skills evaluation session with our curriculum specialists to recommend the best track."
        primaryBtnText="Book Skills Evaluation"
        primaryBtnLink="/contact"
      />
    </div>
  )
}

export default ProgramsPage
