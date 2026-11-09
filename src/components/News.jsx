import { Calendar, ArrowRight, Tag } from 'lucide-react'
import './News.css'

// Real project milestones, launch date, and enrollment from all_yoU.docx
export const newsItems = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    cat: 'Enrollment',
    catColor: '#f47c3c',
    title: 'Student Enrollment & Partnerships Officially Open (Months M9–M14)',
    date: 'Schedule: Months M9–M14',
    desc: 'Student admissions are now open for children aged 5–16 across our primary academy and partner branches in ITI and NTI in two governorates.',
    readTime: 'Official Milestone',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    cat: 'Launch Date',
    catColor: '#2a9d8f',
    title: 'Official Academy Launch Date: 8 November 2027',
    date: 'Launch Date: 8 November 2027',
    desc: 'The official academy launch is scheduled for 8 November 2027 following the successful completion of building fit-out, safety systems, and Go/No-Go readiness tests.',
    readTime: 'Stage 2 Launch',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1587691592099-24045742c181?w=600&q=80',
    cat: 'Curriculum',
    catColor: '#7c5cbf',
    title: 'All 5 Core Tech Courses Successfully Tested & Piloted (Months M9–M11)',
    date: 'Curriculum Pilot: M9–M11',
    desc: 'Independent educational experts have approved our 5 courses: Programming for Children, Arduino & Robotics, Game Development, Web Development, and Presentation Skills.',
    readTime: 'Stage 6 Quality',
  },
]

const News = () => {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-title">
          <h2>Project News &amp; Key Milestones</h2>
          <p>Official timeline updates, launch dates, course piloting, and enrollment phases from the KTIA Project Plan.</p>
        </div>

        <div className="news__grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card__img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="news-card__img"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80'
                  }}
                />
                <span className="news-card__cat" style={{ background: item.catColor }}>
                  <Tag size={12} /> {item.cat}
                </span>
              </div>
              <div className="news-card__body">
                <div className="news-card__meta">
                  <span className="news-card__date"><Calendar size={13} /> {item.date}</span>
                  <span className="news-card__read">{item.readTime}</span>
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__desc">{item.desc}</p>
                <a href="#news" className="news-card__link">
                  View Milestone <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
