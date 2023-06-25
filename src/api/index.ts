import hotelsData from './hotels.json';
import channelsData from './channels.json';

const api = {
  getHotels: () => Promise.resolve(hotelsData),
  getChannels: () => Promise.resolve(channelsData),
};

export { api };
