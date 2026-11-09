import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, ChevronRight, Star, Sparkles, Award } from 'lucide-react'
import './Programs.css'

export const programsData = [
  {
    id: 1,
    emoji: '💻',
    title: 'Programming for Children',
    subtitle: 'Block Coding, Logic & Python Fundamentals',
    age: 'Ages 5–16',
    duration: '12 Weeks',
    students: 'Max 12 per Lab',
    rating: 4.9,
    category: 'Programming',
    desc: 'Structured coding education starting with visual block programming (Scratch) for younger learners and transitioning to Python for older students. Kids build computational thinking, algorithmic logic, and interactive projects.',
    color: '#f47c3c',
    bg: '#fff3ec',
    tags: ['Scratch', 'Python', 'Algorithms', 'Logic'],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    lab: 'Computer Lab (Lenovo Desktops)',
  },
  {
    id: 2,
    emoji: '🤖',
    title: 'Arduino & Robotics',
    subtitle: 'Hands-on Hardware, Sensors & Robot Kits',
    age: 'Ages 8–16',
    duration: '14 Weeks',
    students: 'Max 12 per Lab',
    rating: 5.0,
    category: 'Robotics',
    desc: 'Equipped with official Arduino kits, motors, and electronic sensors. Students wire real circuits, program microcontrollers, build autonomous line-tracking robots, and solve real engineering challenges.',
    color: '#2a9d8f',
    bg: '#e6f7f5',
    tags: ['Arduino Kits', 'Sensors', 'Electronics', 'Mechanics'],
    img: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&q=80',
    lab: 'Arduino & Robotics Lab (Laptops & Kits)',
  },
  {
    id: 3,
    emoji: '🎮',
    title: 'Game Development',
    subtitle: 'Design, Mechanics & Interactive Gaming',
    age: 'Ages 8–16',
    duration: '12 Weeks',
    students: 'Max 12 per Lab',
    rating: 4.8,
    category: 'Game Dev',
    desc: 'Turn gaming enthusiasm into creator skills! Children learn 2D and 3D game design principles, physics engines, character animation, and sound integration to create playable video games from scratch.',
    color: '#7c5cbf',
    bg: '#f0ebff',
    tags: ['Game Mechanics', '2D/3D Design', 'Animation', 'Physics'],
    img: 'https://images.unsplash.com/photo-1587691592099-24045742c181?w=600&q=80',
    lab: 'Computer Lab (Dedicated GPU)',
  },
  {
    id: 4,
    emoji: '🌐',
    title: 'Web Development',
    subtitle: 'HTML5, CSS3, Web Layouts & JavaScript',
    age: 'Ages 10–16',
    duration: '12 Weeks',
    students: 'Max 12 per Lab',
    rating: 4.9,
    category: 'Web Dev',
    desc: 'Children learn how the internet works and build their own responsive websites. From basic page structure to interactive styling and publishing live web pages with modern tools.',
    color: '#e95b8e',
    bg: '#fdeef4',
    tags: ['HTML5', 'CSS3', 'Web Design', 'JavaScript'],
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    lab: 'Computer Lab (Lenovo Desktops)',
  },
  {
    id: 5,
    emoji: '🎤',
    title: 'Presentation Skills & Leadership',
    subtitle: 'Project Pitching, Public Speaking & Teamwork',
    age: 'Ages 5–16',
    duration: '8 Weeks',
    students: 'Max 12 per Room',
    rating: 5.0,
    category: 'Leadership',
    desc: 'Designed to build confident, well-rounded digital leaders. In our equipped presentation room with dedicated screen and sound systems, students practice pitching their projects, public speaking, and collaborative team communication.',
    color: '#f4c430',
    bg: '#fef9e7',
    tags: ['Public Speaking', 'Pitching', 'Teamwork', 'Demo Day'],
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
    lab: 'Presentation Room (Screen & Sound)',
  },
]

const Programs = ({
  limit,
  showFilter = false,
  title = 'Our Official Curriculum Courses',
  subtitle = 'Strictly aligned with the KTIA Project Charter: 5 core technical & leadership programs for children aged 5 to 16.'
}) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Programming', 'Robotics', 'Game Dev', 'Web Dev', 'Leadership']

  const filtered = programsData
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, limit || programsData.length)

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {showFilter && (
          <div className="programs__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`programs__filter-btn ${activeCategory === cat ? 'programs__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="programs__grid">
          {filtered.map((p) => (
            <div key={p.id} className="program-card" style={{ '--p-color': p.color, '--p-bg': p.bg }}>
              <div className="program-card__img-wrap">
                <img
                  src={p.img}
                  alt={p.title}
                  className="program-card__img"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80'
                  }}
                />
                <div className="program-card__emoji">{p.emoji}</div>
                <div className="program-card__age">{p.age}</div>
              </div>
              <div className="program-card__body">
                <div className="program-card__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="program-card__tag">{tag}</span>
                  ))}
                </div>
                <h3 className="program-card__title">{p.title}</h3>
                <p className="program-card__subtitle">{p.subtitle}</p>
                <p className="program-card__desc">{p.desc}</p>
                
                <div className="program-card__lab-badge">
                  <span>📍 {p.lab}</span>
                </div>

                <div className="program-card__meta">
                  <span className="program-card__meta-item">
                    <Clock size={14} /> {p.duration}
                  </span>
                  <span className="program-card__meta-item">
                    <Users size={14} /> {p.students}
                  </span>
                </div>
                <div className="program-card__footer">
                  <div className="program-card__rating">
                    <Star size={14} fill="#f4c430" color="#f4c430" />
                    <span>{p.rating}</span>
                  </div>
                  <Link to={`/contact?program=${encodeURIComponent(p.title)}`} className="program-card__btn">
                    Enroll <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="programs__more">
            <Link to="/programs" className="btn btn-primary">
              <Sparkles size={16} /> Explore All 5 Official KTIA Courses
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Programs
