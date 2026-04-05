import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { Vehicle } from './types/index';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';


const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = vehicles.find(v => v.id === id) as Vehicle;
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (dateFrom && dateTo) {
      const from = new Date(dateFrom);
      const to = new Date(dateTo);
      const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
      setDays(diff > 0 ? diff : 0);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => navigate('/vehicles'), 3500);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (days > 0) setSubmitted(true);
  };

  if (!vehicle) return <div className="py-20 text-center">Vehicle not found</div>;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-6">
        <Card className="max-w-2xl w-full text-center p-16 animate-pulse">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-4xl font-black text-emerald-600 mb-6">Booking Confirmed!</h2>
          <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-8 rounded-2xl mb-8">
            <p className="text-2xl font-bold mb-2">{vehicle.name}</p>
            <p className="text-xl">{days} days • ₹{vehicle.pricePerDay * days}</p>
          </div>
          <p className="text-xl text-gray-600 mb-8">Thank you for choosing Laxmi Rentals 🙏</p>
          <p className="text-lg text-gray-500">Redirecting...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-saffron-600 to-goa-blue bg-clip-text text-transparent mb-6">
            Book {vehicle.name}
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">Select your perfect travel dates</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-12 order-2 lg:order-1">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-8" />
            <div className="space-y-4 mb-8">
              {vehicle.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 text-lg">
                  <span className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center font-bold text-emerald-600">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-12 order-1 lg:order-2">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-saffron-500 to-goa-blue text-white px-8 py-4 rounded-2xl mb-6 shadow-xl">
                <span className="text-3xl font-black">₹{vehicle.pricePerDay}</span>
                <div className="text-lg font-semibold opacity-90">per day</div>
              </div>
              {days > 0 && (
                <div className="bg-emerald-100 p-6 rounded-2xl shadow-lg">
                  <p className="text-2xl font-bold text-emerald-700 mb-2">Total: ₹{vehicle.pricePerDay * days}</p>
                  <p className="text-lg text-emerald-600">({days} days)</p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
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
              <Button type="submit" size="lg" fullWidth className="!text-xl !py-8 shadow-2xl !shadow-orange-500/30">
                ✨ Confirm Booking • {days > 0 ? `₹${vehicle.pricePerDay * days}` : 'Select Dates'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;