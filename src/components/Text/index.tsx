import React, { ReactNode } from 'react';
import cx from 'clsx';

const Text = ({
  children,
  as = 'div',
  size = 'base',
  weight = 'normal',
  className,
}: {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  size?: 'base' | 'sm' | '2xl';
  weight?: 'normal' | 'semibold';
  className?: string;
}) => {
  const Component = as;

  return <Component className={cx(`text-${size}`, `font-${weight}`, className)}>{children}</Component>;
};

export { Text };
