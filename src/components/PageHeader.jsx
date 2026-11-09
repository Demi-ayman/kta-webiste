import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import './PageHeader.css'

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="page-header">
      <div className="page-header__overlay" />
      <div className="page-header__shapes">
        <div className="ph-shape ph-shape--1" />
        <div className="ph-shape ph-shape--2" />
      </div>
      <div className="container page-header__content">
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        <nav className="page-header__breadcrumbs" aria-label="breadcrumb">
          <Link to="/" className="page-header__crumb">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={14} className="page-header__sep" />
          <span className="page-header__current">{breadcrumb || title}</span>
        </nav>
      </div>
    </div>
  )
}

export default PageHeader

