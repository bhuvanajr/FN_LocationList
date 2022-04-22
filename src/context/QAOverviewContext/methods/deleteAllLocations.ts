import { LocationListOverviewContextState } from '../LocationListOverviewProvider';

export const deleteAllLocations = (
  setState: React.Dispatch<React.SetStateAction<LocationListOverviewContextState>>
) => {
  setState(s => ({ ...s, locationList: undefined }));
};
