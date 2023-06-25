import React from 'react';

import { H1 } from '../../components/Typography';
import { Select, Item } from '../../components/Select';
import { ChannelsList } from './components/ChannelsList';

const Main = () => (
  <main className="p-6 flex flex-col gap-5">
    <H1>Channel manager</H1>
    <Select
      label="Hotel"
      className="max-w-[17rem]"
      selectedKey={'hotel_a'}
      onSelectionChange={key => console.log(key)}
    >
      <Item key={'hotel_a'}>Hotel A</Item>
      <Item key={'hotel_b'}>Hotel B</Item>
      <Item key={'hotel_c'}>Hotel C</Item>
    </Select>
    <ChannelsList
      channels={[
        {
          id: '1',
          title: 'Channel 1',
          isVisible: true,
        },
        {
          id: '2',
          title: 'Channel 2',
          isVisible: true,
        },
        {
          id: '3',
          title: 'Channel 3',
          isVisible: false,
        },
      ]}
      onChange={console.log}
    />
  </main>
);

export { Main };
