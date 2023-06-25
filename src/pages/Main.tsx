import React from 'react';

import { H1 } from '../components/Typography';
import { Select, Item } from '../components/Select';
import { Switch } from '../components/Switch';
import { List, ListItem } from '../components/List';

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
    <Switch aria-label={'Is visible'} onChange={isSelected => console.log(isSelected)} />
    <List aria-label="Example List">
      {/* {item => (
        <Item>
          {item.name}
          <Button onPress={() => alert(`Info for ${item.name}...`)}>Info</Button>
        </Item>
      )} */}
      <ListItem>
        <div className='flex gap-4 justify-between'>
          Pikachu
          <Switch aria-label={'Is visible'} onChange={isSelected => console.log(isSelected)} />
        </div>
      </ListItem>
    </List>
  </main>
);

export { Main };
