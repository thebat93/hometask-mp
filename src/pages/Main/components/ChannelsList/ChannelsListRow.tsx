import { ReactNode } from 'react';
import cx from 'clsx';

const ChannelsListRow = ({
  title,
  children,
  className,
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) => (
  <div className={cx('px-4 py-3 flex gap-4 justify-between', className)}>
    <span>{title}</span>
    <div>{children}</div>
  </div>
);

export { ChannelsListRow };
