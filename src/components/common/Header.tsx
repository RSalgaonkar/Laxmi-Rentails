import { useState, useCallback, useEffect } from 'react';
import { NavLink, useNavigate, createSearchParams } from 'react-router-dom';
import { Phone, User, Search, Menu, X, ChevronRight } from 'lucide-react';

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
      const results = [
        'Swift Dzire', 'Honda Activa', 'Innova Taxi', 'Royal Enfield', 'MG Hector', 'Toyota Innova'
      ].filter(vehicle => vehicle.toLowerCase().includes(search.toLowerCase()));
      setSearchResults(results.slice(0, 4)); // Top 4 results
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch(e as any);
  };

  return (
    <>
      {/* Header Bar */}
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-white/30 shadow-xl">
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

            {/* Desktop Nav + Search */}
            <div className="hidden md:flex items-center space-x-6">
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
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-orange-100 transition-colors">
                    <Search className="w-4 h-4 text-gray-500" />
                  </button>
                </form>
                
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 z-50 py-1 max-h-60 overflow-y-auto">
                    {searchResults.map((result) => (
                      <NavLink
                        key={result}
                        to={`/vehicles?q=${encodeURIComponent(result)}`}
                        className="block px-4 py-3 text-sm hover:bg-orange-50 border-b border-gray-100 last:border-b-0 transition-all flex items-center space-x-3 hover:border-orange-200"
                        onClick={() => setSearch('')}
                      >
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span>{result}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

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

              <div className="flex items-center space-x-2 ml-4">
                <a href="tel:+918312345678" className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm hover:-translate-y-0.5">
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
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* FIXED LIST NAV - Perfect Height, No Scroll */}
      {mobileOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black/60 z-[90]" onClick={() => setMobileOpen(false)} />
          
          <div className="md:hidden fixed top-0 left-0 w-full h-screen z-[95] flex flex-col bg-gradient-to-b from-white via-orange-50/30 to-orange-50/50 backdrop-blur-sm">
            
            {/* Top Bar */}
            <div className="p-4 border-b border-gray-200 bg-white/95 flex items-center justify-between shadow-sm">
              <NavLink to="/" onClick={() => setMobileOpen(false)} className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                लक्ष्मी Rentals
              </NavLink>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-2xl hover:bg-gray-100 transition-all">
                <X className="w-7 h-7 text-gray-600" />
              </button>
            </div>

            {/* Compact List Content */}
            <div className="flex-1 flex flex-col px-6 py-6 space-y-2 overflow-hidden">
              
              {/* Compact Search */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Swift, Activa, Innova..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-11 pr-12 py-3 bg-white/90 rounded-2xl border border-gray-200 focus:border-orange-400 focus:outline-none shadow-lg text-base font-medium transition-all"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-all">
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* VERTICAL LIST NAV */}
              <nav className="flex-1 space-y-2 overflow-y-auto pb-20 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {[
                  { path: '/', icon: '🏠', label: 'Home' },
                  { path: '/vehicles', icon: '🚗', label: 'All Vehicles' },
                  { path: '/booking', icon: '📅', label: 'Book Now' },
                  { path: '/about', icon: 'ℹ️', label: 'About Us' },
                  { path: '/services', icon: '⚙️', label: 'Our Services' },
                  { path: '/contact', icon: '📞', label: 'Contact' }
                ].map(({ path, icon, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center space-x-4 p-4 rounded-2xl font-semibold text-base border-l-4 shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-x-2 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-l-orange-400 shadow-orange-300/50'
                          : 'bg-white/80 border-l-gray-200 hover:border-l-orange-300 hover:bg-white shadow-md text-gray-800'
                      }`
                    }
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-all">
                      <span className="text-xl">{icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block font-semibold">{label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 flex-shrink-0 transition-colors" />
                  </NavLink>
                ))}
              </nav>

              {/* Fixed CTA Bottom */}
              <div className="pt-4 border-t border-gray-200 bg-white/90 backdrop-blur-sm p-4 rounded-t-3xl shadow-2xl -mx-6 mt-auto">
                <a 
                  href="tel:+918312345678"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 active:scale-95 transition-all border-2 border-green-400 block text-center w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-8 h-8 shadow-lg" />
                  <div className="flex-1">
                    <span className="block text-lg font-bold">Call Now!</span>
                    <span className="text-sm opacity-90">+91 83123 45678</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;