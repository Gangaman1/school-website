import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeroSlideShow from '../components/HeroSlideShow'

function animateCounter(id, target, showPlus = false) {
  const el = document.getElementById(id)
  if (!el) return
  const increment = target / (2000 / 16)
  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      clearInterval(timer)
      el.textContent = Math.floor(target).toLocaleString() + (showPlus ? '+' : '')
    } else {
      el.textContent = Math.floor(current).toLocaleString()
    }
  }, 16)
}

export default function Home() {
  const location = useLocation()
  // const [showPopup, setShowPopup] = useState(false)
  const counterRef = useRef(null)
  const counterFired = useRef(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', grade: '', message: '' })
  const [formMsg, setFormMsg] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (window.AOS) window.AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 120 })
    // const timer = setTimeout(() => setShowPopup(true), 1500)
    // return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  useEffect(() => {
    const el = counterRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counterFired.current) {
        counterFired.current = true
        animateCounter('years-counter', 36)
        animateCounter('students-counter', 250, true)
        animateCounter('teachers-counter', 24)
        animateCounter('alumni-counter', 3200, true)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxeG0CUejFFQy97YHUr9khyqGCHMVQM8aOtH8Pg4GvcfivC5zePa1GqNwS2zOvijLY/exec'
    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .finally(() => {
        setSubmitting(false)
        setFormMsg({ text: 'Thank you for your inquiry! We will contact you soon.', type: 'success' })
        setFormData({ name: '', email: '', phone: '', grade: '', message: '' })
        setTimeout(() => setFormMsg(null), 5000)
      })
  }

  return (
    <div className="bg-gray-50">
      {/* Popup */}
      {/* {showPopup && (
        <div className="popup-overlay" onClick={e => { if (e.target === e.currentTarget) setShowPopup(false) }}>
          <div className="popup-content">
            <img src="/images/intro.jpeg" alt="Welcome" className="popup-image" />
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 z-50 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
            >
              <i className="fas fa-times text-gray-800 text-sm"></i>
            </button>
          </div>
        </div>
      )} */}

      {/* Breaking News */}
      <div className="news-ticker text-white py-3 px-4">
        <div className="container mx-auto flex items-center">
          <Link to="/gallery" className="flex-shrink-0">
            <span className="font-bold mr-4 bg-white text-red-600 px-3 py-1 rounded-full text-sm flex items-center">
              <i className="fas fa-bolt mr-2"></i> BREAKING
            </span>
          </Link>
          <div className="marquee-container w-full">
            <div className="marquee-content">
              <span className="mr-8">आदरणीय अभिभावक बर्ग, मिति २०८२ पुष १० गते बिहिबार Christmass को उपलक्षयमा यस विद्यालय बन्द रहने जानकारी गर्दछु ।</span>
              <span className="mr-8">अत: नानीबाबुहरुलाई मिति २०८२ पुष ११ गते शुक्रबार परीक्षाको दिनमा पढ्ने पुस्तक सँगै विद्यालय पठाउनु हुन अनुरोध गर्दछु । धन्वाद ।</span>
              <span className="mr-8">Chandani School incorporates School Management App Pathshala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-section">
        <HeroSlideShow />
        <div className="hero-content">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-aos="fade-down">
              <span className="gradient-text">Quality Education</span> in Nepal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200" data-aos="fade-down" data-aos-delay="100">
              Nurturing Future Leaders Through Holistic Education Since 1989
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#admissions" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
                <i className="fas fa-user-graduate mr-2"></i> Apply Now
              </a>
              <a href="#about" className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
                <i className="fas fa-info-circle mr-2"></i> Learn More
              </a>
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce z-10" data-aos="fade-up" data-aos-delay="500">
          <i className="fas fa-chevron-down"></i>
        </a>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white" ref={counterRef}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-800 section-title">
            Chandani<span className="gradient-text"> at a Glance</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
            <div className="counter-item bg-blue-50 p-6 rounded-lg">
              <div id="years-counter" className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="counter-item bg-green-50 p-6 rounded-lg">
              <div id="students-counter" className="text-4xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Current Students</div>
            </div>
            <div className="counter-item bg-yellow-50 p-6 rounded-lg">
              <div id="teachers-counter" className="text-4xl font-bold text-yellow-600 mb-2">0</div>
              <div className="text-gray-600">Qualified Teachers</div>
            </div>
            <div className="counter-item bg-purple-50 p-6 rounded-lg">
              <div id="alumni-counter" className="text-4xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-gray-600">Successful Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 section-title" data-aos="fade-up">
              About <span className="gradient-text">Our School</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              Committed to academic excellence and holistic development in the heart of Lalitpur
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
                <img src="/images/stages1.jpeg" alt="School Building" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">Our School</h3>
                    <p className="text-gray-200">A nurturing environment for learning and growth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Welcome to Chandani English School</h3>
              <p className="text-gray-600 mb-4 text-lg my-paragraph">
                Established in 1989, Chandani English School is one of the premier educational institutions in Lalitpur, Nepal. We are committed to providing quality education that combines academic excellence with moral values and life skills.
              </p>
              <p className="text-gray-600 mb-6 text-lg my-paragraph">
                Our mission is to nurture young minds to become responsible global citizens while preserving their Nepali identity and cultural heritage through innovative teaching methodologies and a supportive learning environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['NEB Curriculum', 'Modern Facilities', 'Experienced Faculty', 'Holistic Development'].map((item, i) => (
                  <div key={item} className="flex items-start" data-aos="zoom-in" data-aos-delay={`${(i + 1) * 100}`}>
                    <div className="bg-blue-100 p-2 rounded-full mr-3"><i className="fas fa-check-circle text-blue-600"></i></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300" data-aos="zoom-in">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                <a href="#" className="inline-flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-full transition duration-300" data-aos="zoom-in" data-aos-delay="100">
                  <i className="fas fa-play-circle mr-2"></i> Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 section-title" data-aos="fade-up">
              Our <span className="gradient-text">Academic Programs</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              Comprehensive educational programs from early childhood to higher secondary education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-child', title: 'Primary Level (Nursery-UKG)', desc: 'Our primary program focuses on foundational learning with a blend of academics and creative activities to stimulate young minds.', items: ['Interactive learning methods', 'Focus on literacy and numeracy', 'Creative arts integration'] },
              { icon: 'fa-book-open', title: 'Lower Secondary (1-8)', desc: 'Our lower secondary program builds on foundational knowledge while introducing specialized subjects and critical thinking skills.', items: ['Subject specialization begins', 'Project-based learning', 'Critical thinking development'] },
              { icon: 'fa-graduation-cap', title: 'Secondary Level (9-10)', desc: 'Our secondary program prepares students for SEE and higher education with rigorous academics and career guidance.', items: ['Base for Distinct fields', 'Career counseling', 'Research and innovation focus'] },
            ].map((prog, i) => (
              <div key={prog.title} className="bg-white p-8 rounded-xl shadow-md card-hover" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="text-blue-600 text-5xl mb-6"><i className={`fas ${prog.icon}`}></i></div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{prog.title}</h3>
                <p className="text-gray-600 mb-6 my-paragraph">{prog.desc}</p>
                <ul className="text-gray-600 space-y-3">
                  {prog.items.map(item => (
                    <li key={item} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"></i><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 section-title" data-aos="fade-up">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              State-of-the-art infrastructure to support learning and overall development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: '/images/c0c95cfd02be.jfif', title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities including basketball, volleyball, badminton, table tennis, and a well-maintained playground.', delay: 200 },
              { img: '/images/computer.png', title: 'Computer Lab', desc: 'Modern computer lab with high-speed internet, latest software, and one computer per student for digital literacy and coding classes.', delay: 300 },
              { img: '/images/canteen.jfif', title: 'Cafeteria', desc: 'Spacious and hygienic cafeteria serving nutritious meals and snacks, with options for different dietary requirements.', delay: 500 },
            ].map(fac => (
              <div key={fac.title} className="bg-gray-50 rounded-xl overflow-hidden shadow-md card-hover" data-aos="zoom-in" data-aos-delay={`${fac.delay}`}>
                <div className="relative overflow-hidden h-60">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">{fac.title}</h3>
                  </div>
                </div>
                <div className="p-6"><p className="text-gray-600">{fac.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 section-title" data-aos="fade-up">
              School <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              A glimpse into life at Chandani Secondary English School
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {[
              ['/images/buildingfront.jpeg', 0],
              ['/images/462758848_7640886396014335_6405602682601477974_n.jpg', 100],
              ['/images/c3b9dd12-8665-40bc-9d48-69fe7a4d1d43.jfif', 200],
              ['/images/469594501_7953941844708787_973711556533685088_n.jpg', 300],
              ['/images/56112f20-fe4c-4bfe-9bf1-4eb67c23b854.jfif', 400],
              ['/images/499685212.jpg', 500],
              ['/images/462892021_7640886372681004_7761318901610312949_n.jpg', 600],
              ['/images/475419546_4010215299300179_6712551264027729784_n.jpg', 700],
            ].map(([src, delay], i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md" data-aos="zoom-in" data-aos-delay={`${delay}`}>
                <img src={src} alt="Gallery" className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link to="/gallery" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
              <i className="fas fa-images mr-2"></i> View More Photos
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 section-title" data-aos="fade-up">
              News & <span className="gradient-text">Events</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              Stay updated with our latest happenings and announcements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: '/images/499786022.jpg', badge: 'Event', color: 'bg-blue-600', date: 'May 23, 2025', title: 'Trip to Amusement Park', desc: "Students beating the warm weather with fun and enthusiastic outdoor trip to Whoopeeland.", delay: 0 },
              { img: '/images/480276237_8318777608225207_2948882358926135473_n.jpg', badge: 'Announcement', color: 'bg-red-600', date: 'Sept 14, 2025', title: "Children's Day Celebration", desc: "Students presented cultural programs to celebrate Children's Day with fervor and pride.", delay: 100 },
              { img: '/images/499761579_8962090940560534_6654580310796421238_n.jpg', badge: 'Achievement', color: 'bg-green-600', date: 'May 24, 2025', title: 'Taekwando Competition', desc: 'Our students showcased distinctive taekwando skills at the inter-school championship, winning district-level recognition.', delay: 200 },
            ].map(ev => (
              <div key={ev.title} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 card-hover" data-aos="fade-up" data-aos-delay={`${ev.delay}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={ev.img} alt="Event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className={`absolute top-4 right-4 ${ev.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>{ev.badge}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="far fa-calendar-alt mr-2"></i><span>{ev.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{ev.title}</h3>
                  <p className="text-gray-600 mb-4">{ev.desc}</p>
                  <Link to="/gallery" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link to="/gallery" className="inline-flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300">
              <i className="far fa-newspaper mr-2"></i> View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
              What Parents <span className="gradient-text">Say</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              Hear from our parent community about their experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: 'मेरो छोराले यस विद्यालयमा धेरै प्रगति गरेको छ। शिक्षकहरू धेरै समर्पित छन् र बच्चाहरूलाई नैतिक शिक्षा पनि दिन्छन्। विद्यालयको वातावरण सीख्न र बढ्न उत्तम छ।', img: '/images/b5abbf78-4927-4c2e-893c-2105d7074249.jfif', name: 'गोविन्द न्यौपाने', role: 'कक्षा ३ को अभिभावक' },
              { quote: 'विद्यालयले बच्चाहरूलाई केवल पुस्तकीय ज्ञान मात्र होइन, व्यावहारिक ज्ञान पनि दिन्छ। मेरी छोरीले यहाँ धेरै आत्मविश्वास प्राप्त गरेकी छिन्।', img: '/images/808a98c0-5b9f-4026-8af8-dcc88c3e4961.jfif', name: 'प्रीति थापा', role: 'कक्षा ७ को अभिभावक' },
              { quote: 'हामीले धेरै विद्यालयहरू हेरेर यो विद्यालय छान्यौं र यो निर्णय सही थियो। बच्चाहरूको सुरक्षा, स्वच्छता र अनुशासनमा विद्यालयले ध्यान दिन्छ।', img: '/images/2cb84132-14d3-4a6d-b733-70b4fba922ed.jfif', name: 'मीना ब्यञ्जनकार', role: 'कक्षा ८ को अभिभावक' },
            ].map(t => (
              <div key={t.name} className="testimonial-card bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-3 text-yellow-500 opacity-70"><i className="fas fa-quote-left"></i></div>
                  <p className="text-gray-700 nepali-text">{t.quote}</p>
                </div>
                <div className="flex items-center mt-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 nepali-text">{t.name}</h4>
                    <p className="text-sm text-gray-500 nepali-text">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Open</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join Chandani Secondary School for a transformative educational journey. Limited seats available!
              </p>
              <div className="bg-blue-900 bg-opacity-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Admission Process</h3>
                <ul className="admission-process space-y-4">
                  <li>Submit online application form with required documents</li>
                  <li>Entrance test (for grades 2 and above) to assess basic competencies</li>
                  <li>Interview with parents and student to understand expectations</li>
                  <li>Admission confirmation and fee payment to secure the seat</li>
                </ul>
              </div>
              <div className="bg-blue-900 bg-opacity-30 rounded-xl p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <i className="fas fa-graduation-cap mr-2"></i> Scholarship Information
                </h4>
                <p className="text-blue-100">
                  * Merit-based scholarships available for top performers in entrance tests. Need-based financial aid also offered for deserving students.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <i className="fas fa-file-alt mr-3"></i> Admission Inquiry Form
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 text-gray-800">
                  {formMsg && (
                    <div className={`mb-4 p-4 rounded-lg ${formMsg.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                      {formMsg.text}
                    </div>
                  )}
                  {[
                    { id: 'name', label: "Parent's Name", type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                    { id: 'phone', label: 'Phone', type: 'tel' },
                  ].map(f => (
                    <div key={f.id} className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor={f.id}>
                        {f.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={f.type} id={f.id} required
                        value={formData[f.id]}
                        onChange={e => setFormData({ ...formData, [f.id]: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="grade">
                      Grade Applying For <span className="text-red-500">*</span>
                    </label>
                    <select id="grade" required value={formData.grade} onChange={e => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Grade</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(g => <option key={g} value={`${g}`}>Grade {g}</option>)}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message (Optional)</label>
                    <textarea id="message" rows="3" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                    {submitting
                      ? <><i className="fas fa-spinner fa-spin mr-2"></i>Submitting...</>
                      : <><i className="fas fa-paper-plane mr-2"></i>Submit Inquiry</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
