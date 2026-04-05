export interface Vehicle {
  id: string;
  type: 'taxi' | 'car' | 'bike';
  name: string;
  image: string;
  pricePerDay: number;
  capacity: number;
  description: string;
  features: string[];
}

export interface Booking {
  id: string;
  vehicleId: string;
  dateFrom: string;
  dateTo: string;
  totalPrice: number;
}