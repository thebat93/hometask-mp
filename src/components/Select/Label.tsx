import React, { ReactNode } from 'react';
import { DOMAttributes, FocusableElement } from '@react-types/shared';

type Props = {
  children: ReactNode;
} & DOMAttributes<FocusableElement>;

const Label = ({ children, ...restProps }: Props) => (
  <div {...restProps} className="text-sm font-semibold text-black-subtle cursor-default">
    {children}
  </div>
);

export { Label };
