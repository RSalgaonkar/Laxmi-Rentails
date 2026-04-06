import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission (e.g., emailjs)
    alert('Thanks! We\'ll contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">Ready to rent? We're here to help.</p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">Shop 12, MG Road, Panjim, Goa - 403001</p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-8 h-8 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 83123 45678</p>
                  <p className="text-sm text-gray-500">24/7 Available</p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-8 h-8 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@laxmirentals.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-400"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-400"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-400"
                placeholder="Tell us about your rental needs..."
                required
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-96 rounded-2xl flex items-center justify-center text-gray-600 text-xl font-semibold">
          🗺️ Google Maps Embed Here (Panjim Location)
        </div>
      </div>
    </div>
  );
};

export default Contact;