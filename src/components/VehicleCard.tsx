import { Vehicle } from './types';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Card from './ui/Card';

interface Props {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<Props> = ({ vehicle }) => (
  <section>
    {/* <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
      <Link
        to="/"
        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-none hover:scale-105 transform transition-all duration-300 border-4 border-white hover:border-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>
    </div> */}
    <Link to={`/booking/${vehicle.id}`} className="block h-full vehicle-glow group">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 hover:bg-white/95">
        <div className="flex-shrink-0 relative overflow-hidden mb-6">
          <img 
            src={vehicle.image} 
            alt={vehicle.name}
            className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl border border-white/50">
            {vehicle.type.toUpperCase()}
          </div>
        </div>
        
        <div className="flex-grow">
          <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-saffron-600 transition-colors line-clamp-2">
            {vehicle.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-grow">
            {vehicle.description}
          </p>
          <div className="flex items-center justify-between mb-6">
            <div>
              {/* <span className="text-4xl font-black text-saffron-600 block">₹{vehicle.pricePerDay}</span> */}
              {/* <span className="text-lg text-gray-500">per day</span> */}
            </div>
            <div className="text-2xl font-bold">👥 {vehicle.capacity}</div>
          </div>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((feature, i) => (
                <span key={i} className="px-3 py-1 bg-saffron-100 text-saffron-700 text-sm rounded-xl font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <Button className="!w-full !text-lg !py-5 bg-gradient-to-r from-saffron-500 to-goa-blue hover:from-saffron-600 !shadow-xl">
          Book Now ✨
        </Button>
      </Card>
    </Link>
  </section>
  
);

export default VehicleCard;