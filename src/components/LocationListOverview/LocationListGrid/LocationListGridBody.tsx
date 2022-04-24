import { useLocationListOverviewContext } from 'context';
import React from 'react';
import { LocationListGridRow } from './LocationListGridRow';

export const LocationListGridBody: React.FC = () => {
  const {
    state: { locationList },
  } = useLocationListOverviewContext();

  return (
    <tbody>{locationList && locationList.map((row, index) => <LocationListGridRow data={row} key={index} />)}</tbody>
  );
};
