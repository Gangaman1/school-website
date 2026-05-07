import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  function goToAdmissions(e) {
    e.preventDefault()
    setMobileOpen(false)
    if (pathname === '/') {
      document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'admissions' } })
    }
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo.jpg"
            alt="School Logo"
            className="h-12 w-12 object-cover rounded-full mr-3 border-2 border-blue-500 transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <p className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">Chandani Secondary School</p>
            <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors">Lalitpur, Nepal</p>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-6 items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-3 py-2 group ${pathname === to ? 'text-blue-800' : 'text-gray-600 hover:text-blue-600 transition-colors'}`}
            >
              <span>{label}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname === to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a
            href="#admissions"
            onClick={goToAdmissions}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Admissions
          </a>
        </div>

        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 w-full py-4 px-6 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 border-b border-gray-100 hover:bg-blue-50 px-2 rounded transition-colors ${pathname === to ? 'text-blue-800' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {label}
              </Link>
            ))}
            <a
              href="#admissions"
              onClick={goToAdmissions}
              className="block bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center font-medium py-3 px-6 rounded-full mt-2 shadow-md hover:shadow-lg transition-all"
            >
              Admissions
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
