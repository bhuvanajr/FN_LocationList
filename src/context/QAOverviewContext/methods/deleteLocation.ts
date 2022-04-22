import { Location } from 'types';
import { LocationListOverviewContextState } from '../LocationListOverviewProvider';

export const deleteLocation = async (
  data: Location,
  setState: React.Dispatch<React.SetStateAction<LocationListOverviewContextState>>,
  state: LocationListOverviewContextState
) => {
  const updatedList = state.locationList?.filter(location => location.id !== data.id);
  setState({ ...state, locationList: updatedList });
};
