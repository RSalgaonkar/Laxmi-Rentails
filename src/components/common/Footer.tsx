const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-saffron-600 via-orange-500 to-goa-blue text-white py-16 mt-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
          Laxmi Rentals
        </h3>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed">
          Journey with Divine Grace – Safe Taxi, Car & Bike Rentals across Goa
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
        <div>
          <h4 className="text-2xl font-bold mb-4">Contact</h4>
          <p>📱 +91 98765 43210</p>
          <p>✉️ bookings@laxmirentals.com</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Services</h4>
          <p>Taxi Booking</p>
          <p>Car Rental</p>
          <p>Bike Rental</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Location</h4>
          <p>📍 Panjim, Goa</p>
          <p>24x7 Service</p>
        </div>
      </div>
      <div className="border-t border-white/30 pt-8 text-center">
        <p className="text-lg">&copy; 2026 Laxmi Rentals. Blessed by Divine Grace 🙏</p>
      </div>
    </div>
  </footer>
);

export default Footer;