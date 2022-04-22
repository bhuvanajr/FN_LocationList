import { Location } from 'types';
import { LocationListOverviewContextState } from '../LocationListOverviewProvider';

export const addNewLocation = async (
  data: Location,
  setState: React.Dispatch<React.SetStateAction<LocationListOverviewContextState>>,
  state: LocationListOverviewContextState
) => {
  if (state.locationList) {
    setState({ ...state, locationList: [...state.locationList!, data] });
  } else setState({ ...state, locationList: [data!] });
};
