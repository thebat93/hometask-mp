import { ReactNode } from 'react';
import cx from 'clsx';

const H1 = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h1 className={cx(`text-2xl`, `font-semibold`, className)}>{children}</h1>
);

// eslint-disable-next-line  react-refresh/only-export-components
export { H1 };
