import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate emailjs or your backend API
    alert('Thanks! We\'ll contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    // BULLETPROOF SCROLL TARGET + HEADER OFFSET
    <div id="contact" className="scroll-mt-40 pt-40 min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to rent cars, bikes or taxis in Goa? Our Panjim team is here 24/7.
          </p>
        </section>

        {/* Contact Info + Form Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          
          {/* Contact Details */}
          <div className="space-y-8 lg:order-2">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-10 h-10 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-700 font-semibold">Shop 12, MG Road<br/>Panjim, Goa - 403001</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-10 h-10 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-700 font-semibold">+91 83123 45678</p>
                  <p className="text-sm text-emerald-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    24/7 Available
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-10 h-10 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700 font-semibold break-all">hello@laxmirentals.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-all bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg required"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-all bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg required"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-all bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg required"
                    placeholder="+91 83xxx xxxxx"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-all resize-vertical bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg required"
                  placeholder="Tell us about your rental needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:from-orange-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* LIVE GOOGLE MAPS - MG Road Panjim (15.4980, 73.8278) */}
        <section className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          <div className="p-8 text-center border-b border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Location</h2>
            <p className="text-gray-600">Shop 12, MG Road, Panjim • 2 min walk from Panjim Market</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.0!2d73.8278!3d15.4980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbff6b0d6b0b0b1%3A0x1234567890abcdef!2sMG%20Road%2C%20Panjim%2C%20Goa!5e0!3m2!1sen!2sin!4v1733500000000!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Laxmi Rentals Location - MG Road Panjim"
            className="w-full"
          />
        </section>
      </div>
    </div>
  );
};

export default Contact;