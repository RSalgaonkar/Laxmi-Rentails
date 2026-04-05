import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => (
  <section className="relative bg-gradient-to-br from-saffron-500 via-orange-400 to-goa-blue min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent)]"></div>
    </div>
    <div className="container mx-auto px-6 text-center text-white relative z-10 animate-float">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
          Laxmi Rentals
        </h1>
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Premium Taxi • Car • Bike Rentals <br className="md:hidden" /> 
          <span className="text-yellow-200 font-semibold">Across Beautiful Goa</span>
        </p>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link to="/vehicles">
            <Button size="lg" className="px-12 py-6 text-xl shadow-2xl !shadow-white/30">
              🚙 Explore Vehicles
            </Button>
          </Link>
          <Link to="/vehicles">
            <Button variant="secondary" size="lg" className="px-12 py-6 text-xl border-4 !border-white/70">
              ✨ Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;