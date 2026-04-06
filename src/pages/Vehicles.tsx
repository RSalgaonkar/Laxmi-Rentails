// import { useState } from 'react';
import { useVehicles } from '../hooks/useVehicles';
import VehicleCard from '../components/VehicleCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';
// import Header from '../components/Header'; 

const VehiclesPage: React.FC = () => {
  const { vehicles: filteredVehicles, filter, setFilter, search, setSearch } = useVehicles();

  return (
    <section className="py-24 min-h-screen">
      {/* <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <Link
          to="/"
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-none hover:scale-105 transform transition-all duration-300 border-4 border-white hover:border-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
        >
          <span>🏠</span>
          <span>Home</span>
        </Link>
      </div> */}

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-saffron-500 via-orange-400 to-goa-blue bg-clip-text text-transparent mb-8">
            Our Fleet
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Choose from 50+ premium vehicles across all categories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-center">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {(['all', 'taxi', 'car', 'bike'] as const).map(type => (
              <Button
                key={type}
                variant={filter === type ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setFilter(type)}
                className="px-8 py-4"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>
          <Input
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md lg:ml-auto"
          />
        </div>

        {filteredVehicles.length > 0 ? (
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-12 ${filteredVehicles.length === 1 ? 'justify-items-center' : ''}`}>
            {filteredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <div className="text-8xl mb-8 mx-auto">🚗</div>
            <h3 className="text-4xl font-black text-gray-500 mb-6">No vehicles found</h3>
            <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto">
              Try adjusting your search or filter settings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => { setFilter('all'); setSearch(''); }} size="lg">
                Show All Vehicles
              </Button>
              <Button variant="secondary" size="lg" onClick={() => setSearch('')}>
                Clear Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehiclesPage;