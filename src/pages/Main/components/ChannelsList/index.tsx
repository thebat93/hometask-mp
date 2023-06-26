import { ReactNode } from 'react';

import { ChannelsListWrapper } from './ChannelsListWrapper';
import { ChannelsListRow } from './ChannelsListRow';

import { Switch } from '../../../../components/Switch';
import { List, ListItem } from '../../../../components/List';

interface Channel {
  id: string;
  title: string;
  isVisible: boolean;
}

const Title = ({ children }: { children: ReactNode }) => (
  <div className="text-sm text-gray-700 dark:text-darkgray-400">{children}</div>
);

const ChannelsList = ({
  channels,
  onChange,
}: {
  channels: Channel[];
  onChange: ({ id, isSelected }: { id: string; isSelected: boolean }) => void;
}) => (
  <ChannelsListWrapper>
    <List aria-label="List of channels">
      {channels.map(channel => (
        <ListItem key={channel.id} textValue={channel.title}>
          <ChannelsListRow key={channel.id} title={<Title>{channel.title}</Title>}>
            <Switch
              aria-label={`Is channel ${channel.title} visible?`}
              isSelected={channel.isVisible}
              onChange={isSelected => onChange({ id: channel.id, isSelected })}
            />
          </ChannelsListRow>
        </ListItem>
      ))}
    </List>
  </ChannelsListWrapper>
);

export type { Channel };
export { ChannelsList };
