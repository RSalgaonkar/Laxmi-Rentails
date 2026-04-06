import { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate, createSearchParams } from 'react-router-dom';
import { Phone, User, Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate({
      pathname: '/vehicles',
      search: createSearchParams({ q: search }).toString()
    });
    setMobileOpen(false);
    setSearch('');
  }, [search, navigate]);

  useEffect(() => {
    if (search.length > 1) {
      const results = ['Cars', 'Bikes', 'Taxis'].filter(type => 
        type.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch(e as any);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-white/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-2xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent flex-shrink-0 hover:scale-105 transition-transform"
            onClick={() => setMobileOpen(false)}
          >
            लक्ष्मी Rentals
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <div className="relative group">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-orange-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search cars, bikes, taxis..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pr-4 py-2.5 w-80 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 shadow-sm hover:shadow-md transition-all duration-200"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-orange-100 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-gray-500" />
                </button>
              </form>
              
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 z-50 py-1">
                  {searchResults.map((result) => (
                    <NavLink
                      key={result}
                      to={`/vehicles?q=${encodeURIComponent(search)}`}
                      className="block px-4 py-3 text-sm hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition-all hover:border-orange-200"
                      onClick={() => setSearch('')}
                    >
                      {result}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Nav */}
            <nav className="flex space-x-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/vehicles', label: 'Vehicles' },
                { path: '/booking', label: 'Book Now' }
              ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-md ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg !scale-105'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTAs */}
            <div className="flex items-center space-x-2 ml-4">
              <a 
                href="tel:+918312345678" 
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <button className="p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 border-2 border-orange-200 transition-all shadow-sm hover:shadow-md hover:scale-105">
                <User className="w-5 h-5 text-orange-600" />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all shadow-sm hover:shadow-md md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        {mobileOpen && (
          <div className="md:hidden overflow-hidden bg-gradient-to-b from-white/95 via-orange-50/50 to-orange-50/30 backdrop-blur-xl border-t-2 border-orange-100 shadow-2xl transform transition-all duration-300 ease-out translate-y-0">
            <div className="px-6 py-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
                <input
                  type="text"
                  placeholder="🔍 Search cars • bikes • taxis"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-14 pr-6 py-4 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 focus:border-orange-400 focus:outline-none shadow-2xl text-lg font-semibold transition-all hover:shadow-3xl"
                />
              </form>

              {/* Nav Grid */}
              <nav className="grid grid-cols-1 gap-4">
                {[
                  { path: '/', icon: '🏠', label: 'Home' },
                  { path: '/vehicles', icon: '🚗', label: 'Vehicles' },
                  { path: '/booking', icon: '📅', label: 'Book Now' },
                  { path: '/about', icon: 'ℹ️', label: 'About' },
                  { path: '/services', icon: '⚙️', label: 'Services' },
                  { path: '/contact', icon: '📞', label: 'Contact' }
                ].map(({ path, icon, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-4 p-6 rounded-3xl font-bold text-lg border-2 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95 ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400 shadow-orange-500/50'
                          : 'bg-white/80 backdrop-blur-xl border-gray-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 text-gray-800'
                      }`
                    }
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl">{icon}</span>
                    </div>
                    <span>{label}</span>
                  </NavLink>
                ))}
              </nav>

              {/* CTA */}
              <a 
                href="tel:+918312345678"
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 active:scale-95 transition-all duration-300 border-4 border-green-400 mx-2 block text-center"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-10 h-10 shadow-lg" />
                <div>
                  <span className="block text-2xl">Call Now!</span>
                  <span className="text-lg">+91 83123 45678</span>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* Overlay */}
        {mobileOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;