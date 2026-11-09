import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import CalloutBanner from '../components/CalloutBanner'
import { Sparkles, Trophy, Users, Camera } from 'lucide-react'
import './GalleryPage.css'

const GalleryPage = () => {
  const highlights = [
    { number: '100+', label: 'Student Hackathon Projects', icon: <Sparkles size={24} /> },
    { number: '18', label: 'STEM Competition Trophies', icon: <Trophy size={24} /> },
    { number: '500+', label: 'Graduated Innovators', icon: <Users size={24} /> },
    { number: '12', label: 'Annual Demo Days Hosted', icon: <Camera size={24} /> },
  ]

  return (
    <div className="gallery-page">
      <PageHeader
        title="Student Activity &amp; Project Gallery"
        subtitle="Moments of discovery, teamwork, coding breakthroughs, and robotics showcases from our classrooms across Egypt."
        breadcrumb="Gallery"
      />

      {/* Highlights Bar */}
      <section className="gallery-stats">
        <div className="container">
          <div className="gallery-stats__grid">
            {highlights.map((h, i) => (
              <div key={i} className="gallery-stat-item">
                <div className="gallery-stat-item__icon">{h.icon}</div>
                <div className="gallery-stat-item__num">{h.number}</div>
                <div className="gallery-stat-item__label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery */}
      <Gallery />

      <CalloutBanner
        title="Inspire Your Child to Build Something Extraordinary"
        desc="From their first line of Scratch code to winning robotics trophies, it all begins with one class."
        primaryBtnText="Enroll in a Class"
        primaryBtnLink="/contact"
      />
    </div>
  )
}

export default GalleryPage

