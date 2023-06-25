import React, { useCallback, useEffect, useState } from 'react';

import { MainView } from './view';
import { useHotels } from './hooks/useHotels';
import { useChannels } from './hooks/useChannels';
import { storage } from './services/storage';

const Main = () => {
  const { isLoading: isLoadingHotels, hotels, setHotels } = useHotels();
  const { isLoading: isLoadingChannels, channels } = useChannels();

  const [selectedHotelId, setSelectedHotelId] = useState<string | number | null>(null);

  const changeChannelVisibility = useCallback(
    ({ id, isVisible }: { id: string; isVisible: boolean }) => {
      if (selectedHotelId !== null) {
        setHotels(oldHotels => {
          const newHotels = [...oldHotels];
          const selectedHotel = newHotels.find(hotel => hotel.id === selectedHotelId);

          if (selectedHotel) {
            const selectedHotelIndex = newHotels.indexOf(selectedHotel);
            const newSelectedHotel = { ...selectedHotel };
            const newSelectedHotelChannels = [...selectedHotel.channels];

            if (isVisible) {
              newSelectedHotelChannels.push(id);
            } else {
              const removedChannelIndex = newSelectedHotelChannels.indexOf(id);
              newSelectedHotelChannels.splice(removedChannelIndex, 1);
            }

            newSelectedHotel.channels = newSelectedHotelChannels;
            newHotels[selectedHotelIndex] = newSelectedHotel;
          }

          return newHotels;
        });
      }
    },
    [selectedHotelId],
  );

  useEffect(() => {
    if (hotels.length === 0) {
      return;
    }

    const hotelsData = hotels.reduce((hotelsObject, hotel) => {
      hotelsObject[hotel.id] = hotel.channels;

      return hotelsObject;
    }, {});

    storage.setData(hotelsData);
  }, [hotels]);

  return (
    <MainView
      selectedHotelId={selectedHotelId}
      onHotelIdChange={setSelectedHotelId}
      hotels={hotels}
      channels={channels}
      isLoading={isLoadingHotels || isLoadingChannels}
      onChannelVisibilityChange={changeChannelVisibility}
    />
  );
};

export { Main };
