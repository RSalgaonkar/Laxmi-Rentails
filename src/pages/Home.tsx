import Hero from '../components/common/Hero';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';

const Home: React.FC = () => (
  <>
    <Hero />
    <section className="py-32 bg-gradient-to-b from-white via-orange-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-goa-blue via-saffron-500 to-orange-500 bg-clip-text text-transparent mb-8">
            Choose Your Perfect Ride
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium vehicles maintained to the highest standards. Trusted by thousands.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {vehicles.slice(0, 6).map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;