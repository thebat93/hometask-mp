import React, { ReactNode } from 'react';

import { ChannelsListRow } from './ChannelsListRow';

const Heading = ({ children }: { children: ReactNode }) => (
  <div className="text-sm text-black-subtle font-semibold">{children}</div>
);

const ChannelsListWrapper = ({ children }: { children: ReactNode }) => (
  <div className="border border-gray-200 shadow-sm rounded-lg overflow-hidden">
    <ChannelsListRow
      title={<Heading>Channel</Heading>}
      className="bg-gray-50 border-b border-gray-200"
    >
      <Heading>Visible</Heading>
    </ChannelsListRow>
    {children}
  </div>
);

export { ChannelsListWrapper };
