import React, { useRef } from 'react';
import { useGridList } from 'react-aria';
import { useListState } from 'react-stately';
import type { AriaGridListProps } from 'react-aria';

import { ListItem } from './ListItem';

const List = (props: AriaGridListProps<object>) => {
  const state = useListState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { gridProps } = useGridList(props, state, ref);

  return (
    <ul {...gridProps} ref={ref}>
      {[...state.collection].map(item => (
        <ListItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
};

export { List };
