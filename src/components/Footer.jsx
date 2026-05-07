import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo.jpg" alt="School Logo" className="h-24 object-cover rounded-full border-2 border-blue-500" />
            </div>
            <h3 className="text-xl font-bold">Chandani Secondary School</h3>
            <p className="text-xs text-gray-400">Lalitpur, Nepal</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Providing quality education in Nepal since 1989. Committed to academic excellence and holistic development of students.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100064005759165" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic text-sm">
              <div className="flex items-start mb-3">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <a href="https://www.google.com/maps/place/Chandani+Secondary+English+School/@27.6777437,85.326173,17z" target="_blank" rel="noopener noreferrer">
                  Shankhamul, Lalitpur, Nepal
                </a>
              </div>
              <div className="flex items-start mb-3">
                <i className="fas fa-phone-alt mt-1 mr-3 text-blue-400"></i>
                <a href="tel:+977-1-5912488">+977-1-5912488</a>
              </div>
              <div className="flex items-start mb-3">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                <a href="mailto:info@chandani.edu.np">info@chandani.edu.np</a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-blue-400"></i>
                <span>Sunday-Friday: 9:00 AM - 4:00 PM</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Chandani Secondary School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
