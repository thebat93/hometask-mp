import React, { ReactNode } from 'react';
import cx from 'clsx';

const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1 className={cx(`text-2xl`, `font-semibold`, className)}>{children}</h1>
);

export { H1 };
