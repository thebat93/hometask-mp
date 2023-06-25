import { useEffect, useState } from 'react';
import { api } from '../../../api';
import { storage } from '../services/storage';
import type { Hotel } from '../models/hotel';

const useHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadHotels = async () => {
      setIsLoading(true);

      try {
        const data = await api.getHotels();
        const persistedData = storage.getData();

        if (persistedData === null) {
          setHotels(data);
        }

        const mergedData = data.map(hotelData => ({
          ...hotelData,
          channels: persistedData[hotelData.id] ?? hotelData.channels,
        }));

        setHotels(mergedData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHotels();
  }, []);

  return {
    hotels,
    setHotels,
    isLoading,
  };
};

export { useHotels };
