import { NavLink } from 'react-router-dom';
import { 
  Facebook, Twitter, MessageCircle, Instagram, 
  MapPin, Phone, Clock 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12 mt-20 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Laxmi Rentals
            </h3>
            <p className="text-gray-400 mb-4">Goa's premium vehicle rental service. Cars, Bikes, Taxis. 24/7 Support.</p>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/laxmirentals" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/laxmirentals" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918312345678" className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-all" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/laxmirentals" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Panjim, Goa - 403001</span>
            </div>
          </div>

          {/* Quick Links - SCROLL FIXED */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <NavLink to="/" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🏠 Home
              </NavLink>
              <NavLink to="/vehicles#vehicles" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🚙 Vehicles
              </NavLink>
              <NavLink to="/booking#booking" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                📅 Book Now
              </NavLink>
              <NavLink to="/about#about" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                ℹ️ About Us
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <nav className="space-y-3">
              <NavLink to="/vehicles?type=all#vehicles" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🔄 All Services
              </NavLink>
              <NavLink to="/vehicles?type=car#cars" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🚗 Car Rental
              </NavLink>
              <NavLink to="/vehicles?type=bike#bikes" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🏍️ Bike Rental
              </NavLink>
              <NavLink to="/vehicles?type=taxi#taxis" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🚕 Taxi Service
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <a href="tel:+918312345678" className="flex items-center hover:text-orange-400 transition-all duration-300 cursor-pointer group">
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                +91 83123 45678
              </a>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-orange-400" />
                <span>24/7 Available</span>
              </div>
              <NavLink to="/contact#contact" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                📝 Contact Form
              </NavLink>
              <NavLink to="/privacy-policy#privacy" className={({ isActive }) => 
                `block py-2 px-1 rounded transition-all duration-300 font-medium cursor-pointer group ${
                  isActive 
                    ? 'text-orange-400 bg-orange-500/20 pl-4 shadow-md' 
                    : 'text-gray-400 hover:text-orange-400 hover:pl-4 hover:bg-orange-500/10'
                }`
              }>
                🛡️ Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-400">
          <p>
            © 2026{' '}
            <NavLink to="/about#about" className="hover:text-orange-400 font-medium cursor-pointer">
              Laxmi Rentals
            </NavLink>
            . Panjim, Goa |{' '}
            <NavLink to="/privacy-policy#privacy" className="hover:text-orange-400 font-medium cursor-pointer">
              Privacy
            </NavLink>{' '}
            |{' '}
            <NavLink to="/privacy-policy#terms" className="hover:text-orange-400 font-medium cursor-pointer">
              Terms
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;