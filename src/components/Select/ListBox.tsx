import React, { useRef } from 'react';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { useListBox, useOption } from 'react-aria';
import cx from 'clsx';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

const Option = ({ item, state }: OptionProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { optionProps, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref,
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={cx('py-2 px-3 outline-none cursor-pointer', {
        ['bg-gray-500']: isFocused,
        ['bg-gray-300']: isSelected,
      })}
    >
      {item.rendered}
    </li>
  );
};

const ListBox = (props: ListBoxProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef} className="w-full overflow-auto outline-none">
      {[...state.collection].map(item => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
};

export { ListBox };
