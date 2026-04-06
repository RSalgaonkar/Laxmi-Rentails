import { useState, useEffect, useMemo, type FC, type ChangeEvent, type FormEvent } from 'react';
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
  
  // Common fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Conditional fields
  const [bookingDate, setBookingDate] = useState('');      // Taxi: single date
  const [fromDestination, setFromDestination] = useState('');  // Taxi: pickup
  const [toDestination, setToDestination] = useState('');     // Taxi: dropoff
  const [dateFrom, setDateFrom] = useState('');      // Rental: start date
  const [dateTo, setDateTo] = useState('');          // Rental: end date
  
  const [days, setDays] = useState(0);
  const isTaxi = vehicle?.type === 'taxi';

  // Calculate rental days
  useEffect(() => {
    if (dateFrom && dateTo && !isTaxi) {
      const from = new Date(dateFrom);
      const to = new Date(dateTo);
      const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
      setDays(diff > 0 ? diff : 0);
    } else {
      setDays(1); // Taxi defaults to 1 day
    }
  }, [dateFrom, dateTo, isTaxi]);

  const whatsappMessage = useMemo(() => {
    const total = vehicle.pricePerDay * days;
    let details = '';
    
    if (isTaxi) {
      details = `📅 *Date:* ${bookingDate}\n📍 *From:* ${fromDestination}\n📍 *To:* ${toDestination}`;
    } else {
      details = `📅 *From:* ${dateFrom}\n📅 *To:* ${dateTo}\n⏱️ *Days:* ${days}`;
    }
    
    return `🚀 *NEW BOOKING REQUEST - Laxmi Rentals* 🏍️

👤 *Customer:* ${customerName}
📱 *Phone:* ${customerPhone}

🚗 *Vehicle:* ${vehicle.name} (${vehicle.type.toUpperCase()})
${details}
💰 *Total:* ₹${total.toLocaleString()}

*Please confirm & reply!* 🙏`;
  }, [customerName, customerPhone, vehicle, bookingDate, fromDestination, toDestination, dateFrom, dateTo, days, isTaxi]);

  const ADMIN_WHATSAPP_NUMBER = '+918888120894'; // EDIT YOUR NUMBER

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate based on vehicle type
    if (!customerName || !customerPhone) {
      alert('Please enter name and phone');
      return;
    }
    
    if (isTaxi) {
      if (!bookingDate || !fromDestination || !toDestination) {
        alert('Please fill date and destinations for taxi');
        return;
      }
    } else {
      if (!dateFrom || !dateTo || days <= 0) {
        alert('Please select valid rental dates');
        return;
      }
    }

    setIsSubmitting(true);
    
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER.replace(/[+-\s]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      navigate('/vehicles');
    }, 2000);
  };

  if (!vehicle) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Vehicle Not Found</h1>
        <Link to="/vehicles" className="text-blue-600 hover:underline">← Back to Vehicles</Link>
      </div>
    );
  }

  return (
    <section>
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <Link 
          to="/" 
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-none hover:scale-105 transform transition-all duration-300 border-4 border-white hover:border-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
        >
          <span>🏠</span><span>Home</span>
        </Link>
      </div>
      
      <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-saffron-600 to-goa-blue bg-clip-text text-transparent mb-6">
              Book {vehicle.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isTaxi 
                ? 'Select date and destinations for your taxi ride' 
                : 'Select rental dates for your vehicle'
              }
            </p>
          </div>
          
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              {/* Customer Details */}
              <Input
                label="Your Full Name"
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomerName(e.target.value)}
                required
              />
              
              <Input
                label="Your Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={customerPhone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomerPhone(e.target.value)}
                required
              />
              
              {/* Conditional Fields */}
              {isTaxi ? (
                <>
                  <Input
                    label="Booking Date"
                    type="date"
                    value={bookingDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setBookingDate(e.target.value)}
                    required
                  />
                  <Input
                    label="Pickup From"
                    type="text"
                    placeholder="e.g. Panjim Bus Stand"
                    value={fromDestination}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFromDestination(e.target.value)}
                    required
                  />
                  <Input
                    label="Dropoff To"
                    type="text"
                    placeholder="e.g. Calangute Beach"
                    value={toDestination}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setToDestination(e.target.value)}
                    required
                  />
                </>
              ) : (
                <>
                  <Input
                    label="From Date"
                    type="date"
                    value={dateFrom}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDateFrom(e.target.value)}
                    required
                  />
                  <Input
                    label="To Date"
                    type="date"
                    value={dateTo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDateTo(e.target.value)}
                    required
                  />
                </>
              )}
              
              {/* Price Display */}
              <div className="p-6 bg-gradient-to-r from-saffron-50 to-blue-50 rounded-3xl border-2 border-dashed border-saffron-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-black text-saffron-600 block">
                      ₹{vehicle.pricePerDay.toLocaleString()}
                    </span>
                    <div className="text-lg font-semibold text-gray-700">per day</div>
                  </div>
                  {days > 0 && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-700">
                        Total: ₹{(vehicle.pricePerDay * days).toLocaleString()}
                      </div>
                      <div className="text-sm text-emerald-600">{days} {isTaxi ? 'day' : 'days'}</div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!customerName || !customerPhone || 
                         (isTaxi ? (!bookingDate || !fromDestination || !toDestination) : (days === 0)) || 
                         isSubmitting}
                size="lg"
                fullWidth
                className="!text-xl !py-8 shadow-2xl !shadow-emerald-500/30 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl"
              >
                {isSubmitting 
                  ? '📱 Sending to Admin...' 
                  : `📱 Send WhatsApp Booking (${days > 0 ? `₹${(vehicle.pricePerDay * days).toLocaleString()}` : 'Fill Details'})`
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
