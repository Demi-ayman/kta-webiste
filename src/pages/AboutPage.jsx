import PageHeader from '../components/PageHeader'
import CalloutBanner from '../components/CalloutBanner'
import {
  Target,
  Award,
  Building,
  ShieldCheck,
  Building2,
  Cpu,
  UserCheck,
  TrendingUp
} from 'lucide-react'
import './AboutPage.css'

const AboutPage = () => {
  // Official Project Team directly from all_yoU.docx (Strictly real data, no dummy text)
  const projectTeam = [
    {
      name: 'Mohamed Emad',
      role: 'Project Manager',
      color: '#f47c3c',
      bg: '#fff3ec',
      icon: <UserCheck size={36} />,
      desc: 'Overall project planning, testing, launch, and quality governance.'
    },
    {
      name: 'Yousef Hussien',
      role: 'Engineering & Construction Lead',
      color: '#2a9d8f',
      bg: '#e6f7f5',
      icon: <Building2 size={36} />,
      desc: 'Site preparation, building construction, and safety installations.'
    },
    {
      name: 'Mahmoud Hossam',
      role: 'Curriculum & Equipment Lead',
      color: '#7c5cbf',
      bg: '#f0ebff',
      icon: <Cpu size={36} />,
      desc: 'Computer labs setup, Arduino robotics hardware, and course piloting.'
    },
    {
      name: 'Yomna Mohamed',
      role: 'Staffing & Child Safety Lead',
      color: '#e95b8e',
      bg: '#fdeef4',
      icon: <ShieldCheck size={36} />,
      desc: 'Instructor recruitment, child safeguarding policies, and quality audits.'
    },
    {
      name: 'Gerges Ayman',
      role: 'Marketing & Finance Lead',
      color: '#f4c430',
      bg: '#fef9e7',
      icon: <TrendingUp size={36} />,
      desc: 'Budget allocation, financial reporting, marketing, and student enrollment.'
    },
  ]

  return (
    <div className="about-page">
      <PageHeader
        title="About KTIA"
        subtitle="Kids Technology & Innovation Academy · An educational initiative established to empower Egypt's children to become future digital leaders under Egypt Vision 2030."
        breadcrumb="About Us"
      />

      {/* Official NTI Sponsorship Section */}
      <section className="about-sponsor-banner">
        <div className="container">
          <div className="sponsor-banner-inner">
            <div className="sponsor-badge-tag">
              <Award size={22} color="#f4c430" />
              <span>Official Institutional Sponsor</span>
            </div>
            <h2>Sponsored by National Telecommunication Institute (NTI)</h2>
            <p>
              Under the auspices of the <strong>Ministry of Communications and Information Technology (MCIT)</strong> and <strong>Digital Egypt</strong>, KTIA has established strategic partnerships with <strong>NTI</strong> and <strong>ITI</strong> to deliver digital learning programs to children across Egypt.
            </p>
            <div className="sponsor-details-row">
              <div className="sd-item">
                <strong>🏛️ Strategic Sponsor:</strong> National Telecommunication Institute (NTI)
              </div>
              <div className="sd-item">
                <strong>🇪🇬 National Alignment:</strong> Support Egypt Vision 2030
              </div>
              <div className="sd-item">
                <strong>📍 Governorate Delivery:</strong> Expanding via ITI and NTI branches
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Charter Mission & Purpose */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <span className="about-story__tag">Project Charter · Purpose &amp; Scope</span>
              <h2>Building Egypt's Premier Academy for <span className="highlight-text">Young Tech Innovators</span></h2>
              
              <p className="lead-text">
                Support <strong>Egypt Vision 2030</strong>, we empower children to become future digital leaders by teaching them programming, web design, and Arduino robotics through practical projects.
              </p>
              <p>
                By organizing interactive workshops, summer camps, and competitions, we encourage hands-on innovation and teamwork. This approach builds their technical abilities while improving their creativity, problem-solving, and presentation skills, preparing a smart, well-rounded generation ready for tomorrow's challenges.
              </p>
              <p>
                The academy serves children aged <strong>5 to 16</strong> with equipped classrooms and computer labs. In addition to our primary academy campus, educational programs are delivered through partner branches of <strong>ITI and NTI</strong> across governorates.
              </p>

              <div className="about-story__pillars">
                <div className="pillar-item">
                  <div className="pillar-icon pillar-icon--mission">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4>1.1 Purpose &amp; Educational Scope</h4>
                    <p>Teaching practical programming, game development, web development, Arduino robotics, and presentation skills to children aged 5–16 through project-based learning.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon pillar-icon--vision">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4>Child Safety &amp; Quality First</h4>
                    <p>Strict child safeguarding with 32 CCTV surveillance cameras, fire alarm systems, controlled lab access, first-aid facilities, and background-checked certified trainers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-story__visual">
              <div className="about-story__card-wrap">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80"
                  alt="Happy students collaborating in KTIA classroom"
                  className="about-story__main-img"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80'
                  }}
                />
                <div className="about-badge">
                  <Building size={32} color="#2a9d8f" />
                  <div>
                    <strong>2,000 m² Facility</strong>
                    <span>8 Educational Spaces · Ground + 2 Floors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Project Team: Circular Cards in ONE Line */}
      <section className="about-team-section" id="team">
        <div className="container">
          <div className="section-title">
            <h2>The KTIA Project Leadership Team</h2>
            <p>From the official KTIA Project Charter: The 5 leaders responsible for academy execution and operations.</p>
          </div>

          <div className="about-team__circle-row">
            {projectTeam.map((member, i) => (
              <div key={i} className="team-circle-card" style={{ '--member-color': member.color, '--member-bg': member.bg }}>
                <div className="team-circle-avatar" style={{ background: member.bg, borderColor: member.color, color: member.color }}>
                  {member.icon}
                </div>
                <h3 className="team-circle-name">{member.name}</h3>
                <span className="team-circle-role" style={{ color: member.color }}>
                  {member.role}
                </span>
                <p className="team-circle-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Specifications Table from Section 1.4 */}
      <section className="about-specs-section">
        <div className="container">
          <div className="section-title">
            <h2>Facility &amp; Educational Specifications</h2>
            <p>From Section 1.4 of the KTIA Project Plan: Designed for up to 104 concurrent young learners.</p>
          </div>

          <div className="specs-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Space</th>
                  <th>Quantity</th>
                  <th>Seats Each</th>
                  <th>Equipment &amp; Setup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Classroom</strong></td>
                  <td>4</td>
                  <td>12 seats</td>
                  <td>1 projector or screen each. Dedicated for interactive group workshops.</td>
                </tr>
                <tr>
                  <td><strong>Computer Lab</strong></td>
                  <td>2</td>
                  <td>16 seats</td>
                  <td>16 Lenovo desktops each (one per student), high-speed network.</td>
                </tr>
                <tr>
                  <td><strong>Arduino &amp; Robotics Lab</strong></td>
                  <td>1</td>
                  <td>12 seats</td>
                  <td>12 Lenovo laptops, official Arduino kits, robot kits, electronics tools.</td>
                </tr>
                <tr>
                  <td><strong>Presentation Room</strong></td>
                  <td>1</td>
                  <td>12 seats</td>
                  <td>Screen and audio-visual sound for practicing project presentations.</td>
                </tr>
                <tr className="specs-total-row">
                  <td><strong>Total Spaces</strong></td>
                  <td><strong>8 Spaces</strong></td>
                  <td colSpan={2}><strong>About 104 Seats — Up to 104 students can learn at the same time</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CalloutBanner
        title="Ready to Learn with KTIA?"
        desc="Enroll your child in our official courses in programming, robotics, web development, and leadership."
        primaryBtnText="Apply for Enrollment"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Courses"
        secondaryBtnLink="/programs"
      />
    </div>
  )
}

export default AboutPage
