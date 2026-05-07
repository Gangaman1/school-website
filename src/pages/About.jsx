import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    if (window['AOS']) window['AOS'].init({ duration: 800, easing: 'ease-in-out', once: true, offset: 120 })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="/images/008cc1b1-2795-426a-a971-66f8d12287b7.jfif" alt="School" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
          <div className="text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down">
              <span className="gradient-text">About Our</span> School
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8" data-aos="fade-down" data-aos-delay="100">
              Shaping young minds with excellence, tradition, and innovation since 1989.
            </p>
            <div className="flex space-x-4 justify-center" data-aos="zoom-in" data-aos-delay="200">
              <a href="#mission" className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-800 hover:text-white transition">Our Mission</a>
              <a href="#history" className="border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-800 transition">Our History</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              The foundation of everything we do at Chandani Secondary School
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: 'fa-bullseye', title: 'Our Mission', delay: 0, content: 'To provide a transformative educational experience that combines academic excellence with character development, preparing students to meet global challenges while remaining rooted in Nepali values and traditions.' },
              { icon: 'fa-eye', title: 'Our Vision', delay: 100, content: "To be recognized as Lalitpur's premier institution for holistic education, developing innovative thinkers and ethical leaders who will shape a better future for our nation and the world." },
              { icon: 'fa-heart', title: 'Our Values', delay: 200, isValues: true },
              { icon: 'fa-graduation-cap', title: 'Our Promise', delay: 300, content: 'Every student who graduates from Chandani Secondary School will be equipped with the knowledge, skills, and values needed to succeed in higher education and life, while maintaining a strong connection to their cultural heritage.' },
            ].map(card => (
              <div key={card.title} className="bg-white p-8 rounded-xl shadow-md card-hover" data-aos="fade-up" data-aos-delay={`${card.delay}`}>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i className={`fas ${card.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
                {card.isValues ? (
                  <ul className="text-gray-600 space-y-3">
                    {['Integrity and ethical conduct', 'Respect for diversity', 'Commitment to excellence', 'Social responsibility'].map(val => (
                      <li key={val} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <i className="fas fa-check text-blue-600 text-xs"></i>
                        </div>
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{card.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
              Our <span className="gradient-text">Journey Through Time</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              From humble beginnings to becoming an educational leader in Lalitpur
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { icon: 'fa-school', color: 'bg-blue-100 text-blue-600', year: '1989 - Foundation', desc: 'Established with just 29 students in a small building in Lalitpur, Chandani Secondary School began its journey with a vision to transform education in Nepal.', delay: 0 },
              { icon: 'fa-award', color: 'bg-green-100 text-green-600', year: '2004 - First Recognition', desc: 'Primary level recognition upto grade one.', delay: 100 },
              { icon: 'fa-expand', color: 'bg-yellow-100 text-yellow-600', year: '2008 - Higher Level Education', desc: 'First batch of SLC appearing students.', delay: 200 },
              { icon: 'fa-globe', color: 'bg-purple-100 text-purple-600', year: '2015 - School Expansion', desc: 'Moved to our current green school in Lalitpur, featuring modern classrooms, science labs, and sports facilities to accommodate growing demand.', delay: 300 },
              { icon: 'fa-chart-line', color: 'bg-red-100 text-red-600', year: '2020 - Digital Transformation', desc: 'Implemented comprehensive digital learning infrastructure, becoming a pioneer in blended education in Nepal during the pandemic challenges.', delay: 400, last: true },
            ].map(item => (
              <div key={item.year} className={`relative timeline-item pl-16 ${item.last ? '' : 'pb-12'}`} data-aos="fade-up" data-aos-delay={`${item.delay}`}>
                <div className={`absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full ${item.color}`}>
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.year}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title" data-aos="fade-up">
              Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6" data-aos="fade-up" data-aos-delay="100">
              The dedicated professionals guiding our institution
            </p>
          </div>
        </div>

        {/* Director Message */}
        <div className="director-card bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto mb-12 mx-4">
          <div className="director-inner flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-indigo-100 flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute -inset-4 border-4 border-indigo-200 rounded-full"></div>
                <img
                  src="/images/33127447_1266587933444245_7742155459913580544_n.jpg"
                  alt="Managing Director"
                  className="w-64 h-64 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12" data-aos="fade-left">
              <i className="fas fa-quote-left text-3xl text-indigo-600 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">हाम्रो प्रबन्ध निर्देशकबाट सन्देश</h3>
              <div className="space-y-4 text-gray-600 mb-8 nepali-text">
                <p>आदरणीय अभिभावकज्यूहरू, प्रिय विद्यार्थीहरू र शिक्षकज्यूहरू,</p>
                <p>चाँदनी अंग्रेजी माध्यमिक विद्यालयले आफ्नो स्थापना देखिनै गुणवत्तायुक्त शिक्षा, आधुनिक शिक्षण पद्धति र विद्यार्थी–केन्द्रित सिकाइ प्रक्रियामार्फत समग्र विकासमा केन्द्रित रहँदै आएको छ।</p>
                <p>विद्यार्थीहरूका बहुआयामिक विकासका लागि हामीले शिक्षासँगै सह–पाठ्यक्रम गतिविधिहरू, प्रविधिको प्रयोग, र नैतिक शिक्षामा पनि जोड दिइरहेका छौं।</p>
                <p>अन्त्यमा, म सम्पूर्ण अभिभावकज्यूहरूलाई आफ्ना बालबालिकाको शिक्षामा सक्रिय सहभागी हुन अनुरोध गर्दछु।</p>
                <p>तपाईंहरूको विश्वास, सहयोग र साथप्रति हामी सधैँ आभारी छौँ।</p>
              </div>
              <p className="font-medium text-gray-800">शुभकामना सहित,</p>
              <div className="signature text-3xl text-indigo-600 mt-2">गंगामान ब्यञ्जनकार</div>
            </div>
          </div>
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-8 lg:mx-16">
          {[
            { img: '/images/principal.jpeg', name: 'Mr. Sanjiv Kumar Jha', role: 'Principal', delay: 0 },
            { img: '/images/vice.jpeg', name: 'Mr. Somnath Dey', role: 'Vice Principal', delay: 100 },
            { img: '/images/direc.jpeg', name: 'Mr. Shuvam Raut Chaurasiya', role: 'Director', delay: 200 },
          ].map(p => (
            <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-md card-hover" data-aos="fade-up" data-aos-delay={`${p.delay}`}>
              <div className="relative h-72 overflow-hidden">
                <img src={p.img} alt={p.role} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-blue-300 font-medium">{p.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 text-white parallax" style={{ backgroundImage: "url('/images/026bf747.jfif')" }}>
        <div className="bg-blue-900 bg-opacity-40 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: '/images/808a98c0-5b9f-4026-8af8-dcc88c3e4961.jfif', name: 'Preeti Thapa', role: 'Parent of Grade 7 Student', quote: 'The holistic approach to education at Chandani Secondary School has transformed my daughter. She\'s not just excelling academically but has developed remarkable leadership skills and social awareness.', stars: 5 },
                { img: '/images/alumni.jpg', name: 'Chirag Byanjankar', role: 'Alumni, Class of 2014', quote: 'The foundation I received here prepared me not just for university in the US, but for life. The teachers genuinely cared about our growth beyond textbooks.', stars: 5 },
                { img: '/images/IMG_0052.jpeg', name: 'John Joshi', role: 'Computer Teacher (2010-Present)', quote: 'Teaching here for over a decade, I\'ve witnessed how the school\'s philosophy creates an environment where both students and teachers thrive and innovate together.', stars: 5 },
              ].map(t => (
                <div key={t.name} className="bg-white text-black bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-blue-200 border-opacity-20">
                  <div className="flex items-center mb-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-blue-200 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{t.quote}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star"></i>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">Ready to Join Our Community?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Discover how Chandani Secondary School can help your child reach their full potential.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link to="/" state={{ scrollTo: 'admissions' }} className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Admissions Process
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full border-2 border-white transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
