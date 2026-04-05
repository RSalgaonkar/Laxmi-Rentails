import { useState, useCallback } from 'react';
// import { Vehicle } from '../components/types/index';
import { vehicles } from '../data/vehicles';

export const useVehicles = () => {
  const [filter, setFilter] = useState<'all' | 'taxi' | 'car' | 'bike'>('all');
  const [search, setSearch] = useState('');

  const filteredVehicles = useCallback(() => {
    let result = vehicles;
    if (filter !== 'all') {
      result = result.filter(v => v.type === filter);
    }
    if (search) {
      result = result.filter(v => 
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return result;
  }, [filter, search]);

  return {
    vehicles: filteredVehicles(),
    filter,
    setFilter,
    search,
    setSearch
  };
};