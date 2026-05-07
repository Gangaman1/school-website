import { useState, useEffect, useCallback } from 'react'

// ── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: 'sports',
    title: 'Events',
    gradient: '2025',
    subtitle: 'Annual events held throughout the school year, 2025',
    items: [
      { images: ['/images/picnic6.jpeg','/images/picnic7.jpeg'], title: 'Annual Picnic', desc: 'Students enjoying picnic 2025.' },
      { images: ['/images/8.jpg','/images/9.jpg'], title: 'Sports Week', desc: 'Students in action during the annual sports week event.' },
      { images: ['/images/493313924_8738866266216337_5220031815467309381_n.jpg','/images/492711427_8738951626207801_4362531864119495855_n.jpg'], title: 'Futsal Tournament', desc: 'Students in action during the senior futsal tournament.' },
      { images: ['/images/499786022.jpg','/images/499685212.jpg','/images/499897866.jpg'], title: 'Whoopeeland Amusement Park', desc: "Senior students enjoyed a thrilling adventure at Nepal's largest water park." },
      { images: ['/images/503996713_1139185371558311_2725380212089011490_n.jpg','/images/504072137_1139185271558321_6919130036332298920_n.jpg','/images/504342675_1139185321558316_3838878026158918178_n.jpg','/images/504378816_1139185471558301_4248680345726425735_n.jpg'], title: 'World Environment Day', desc: 'Senior students at a rally during the World Environment Day Program.' },
      { images: ['/images/434059556_6517086278394358_6776061164920906191_n.jpg','/images/434129296_6517086725060980_7992249095649941135_n.jpg','/images/434133669_6517090275060625_3058680144850095803_n.jpg','/images/434147320_6517087018394284_7304023840137707611_n.jpg'], title: 'Annual Parents Day 2024', desc: "Students' performance at the annual Parents' Day Program." },
    ],
  },
  {
    id: 'academic',
    title: 'Achievements',
    gradient: '2025',
    subtitle: "Celebrating our students' excellence and accomplishments",
    items: [
      { images: ['/images/499761579_8962090940560534_6654580310796421238_n.jpg','/images/499869285_8962091183893843_6185814424988742259_n.jpg'], title: 'Taekwando Award', desc: 'Top students receiving awards at the municipal taekwando tournament.' },
      { images: ['/images/469809953_7953942774708694_8211866794459339695_n.jpg','/images/469603559_7953942571375381_3703223119554204920_n.jpg','/images/469626700_7953940978042207_8309460634849407880_n.jpg'], title: 'Science Fair', desc: 'Students presenting their innovative science projects.' },
    ],
  },
  {
    id: 'trips',
    title: 'Educational',
    gradient: 'Field Trips',
    subtitle: 'Learning beyond the classroom through exciting excursions',
    items: [
      { images: ['/images/426299499_6348464298589891_1414429553932641603_n.jpg','/images/426619367_6344202549016066_2071244684325655086_n.jpg','/images/426648465_6348464578589863_2070339888147656127_n.jpg'], title: 'Field Visit', desc: "Grade 8 and above students exploring Nepal's serene tourist attractions." },
      { images: ['/images/504723223_1140145081462340_5356430115811118083_n.jpg','/images/504413622_1140145364795645_8663228005907006614_n.jpg','/images/504658007_1140145244795657_3422388200727347474_n.jpg'], title: 'Local Heritage Visit', desc: 'Students visiting local heritage sites.' },
    ],
  },
]

const FESTIVALS = [
  {
    images: ['/images/465141556.jpg','/images/465031090.jpg','/images/465032024.jpg'],
    cover: '/images/465141556.jpg',
    title: 'Tihar Festival',
    desc: 'Student house rangoli competition at the school.',
  },
  {
    images: ['/images/guru1.jpg','/images/guru2.jpg'],
    cover: '/images/guru1.jpg',
    title: "Teacher's Day",
    desc: "Teachers' Day celebrated with student performances.",
  },
]

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({ event, onClose }) {
  const [idx, setIdx] = useState(0)
  const total = event.images.length

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 text-white flex-shrink-0">
        <div>
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-gray-400 text-sm">{event.desc}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{idx + 1} / {total}</span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex items-center justify-center relative px-4 md:px-16 min-h-0">
        <img
          key={idx}
          src={event.images[idx]}
          alt={event.title}
          className="max-h-full max-w-full object-contain rounded-lg select-none"
          style={{ animation: 'fadeIn 0.2s ease' }}
        />
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex-shrink-0 px-4 py-4 flex justify-center gap-2 overflow-x-auto">
          {event.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-14 h-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                i === idx ? 'border-blue-400 scale-110' : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Event Card ────────────────────────────────────────────────────────────────

function EventCard({ item, onOpen, delay = 0 }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={() => onOpen(item)}
      data-aos="zoom-in"
      data-aos-delay={`${delay}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <i className="fas fa-images"></i>
            <span>{item.images.length} photos</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent flex items-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
            <i className="fas fa-expand-alt"></i> View All Photos
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.desc}</p>
      </div>
    </div>
  )
}

// ── Festival Flip Card ────────────────────────────────────────────────────────

function FestivalCard({ fest, onOpen, delay = 0 }) {
  return (
    <div className="event-card h-64" data-aos="zoom-in" data-aos-delay={`${delay}`}>
      <div className="event-card-inner relative w-full h-full">
        {/* Front */}
        <div className="event-card-front bg-white rounded-xl overflow-hidden shadow-md">
          <div className="relative w-full h-full">
            <img src={fest.cover} alt={fest.title} className="w-full h-full object-cover" />
            {fest.images.length > 1 && (
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <i className="fas fa-images"></i> {fest.images.length} photos
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-bold">{fest.title}</p>
              <p className="text-gray-300 text-xs mt-1">Hover to see more</p>
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="event-card-back bg-gradient-to-br from-blue-800 to-blue-600 text-white rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <i className="fas fa-star text-yellow-400 text-3xl mb-3"></i>
          <h3 className="font-bold text-xl mb-2">{fest.title}</h3>
          <p className="text-blue-100 text-sm mb-4">{fest.desc}</p>
          <button
            onClick={() => onOpen(fest)}
            className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
          >
            <i className="fas fa-images mr-2"></i> View Photos
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

function GallerySection({ sec, onOpen }) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
          {sec.title}<span className="gradient-text"> {sec.gradient}</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="100">
          {sec.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sec.items.map((item, i) => (
          <EventCard key={item.title} item={item} onOpen={onOpen} delay={i * 80} />
        ))}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (window['AOS']) window['AOS'].init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] bg-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="/images/6e9f0c6a-70f1-4880-a8d7-0e3360c7aa51.jfif" alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">
              <span className="gradient-text">School</span> Gallery
            </h1>
            <p className="text-lg text-gray-200" data-aos="fade-down" data-aos-delay="100">
              Relive the memorable moments of Chandani Secondary School
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">

          {SECTIONS.map(sec => (
            <GallerySection key={sec.id} sec={sec} onOpen={setLightbox} />
          ))}

          {/* Festivals */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
                Festival<span className="gradient-text"> Celebrations</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="100">
                Celebrating Nepal's rich cultural diversity through festivals — hover a card to flip it
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FESTIVALS.map((fest, i) => (
                <FestivalCard key={fest.title} fest={fest} onOpen={setLightbox} delay={i * 100} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Photo of the Month */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
              Photo of<span className="gradient-text"> the Month</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="100">
              Our favourite moment captured this month
            </p>
          </div>
          <div
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer group"
            data-aos="zoom-in"
            onClick={() => setLightbox({ images: ['/images/499761579_8962090940560534_6654580310796421238_n.jpg'], title: 'Award Celebration', desc: 'May 2025 — Students performing at the highest level, competing with other schools.' })}
          >
            <div className="relative overflow-hidden">
              <img src="/images/499761579_8962090940560534_6654580310796421238_n.jpg" alt="Photo of the Month" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="bg-white/0 group-hover:bg-white text-transparent group-hover:text-blue-600 px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                  <i className="fas fa-expand-alt"></i> View Full Size
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Award Celebration</h3>
                  <p className="text-gray-500">May 2025 | Achievement</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Winner</span>
              </div>
              <p className="text-gray-600">
                Students performing at the highest level of the event, competing with other schools. Selected for their achievement and enthusiastic determination.
              </p>
              <p className="text-sm text-gray-400 mt-4">Photo by Mrs. Anita Basnet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && <Lightbox event={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}
