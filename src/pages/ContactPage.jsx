import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'
import './ContactPage.css'

const faqs = [
  {
    q: 'Does my child need any prior programming or math experience?',
    a: 'Not at all! Our foundational courses like "Coding for Kids (Scratch)" and "Robotics Club" are crafted specifically for absolute beginners. We introduce concepts through games, visual blocks, and hands-on kits.'
  },
  {
    q: 'Are classes held in-person or online?',
    a: 'We offer both flexible formats! You can choose in-person classes at our Smart Village campus (equipped with robotics hardware, 3D printers, and high-spec workstations) or live interactive online classes led by our trainers.'
  },
  {
    q: 'What hardware/software equipment does my child need?',
    a: 'For in-person classes, all hardware (laptops, robotics kits, Arduino boards, and sensors) is provided by KTIA. For online classes, all your child needs is a standard laptop or desktop with an internet connection and webcam.'
  },
  {
    q: 'How many students are there in each class?',
    a: 'We maintain a strict maximum limit of 8 to 12 students per class. This guarantees that our certified trainers give personalized attention and one-on-one debugging assistance to every child.'
  },
  {
    q: 'Do students receive a certificate upon completing a program?',
    a: 'Yes! Upon successfully completing their course capstone project, every student receives an official KTIA STEM Certificate of Completion detailing the skills and tools mastered.'
  },
  {
    q: 'Can parents monitor their child’s progress?',
    a: 'Absolutely. Parents receive a detailed progress report after each module, including project milestones, trainer feedback, and attendance. We also host a live Parent Demo Day at the end of each cohort!'
  }
]

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="contact-page">
      <PageHeader
        title="Enroll &amp; Get In Touch"
        subtitle="Book a free consultation or trial class for your child, or reach out to our team with any questions."
        breadcrumb="Contact & Enrollment"
      />

      {/* Main Contact Form & Details Component */}
      <Contact />

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about joining Kids Tech Academy.</p>
          </div>

          <div className="faq__list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-item__question">
                  <div className="faq-item__q-left">
                    <HelpCircle size={20} className="faq-item__icon" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown size={18} className="faq-item__chevron" />
                </div>
                {openFaq === idx && (
                  <div className="faq-item__answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq__footer">
            <p>Still have questions? Chat with our admissions advisor on WhatsApp:</p>
            <a
              href="https://wa.me/201001234567"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary faq__whatsapp-btn"
            >
              <MessageSquare size={18} /> Chat with Advisor on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

