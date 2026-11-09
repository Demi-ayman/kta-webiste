import { UserCheck, Building2, Cpu, ShieldCheck, TrendingUp, Mail } from 'lucide-react'
import { IconLinkedin, IconTwitter } from './SocialIcons'
import './Teachers.css'

export const teamMembers = [
  {
    name: 'Mohamed Emad',
    role: 'Project Manager',
    color: '#f47c3c',
    bg: '#fff3ec',
    icon: <UserCheck size={32} />,
    desc: 'Overall project planning, testing, launch, and quality governance.',
  },
  {
    name: 'Yousef Hussien',
    role: 'Engineering & Construction Lead',
    color: '#2a9d8f',
    bg: '#e6f7f5',
    icon: <Building2 size={32} />,
    desc: 'Site preparation, building construction, and safety installations.',
  },
  {
    name: 'Mahmoud Hossam',
    role: 'Curriculum & Equipment Lead',
    color: '#7c5cbf',
    bg: '#f0ebff',
    icon: <Cpu size={32} />,
    desc: 'Computer labs setup, Arduino robotics hardware, and course piloting.',
  },
  {
    name: 'Yomna Mohamed',
    role: 'Staffing & Child Safety Lead',
    color: '#e95b8e',
    bg: '#fdeef4',
    icon: <ShieldCheck size={32} />,
    desc: 'Instructor recruitment, child safeguarding policies, and quality audits.',
  },
  {
    name: 'Gerges Ayman',
    role: 'Marketing & Finance Lead',
    color: '#f4c430',
    bg: '#fef9e7',
    icon: <TrendingUp size={32} />,
    desc: 'Budget allocation, financial reporting, marketing, and student enrollment.',
  },
]

const Teachers = () => {
  return (
    <section className="teachers" id="teachers">
      <div className="teachers__bg-shape" />
      <div className="container">
        <div className="section-title">
          <h2>Official Project Leadership</h2>
          <p>The leadership team responsible for the development, curriculum, engineering, and operations of KTIA.</p>
        </div>

        <div className="teachers__grid teachers__grid--five">
          {teamMembers.map((t, i) => (
            <div key={i} className="teacher-card" style={{ '--t-color': t.color }}>
              <div className="teacher-card__circle-wrap">
                <div className="teacher-card__circle-icon" style={{ background: t.bg, color: t.color, borderColor: t.color }}>
                  {t.icon}
                </div>
              </div>
              <div className="teacher-card__body">
                <h3 className="teacher-card__name">{t.name}</h3>
                <span className="teacher-card__role" style={{ color: t.color }}>{t.role}</span>
                <p className="teacher-card__bio">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachers
