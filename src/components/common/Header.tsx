import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, User, Search, Menu, X } from 'lucide-react'; // npm i lucide-react @types/lucide-react if needed

const Header = () => {
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  // const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search logic (e.g., filter vehicles)
    console.log('Searching:', search);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            लक्ष्मी Rentals
          </NavLink>

          {/* Desktop Search & Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/30 focus:border-orange-400 focus:outline-none w-64"
              />
            </form>
            <nav className="flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all ${
                    isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all ${
                    isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`
                }
              >
                Vehicles
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all ${
                    isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`
                }
              >
                Book Now
              </NavLink>
            </nav>
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+918312345678" className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
              <Phone className="w-5 h-5" />
              <span>+91 83123 45678</span>
            </a>
            <div className="relative group">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
                <User className="w-5 h-5" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-white/20">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-orange-50">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-orange-50">Bookings</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-orange-50">Logout</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <form onSubmit={handleSearch} className="relative mx-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/30 focus:border-orange-400 w-full"
              />
            </form>
            // In Header.tsx nav, replace with:
            <nav className="flex space-x-6">
              <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Home</NavLink>
              <NavLink to="/vehicles" className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Vehicles</NavLink>
              <NavLink to="/booking" className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-all ${isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}>Book Now</NavLink>
              <div className="group relative">
                <span className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 cursor-pointer">More</span>
                <div className="absolute left-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-white/20 z-50">
                  <NavLink to="/about" className="block px-4 py-2 text-sm hover:bg-orange-50">About Us</NavLink>
                  <NavLink to="/services" className="block px-4 py-2 text-sm hover:bg-orange-50">Services</NavLink>
                  <NavLink to="/contact" className="block px-4 py-2 text-sm hover:bg-orange-50">Contact</NavLink>
                </div>
              </div>
            </nav>
            <a href="tel:+918312345678" className="block mx-4 px-4 py-3 bg-green-500 text-white text-center rounded-full font-medium">Call: +91 83123 45678</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;