import React from 'react';

import { TopBar } from './TopBar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-[57.5rem] rounded-2xl overflow-hidden bg-white">
    <TopBar />
    {children}
  </div>
);

export { Layout };
