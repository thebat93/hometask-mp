import React, { useRef, RefObject, ReactNode } from 'react';
import type { OverlayTriggerState } from 'react-stately';
import type { AriaPopoverProps } from '@react-aria/overlays';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: ReactNode;
  state: OverlayTriggerState;
  popoverRef?: RefObject<HTMLDivElement>;
}

const Popover = (props: PopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { popoverRef = ref, state, children } = props;

  const { popoverProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
  );

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={popoverRef}
        className="z-10 shadow-sm border border-gray-500 bg-white rounded-lg mt-2 overflow-hidden"
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
};

export { Popover };
