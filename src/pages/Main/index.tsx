import React from 'react';

import { H1 } from '../../components/Typography';
import { Select, Item } from '../../components/Select';
import { ChannelsList } from './components/ChannelsList';



const Main = () => (
  <main className="p-6 flex flex-col gap-5 max-h-[calc(100%-53px)]">
    <H1 className='text-black dark:text-darkgray-100'>Channel manager</H1>
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
{
  id: '4',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '2wrthsgf',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3trshgfb',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4srthfgd',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1trshdfg',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '2rthsfgdb',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3trhdfgbv',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4ertuertu',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1eruthfg',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '2fghkfghk',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3ghkfghk',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4u;yyjlh',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1fgkfgk',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '2m;;u',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3xcbcb',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4qwfqf',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1qqqq',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '2ssf',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3asaaaa',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4,,mnn',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1cvnmm',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '2xcbnd',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '3zxvzxv',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '4asfas',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1235',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '23246768568',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '31235235',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '42572457347',
  title: 'Channel 3',
  isVisible: false,
},        {
  id: '1111',
  title: 'Channel 1',
  isVisible: true,
},
{
  id: '211',
  title: 'Channel 2',
  isVisible: true,
},
{
  id: '32324',
  title: 'Channel 3',
  isVisible: false,
},
{
  id: '423523646',
  title: 'Channel 3',
  isVisible: false,
},
      ]}
      onChange={console.log}
    />
  </main>
);

export { Main };
