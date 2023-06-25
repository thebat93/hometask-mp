import React, { RefObject } from 'react';
import { useButton, useFocusRing, mergeProps, AriaButtonProps } from 'react-aria';
import cx from 'clsx';

import { CaretDownIcon } from './CaretDownIcon';

type Props = {
  isOpen: boolean;
  buttonRef: RefObject<HTMLButtonElement>;
} & AriaButtonProps<'button'>;

const Button = ({ isOpen, buttonRef,...props }: Props) => {
  const { buttonProps } = useButton(props, buttonRef);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={buttonRef}
      className={cx(
        'py-2 pl-3 pr-2 flex items-center justify-between gap-3 rounded-lg overflow-hidden shadow-sm border outline-none hover:bg-gray-50',
        isOpen ? 'bg-gray-200' : 'bg-white',
        isFocusVisible ? 'border-gray-500' : 'border-gray-300',
      )}
    >
      {props.children}
      <span aria-hidden="true">
        <CaretDownIcon />
      </span>
    </button>
  );
};

export { Button };
