import React from 'react';

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
      <div className="text-2xl font-semibold">Channel manager</div>
      <div className="text-sm font-semibold text-black-subtle">Hotel</div>
      <div className="text-base font-normal text-black-subtle">Hotel A</div>
      <div className="text-sm font-semibold text-black-subtle">Channel</div>
      <div className="text-sm font-semibold text-black-subtle">Visibility</div>
      <div className="text-sm font-normal text-gray-700">Channel 1</div>
    </div>
  </div>
);

export { Main };
