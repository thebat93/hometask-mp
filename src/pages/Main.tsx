import React from 'react';

import { Text } from '../components/Text';

const Main = () => (
  <div className="flex flex-col gap-1">
    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="p-6 bg-black border border-black" />
      <div className="p-6 bg-black-subtle border border-black" />
      <div className="p-6 bg-white border border-black" />
      <div className="p-6 bg-blue-500 border border-black" />
      <div className="p-6 bg-gray-50 border border-black" />
      <div className="p-6 bg-gray-200 border border-black" />
      <div className="p-6 bg-gray-300 border border-black" />
      <div className="p-6 bg-gray-500 border border-black" />
      <div className="p-6 bg-gray-700 border border-black" />
    </div>
    <div className="p-6 mx-auto bg-white rounded-xl shadow-lg text-left">
      <Text size='2xl' weight='semibold'>Channel manager</Text>
      <Text size='sm' weight='semibold' className='text-black-subtle'>Hotel</Text>
      <Text className='text-black-subtle'>Hotel A</Text>
      <Text size='sm' weight='semibold' className='text-black-subtle'>Channel</Text>
      <Text size='sm' weight='semibold' className='text-black-subtle'>Visibility</Text>
      <Text size='sm' className='text-gray-700'>Channel 1</Text>
    </div>
  </div>
);

export { Main };
