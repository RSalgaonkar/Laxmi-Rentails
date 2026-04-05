import { Vehicle } from '../components/types/index';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    type: 'taxi',
    name: 'Swift Dzire AC',
    image: 'https://images.unsplash.com/photo-1564569321-97943e45ccee?w=500&h=300&fit=crop',
    pricePerDay: 1500,
    capacity: 4,
    description: 'Premium AC sedan for comfortable city rides and airport transfers.',
    features: ['AC', 'GPS', 'Music System', '24x7 Support']
  },
  {
    id: '2',
    type: 'car',
    name: 'Toyota Innova Crysta',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop',
    pricePerDay: 3500,
    capacity: 7,
    description: 'Spacious SUV perfect for family trips and long journeys.',
    features: ['AC', 'Captain Seats', 'Luggage Space', 'Child Seat Available']
  },
  {
    id: '3',
    type: 'bike',
    name: 'Royal Enfield Classic 350',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop',
    pricePerDay: 1200,
    capacity: 2,
    description: 'Iconic cruiser for adventure rides across Goa.',
    features: ['Fuel Efficient', 'Helmet Provided', 'Easy Parking']
  },
  {
    id: '4',
    type: 'taxi',
    name: 'Honda Amaze',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop',
    pricePerDay: 1300,
    capacity: 4,
    description: 'Compact sedan for economical daily commutes.',
    features: ['AC', 'Compact Size', 'Fuel Efficient']
  },
  {
    id: '5',
    type: 'car',
    name: 'Mahindra XUV700',
    image: 'https://images.unsplash.com/photo-1603796846446-849a68432020?w=500&h=300&fit=crop',
    pricePerDay: 4500,
    capacity: 7,
    description: 'Premium SUV with advanced safety features.',
    features: ['Sunroof', 'ADAS', '360 Camera', 'Premium AC']
  },
  {
    id: '6',
    type: 'bike',
    name: 'Yamaha R15 V4',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=500&h=300&fit=crop',
    pricePerDay: 1800,
    capacity: 2,
    description: 'Sports bike for thrill seekers and short trips.',
    features: ['ABS', 'Digital Console', 'Performance Engine']
  }
];