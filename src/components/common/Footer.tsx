import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const contactInfo = {
    phone: '+91-832-1234567',
    email: 'bookings@laxmirentals.com',
    address: 'Laxmi Rentals, Panjim, Goa - 403001',
    whatsapp: '+91-98765-43210'
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white py-12 px-4 md:px-8 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-3 hover:text-orange-400 transition-colors">
              <i className="fas fa-phone text-xl text-green-400"></i>
              {contactInfo.phone}
            </p>
            <p className="flex items-center gap-3 hover:text-orange-400 transition-colors">
              <i className="fas fa-envelope text-xl text-blue-400"></i>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p className="flex items-center gap-3 hover:text-orange-400 transition-colors">
              <i className="fab fa-whatsapp text-xl text-green-500"></i>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/vehicles" className="hover:text-orange-400 transition-colors">Vehicles</a></li>
            <li><a href="/booking" className="hover:text-orange-400 transition-colors">Booking</a></li>
            <li><a href="/taxi" className="hover:text-orange-400 transition-colors">Taxi Services</a></li>
          </ul>
        </div>

        {/* Location & Map Section */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Our Location
            </h3>
            <p className="text-lg leading-relaxed">{contactInfo.address}</p>
            
            {/* Google Map Embed - Panjim, Goa */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-orange-400/50 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.95!2d73.765824!3d15.624369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM3JzI3LjciTiA3M8KwNDUnNTcuMCJF!5e0!3m2!1sen!2sin!4v1733452800000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laxmi Rentals - Siolim, Goa"
                className="w-full h-64 md:h-72 lg:h-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm md:text-base">
        <p>&copy; 2026 Laxmi Rentals. All rights reserved. | Serving Goa with trusted rentals.</p>
      </div>
    </footer>
  );
};

export default Footer;