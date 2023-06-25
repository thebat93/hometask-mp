import React, { useRef } from 'react';
import type { AriaSelectProps } from '@react-types/select';
import { HiddenSelect, useSelect } from 'react-aria';
import { useSelectState } from 'react-stately';
import cx from 'clsx';

import { Button } from './Button';
import { Popover } from './Popover';
import { ListBox } from './ListBox';
import { Label } from './Label';

interface SelectOption {
  key: string;
}

type SelectProps = AriaSelectProps<SelectOption> & {
  className?: string;
};

const Select = (props: SelectProps) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  const ref = useRef(null);
  // Get props for child elements from useSelect
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  return (
    <div className={cx('relative flex flex-col gap-0.5', props.className)}>
      <Label {...labelProps}>{props.label}</Label>
      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button isOpen={state.isOpen} {...triggerProps} buttonRef={ref}>
        <span {...valueProps} className="text-black-subtle dark:text-darkgray-400">
          {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
        </span>
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};

export { Select };
