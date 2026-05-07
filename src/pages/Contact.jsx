import { useState, useEffect } from 'react'

const FAQS = [
  { q: 'What are your school hours?', a: 'Our regular school hours are Sunday to Thursday from 9:00 AM to 3:30 PM. On Fridays, school ends at 1:00 PM. The administrative office is open Sunday–Thursday 9:00 AM–4:00 PM and Fridays 9:00 AM–1:00 PM.' },
  { q: 'How can I schedule a school tour?', a: 'Tours are conducted Monday to Thursday between 10:00 AM and 2:00 PM. Please call +977-1-5912488 or email info@chandani.edu.np to schedule. Tours last about an hour and include classrooms, facilities, and a meeting with admission staff.' },
  { q: 'What documentation is required for admission?', a: 'Required documents: completed application form, two recent passport-sized photos, birth certificate, previous school report cards, transfer certificate (if applicable), character certificate from previous school, and citizenship copies of parents/guardians.' },
  { q: 'What is your fee structure?', a: 'Fees vary by grade level and include tuition, development fee, and other applicable charges. We offer discounts for siblings and early payment. Contact info@chandani.edu.np or call +977-1-5912488 for details.' },
  { q: 'Do you offer scholarships or financial aid?', a: 'Yes, merit-based scholarships are available for outstanding students. Financial assistance is also available for families with demonstrated need. Applications for financial aid are accepted April 1 – May 15 each year. Email info@chandani.edu.np for details.' },
]

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    if (window['AOS']) window['AOS'].init({ duration: 800, easing: 'ease-in-out', once: true, offset: 120 })
    window.scrollTo(0, 0)
  }, [])

  function toggleFaq(i) {
    setOpenFaq(prev => (prev === i ? null : i))
  }

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative h-[60vh] bg-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img src="/images/499685212.jpg" alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-down">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-lg" data-aos="fade-down" data-aos-delay="100">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-blue-800 section-title">
              Get <span className="gradient-text">in Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">Reach out to us through any of the following channels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-card bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">Shankhamul, Lalitpur<br />Nepal</p>
              <a
                href="https://www.google.com/maps/place/Chandani+Secondary+English+School/@27.6780672,85.3273626,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                View on Map <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>

            <div className="contact-card bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="bg-green-100 text-green-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Numbers</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Administration:</span> +977-1-5912488
              </p>
              <a href="tel:+977-1-5912488" className="text-blue-600 font-medium inline-flex items-center">
                Call Now <i className="fas fa-phone ml-2 text-sm"></i>
              </a>
            </div>

            <div className="contact-card bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="bg-purple-100 text-purple-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Address</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Admissions:</span> info@chandani.edu.np
              </p>
              <a href="mailto:info@chandani.edu.np" className="text-blue-600 font-medium inline-flex items-center">
                Email Us <i className="fas fa-envelope ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title">
              Find <span className="gradient-text">Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Visit our campus located at the edge of Shankhamul, Lalitpur
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="zoom-in" data-aos-delay="100">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2!2d85.3261!3d27.6777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c6b663dd47%3A0xaf78b3293d760622!2sChandani+Secondary+English+School!5e0!3m2!1sen!2snp!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fas fa-bus text-blue-600 mr-2"></i> Public Transport Access
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-circle text-xs mt-2 mr-2 text-blue-500"></i><span>Local buses to Shankhamul stop at Shankhamul Bridge (5 mins walk)</span></li>
                  <li className="flex items-start"><i className="fas fa-circle text-xs mt-2 mr-2 text-blue-500"></i><span>Microbuses from Ratna Park terminate at Shankhamul Bus Stop</span></li>
                  <li className="flex items-start"><i className="fas fa-circle text-xs mt-2 mr-2 text-blue-500"></i><span>Taxis and ride-sharing services available across Lalitpur</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fas fa-car text-blue-600 mr-2"></i> Parking Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-circle text-xs mt-2 mr-2 text-blue-500"></i><span>Limited parking available on campus for visitors</span></li>
                  <li className="flex items-start"><i className="fas fa-circle text-xs mt-2 mr-2 text-blue-500"></i><span>Paid parking available at Kick Futsal Parking Lot (1 min walk)</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                  <i className="fas fa-info-circle text-blue-600 mr-2"></i> Visiting Guidelines
                </h3>
                <p className="text-gray-700 mb-2">For the safety and security of our students, all visitors must:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Register at the security gate</li>
                  <li>Wear the provided visitor badge at all times</li>
                  <li>Follow all school policies while on campus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 section-title">
              Frequently<span className="gradient-text"> Asked Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">Answers to common questions we receive</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left font-medium text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.q}</span>
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:info@chandani.edu.np"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
