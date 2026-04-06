import { NavLink } from 'react-router-dom';

const Services = () => (
  <div className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-20">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our premium fleet for every journey.</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all group">
          <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            🚗
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Car Rental</h3>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>• Sedans, SUVs, Luxury</li>
            <li>• Self-drive or chauffeur</li>
            <li>• Airport transfers</li>
            <li>• From ₹1500/day</li>
          </ul>
          <NavLink to="/booking" className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl text-center font-semibold hover:shadow-xl transition-all">
            Book Car
          </NavLink>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all group">
          <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            🏍️
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Bike Rental</h3>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>• Royal Enfield, Activa</li>
            <li>• Hourly/daily rates</li>
            <li>• Helmets included</li>
            <li>• From ₹500/day</li>
          </ul>
          <NavLink to="/booking" className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl text-center font-semibold hover:shadow-xl transition-all">
            Book Bike
          </NavLink>
        </div>
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all group">
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            🚕
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Taxi Service</h3>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li>• Outstation trips</li>
            <li>• Local sightseeing</li>
            <li>• 24/7 availability</li>
            <li>• From ₹10/km</li>
          </ul>
          <NavLink to="/booking" className="block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-xl text-center font-semibold hover:shadow-xl transition-all">
            Book Taxi
          </NavLink>
        </div>
      </section>
    </div>
  </div>
);

export default Services;