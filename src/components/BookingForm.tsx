import { useState, useEffect, useMemo, type FC, type FormEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { Vehicle } from './types';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

const BookingForm: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = vehicles.find(v => v.id === id) as Vehicle;
  
  // New fields: customer name and phone
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [days, setDays] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (dateFrom && dateTo) {
      const from = new Date(dateFrom);
      const to = new Date(dateTo);
      const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
      setDays(diff > 0 ? diff : 0);
    }
  }, [dateFrom, dateTo]);

  const whatsappMessage = useMemo(() => {
    const total = vehicle.pricePerDay * days;
    return `🚀 *NEW BOOKING REQUEST - Laxmi Rentals* 🏍️\n\n👤 *Customer:* ${customerName}\n📱 *Phone:* ${customerPhone}\n\n🚗 *Vehicle:* ${vehicle.name}\n📅 *From:* ${dateFrom}\n📅 *To:* ${dateTo}\n⏱️ *Days:* ${days}\n💰 *Total:* ₹${total}\n\n*Please confirm & reply!* 🙏`;
  }, [customerName, customerPhone, vehicle, dateFrom, dateTo, days]);

  // CHANGE THIS TO YOUR ADMIN WHATSAPP NUMBER (India: +91XXXXXXXXXX)
  const ADMIN_WHATSAPP_NUMBER = '+918888120894'; // ← EDIT HERE!

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!customerName || !customerPhone || !dateFrom || !dateTo || days <= 0) {
      alert('Please fill all fields and select valid dates');
      return;
    }

    setIsSubmitting(true);
    
    // Send directly to admin WhatsApp
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER.replace(/[+-\s]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Auto redirect after sending
    setTimeout(() => {
      navigate('/vehicles');
    }, 2000);
  };

  if (!vehicle) {
    return <div className="py-20 text-center">Vehicle not found</div>;
  }

  return (
    <section>
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <Link to="/" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-none hover:scale-105 transform transition-all duration-300 border-4 border-white hover:border-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
          <span>🏠</span><span>Home</span>
        </Link>
      </div>
      
      <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-saffron-600 to-goa-blue bg-clip-text text-transparent mb-6">
              Book {vehicle.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Enter your details to send booking request via WhatsApp</p>
          </div>
          
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New: Customer Name */}
              <Input
                label="Your Full Name"
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
              
              {/* New: Customer Phone */}
              <Input
                label="Your Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
              />
              
              <Input
                label="From Date"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                required
              />
              
              <Input
                label="To Date"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                required
              />
              
              <div>
                <span className="text-3xl font-black block">₹{vehicle.pricePerDay}</span>
                <div className="text-lg font-semibold opacity-90">per day</div>
              </div>
              
              {days > 0 && (
                <div className="bg-emerald-100 p-6 rounded-2xl shadow-lg">
                  <p className="text-2xl font-bold text-emerald-700 mb-2">Total: ₹{vehicle.pricePerDay * days}</p>
                  <p className="text-lg text-emerald-600">({days} days)</p>
                </div>
              )}
              
              <Button
                type="submit"
                disabled={!customerName || !customerPhone || days === 0 || isSubmitting}
                size="lg"
                fullWidth
                className="!text-xl !py-8 shadow-2xl !shadow-green-500/30 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? '📱 Sending to Admin...' 
                  : `📱 Send WhatsApp Booking (${days > 0 ? `₹${vehicle.pricePerDay * days}` : 'Fill Details'})`
                }
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                We'll send your booking details directly to admin via WhatsApp
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;