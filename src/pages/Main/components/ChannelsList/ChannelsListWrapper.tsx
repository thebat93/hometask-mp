import React, { ReactNode } from 'react';

import { ChannelsListRow } from './ChannelsListRow';

const Heading = ({ children }: { children: ReactNode }) => (
  <div className="text-sm text-black-subtle dark:text-darkgray-400 font-semibold">{children}</div>
);

const ChannelsListWrapper = ({ children }: { children: ReactNode }) => (
  <div className="border border-gray-200 dark:border-darkblack-200 shadow-sm rounded-lg overflow-auto bg-white dark:bg-darkblue-300">
    <ChannelsListRow
      title={<Heading>Channel</Heading>}
      className="bg-gray-50 dark:bg-darkblue-400 border-b border-gray-200 dark:border-darkblue-350"
    >
      <Heading>Visible</Heading>
    </ChannelsListRow>
    {children}
  </div>
);

export { ChannelsListWrapper };
