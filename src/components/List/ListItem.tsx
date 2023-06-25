import React, { useRef } from 'react';
import { mergeProps, useFocusRing, useGridListItem } from 'react-aria';
import cx from 'clsx';
import type { Node } from '@react-types/shared';
import type { ListState } from 'react-stately';

const ListItem = ({ item, state }: { item: Node<unknown>; state: ListState<unknown> }) => {
  const ref = useRef<HTMLLIElement>(null);
  const { rowProps, gridCellProps } = useGridListItem({ node: item }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      className={cx('border-b border-gray-200 last:border-0', {
        ['outline-1 outline-black-subtle']: isFocusVisible,
      })}
    >
      <div {...gridCellProps}>{item.rendered}</div>
    </li>
  );
};

export { ListItem };
