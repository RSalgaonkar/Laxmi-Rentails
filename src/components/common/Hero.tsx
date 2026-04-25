import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Phone, Search, Calendar, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="relative bg-gradient-to-br from-saffron-500 via-orange-400 to-goa-blue min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent)]"></div>
    </div>
    <div className="container mx-auto px-6 text-center text-white relative z-10 animate-float">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
          Laxmi Rent a car & Bikes (Taxi Service)
        </h1>
        <p className="text-xl md:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Premium Taxi • Car • Bike Rentals <br className="md:hidden" /> 
          <span className="text-yellow-200 font-semibold">Across Beautiful Goa</span>
        </p>
        
        {/* Beautified Button Group */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-stretch max-w-4xl mx-auto px-4">
          
          {/* Explore Vehicles - Secondary Gradient Outline */}
          <Link to="/vehicles" className="flex-1 group">
            <Button 
              size="lg" 
              className="w-full px-8 py-5 text-lg font-bold bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 hover:shadow-2xl hover:shadow-white/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 rounded-3xl flex items-center justify-center gap-3 shadow-xl !shadow-white/30"
            >
              <Search className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>🚙 Explore Vehicles</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ml-1" />
            </Button>
          </Link>

          {/* Book Now - Primary Saffron Gradient */}
          <Link to="/vehicles" className="flex-1 group relative overflow-hidden">
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full px-8 py-5 text-lg font-bold bg-gradient-to-r from-saffron-500 to-orange-500 text-white shadow-2xl !shadow-white/40 hover:from-saffron-600 hover:to-orange-600 hover:shadow-3xl hover:shadow-white/50 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 rounded-3xl flex items-center justify-center gap-3 relative"
            >
              <Calendar className="w-6 h-6" />
              <span>✨ Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </Link>

          {/* Call Now - WhatsApp Emerald */}
          <a 
            href="https://wa.me/+918698281323?text=Hi%20Laxmi%20Rentals%2C%20I'd%20like%20to%20book%20a%20vehicle%20in%20Goa!"
            className="flex-1 group flex items-center justify-center"
          >
            <Button 
              size="lg" 
              className="w-full px-8 py-5 text-lg font-bold bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 text-white shadow-2xl !shadow-white/40 hover:from-emerald-600 hover:to-green-700 hover:shadow-3xl hover:shadow-white/50 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 rounded-3xl flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              <div>
                <span>📞 Call Now!</span>
                <span className="block text-sm font-normal opacity-90 mt-0.5">+91 8698281323</span>
              </div>
            </Button>
          </a>

        </div>
      </div>
    </div>
  </section>
);

export default Hero;