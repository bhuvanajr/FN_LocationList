import { Location } from 'types';
import { LocationListOverviewContextState } from '../LocationListOverviewProvider';

export const editLocation = async (
  data: Location,
  setState: React.Dispatch<React.SetStateAction<LocationListOverviewContextState>>,
  state: LocationListOverviewContextState
) => {
  let updatelist = state.locationList?.filter(location => location.id !== data.id);
  updatelist?.push(data);
  setState({ ...state, locationList: updatelist });
};
