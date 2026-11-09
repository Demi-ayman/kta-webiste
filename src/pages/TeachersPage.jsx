import PageHeader from '../components/PageHeader'
import Teachers from '../components/Teachers'
import CalloutBanner from '../components/CalloutBanner'
import { GraduationCap, Award, ShieldCheck, HeartHandshake, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './TeachersPage.css'

const TeachersPage = () => {
  const standards = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Top STEM Degree Holders',
      desc: 'Our instructors graduate from top engineering and computer science universities with strong practical experience.',
      color: '#f47c3c'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Certified in Child Pedagogy',
      desc: 'All trainers undergo rigorous training in child psychology, gamified instruction, and safe classroom management.',
      color: '#2a9d8f'
    },
    {
      icon: <Award size={28} />,
      title: 'Competition Mentors',
      desc: 'Our staff has guided teams to win national and regional robotics competitions and youth hackathons.',
      color: '#7c5cbf'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Empathy & Patience',
      desc: 'We cultivate a positive growth mindset where mistakes are treated as crucial learning discoveries.',
      color: '#e95b8e'
    }
  ]

  return (
    <div className="teachers-page">
      <PageHeader
        title="Meet Our Certified Mentors"
        subtitle="Passionate engineers, developers, and educators dedicated to inspiring curiosity and confidence in every student."
        breadcrumb="Teachers"
      />

      {/* Teachers Grid */}
      <Teachers />

      {/* Teaching Standards */}
      <section className="teaching-standards">
        <div className="container">
          <div className="section-title">
            <h2>The KTIA Teaching Standard</h2>
            <p>We believe great teachers make all the difference in a child's love for science and technology.</p>
          </div>

          <div className="standards__grid">
            {standards.map((s, i) => (
              <div key={i} className="standard-card">
                <div className="standard-card__icon" style={{ color: s.color, background: `${s.color}15` }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="join-team">
        <div className="container join-team__inner">
          <div className="join-team__text">
            <h3>Are You a STEM Educator or Developer?</h3>
            <p>We are constantly seeking brilliant instructors who love tech and are excited to inspire young minds. Join Egypt's fastest growing kids tech academy!</p>
          </div>
          <a href="mailto:careers@ktia-egypt.com" className="btn btn-primary join-team__btn">
            <Mail size={18} /> Apply as an Instructor
          </a>
        </div>
      </section>

      <CalloutBanner
        title="Want Your Child to Learn from the Best?"
        desc="Schedule a trial session and meet our trainers in person or online."
        primaryBtnText="Enroll Today"
        primaryBtnLink="/contact"
      />
    </div>
  )
}

export default TeachersPage

