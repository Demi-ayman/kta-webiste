import { Link } from 'react-router-dom'
import { PhoneCall, Calendar } from 'lucide-react'
import './CalloutBanner.css'

const CalloutBanner = ({
  title = "Need More Information?",
  desc = "Have questions about curriculum, age requirements, or scheduling? Our educational advisors are here to help your child start their journey.",
  primaryBtnText = "Book Free Trial Class",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Call Advisor: +20 100 123 4567",
  secondaryBtnLink = "tel:+201001234567"
}) => {
  return (
    <section className="callout-banner">
      <div className="callout-banner__overlay" />
      <div className="container callout-banner__inner">
        <h2 className="callout-banner__title">{title}</h2>
        <p className="callout-banner__desc">{desc}</p>
        <div className="callout-banner__actions">
          <Link to={primaryBtnLink} className="btn btn-primary callout-banner__btn">
            <Calendar size={18} /> {primaryBtnText}
          </Link>
          <a href={secondaryBtnLink} className="btn btn-outline callout-banner__btn callout-banner__btn--outline">
            <PhoneCall size={18} /> {secondaryBtnText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CalloutBanner

