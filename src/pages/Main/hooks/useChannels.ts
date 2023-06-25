import { useEffect, useState } from 'react';
import { api } from '../../../api';
import type { Channel } from '../models/channel';

const useChannels = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadChannels = async () => {
      setIsLoading(true);

      try {
        const data = await api.getChannels();
        setChannels(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChannels();
  }, []);

  return {
    channels,
    isLoading,
  };
};

export { useChannels };
