import React, { createContext, useContext, useEffect, useState } from 'react';
import { Location } from 'types';
import { getQnA } from './api';
import { addNewLocation, deleteAllLocations, deleteLocation, editLocation } from './methods';

export type LocationListOverviewContextState = {
  locationList?: Location[];
  isLoading: boolean;
};

type LocationListOverviewContextType = {
  methods: {
    addNewLocation: (data: Location) => void;
    deleteAllLocations: () => void;
    deleteLocation: (data: Location) => void;
    editLocation: (data: Location) => void;
  };
  state: LocationListOverviewContextState;
};

export const LocationListOverviewContext = createContext<LocationListOverviewContextType | undefined>(undefined);

export const LocationListOverviewProvider: React.FC = props => {
  const [state, setState] = useState<LocationListOverviewContextState>({
    locationList: undefined,
    isLoading: false,
  });

  useEffect(() => {
    const data = getQnA();
    if (data) setState(s => ({ ...s, locationList: data }));
  }, []);

  return (
    <LocationListOverviewContext.Provider
      value={{
        methods: {
          addNewLocation: data => addNewLocation(data, setState, state),
          deleteAllLocations: () => deleteAllLocations(setState),
          deleteLocation: data => deleteLocation(data, setState, state),
          editLocation: data => editLocation(data, setState, state),
        },
        state: state,
      }}
    >
      {props.children}
    </LocationListOverviewContext.Provider>
  );
};

export const useLocationListOverviewContext = () => {
  const context = useContext(LocationListOverviewContext);
  if (context === undefined) throw new Error('No QAOverviewContext is provided');
  return context;
};
