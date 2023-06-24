import React, { ReactNode } from 'react';

import { TopBar } from './TopBar';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[57.5rem] rounded-2xl overflow-hidden bg-white">
    <TopBar />
    {children}
  </div>
);

export { Layout };
