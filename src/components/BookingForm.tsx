import { useState, useEffect, useMemo, type FC, type FormEvent, ChangeEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';  // Adjust if path differs
import { Vehicle } from './types';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

const BookingForm: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = vehicles.find((v) => v.id === id) as Vehicle | undefined;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [days, setDays] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isTaxi = vehicle?.type === 'taxi';
  const isRental = !isTaxi;  // car or bike

  useEffect(() => {
    let calcDays = 0;
    if (dateFrom) {
      if (isRental && dateTo && dateFrom < dateTo) {
        const from = new Date(dateFrom);
        const to = new Date(dateTo);
        calcDays = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
      } else if (isTaxi) {
        calcDays = 1;  // Single day for taxi
      }
    }
    setDays(calcDays > 0 ? calcDays : 0);
  }, [dateFrom, dateTo, isTaxi, isRental]);

  const whatsappMessage = useMemo(() => {
    const total = (vehicle?.pricePerDay || 0) * days;
    return `NEW BOOKING - Laxmi Rentals\nCustomer: ${customerName}\nPhone: ${customerPhone}\nVehicle: ${vehicle?.name}\nFrom Date: ${dateFrom}\n${isRental ? `To Date: ${dateTo}\n` : ''}From: ${fromLocation}\n${isTaxi ? `To: ${toLocation}\n` : ''}Days: ${days}\nTotal: ₹${total}\nConfirm?`;
  }, [customerName, customerPhone, vehicle, dateFrom, dateTo, fromLocation, toLocation, days, isTaxi, isRental]);

  const ADMIN_WHATSAPP_NUMBER = '918888120894';  // Update your number

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setCustomerName(e.target.value);
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setCustomerPhone(e.target.value);
  const handleDateFromChange = (e: ChangeEvent<HTMLInputElement>) => setDateFrom(e.target.value);
  const handleDateToChange = (e: ChangeEvent<HTMLInputElement>) => setDateTo(e.target.value);
  const handleFromLocationChange = (e: ChangeEvent<HTMLInputElement>) => setFromLocation(e.target.value);
  const handleToLocationChange = (e: ChangeEvent<HTMLInputElement>) => setToLocation(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasValidDates = dateFrom && (isTaxi || (dateTo && dateFrom < dateTo));
    if (!customerName || !customerPhone || !dateFrom || !fromLocation || days === 0 || !hasValidDates || (isTaxi && !toLocation)) {
      alert(`Please fix:\n- All required fields\n- Valid dates (From < To for rentals)\n- Locations`);
      return;
    }

    setIsSubmitting(true);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/vehicles');
    }, 2000);
  };

  if (!vehicle) return <div className="py-20 text-center text-xl">Vehicle not found</div>;

  const isSubmitDisabled = isSubmitting || days === 0 || !customerName || !customerPhone || !dateFrom || !fromLocation;

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Fixed Home button */}
      <Link
        to="/"
        className="fixed top-4 right-4 z-50 md:top-6 md:right-6 group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-none hover:scale-105 transform transition-all duration-300 border-4 border-white hover:border-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
      >
        <span>Home</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-saffron-600 to-goa-blue bg-clip-text text-transparent mb-6">
            Book {vehicle.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Details sent via WhatsApp to admin</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Full Name" type="text" placeholder="Rashmith Salgaonkar" value={customerName} onChange={handleNameChange} required />
            <Input label="Phone" type="tel" placeholder="91 98XXX XXXXX" value={customerPhone} onChange={handlePhoneChange} required />

            <Input label="From Date" type="date" value={dateFrom} onChange={handleDateFromChange} required />

            {isRental && (
              <Input label="To Date" type="date" value={dateTo} onChange={handleDateToChange} required />
            )}

            <Input label="From Location" type="text" placeholder="Panjim, Goa" value={fromLocation} onChange={handleFromLocationChange} required />

            {isTaxi && <Input label="To Destination" type="text" placeholder="Margaon Station" value={toLocation} onChange={handleToLocationChange} required />}

            {days > 0 && (
              <div className="bg-emerald-100 p-6 rounded-2xl shadow-lg">
                <p className="text-2xl font-bold text-emerald-700">₹{(vehicle.pricePerDay * days).toLocaleString()}</p>
                <p className="text-lg text-emerald-600">{days} day{days > 1 ? 's' : ''}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitDisabled}
              size="lg"
              className="!text-xl !py-8 shadow-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send to WhatsApp'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;