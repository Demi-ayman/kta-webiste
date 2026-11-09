import PageHeader from '../components/PageHeader'
import News from '../components/News'
import CalloutBanner from '../components/CalloutBanner'
import { Bell, Heart } from 'lucide-react'
import './NewsPage.css'

const NewsPage = () => {
  const csrInitiatives = [
    {
      title: '5% Revenue Allocated to Scholarships (From M36)',
      desc: 'Section Stage 7 of the KTIA Project Plan allocates 5% of annual revenue to scholarships and free educational workshops for disadvantaged children.'
    },
    {
      title: 'Community Innovation & Youth Hackathons',
      desc: 'Conducting documented youth innovation competitions annually to develop creativity and teamwork through technology projects that address community needs.'
    },
    {
      title: 'Charitable Assistance Program',
      desc: 'Providing practical educational equipment donations and STEM learning resources to underserved families based on community needs.'
    }
  ]

  return (
    <div className="news-page">
      <PageHeader
        title="Official KTIA News &amp; Milestones"
        subtitle="Keep up with project timeline progress, student enrollment phases, course approvals, and the official launch date on 8 November 2027."
        breadcrumb="News & Updates"
      />

      {/* Featured Real Milestone Alert with Launch Date: 8 November 2027 */}
      <section className="featured-alert">
        <div className="container">
          <div className="featured-alert__box">
            <div className="featured-alert__icon">
              <Bell size={24} />
            </div>
            <div className="featured-alert__text">
              <span className="featured-alert__badge">Official Launch Date: 8 November 2027</span>
              <h4>Academy Launch Date: 8 November 2027 · Enrollment Active</h4>
              <p>
                The official launch of Kids Technology &amp; Innovation Academy is set for <strong>8 November 2027</strong>. Student enrollment (Months M9–M14) is currently open across our primary campus and partner branches in NTI and ITI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main News Articles */}
      <News />

      {/* Real CSR Commitments from Stage 7 of all_yoU.docx */}
      <section className="parent-tips">
        <div className="container">
          <div className="section-title">
            <h2>Corporate Social Responsibility (Stage 7)</h2>
            <p>From the official KTIA Project Charter: Philanthropic commitments to reduce educational barriers for children across Egypt.</p>
          </div>

          <div className="parent-tips__grid">
            {csrInitiatives.map((item, idx) => (
              <div key={idx} className="tip-card">
                <div className="tip-card__icon">
                  <Heart size={24} color="#e95b8e" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalloutBanner
        title="Ready to Enroll in the Upcoming Cohort?"
        desc="Submit your child's application during the official enrollment window leading up to our launch on 8 November 2027."
        primaryBtnText="Apply for Enrollment"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Courses"
        secondaryBtnLink="/programs"
      />
    </div>
  )
}

export default NewsPage
