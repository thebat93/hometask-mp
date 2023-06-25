import React, { useCallback, useEffect, useState } from 'react';

import { MainView } from './view';

const hotelsData = [
  { id: 'hotel_a', title: 'Hotel A', channels: ['channel_1', 'channel_2'] },
  { id: 'hotel_b', title: 'Hotel B', channels: ['channel_1'] },
];

const channelsData = [
  { id: 'channel_1', title: 'Channel 1' },
  { id: 'channel_2', title: 'Channel 2' },
];

const LOCALSTORAGE_KEY = 'meeting-package-hotels-data';

const Main = () => {
  const [hotels, setHotels] = useState(() => {
    const persistedRawData = window.localStorage.getItem(LOCALSTORAGE_KEY);

    if (persistedRawData === null) {
      return hotelsData;
    }

    try {
      const persistedData = JSON.parse(persistedRawData);

      return hotelsData.map(hotelData => ({ ...hotelData, channels: persistedData[hotelData.id] }));
    } catch (error) {
      console.error(error);
      return hotelsData;
    }
  });

  const [channels, setChannels] = useState(channelsData);

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
    const hotelsData = hotels.reduce((hotelsObject, hotel) => {
      hotelsObject[hotel.id] = hotel.channels;

      return hotelsObject;
    }, {});
    const hotelsJson = JSON.stringify(hotelsData);

    window.localStorage.setItem(LOCALSTORAGE_KEY, hotelsJson);
  }, [hotels]);

  return (
    <MainView
      selectedHotelId={selectedHotelId}
      onHotelIdChange={setSelectedHotelId}
      hotels={hotels}
      channels={channels}
      onChannelVisibilityChange={changeChannelVisibility}
    />
  );
};

export { Main };
