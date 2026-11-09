import { useState } from 'react'
import './Gallery.css'

const categories = ['All', 'Robotics', 'Coding', 'Events', 'Projects']

const galleryItems = [
  {
    id: 1,
    cat: 'Robotics',
    img: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80',
    title: 'Robot Building Session',
  },
  {
    id: 2,
    cat: 'Coding',
    // Verified 200 image replacing broken ID
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    title: 'Scratch Programming',
  },
  {
    id: 3,
    cat: 'Events',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    title: 'KTIA Hackathon & Olympiad',
  },
  {
    id: 4,
    cat: 'Projects',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    title: 'App Development Showcase',
  },
  {
    id: 5,
    cat: 'Coding',
    img: 'https://images.unsplash.com/photo-1549421263-6064833b071b?w=600&q=80',
    title: 'Web Dev Workshop',
  },
  {
    id: 6,
    cat: 'Robotics',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    title: 'Arduino Projects',
  },
  {
    id: 7,
    cat: 'Events',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    title: 'Demo Day Presentations',
  },
  {
    id: 8,
    cat: 'Projects',
    img: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80',
    title: 'Game Design Finals',
  },
  {
    id: 9,
    cat: 'Coding',
    img: 'https://images.unsplash.com/photo-1587691592099-24045742c181?w=600&q=80',
    title: 'Python Bootcamp',
  },
]

const Gallery = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Student Gallery</h2>
          <p>Catch glimpses of our students in action — building, creating, and innovating every day at KTIA.</p>
        </div>

        <div className="gallery__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn ${active === cat ? 'gallery__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((item) => (
            <div key={item.id} className="gallery__item">
              <img
                src={item.img}
                alt={item.title}
                className="gallery__img"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80'
                }}
              />
              <div className="gallery__overlay">
                <div className="gallery__info">
                  <span className="gallery__cat">{item.cat}</span>
                  <h4 className="gallery__title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
