import { Star, Users, Car, Award } from 'lucide-react';

const About = () => (
  <div className="py-20 bg-gradient-to-b from-white to-orange-50" id="about">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
          About लक्ष्मी Rentals
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Serving Goa with reliable rentals since 2020. Your trusted partner for cars, bikes & taxis.</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <Car className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-gray-900">500+</div>
          <div className="text-gray-600">Vehicles</div>
        </div>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-gray-900">10K+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-gray-900">5+</div>
          <div className="text-gray-600">Years</div>
        </div>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-gray-900">4.9</div>
          <div className="text-gray-600">Rating</div>
        </div>
      </section>

      {/* Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">Founded in Siolim, Goa, Laxmi Rentals started with 5 cars and a dream to make mobility accessible. Today, we serve thousands with a modern fleet and 24/7 support.</p>
          <ul className="space-y-3 text-gray-600">
            <li>• Fleet of 20+ premium vehicles</li>
            <li>• Pan-India delivery options</li>
            <li>• Eco-friendly & well-maintained</li>
            <li>• Instant WhatsApp booking</li>
          </ul>
        </div>
        <div className="relative">
          <img src="/images/pattern.svg" alt="Goa Beach" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Best rental service in Goa! Clean cars, easy booking."</p>
            <div className="font-semibold text-gray-900">Priya S.</div>
          </div>
          {/* Repeat for 2 more */}
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Reliable bikes at great prices. Highly recommend!"</p>
            <div className="font-semibold text-gray-900">Rohan K.</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="flex text-yellow-400">
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
                <Star fill="currentColor" className="w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Professional taxi service. On-time pickup."</p>
            <div className="font-semibold text-gray-900">Anita M.</div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;