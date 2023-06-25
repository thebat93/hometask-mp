import React, { useRef } from 'react';
import { useToggleState } from 'react-stately';
import { useFocusRing, useSwitch, VisuallyHidden } from 'react-aria';
import type { AriaSwitchProps } from 'react-aria';

import { Toggle } from './Toggle';

const Switch = (props: AriaSwitchProps) => {
  const state = useToggleState(props);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label className="flex items-center gap-1">
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <Toggle isToggled={state.isSelected} isFocusVisible={isFocusVisible} />
      {props.children}
    </label>
  );
};

export { Switch };
