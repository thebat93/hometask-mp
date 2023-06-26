import { ReactNode } from 'react';

import { TopBar } from './TopBar';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[57.5rem] h-[45.5rem] rounded-2xl overflow-hidden bg-white dark:bg-darkblue-100">
    <TopBar />
    {children}
  </div>
);

export { Layout };
