import React, { createContext, useContext } from 'react';
import { getSortedItems, requestSort, getSortIconClassName } from './methods';

type SortContextType = {
  methods: {
    getSortedItems: <T>(data: T[]) => T[];
    requestSort: (sortkey) => void;
    getSortIconClassName: (sortkey) => any;
  };
  state: { sortConfig: any };
};

type Props = {
  initalConfig: any;
};

export const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider: React.FC<Props> = props => {
  const [sortConfig, setSortConfig] = React.useState(props.initalConfig);

  return (
    <SortContext.Provider
      value={{
        methods: {
          getSortedItems: (items: any) => getSortedItems(sortConfig, items),
          requestSort: (sortkey: any) => requestSort(sortConfig, setSortConfig, sortkey),
          getSortIconClassName: sortkey => getSortIconClassName(sortkey, sortConfig),
        },
        state: {
          sortConfig: sortConfig,
        },
      }}
    >
      {props.children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  const context = useContext(SortContext);
  if (context === undefined) throw new Error('No SortContext is provided');
  return context;
};
