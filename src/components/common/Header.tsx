import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="glass-card sticky top-0 z-50 shadow-2xl border-b border-white/30 backdrop-blur-xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-black bg-gradient-to-r from-saffron-600 to-goa-blue bg-clip-text text-transparent hover:scale-105 transition-transform">
            🚗 Laxmi Rentals
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  location.pathname === '/' ? 'bg-saffron-500 text-white shadow-lg' : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50/80'
                }`}
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link 
                to="/vehicles" 
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  location.pathname.startsWith('/vehicles') ? 'bg-saffron-500 text-white shadow-lg' : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50/80'
                }`}
              >
                🚙 Vehicles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;