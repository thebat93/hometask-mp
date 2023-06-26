import { useMemo } from 'react';

import { H1 } from '../../components/Typography';
import { Select, Item } from '../../components/Select';
import { ChannelsList } from './components/ChannelsList';
import type { Channel as ChannelItem } from './components/ChannelsList';
import type { Channel } from './models/channel';
import type { Hotel } from './models/hotel';

interface Props {
  selectedHotelId: string | number | null;
  onHotelIdChange: (newId: string | number) => void;
  hotels: Hotel[];
  channels: Channel[];
  onChannelVisibilityChange: ({ id, isVisible }: { id: string; isVisible: boolean }) => void;
  isLoading: boolean;
}

const MainView = ({
  selectedHotelId,
  onHotelIdChange,
  hotels,
  channels,
  onChannelVisibilityChange,
  isLoading,
}: Props) => {
  const selectedHotel = useMemo(() => {
    if (selectedHotelId !== null) {
      return hotels.find(hotel => hotel.id === selectedHotelId) || null;
    }

    return null;
  }, [selectedHotelId, hotels]);

  const selectedHotelChannels: ChannelItem[] = useMemo(() => {
    if (selectedHotel !== null) {
      return channels.map(channel => ({
        id: channel.id,
        title: channel.title,
        isVisible: selectedHotel.channels.includes(channel.id),
      }));
    }

    return [];
  }, [selectedHotel, channels]);

  return (
    <main className="p-6 flex flex-col gap-5 max-h-[calc(100%-53px)]">
      <H1 className="text-black dark:text-darkgray-100">Channel manager</H1>
      {!isLoading && (
        <>
          <Select
            label="Hotel"
            className="max-w-[17rem]"
            selectedKey={selectedHotelId}
            onSelectionChange={onHotelIdChange}
          >
            {hotels.map(hotel => (
              <Item key={hotel.id}>{hotel.title}</Item>
            ))}
          </Select>
          <ChannelsList
            channels={selectedHotelChannels}
            onChange={({ id, isSelected }) =>
              onChannelVisibilityChange({ id, isVisible: isSelected })
            }
          />
        </>
      )}
    </main>
  );
};

export { MainView };
